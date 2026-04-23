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
await page.waitForTimeout(1000);

// Scroll through to trigger lazy content
await page.evaluate(async () => {
  await new Promise(r => {
    let y = 0; const iv = setInterval(() => { window.scrollBy(0, 600); y += 600;
      if (y > document.body.scrollHeight + 500) { clearInterval(iv); r(); } }, 120);
  });
});
await page.waitForTimeout(1000);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

const data = await page.evaluate(() => {
  const q = (sel) => document.querySelector(sel);
  const qa = (sel) => [...document.querySelectorAll(sel)];
  const txt = el => el ? el.textContent.trim().replace(/\s+/g, ' ') : null;

  // Nav links (top-level)
  const navLinks = qa('header nav a, header nav button').map(a => ({
    text: txt(a), href: a.href || null,
  })).filter(a => a.text);

  // Hero h1
  const h1 = q('h1');
  // Section h2s + their nearby context
  const sections = qa('main > div > section, main > section');
  const sectionData = sections.map(s => {
    const h2 = s.querySelector('h2');
    const h3s = [...s.querySelectorAll('h3')].map(h => txt(h));
    const ps = [...s.querySelectorAll('p')].slice(0, 12).map(p => txt(p));
    const buttons = [...s.querySelectorAll('button, a[role="button"], a.button')].slice(0, 8).map(b => txt(b));
    const imgs = [...s.querySelectorAll('img')].slice(0, 15).map(i => ({ src: i.currentSrc || i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight }));
    return { heading: txt(h2), subheadings: h3s, paragraphs: ps, buttons, imgs };
  });

  // Footer
  const footer = q('footer');
  const footerCols = footer ? [...footer.querySelectorAll('ul')].map(ul => ({
    heading: txt(ul.previousElementSibling),
    items: [...ul.querySelectorAll('li')].map(li => txt(li)),
  })) : [];

  return {
    title: document.title,
    h1: txt(h1),
    navLinks,
    sections: sectionData,
    footerCols,
    footerText: txt(footer),
  };
});

writeFileSync(resolve('docs/research/text-content.json'), JSON.stringify(data, null, 2));
console.log(`h1=${data.h1?.slice(0,80)}`);
console.log(`nav=${data.navLinks.length}, sections=${data.sections.length}, footerCols=${data.footerCols.length}`);
await browser.close();
