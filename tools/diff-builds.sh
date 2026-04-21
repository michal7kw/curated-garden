#!/usr/bin/env bash
# Verify two Eleventy build outputs are semantically identical.
#
# Usage:
#   tools/diff-builds.sh [dir-a] [dir-b]
# Default: dist dist-legacy
#
# Why this exists: every page embeds `searchIndex.json?v=<ISO timestamp>` for
# client cache-busting, so two builds started at different times are never
# byte-identical — yet the minifier output itself MUST match across the
# serial (legacy) and parallel (worker-pool) code paths. This script strips
# the embedded timestamps, then runs `diff -r`; exit 0 iff the normalized
# trees match. See `.eleventy.js` and `src/build/minify-pool.js` for context.

set -euo pipefail

A="${1:-dist}"
B="${2:-dist-legacy}"

if [[ ! -d "$A" || ! -d "$B" ]]; then
  echo "error: both $A and $B must exist (run bun run build + bun run build:legacy first)" >&2
  exit 2
fi

NORM_A=$(mktemp -d)
NORM_B=$(mktemp -d)
DIFF_OUT=$(mktemp)
trap 'rm -rf "$NORM_A" "$NORM_B" "$DIFF_OUT"' EXIT

cp -r "$A/." "$NORM_A/"
cp -r "$B/." "$NORM_B/"

# ISO-8601 millisecond timestamp (e.g. 2026-04-21T06:31:15.018Z)
TS_RE='[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]+Z'
find "$NORM_A" "$NORM_B" -name 'index.html' -exec sed -i -E "s/${TS_RE}/TIMESTAMP/g" {} +

if diff -r "$NORM_A" "$NORM_B" > "$DIFF_OUT" 2>&1; then
  PAGES=$(find "$A" -name 'index.html' | wc -l)
  echo "[ok] $A and $B are semantically identical ($PAGES pages, timestamps normalized)"
  exit 0
fi

LINES=$(wc -l < "$DIFF_OUT")
FILES=$(grep -c '^diff -r ' "$DIFF_OUT" || true)
echo "[fail] $A and $B differ after timestamp normalization"
echo "  diff lines: $LINES across $FILES files"
echo "  first hunks:"
head -30 "$DIFF_OUT"
exit 1
