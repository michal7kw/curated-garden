// minify-pool.js
// Worker pool that dispatches html-minifier-terser jobs across N worker threads.
// Adds a content-hash cache (Phase 2) on top — the `minify()` method first
// tries the cache, falls back to a worker on miss.
//
// Tuneables via env:
//   MKG_USE_LEGACY_MINIFIER=1   — pool.minify() is never called (caller goes sync)
//   MKG_NO_MINIFY_CACHE=1       — skip cache read/write (still uses workers)
//   MKG_MINIFY_WORKERS=N        — override default (cpus/2)

const { Worker } = require('worker_threads');
const os = require('os');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Cache dir is at the repo root (one level above src/): curated_garden/.minify-cache/
const CACHE_DIR = path.resolve(__dirname, '..', '..', '.minify-cache');

let _pool = null;

function ensureCacheDir() {
  try { fs.mkdirSync(CACHE_DIR, { recursive: true }); } catch (e) {}
}

// ISO-8601 millisecond timestamps are embedded in every page for client-side
// search-index cache busting, so raw content changes on every build. To let
// the minify cache actually hit across rebuilds, we key on a timestamp-
// normalized view of the content. The cached minified output still carries
// the first build's real timestamp; dev browsers tolerate this (localStorage
// mismatch triggers one extra searchIndex re-fetch). Production builds run
// in fresh clones with no cache dir, so they are unaffected.
const TIMESTAMP_RE = /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]+Z/g;

function cacheKey(content, outputPath, options) {
  const minifierVersion = require('html-minifier-terser/package.json').version;
  const normalized = content.replace(TIMESTAMP_RE, 'TIMESTAMP');
  const h = crypto.createHash('sha256');
  h.update(`v=${minifierVersion}|path=${outputPath}|opts=${JSON.stringify(options)}|`);
  h.update(normalized);
  return h.digest('hex').slice(0, 32);
}

function cacheRead(key) {
  try {
    return fs.readFileSync(path.join(CACHE_DIR, `${key}.html`), 'utf8');
  } catch (e) {
    return null;
  }
}

function cacheWrite(key, result) {
  try {
    fs.writeFileSync(path.join(CACHE_DIR, `${key}.html`), result);
  } catch (e) {
    // Swallow — cache write failures must never break the build
  }
}

class WorkerPool {
  constructor({ workerCount }) {
    this.count = workerCount;
    this.workers = [];
    this.next = 0;
    this.pending = new Map();  // id -> { resolve, reject }
    this.nextId = 0;
    this.useCache = process.env.MKG_NO_MINIFY_CACHE !== '1';
    this.isTerminating = false;
    ensureCacheDir();
    for (let i = 0; i < workerCount; i++) this.spawnWorker();
    // Normal shutdown path: .eleventy.js `eleventy.after` -> pool.terminate().
    // These are safety nets for crashes / Ctrl+C so we never leave orphans.
    process.on('exit', () => this.terminate());
    const signalCleanup = (signal) => {
      this.terminate();
      process.exit(signal === 'SIGINT' ? 130 : 143);
    };
    process.once('SIGINT', () => signalCleanup('SIGINT'));
    process.once('SIGTERM', () => signalCleanup('SIGTERM'));
  }

  spawnWorker() {
    const w = new Worker(path.join(__dirname, 'minify-worker.js'));
    w.on('message', ({ id, result, error }) => {
      const task = this.pending.get(id);
      if (!task) return;
      this.pending.delete(id);
      if (error) task.reject(new Error(error));
      else task.resolve(result);
    });
    w.on('error', (err) => {
      console.error('[minify-pool] worker error:', err);
    });
    w.on('exit', (code) => {
      // Forced termination via pool.terminate() exits workers with code 1;
      // that path is the expected shutdown, not an error.
      if (code !== 0 && !this.isTerminating) {
        console.error(`[minify-pool] worker exited with code ${code}`);
      }
    });
    this.workers.push(w);
  }

  async minify(content, outputPath, options) {
    if (this.useCache) {
      const key = cacheKey(content, outputPath, options);
      const cached = cacheRead(key);
      if (cached !== null) return cached;
      const result = await this.dispatch(content, options);
      cacheWrite(key, result);
      return result;
    }
    return this.dispatch(content, options);
  }

  dispatch(content, options) {
    return new Promise((resolve, reject) => {
      const id = this.nextId++;
      this.pending.set(id, { resolve, reject });
      const w = this.workers[this.next];
      this.next = (this.next + 1) % this.count;
      w.postMessage({ id, content, options });
    });
  }

  terminate() {
    this.isTerminating = true;
    for (const w of this.workers) {
      try { w.terminate(); } catch (e) {}
    }
    this.workers = [];
  }
}

function createPool({ workerCount } = {}) {
  if (_pool) return _pool;
  const envWorkerCount = parseInt(process.env.MKG_MINIFY_WORKERS || '0', 10);
  const count = (envWorkerCount > 0)
    ? envWorkerCount
    : (workerCount && workerCount > 0)
      ? workerCount
      : Math.max(1, Math.floor(os.cpus().length / 2));
  _pool = new WorkerPool({ workerCount: count });
  console.log(`[minify-pool] spawned ${count} workers (cache=${_pool.useCache ? 'on' : 'off'})`);
  return _pool;
}

module.exports = { createPool };
