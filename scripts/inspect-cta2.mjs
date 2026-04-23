import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(2000);

// Scroll to bottom for lazy-loaded content
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 3000));
await page.waitForTimeout(2000);

const out = await page.evaluate(() => {
  const all = [...document.querySelectorAll('section')];
  const ctaSec = all.find(s => s.textContent.includes('Kompliziert'));
  if (!ctaSec) return null;
  return {
    class: ctaSec.className,
    innerHTML: ctaSec.outerHTML.slice(0, 4000),
    images: [...ctaSec.querySelectorAll('img')].map(i => ({
      src: i.currentSrc || i.src,
      alt: i.alt
    })),
    bg: getComputedStyle(ctaSec).backgroundImage,
    bgColor: getComputedStyle(ctaSec).backgroundColor,
    computed: [...ctaSec.querySelectorAll('*')].slice(0,20).map(el => {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') return { tag: el.tagName, class: el.className.toString().slice(0,80), bg: bg.slice(0, 200) };
      return null;
    }).filter(Boolean)
  };
});
console.log(JSON.stringify(out, null, 2));

// screenshot full CTA section
const cta = await page.locator('section:has-text("Kompliziert")').first();
await cta.screenshot({ path: 'docs/design-references/live-cta.png' });

await browser.close();
