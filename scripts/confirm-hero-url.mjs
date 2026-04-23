import { chromium } from 'playwright';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(2000);

const heroPic = await page.evaluate(() => {
  const pics = [...document.querySelectorAll('picture')].filter(p => {
    const r = p.getBoundingClientRect();
    return r.width > 1000 && r.height > 600 && r.top < 100;
  });
  return pics.map(p => ({
    outerHTML: p.outerHTML,
    chosenSrc: p.querySelector('img')?.currentSrc
  }));
});
console.log(JSON.stringify(heroPic, null, 2));

// Download the actual chosen src
for (const h of heroPic) {
  if (h.chosenSrc) {
    const url = h.chosenSrc;
    const name = 'public/images/fresh-hero.avif';
    const res = await fetch(url);
    await pipeline(res.body, fs.createWriteStream(name));
    console.log('downloaded', url, '->', name, fs.statSync(name).size);
  }
}
await browser.close();
