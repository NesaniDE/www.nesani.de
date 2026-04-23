import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(3500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(1500);

const pics = await page.evaluate(() => {
  const pictures = [...document.querySelectorAll('picture')];
  return pictures.slice(4, 12).map(p => ({
    html: p.outerHTML.slice(0, 4000),
    rect: p.getBoundingClientRect()
  }));
});
console.log(JSON.stringify(pics, null, 2));
await browser.close();
