import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(2000);

const sections = await page.evaluate(() => {
  return [...document.querySelectorAll('main > section, main > div > section, section')].slice(0, 20).map(s => {
    const h2 = s.querySelector('h2');
    const h1 = s.querySelector('h1');
    const r = s.getBoundingClientRect();
    return {
      tag: s.tagName,
      class: s.className?.toString().slice(0, 80),
      h1: h1?.textContent?.trim().slice(0, 80),
      h2: h2?.textContent?.trim().slice(0, 80),
      top: Math.round(r.top + window.scrollY),
      height: Math.round(r.height)
    };
  }).filter(s => s.height > 50);
});
console.log(JSON.stringify(sections, null, 2));
await browser.close();
