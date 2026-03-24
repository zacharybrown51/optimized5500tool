[README-IMPLEMENTATION.md](https://github.com/user-attachments/files/26223074/README-IMPLEMENTATION.md)
# Mammini 401k Prospector - Scaled Structure

This package keeps the app static and Cloudflare-friendly, but reduces brittleness by separating data, shared state, UI modules, and view modules.

## What changed

- `index.html` now acts as the shell and loads smaller JS files in order.
- `data/plans.js` holds the full plan dataset.
- `data/version.js` and `data/version.json` hold dataset metadata.
- `scripts/data-model.js` exposes a canonical mapper from compact array rows to named plan fields.
- `scripts/config.js` centralizes app conventions.
- `scripts/state.js` adds a shared `AppState` object for future state cleanup.
- `scripts/app-core.js` holds helpers, constants, lookup tables, market strip, news ticker, and tab navigation.
- `scripts/view-overview.js` holds Overview logic.
- `scripts/view-prospects.js` holds Prospects filtering and table logic.
- `scripts/ui-detail-panel.js` holds the detail panel and one-pager snapshot logic.
- `scripts/view-geomap.js` holds Geo Map logic.
- `scripts/data-ops.js` holds CSV export, compare, provider search, import, and Apollo export helpers.
- `scripts/view-analyzer.js` holds Filing Analyzer, similar plans, prospecting email draft, and lineup scan logic.
- `scripts/app-boot.js` holds initialization, settings, dark mode, and keyboard shortcuts.
- `scripts/app.legacy.js` is included as a backup copy of the old single-script version.
- `tools/build-data.js` is a starter data packer to rebuild `data/plans.js` from a JSON array.

## Deploy to Cloudflare Pages

1. Download this package and unzip it locally.
2. Replace the contents of your GitHub repo with these files, preserving the folder structure:
   - `index.html`
   - `data/`
   - `scripts/`
   - `functions/api/`
   - `tools/`
3. Commit and push to your Cloudflare-connected GitHub repo.
4. Let Cloudflare Pages auto-deploy.
5. In the Cloudflare Pages dashboard, confirm `ANTHROPIC_API_KEY` is still present under Environment Variables.
6. Test these areas after deploy:
   - Overview loads first
   - Prospects table filters and opens detail panel
   - Geo Map renders and row/map interactions work
   - Filing Analyzer upload still posts to `/api/analyze`
   - News and market strip load

## Local test

Use a local server. Do not open by `file://`.

Examples:

### Python
`python -m http.server 8000`

### Node
`npx serve .`

Then visit the local URL and test the same flows above.

## Dataset refresh workflow

If you later export your plan rows to `raw/plans.json`, you can rebuild the frontend dataset with:

`node tools/build-data.js --input raw/plans.json --output data/plans.js --version data/version.json`

That lets you refresh the app data without touching the UI code.

## Recommended next cleanup

1. Replace more direct `D[i][n]` references with `PlanModel.get(row, field)` or `PlanModel.toPlan(row)` in the highest-value rendering paths.
2. Move more live UI state from scattered globals into `AppState`.
3. Extract inline CSS from `index.html` into `styles/app.css` once you are ready for one more structural pass.
4. Add a `raw/` folder and keep source data separate from production-ready frontend data.
