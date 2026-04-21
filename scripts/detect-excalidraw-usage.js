#!/usr/bin/env node
// detect-excalidraw-usage.js
// Scans curated_kg/entities/ for notes that reference Excalidraw in any form.
// Writes the list to `files_needing_excalidraw_flag.txt` so we can add
// `excalidraw: true` to frontmatter before shipping the conditional loader.

const fs = require('fs');
const path = require('path');

const CURATED_KG_DIR = path.resolve(__dirname, '..', '..', 'curated_kg', 'entities');
const OUTPUT_FILE = path.resolve(__dirname, '..', 'files_needing_excalidraw_flag.txt');

const patterns = [
  /excalidraw-diagram/i,
  /excalidraw-embed/i,
  /!\[\[[^\]]*\.excalidraw/i,
  /^excalidraw:\s*true\s*$/im,
  /class=['"]?excalidraw/i,
];

function scan(dir, results) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(full, results);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const content = fs.readFileSync(full, 'utf8');
      for (const p of patterns) {
        if (p.test(content)) {
          results.push({ file: full, pattern: p.source });
          break;
        }
      }
    }
  }
}

const matches = [];
scan(CURATED_KG_DIR, matches);

if (matches.length === 0) {
  console.log('No files reference Excalidraw. Conditional loading is safe.');
  fs.writeFileSync(OUTPUT_FILE, '');
  process.exit(0);
}

console.log(`Found ${matches.length} file(s) that reference Excalidraw:`);
for (const { file, pattern } of matches) {
  console.log(`  ${file}   [matched: ${pattern}]`);
}
fs.writeFileSync(OUTPUT_FILE, matches.map(m => m.file).join('\n') + '\n');
console.log(`\nWrote list to: ${OUTPUT_FILE}`);
console.log('Next step: add `excalidraw: true` to the frontmatter of each listed file.');
