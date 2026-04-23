import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(2500);

// Find ALL images and videos intersecting hero area (top 0-900)
const items = await page.evaluate(() => {
  const all = [...document.querySelectorAll('img, video, source'), ...document.querySelectorAll('*')];
  const heroStuff = [];
  for (const el of all) {
    const r = el.getBoundingClientRect();
    if (r.top < 900 && r.bottom > 0 && r.width > 200 && r.height > 200) {
      const cs = getComputedStyle(el);
      if (el.tagName === 'IMG' || el.tagName === 'VIDEO' || cs.backgroundImage !== 'none') {
        heroStuff.push({
          tag: el.tagName,
          class: el.className?.toString().slice(0, 120),
          src: el.currentSrc || el.src || null,
          bg: cs.backgroundImage !== 'none' ? cs.backgroundImage.slice(0, 300) : null,
          zIndex: cs.zIndex,
          position: cs.position,
          width: r.width,
          height: r.height,
          top: r.top
        });
      }
    }
  }
  return heroStuff;
});
console.log(JSON.stringify(items, null, 2));
await browser.close();
