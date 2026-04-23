import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

async function dl(url, out) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(url + ' ' + res.status);
  await pipeline(res.body, fs.createWriteStream(out));
  console.log('saved', out, fs.statSync(out).size);
}

// Also try the JPG versions as fallback / HD source
await dl('https://qonto.com/blog/images/asset/33449/image/lg_avif-a6948b2af844547d039c49ecc13c3565.avif', 'public/images/asset-33449-ecc13c3565.avif');
await dl('https://qonto.com/blog/images/asset/33449/image/d4cd8dfd8e9fc11ef1d69240cf0e65dd.jpg', 'public/images/asset-33449-desktop.jpg');
await dl('https://qonto.com/blog/images/asset/33450/image/lg_avif-38e8f13c59d100ea9cecc3df67e8b9e7.avif', 'public/images/asset-33450-df67e8b9e7.avif');
await dl('https://qonto.com/blog/images/asset/33450/image/ac5f0cc5c17424c817b445ec53ca92a6.jpg', 'public/images/asset-33450-mobile.jpg');
