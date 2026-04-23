import { mkdirSync, existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";

mkdirSync("public/images", { recursive: true });

const need = [
  { n: "25603", ext: "svg", url: "https://qonto.com/blog/images/asset/25603/image/41f87b244df014c7212d6a01cdc6fab7.svg" },
  { n: "27326", ext: "svg", url: "https://qonto.com/blog/images/asset/27326/image/e457d34c54dd4f66edc5709e1b56548d.svg" },
  { n: "33263", ext: "svg", url: "https://qonto.com/blog/images/asset/33263/image/b8b199afab8b83bcc98806e8ab620ff4.svg" },
  { n: "33264", ext: "png", url: "https://qonto.com/blog/images/asset/33264/image/xl_original-09c7a61365437b5544c911f814f82ad2.png" },
  { n: "33265", ext: "png", url: "https://qonto.com/blog/images/asset/33265/image/xl_original-2a3ad18d5837a0109711e5658c742a8a.png" },
  { n: "33266", ext: "png", url: "https://qonto.com/blog/images/asset/33266/image/xl_original-ab4b76c961333e4f0b4ce29b5b374df8.png" },
  { n: "33267", ext: "png", url: "https://qonto.com/blog/images/asset/33267/image/xl_original-36b35e7b2ec5b99d3cdbea644a27a4b9.png" },
  { n: "33268", ext: "avif", url: "https://qonto.com/blog/images/asset/33268/image/xl_avif-f4bd90cb0077af2a9f1a530e26e618cc.avif" },
  { n: "33271", ext: "avif", url: "https://qonto.com/blog/images/asset/33271/image/xl_avif-6526e4a0e3c0840c619cb9a19a9b3aa6.avif" },
  { n: "33386", ext: "avif", url: "https://qonto.com/blog/images/asset/33386/image/xl_avif-9b0db23588ed47bb4607046d02655f3b.avif" },
  { n: "34369", ext: "avif", url: "https://qonto.com/blog/images/asset/34369/image/xl_avif-90f252ae2ebcc33838077d3f6bb3c467.avif" },
];

const slug = (u) => {
  const m = u.match(/\/([a-f0-9]{10,12})[\w\-]*\.\w+$/);
  return m ? m[1].slice(-10) : "x";
};

for (const { n, ext, url } of need) {
  const out = `public/images/fin-${n}-${slug(url)}.${ext}`;
  if (existsSync(out)) { console.log("skip", out); continue; }
  const res = await fetch(url);
  if (!res.ok) { console.log("ERR", url, res.status); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(out, buf);
  console.log("wrote", out, buf.length);
}
