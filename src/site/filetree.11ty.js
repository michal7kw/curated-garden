// Emits /filetree.json — a global serialization of the navigation tree.
// Consumed by client JS in _includes/components/filetree.njk, which fetches
// this file after DOMContentLoaded idle and builds the sidebar DOM lazily.
//
// Unlike user_garden (multi-user, per-user scoped trees), curated_garden is
// an admin garden with a single canonical namespace (`entities`). One global
// emit is sufficient; no pagination.
//
// Why AJAX instead of inline-per-page (the previous pattern):
//   - At 1,166 notes, the inline filetree rendered ~400 KB of HTML per page
//     in Eleventy's output collection (~460 MB accumulated). Combined with
//     production-mode htmlMinifier's ~2× working set, peak RSS crossed the
//     4 GB heap cap hardcoded in `build:eleventy` and the build OOM'd.
//   - With this emit + the AJAX loader in components/filetree.njk, the page
//     body HTML drops to a ~200-byte placeholder and the 346 KB tree is sent
//     once per visitor (cached by CDN) rather than duplicated per page.
//
// getFileTree() is memoized by reference identity of data.collections.note
// (see helpers/filetreeUtils.js), so this template's render() is cheap — it
// reuses the same cached tree object computed once per build.

const { getFileTree } = require('../helpers/filetreeUtils');

class FiletreeJson {
  data() {
    return {
      permalink: '/filetree.json',
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    return JSON.stringify(getFileTree(data));
  }
}

module.exports = FiletreeJson;
