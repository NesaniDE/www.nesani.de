import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const W = 1200;
const H = 630;
const BG = "#050505";

// Logo: shm-logo-white.png is the new white cube on transparent
const logoBuf = await readFile("public/images/shm-logo-white.png");
const logoSize = 360;
const logo = await sharp(logoBuf)
  .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

// SVG overlay with brand text using system-safe sans-serif fallback stack
const overlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1a1a" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#accent)"/>
  <text x="${W / 2}" y="510"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="76"
        font-weight="700"
        fill="#ffffff"
        text-anchor="middle"
        letter-spacing="6">NESANI</text>
  <text x="${W / 2}" y="565"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="22"
        font-weight="400"
        fill="rgba(255,255,255,0.6)"
        text-anchor="middle"
        letter-spacing="4">DIGITALE STRUKTUREN FÜR MODERNE UNTERNEHMEN</text>
</svg>`;

const composed = await sharp({
  create: { width: W, height: H, channels: 4, background: BG },
})
  .composite([
    { input: Buffer.from(overlay), top: 0, left: 0 },
    {
      input: logo,
      top: Math.round((H - logoSize) / 2 - 70),
      left: Math.round((W - logoSize) / 2),
    },
  ])
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile("public/og-image.png", composed);
console.log("Wrote public/og-image.png:", composed.length, "bytes");
