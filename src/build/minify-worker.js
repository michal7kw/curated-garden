// minify-worker.js
// Runs in a worker thread. Receives { id, content, options } messages,
// runs html-minifier-terser, posts { id, result } (or { id, error }) back.

const { parentPort } = require('worker_threads');
const htmlMinifier = require('html-minifier-terser');

parentPort.on('message', async ({ id, content, options }) => {
  try {
    const result = await htmlMinifier.minify(content, options);
    parentPort.postMessage({ id, result });
  } catch (err) {
    parentPort.postMessage({ id, error: err.message || String(err) });
  }
});
