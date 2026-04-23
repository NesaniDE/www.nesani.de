#!/usr/bin/env node
import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(3500);
for (const sel of ['button:has-text("Akzeptieren")', 'button:has-text("Alles akzeptieren")']) {
  const b = await page.$(sel).catch(() => null);
  if (b) { await b.click().catch(() => {}); break; }
}
await page.waitForTimeout(500);

// Extract header + hero + features grid + CTA sections with full detail
const data = await page.evaluate(() => {
  const props = ['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color','textTransform','backgroundColor','backgroundImage','padding','margin','width','height','maxWidth','minHeight','display','flexDirection','justifyContent','alignItems','gap','gridTemplateColumns','gridTemplateRows','borderRadius','border','boxShadow','overflow','position','top','bottom','left','right','zIndex','opacity','transform','transition','backdropFilter','textAlign'];
  const extract = el => {
    const cs = getComputedStyle(el);
    const o = {};
    for (const p of props) { const v = cs[p]; if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)' && v !== 'static' && v !== 'visible' && v !== '400') o[p] = v; }
    return o;
  };
  const walk = (el, depth, max = 6) => {
    if (!el || depth > max) return null;
    const children = [...el.children];
    const text = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').slice(0, 400);
    return {
      tag: el.tagName.toLowerCase(),
      cls: el.className?.toString?.()?.slice(0, 200) || '',
      text: text || null,
      style: extract(el),
      img: el.tagName === 'IMG' ? { src: el.currentSrc || el.src, alt: el.alt, w: el.naturalWidth, h: el.naturalHeight } : null,
      svgHTML: el.tagName === 'SVG' ? el.outerHTML.slice(0, 2000) : null,
      href: el.tagName === 'A' ? el.href : null,
      rect: (() => { const r = el.getBoundingClientRect(); return { x: r.x|0, y: (r.y + window.scrollY)|0, w: r.width|0, h: r.height|0 }; })(),
      children: children.map(c => walk(c, depth + 1, max)).filter(Boolean),
    };
  };
  return {
    header: walk(document.querySelector('header'), 0, 5),
    hero: walk(document.querySelector('main > div > section:nth-of-type(1), main > section:nth-of-type(1)'), 0, 5),
    featuresGrid: walk(document.querySelector('main > div > section:nth-of-type(2), main > section:nth-of-type(2)'), 0, 5),
  };
});

writeFileSync(resolve('docs/research/hero-detail.json'), JSON.stringify(data, null, 2));
console.log('Wrote hero-detail.json');
await browser.close();
