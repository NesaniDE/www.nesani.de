import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(3500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(1500);

const html = await page.evaluate(() => {
  const pictures = [...document.querySelectorAll('picture')].slice(0, 5);
  return pictures.map(p => ({
    html: p.outerHTML.slice(0, 3000),
    rect: p.getBoundingClientRect()
  }));
});
console.log(JSON.stringify(html, null, 2));
await browser.close();
