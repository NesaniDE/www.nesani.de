import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

async function dl(url, out) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(url + ' ' + res.status);
  await pipeline(res.body, fs.createWriteStream(out));
  console.log('saved', out, fs.statSync(out).size);
}

// Desktop hero HD variants
await dl('https://qonto.com/blog/images/asset/33449/image/xl_avif-0295f971605b7b151f60d022c1a62c64.avif', 'public/images/asset-33449-xl.avif');
await dl('https://qonto.com/blog/images/asset/33449/image/md_avif-53d47a23fb2088d1dabe0b04121c4e24.avif', 'public/images/asset-33449-md.avif');
await dl('https://qonto.com/blog/images/asset/33449/image/xl_original-ce7c9f15ef76435e75e39d19a1ca4fd7.jpg', 'public/images/asset-33449-xl.jpg');
// Mobile hero HD
await dl('https://qonto.com/blog/images/asset/33450/image/xl_avif-471131c3129416038ac986f14d77e10f.avif', 'public/images/asset-33450-xl.avif');
await dl('https://qonto.com/blog/images/asset/33450/image/xl_original-5e995d9b1f3ebc57b940a3614890cb1c.jpg', 'public/images/asset-33450-xl.jpg');
