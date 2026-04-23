import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

mkdirSync("docs/design-references/openaccount", { recursive: true });

const b = await chromium.launch({ headless: true });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, locale: "de-DE" });
const p = await ctx.newPage();
await p.goto("http://localhost:3201/open-account", { waitUntil: "networkidle", timeout: 30000 });
await p.waitForTimeout(1200);

await p.evaluate(async () => {
  const step = 400;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 70));
  }
  window.scrollTo(0, 0);
});
await p.waitForTimeout(800);
await p.screenshot({ path: "docs/design-references/openaccount/dupe-full.png", fullPage: true });
console.log("shot saved");
await b.close();
