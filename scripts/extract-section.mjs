#!/usr/bin/env node
// Usage: node scripts/extract-section.mjs <url> <output-name> [viewport-width]
// Extracts per-section computed styles for every section in <main> and writes JSON.
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const URL = process.argv[2] || 'https://qonto.com/de';
const NAME = process.argv[3] || 'sections';
const W = parseInt(process.argv[4] || '1440', 10);
const OUT = resolve('docs/research');
const SHOTS = resolve('docs/design-references');
mkdirSync(OUT, { recursive: true });
mkdirSync(SHOTS, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: W, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(3500);

// Dismiss cookies
for (const sel of ['button:has-text("Akzeptieren")', 'button:has-text("Alles akzeptieren")', '#onetrust-accept-btn-handler']) {
  const b = await page.$(sel).catch(() => null);
  if (b) { await b.click().catch(() => {}); await page.waitForTimeout(500); break; }
}

// Scroll to bottom + back to top so all lazy assets load
await page.evaluate(async () => {
  await new Promise(r => {
    let y = 0;
    const step = 600;
    const iv = setInterval(() => {
      window.scrollBy(0, step);
      y += step;
      if (y > document.body.scrollHeight) { clearInterval(iv); r(); }
    }, 150);
  });
});
await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);

const sections = await page.evaluate(() => {
  const props = ['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color','textTransform','backgroundColor','backgroundImage','padding','paddingTop','paddingRight','paddingBottom','paddingLeft','margin','marginTop','marginBottom','width','height','maxWidth','minHeight','display','flexDirection','justifyContent','alignItems','gap','gridTemplateColumns','gridTemplateRows','borderRadius','border','boxShadow','overflow','position','top','bottom','zIndex','opacity','transform','transition','cursor','objectFit','mixBlendMode','filter','backdropFilter','textAlign'];
  const extract = el => {
    const cs = getComputedStyle(el);
    const o = {};
    for (const p of props) { const v = cs[p]; if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)' && v !== 'rgb(0, 0, 0)' && v !== 'static' && v !== 'visible' && v !== 'block' && v !== '400') o[p] = v; }
    return o;
  };
  const walk = (el, depth) => {
    if (depth > 4) return null;
    const children = [...el.children];
    const text = el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 ? el.textContent.trim().slice(0, 300) : null;
    return {
      tag: el.tagName.toLowerCase(),
      cls: el.className?.toString?.()?.slice(0, 150) || '',
      id: el.id || '',
      text,
      styles: extract(el),
      img: el.tagName === 'IMG' ? { src: el.currentSrc || el.src, alt: el.alt, w: el.naturalWidth, h: el.naturalHeight } : null,
      href: el.tagName === 'A' ? el.href : null,
      rect: (() => { const r = el.getBoundingClientRect(); return { x: r.x|0, y: (r.y + window.scrollY)|0, w: r.width|0, h: r.height|0 }; })(),
      childCount: children.length,
      children: children.slice(0, 30).map(c => walk(c, depth + 1)).filter(Boolean),
    };
  };
  const list = [...document.querySelectorAll('header, main > *, footer')];
  // Drill into main if it wraps everything
  return list.map(el => walk(el, 0));
});

writeFileSync(resolve(OUT, `${NAME}.json`), JSON.stringify(sections, null, 2));
console.log(`Wrote ${NAME}.json (${sections.length} top-level elements)`);

await browser.close();
