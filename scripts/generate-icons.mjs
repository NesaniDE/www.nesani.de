import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const SRC = path.join(ROOT, "public/images/shm-logo-black.png");
const PUB = path.join(ROOT, "public");
const APP = path.join(ROOT, "src/app");

const BG = "#ffffff";
const LOGO_RATIO = 0.62;

async function makeRound(size, out) {
  const logoSize = Math.round(size * LOGO_RATIO);
  const logo = await sharp(SRC)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`,
  );

  const pad = Math.round((size - logoSize) / 2);

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BG,
    },
  })
    .composite([
      { input: logo, top: pad, left: pad },
      { input: mask, blend: "dest-in" },
    ])
    .png()
    .toFile(out);
  console.log(`  ${path.relative(ROOT, out)}  (${size}x${size})`);
}

async function main() {
  console.log("Generating rounded icons from", path.relative(ROOT, SRC));

  await makeRound(192, path.join(PUB, "icon-192.png"));
  await makeRound(512, path.join(PUB, "icon-512.png"));
  await makeRound(180, path.join(PUB, "apple-icon.png"));
  await makeRound(32, path.join(PUB, "icon-32.png"));
  await makeRound(16, path.join(PUB, "icon-16.png"));

  const icoBuf = await pngToIco([
    path.join(PUB, "icon-16.png"),
    path.join(PUB, "icon-32.png"),
  ]);
  const icoOut = path.join(APP, "favicon.ico");
  await fs.writeFile(icoOut, icoBuf);
  console.log(`  ${path.relative(ROOT, icoOut)}`);

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
