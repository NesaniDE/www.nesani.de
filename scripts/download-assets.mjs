#!/usr/bin/env node
// Download fonts, favicons, and all images listed in recon-globals.json
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { resolve, basename, extname } from 'path';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';

const root = resolve('.');
mkdirSync(resolve(root, 'public/fonts'), { recursive: true });
mkdirSync(resolve(root, 'public/images'), { recursive: true });
mkdirSync(resolve(root, 'public/videos'), { recursive: true });
mkdirSync(resolve(root, 'public/seo'), { recursive: true });

const FONTS = [
  ['qontosans-light.woff2', 'https://qonto.com/blog/assets/qontosans-light-25f113f089926616f00b3baca83a5f2ee65276e43266fdab5b7fd23c43a338dc.woff2'],
  ['qontosans-light-italic.woff2', 'https://qonto.com/blog/assets/qontosans-light-italic-74a90ffc165392ded09c63ac04a0512f6cd65de5fb65b7b4ec3be083c6608516.woff2'],
  ['qontosans-regular.woff2', 'https://qonto.com/blog/assets/qontosans-regular-67d5c037fe3259805301d15d709b9bc7e4d978be637e59323008376f2c8d1d32.woff2'],
  ['qontosans-regular-italic.woff2', 'https://qonto.com/blog/assets/qontosans-regular-italic-02e7fd36867cbb9623fd676f8ccb8654605d84a83209bb79fedb6c821ec63b1a.woff2'],
  ['qontosans-semibold.woff2', 'https://qonto.com/blog/assets/qontosans-semibold-cf5e427fbf16fe2fc34559d16a36942c2fbb8bfc6e37c0334887be336120540d.woff2'],
  ['qontosans-semibold-italic.woff2', 'https://qonto.com/blog/assets/qontosans-semibold-italic-9c2b45fde6aee1c8c66f10a99d0fa035136f49f084735cb14c9b2ba12f19e4c0.woff2'],
  ['qontosans-bold.woff2', 'https://qonto.com/blog/assets/qontosans-bold-93f3df08ae5677c3f98fa65a3212c085cb1e7b63f4bf461734fd6c84240b646e.woff2'],
  ['qontosans-bold-italic.woff2', 'https://qonto.com/blog/assets/qontosans-bold-italic-d585e87396c05cd0e1c5d1727fbe5d55fdd42d6fc367914e62e692525b16f7e2.woff2'],
  ['qontosans-black.woff2', 'https://qonto.com/blog/assets/qontosans-black-b5c1eb9aba21a17770ccd741cf32521bc165169ca74a72e149831ca3892d30d8.woff2'],
  ['polysans-slim.woff2', 'https://qonto.com/blog/assets/polysans-slim-d2e593ce013f34de8e31ec23507c7836b5e76b68d5d94c95a6a1063912027bee.woff2'],
  ['polysans-neutral.woff2', 'https://qonto.com/blog/assets/polysans-neutral-b855437b9905fe21c922ad25ed73abdfe6a7a8f2445c6e418f7f41d6d95c061f.woff2'],
  ['polysans-median.woff2', 'https://qonto.com/blog/assets/polysans-median-b626b90cc07927daeeb2ce617e334e8c0b3ffa4616816b7fc6d4ce0640d55b19.woff2'],
  ['polysans-bulky.otf', 'https://qonto.com/blog/assets/polysans-bulky-ecb69ba05ee2c70432bd1d7928ebbba6798f88ae8a42bb4a056b375539b6a5f2.otf'],
];

const SEO = [
  ['favicon.png', 'https://qonto.com/blog/assets/favicon-bf1a6750dda58110197736248d1a0e3cbe078742ff53c287bd2ea1f504d5c4dc.png'],
  ['apple-touch-icon.png', 'https://qonto.com/blog/assets/apple-touch-icon-a36c03a47aa6f51ea168d0539f8c399c4c25c50a111e21bd8dbb208fbbe327c5.png'],
  ['safari-pinned-tab.svg', 'https://qonto.com/blog/assets/safari-pinned-tab-9efbc3337a78d10898c96458feffed78eb9298ead32ab246ee447b538411c6d7.svg'],
];

async function fetchToFile(url, path) {
  if (existsSync(path)) return { skip: true };
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(path, buf);
  return { bytes: buf.length };
}

async function inBatches(items, size, fn) {
  for (let i = 0; i < items.length; i += size) {
    await Promise.all(items.slice(i, i + size).map(fn));
  }
}

console.log('Downloading fonts...');
await inBatches(FONTS, 4, async ([name, url]) => {
  try {
    const r = await fetchToFile(url, resolve('public/fonts', name));
    console.log(`  ${r.skip ? 'SKIP' : 'OK'} ${name}${r.bytes ? ` (${(r.bytes / 1024).toFixed(1)}KB)` : ''}`);
  } catch (e) { console.log(`  FAIL ${name}: ${e.message}`); }
});

console.log('Downloading SEO...');
await inBatches(SEO, 3, async ([name, url]) => {
  try {
    const r = await fetchToFile(url, resolve('public/seo', name));
    console.log(`  ${r.skip ? 'SKIP' : 'OK'} ${name}${r.bytes ? ` (${(r.bytes / 1024).toFixed(1)}KB)` : ''}`);
  } catch (e) { console.log(`  FAIL ${name}: ${e.message}`); }
});

// Images + videos from recon-globals.json
const g = JSON.parse(readFileSync(resolve('docs/research/recon-globals.json'), 'utf8'));
const urls = new Set();
for (const img of g.images) if (img.src && !img.src.startsWith('data:') && !img.src.includes('bat.bing') && !img.src.includes('verifi.pods')) urls.add(img.src);
// Background images
for (const b of g.bgImages) {
  const m = [...(b.url.matchAll(/url\(["']?([^"')]+)["']?\)/g) || [])];
  for (const mm of m) urls.add(mm[1]);
}
console.log(`Downloading ${urls.size} images...`);
const slug = u => {
  // Qonto pattern: /blog/images/asset/XXXXX/image/...-HASH.ext  → asset-XXXXX-HASH.ext
  const mAsset = u.match(/\/asset\/(\d+)\/image\/(?:[a-z_]+-)?([^./?]+)\.([a-z0-9]+)(?:\?|$)/i);
  if (mAsset) return `asset-${mAsset[1]}-${mAsset[2].slice(-10)}.${mAsset[3]}`;
  const b = basename(u.split('?')[0]);
  return b || 'img.bin';
};
await inBatches([...urls], 6, async (url) => {
  try {
    const name = slug(url);
    const ext = extname(name).slice(1).toLowerCase();
    const dir = ['svg', 'png', 'jpg', 'jpeg', 'webp', 'avif', 'gif'].includes(ext) ? 'images' : 'images';
    const r = await fetchToFile(url, resolve('public', dir, name));
    if (!r.skip && r.bytes) console.log(`  OK ${name} (${(r.bytes / 1024).toFixed(1)}KB)`);
  } catch (e) { console.log(`  FAIL ${url.slice(0, 60)}: ${e.message}`); }
});

// Videos
for (const v of g.videos) {
  if (!v.src) continue;
  const name = slug(v.src);
  try {
    const r = await fetchToFile(v.src, resolve('public/videos', name));
    console.log(`  OK ${name}${r.bytes ? ` (${(r.bytes / 1024).toFixed(1)}KB)` : ''}`);
  } catch (e) { console.log(`  FAIL ${v.src}: ${e.message}`); }
}

console.log('Done.');
