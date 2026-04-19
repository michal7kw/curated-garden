# Rebuilding curated_garden for Vercel

This garden has 1174 notes. The Eleventy build ships with an O(N²) global-data helper in `src/helpers/linkUtils.js` and `src/helpers/filetreeUtils.js`. A memoization patch (already applied) drops this to O(N) so it builds on OptiPlex (16 GB) in ~16 min with all sidebar features (filetree + backlinks + local graph + TOC + search + tags + link preview).

If you ever need to rebuild on a different machine or with more features enabled, follow these instructions.

## Prerequisites

- Node.js 18+ or Bun 1.x (`bun --version`)
- Vercel CLI logged in: `vercel whoami`
- Project linked: `.vercel/project.json` present

If not linked: `cd curated_garden && vercel link` — pick the `curated-garden` project under your Vercel account.

## Rebuild on a machine with MORE RAM (recommended for full features)

On a machine with ≥32 GB RAM, you can skip the memoization patch and disable swap pressure concerns:

```bash
cd curated_garden
vercel env pull .vercel/.env.production.local --environment=production --yes

# Ensure theming is fully enabled
printf '%s' "true" | vercel env add dgShowBacklinks    production --force
printf '%s' "true" | vercel env add dgShowLocalGraph   production --force
printf '%s' "true" | vercel env add dgShowFileTree     production --force
printf '%s' "true" | vercel env add dgShowToc          production --force
vercel env pull .vercel/.env.production.local --environment=production --yes

# Build with a generous heap
rm -rf dist/ .vercel/output
set -a && source .vercel/.env.production.local && set +a
NODE_OPTIONS="--max-old-space-size=8192" bun run build

# Wrap dist/ into Vercel Output API format (vercel build --prebuilt would re-run npm run build)
mkdir -p .vercel/output/static
cp -r dist/. .vercel/output/static/
cat > .vercel/output/config.json <<'EOF'
{
  "version": 3,
  "routes": [
    { "handle": "filesystem" },
    {
      "src": "^/personal-health-dashboard/?$",
      "status": 308,
      "headers": { "Location": "/garden/entities/dashboard/" }
    },
    {
      "src": "^/garden/entities/([^/]+)/([^/]+)/?$",
      "status": 308,
      "headers": { "Location": "/entities/$1/$2/" }
    },
    { "src": "/(.*)", "status": 404, "dest": "/404" }
  ]
}
EOF

# Deploy to production
vercel deploy --prebuilt --prod
```

Expected timing on 32 GB / modern CPU: Eleventy ~8-12 min, deploy ~2 min. Peak RSS ~4-6 GB (memoized) or ~10-12 GB (if you remove the memoization).

## Rebuild on OptiPlex (current setup)

The memoization patch is committed, so the standard flow works:

```bash
cd /home/michal/Documents/GitHub/MKG_top/curated_garden
vercel env pull .vercel/.env.production.local --environment=production --yes

rm -rf dist/ .vercel/output
set -a && source .vercel/.env.production.local && set +a
bun run build                    # ~16 min, peaks ~7 GB RSS

mkdir -p .vercel/output/static
cp -r dist/. .vercel/output/static/
cp vercel.json .vercel/output/config.json 2>/dev/null || true  # or manually author config.json per above

vercel deploy --prebuilt --prod
```

If OptiPlex's swap fills during the build (`free -h` shows Swap used > 3.5G), stop the build and:

1. Temporarily stop one Neo4j container to free ~1 GB: `docker stop prime_kg_opt` — restart after: `docker start prime_kg_opt`
2. Re-run with a tighter heap: `NODE_OPTIONS="--max-old-space-size=4096" bun run build`

## Verifying the deployment

```bash
# 1. Status code
curl -sSI https://curated-garden.vercel.app/entities/supplement/vitamin-d/ | head -1

# 2. Sidebar markup present
curl -sS https://curated-garden.vercel.app/entities/supplement/vitamin-d/ \
  | grep -oE 'class="[^"]*(filetree|sidebar)[^"]*"' | sort -u
# Expected output:
#   class="filetree-sidebar"
#   class="sidebar"
#   class="sidebar-container"

# 3. Feature markers present (filetree + backlinks + TOC)
curl -sS https://curated-garden.vercel.app/entities/supplement/vitamin-d/ \
  | grep -cE 'filetree-item|backlink-card|toc-container'
# Expected: > 100
```

## Why the memoization patch was needed

`src/helpers/linkUtils.js` exports `getGraph(data)`, registered in `src/site/_data/eleventyComputed.js` as a global computed. Eleventy evaluates it **once per note** (1174 times for this garden), and each call:

- Iterates `data.collections.note` (1174 items)
- Calls `extractLinks()` on each via regex
- Allocates 1174 `Set` objects for `neighbors` + 1174 for `backLinks`
- Runs two more O(N) passes for link resolution

Total: 1174 × 1174 iterations ≈ 1.4M operations + ~4M Set allocations per build. V8's old-generation heap cannot hold this.

The fix caches by reference identity of `data.collections.note` — Eleventy reuses the same array within a build, creates a new one on the next build. One computation, 1174 reads.

Same pattern applied to `getFileTree()` in `src/helpers/filetreeUtils.js`.

## Rollback

If the memoization causes issues (e.g., in `--watch` mode a stale graph is observed), revert the two files:

```bash
cd /home/michal/Documents/GitHub/MKG_top
git checkout HEAD -- curated_garden/src/helpers/linkUtils.js curated_garden/src/helpers/filetreeUtils.js
```

Then rebuild on a higher-RAM machine per the first section above.
