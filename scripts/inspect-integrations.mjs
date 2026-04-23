import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(2000);

await page.evaluate(() => window.scrollTo(0, 3000));
await page.waitForTimeout(1500);

const sec = await page.evaluate(() => {
  const all = [...document.querySelectorAll('section')];
  const intSec = all.find(s => s.textContent.includes('Nahtlos verbunden'));
  if (!intSec) return null;
  return {
    class: intSec.className,
    html: intSec.outerHTML.slice(0, 6000),
    images: [...intSec.querySelectorAll('img')].map(i => ({
      src: i.currentSrc || i.src,
      alt: i.alt,
      w: i.naturalWidth,
      h: i.naturalHeight,
      class: i.className?.toString().slice(0, 80),
      rect: (() => { const r = i.getBoundingClientRect(); return { left: Math.round(r.left), top: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) }; })()
    }))
  };
});
console.log(JSON.stringify(sec, null, 2));

const intLocator = await page.locator('section:has-text("Nahtlos verbunden")').first();
await intLocator.screenshot({ path: 'docs/design-references/live-integrations.png' });
await browser.close();
