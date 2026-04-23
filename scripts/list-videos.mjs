import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(2000);

const vids = await page.evaluate(() => [...document.querySelectorAll('video')].map(v => ({
  src: v.currentSrc || v.src,
  poster: v.poster,
  autoplay: v.autoplay,
  loop: v.loop,
  muted: v.muted,
  top: Math.round(v.getBoundingClientRect().top),
  width: Math.round(v.getBoundingClientRect().width),
  height: Math.round(v.getBoundingClientRect().height),
  class: v.className
})));
console.log(JSON.stringify(vids, null, 2));
await browser.close();
