import { writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const OUT = "public/images";
const existing = new Set(readdirSync(OUT));

function hashFromUrl(url) {
  const m = url.match(/([a-f0-9]{32})\.(avif|png|jpg|jpeg|svg)/);
  if (m) return { hash: m[1].slice(-10), ext: m[2] };
  const m2 = url.match(/-([a-f0-9]{8,})\.(avif|png|jpg|jpeg|svg)/);
  return m2 ? { hash: m2[1].slice(-10), ext: m2[2] } : null;
}

function already(id) {
  for (const f of existing) {
    if (f.startsWith(`asset-${id}-`) || f.startsWith(`about-${id}-`) || f.startsWith(`oa-${id}-`)) return true;
  }
  return false;
}

const targets = [
  // hero + trust + s01
  { id: 33411, url: "https://qonto.com/blog/images/asset/33411/image/xl_avif-9d65e503b2c462f136e24e7f630c368e.avif" },
  { id: 33411, url: "https://qonto.com/blog/images/asset/33411/image/xl_original-c082cf144c64e762862d63b7d5cc8ba6.jpg", suffix: "jpg" },
  { id: 33279, url: "https://qonto.com/blog/images/asset/33279/image/xl_avif-49848d21ad6530fc839a0593a8e37bfa.avif" },
  { id: 33279, url: "https://qonto.com/blog/images/asset/33279/image/xl_original-7419fa743699d6f8087e54a0d1dc7b5b.png", suffix: "png" },
  { id: 33347, url: "https://qonto.com/blog/images/asset/33347/image/xl_avif-cae04e72e980053b046f9ab0163a91fd.avif" },
  // s09 tab images + icons
  { id: 33408, url: "https://qonto.com/blog/images/asset/33408/image/xl_avif-0cfaf180d8d44ab67360e7829a09d824.avif" },
  { id: 33412, url: "https://qonto.com/blog/images/asset/33412/image/xl_avif-7d6db67102b5abc82c62d5a33120a38f.avif" },
  { id: 33280, url: "https://qonto.com/blog/images/asset/33280/image/xl_avif-bc3fd8b98f4c950b61be477d5866da7f.avif" },
  { id: 33258, url: "https://qonto.com/blog/images/asset/33258/image/a2eba01bb7902c49af2fd61096312bc2.svg" },
  { id: 33259, url: "https://qonto.com/blog/images/asset/33259/image/5c014ebb11572c2aeb8876d000cd17c6.svg" },
  // s10 + s12 bento
  { id: 33285, url: "https://qonto.com/blog/images/asset/33285/image/xl_avif-35145926b6062ee7c1cac9f045dd08ae.avif" },
  { id: 33284, url: "https://qonto.com/blog/images/asset/33284/image/xl_avif-a61333301c3fd66534791b66a5090d64.avif" },
  { id: 33319, url: "https://qonto.com/blog/images/asset/33319/image/xl_avif-7ab07ccba4f7fb171f605a03e993664a.avif" },
  { id: 33315, url: "https://qonto.com/blog/images/asset/33315/image/xl_avif-04460cca21bcad636d0977400d5133a8.avif" },
  { id: 33317, url: "https://qonto.com/blog/images/asset/33317/image/xl_avif-059691feba7fcb671d13cb272cbaceb8.avif" },
  { id: 33314, url: "https://qonto.com/blog/images/asset/33314/image/xl_avif-c7823b4602a257faf8ba1e0773e7fc1a.avif" },
  // testimonials
  { id: 26186, url: "https://qonto.com/blog/images/asset/26186/image/xl_avif-3ccbfe4ef6597fe52482c14dee364eb8.avif" },
  { id: 25273, url: "https://qonto.com/blog/images/asset/25273/image/xl_avif-32ba01ac78d320ce684eebc52bb89d2b.avif" },
  { id: 12511, url: "https://qonto.com/blog/images/asset/12511/image/50e4be0a1b9393268ae3950ace07dedb.svg" },
  { id: 8188, url: "https://qonto.com/blog/images/asset/8188/image/820c060b728185c2e709d68a907734de.svg" },
  // misc
  { id: 8190, url: "https://qonto.com/blog/images/asset/8190/image/xl_avif-c66078a54816d8a7e9f1c7db342ae585.avif" },
];

async function dl(t) {
  const h = hashFromUrl(t.url);
  if (!h) {
    console.log("skip no-hash", t.url);
    return;
  }
  const ext = t.suffix || h.ext;
  const name = `oa-${t.id}-${h.hash}.${ext}`;
  if (existing.has(name)) {
    console.log("have", name);
    return;
  }
  const res = await fetch(t.url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      Referer: "https://qonto.com/de/open-an-account",
    },
  });
  if (!res.ok) {
    console.log("FAIL", res.status, t.url);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(join(OUT, name), buf);
  console.log("wrote", name, buf.length);
}

for (const t of targets) await dl(t);
console.log("done");
