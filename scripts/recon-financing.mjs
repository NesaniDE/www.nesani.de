import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync("docs/research/financing", { recursive: true });
mkdirSync("docs/design-references/financing", { recursive: true });

const URL = "https://qonto.com/de/financing-solutions";

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  locale: "de-DE",
});
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);

await page.evaluate(async () => {
  const step = 500;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 80));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1500);

await page.screenshot({
  path: "docs/design-references/financing/desktop-full.png",
  fullPage: true,
});

const data = await page.evaluate(() => {
  const sections = Array.from(
    document.querySelectorAll("main section, main > div > section")
  );
  return sections.slice(0, 20).map((sec, idx) => {
    const cs = getComputedStyle(sec);
    return {
      idx,
      className: sec.className,
      bgColor: cs.backgroundColor,
      color: cs.color,
      id: sec.id,
      htmlFull: sec.outerHTML,
    };
  });
});

writeFileSync(
  "docs/research/financing/sections-full.json",
  JSON.stringify(data, null, 2)
);

// Per-section screenshot
for (let i = 0; i < data.length; i++) {
  try {
    const loc = page.locator("main section").nth(i);
    await loc.scrollIntoViewIfNeeded().catch(() => {});
    await page.waitForTimeout(300);
    await loc
      .screenshot({ path: `docs/design-references/financing/s${String(i).padStart(2, "0")}.png` })
      .catch(() => {});
  } catch {}
}

// Asset list
const assets = await page.evaluate(() => {
  const uniq = (arr) => [...new Set(arr)];
  const imgs = uniq(
    [...document.querySelectorAll("img")].map((i) => i.src || i.currentSrc)
  ).filter((s) => s && s.includes("qonto.com"));
  const vids = uniq(
    [...document.querySelectorAll("video")].flatMap((v) => [
      v.src,
      ...[...v.querySelectorAll("source")].map((s) => s.src),
    ])
  ).filter(Boolean);
  const sources = uniq(
    [...document.querySelectorAll("source[srcset]")]
      .flatMap((s) => s.getAttribute("srcset").split(","))
      .map((s) => s.trim().split(/\s+/)[0])
  ).filter((s) => s && s.includes("qonto.com"));
  return { imgs, vids, sources };
});
writeFileSync(
  "docs/research/financing/assets.json",
  JSON.stringify(assets, null, 2)
);

console.log("sections:", data.length, "imgs:", assets.imgs.length, "vids:", assets.vids.length);

await browser.close();
