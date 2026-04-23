import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(2000);

// Find section with "Kompliziert" text and list its images
const out = await page.evaluate(() => {
  const all = [...document.querySelectorAll('section')];
  const ctaSec = all.find(s => s.textContent.includes('Kompliziert'));
  if (!ctaSec) return null;
  return {
    class: ctaSec.className,
    images: [...ctaSec.querySelectorAll('img')].map(i => ({
      src: i.currentSrc || i.src,
      alt: i.alt
    })),
    pictures: [...ctaSec.querySelectorAll('picture')].map(p => p.outerHTML.slice(0, 2500))
  };
});
console.log(JSON.stringify(out, null, 2));
await browser.close();
