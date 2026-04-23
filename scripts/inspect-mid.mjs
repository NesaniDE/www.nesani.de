import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(2000);

// Scroll to section 6 (4176px) and 9 (5761px) and screenshot + extract
const sections = await page.evaluate(() => {
  const all = [...document.querySelectorAll('section')];
  return all.map((s, i) => ({ idx: i, top: s.getBoundingClientRect().top + window.scrollY, class: s.className?.toString().slice(0, 80), h2: s.querySelector('h2')?.textContent?.trim().slice(0,60) }));
});
// find indexes by their y position
const mid1 = sections.find(s => Math.abs(s.top - 4176) < 20);
const mid2 = sections.find(s => Math.abs(s.top - 5761) < 20);
console.log('mid1:', mid1, 'mid2:', mid2);

for (const [name, y] of [['mid1', 4176], ['mid2', 5761]]) {
  await page.evaluate((top) => window.scrollTo(0, top - 100), y);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `docs/design-references/live-${name}.png`, fullPage: false });
}

// Extract content of mid1 and mid2
const midContent = await page.evaluate(() => {
  const sects = [...document.querySelectorAll('section')];
  return sects.filter(s => {
    const top = s.getBoundingClientRect().top + window.scrollY;
    return Math.abs(top - 4176) < 20 || Math.abs(top - 5761) < 20 || Math.abs(top - 4633) < 20;
  }).map(s => ({
    top: s.getBoundingClientRect().top + window.scrollY,
    class: s.className,
    bgColor: getComputedStyle(s).backgroundColor,
    innerHTML: s.outerHTML.slice(0, 3000),
    text: s.textContent?.trim().slice(0, 400),
    images: [...s.querySelectorAll('img')].map(i => ({ src: i.currentSrc || i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight }))
  }));
});
console.log(JSON.stringify(midContent, null, 2));
await browser.close();
