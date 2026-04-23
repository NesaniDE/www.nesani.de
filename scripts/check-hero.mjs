import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(3500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(1500);

const info = await page.evaluate(() => {
  const images = [...document.querySelectorAll('img')].slice(0, 30);
  return images.map(img => ({
    src: img.src,
    currentSrc: img.currentSrc,
    alt: img.alt,
    w: img.naturalWidth,
    h: img.naturalHeight,
    displayedW: img.width,
    displayedH: img.height,
    top: Math.round(img.getBoundingClientRect().top)
  })).filter(i => i.top < 1000 && i.top > -100);
});
console.log(JSON.stringify(info, null, 2));

// Save hero section as screenshot directly
const hero = await page.locator('section').first();
try { await hero.screenshot({ path: 'docs/design-references/qonto-hero-live.png' }); } catch(e) {}

await browser.close();
