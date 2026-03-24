#!/usr/bin/env node
/*
  Simple dataset packer for the frontend.
  Input: a JSON file containing an array of plan rows.
  Output: data/plans.js and data/version.json
  Usage:
    node tools/build-data.js --input raw/plans.json --output data/plans.js --version data/version.json
*/
const fs = require('fs');
const path = require('path');

function arg(name, fallback) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx >= 0 && process.argv[idx + 1] ? process.argv[idx + 1] : fallback;
}

const input = arg('input', path.join(process.cwd(), 'raw', 'plans.json'));
const output = arg('output', path.join(process.cwd(), 'data', 'plans.js'));
const versionPath = arg('version', path.join(process.cwd(), 'data', 'version.json'));

if (!fs.existsSync(input)) {
  console.error(`Missing input file: ${input}`);
  process.exit(1);
}

const rows = JSON.parse(fs.readFileSync(input, 'utf8'));
if (!Array.isArray(rows)) {
  console.error('Input must be a JSON array of plan rows.');
  process.exit(1);
}

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.mkdirSync(path.dirname(versionPath), { recursive: true });

const plansJs = 'window.D=' + JSON.stringify(rows) + ';\nwindow.PLAN_DATA=window.D;\n';
fs.writeFileSync(output, plansJs, 'utf8');

const version = {
  generatedAt: new Date().toISOString(),
  planCount: rows.length
};
fs.writeFileSync(versionPath, JSON.stringify(version, null, 2), 'utf8');

console.log(`Wrote ${rows.length} plans to ${output}`);
console.log(`Wrote version metadata to ${versionPath}`);
