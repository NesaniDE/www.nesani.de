#!/usr/bin/env node
// Take per-section screenshots and extract bg/color data for every <section>
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const URL = process.argv[2] || 'https://qonto.com/de';
const W = parseInt(process.argv[3] || '1440', 10);
const SHOTS = resolve('docs/design-references');
const OUT = resolve('docs/research');
mkdirSync(SHOTS, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: W, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(3500);

for (const sel of ['button:has-text("Akzeptieren")', 'button:has-text("Alles akzeptieren")', '#onetrust-accept-btn-handler']) {
  const b = await page.$(sel).catch(() => null);
  if (b) { await b.click().catch(() => {}); await page.waitForTimeout(500); break; }
}

// Lazy-load everything
await page.evaluate(async () => {
  await new Promise(r => {
    let y = 0;
    const iv = setInterval(() => {
      window.scrollBy(0, 800);
      y += 800;
      if (y > document.body.scrollHeight + 500) { clearInterval(iv); r(); }
    }, 120);
  });
});
await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

// Find all top-level body sections (header, sections, footer)
const sectionInfo = await page.evaluate(() => {
  const result = [];
  const add = (el, name) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    result.push({
      name,
      tag: el.tagName,
      cls: el.className?.toString?.()?.slice(0, 200) || '',
      top: r.top + window.scrollY,
      height: r.height,
      bg: cs.backgroundColor,
      bgImg: cs.backgroundImage,
      color: cs.color,
    });
  };
  const header = document.querySelector('header');
  if (header) add(header, '00-header');
  const sections = document.querySelectorAll('main > div > section, main > section, body > main > section');
  sections.forEach((s, i) => add(s, String(i + 1).padStart(2, '0') + '-section'));
  // Some sites have sections under other wrappers
  if (sections.length === 0) {
    document.querySelectorAll('section').forEach((s, i) => {
      const r = s.getBoundingClientRect();
      if (r.height > 100 && r.width > 500) add(s, String(i + 1).padStart(2, '0') + '-section');
    });
  }
  const footer = document.querySelector('footer');
  if (footer) add(footer, '99-footer');
  return result;
});

writeFileSync(resolve(OUT, 'section-info.json'), JSON.stringify(sectionInfo, null, 2));
console.log(`Found ${sectionInfo.length} sections`);

for (const s of sectionInfo) {
  const scrollTarget = Math.max(0, s.top - 10);
  await page.evaluate((y) => window.scrollTo(0, y), scrollTarget);
  await page.waitForTimeout(400);
  const clipHeight = Math.min(s.height + 20, 2000);
  try {
    await page.screenshot({
      path: resolve(SHOTS, `${s.name}.png`),
      clip: { x: 0, y: 10, width: W, height: clipHeight },
    });
    console.log(`  ${s.name}.png (${clipHeight}px, bg=${s.bg})`);
  } catch (e) {
    console.log(`  FAIL ${s.name}: ${e.message}`);
  }
}

await browser.close();
