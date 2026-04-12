/**
 * ルートの Urban Pass（index.html と依存ファイル）を public にコピーする。
 * next dev / next build の前に実行される。
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pub = path.join(root, 'public');

function copyPair(fromRel, toRel) {
  const from = path.join(root, fromRel);
  const to = path.join(pub, toRel);
  if (!fs.existsSync(from)) {
    console.warn('[sync-urban-pass] skip (missing):', fromRel);
    return;
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

const pairs = [
  ['index.html', 'urban-pass.html'],
  ['stations_data.js', 'stations_data.js'],
  ['shared-station-view.js', 'shared-station-view.js'],
  ['config.json', 'config.json'],
  ['recommended-stations.csv', 'recommended-stations.csv'],
  ['station_outputlist_all.csv', 'station_outputlist_all.csv'],
  ['station_ranks.csv', 'station_ranks.csv'],
  ['station20251211free.csv', 'station20251211free.csv'],
  ['stations-23ku+10.json', 'stations-23ku+10.json'],
  ['data/network_data.json', 'data/network_data.json'],
];

for (const [from, to] of pairs) {
  copyPair(from, to);
}

console.log('[sync-urban-pass] copied Urban Pass assets to public/');
