#!/usr/bin/env node
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const URL = process.argv[2] || 'https://qonto.com/de';
const OUT_DIR = resolve('docs/research');
const SHOT_DIR = resolve('docs/design-references');
mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(SHOT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  locale: 'de-DE',
});
const page = await ctx.newPage();

console.log(`Navigating to ${URL}...`);
await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2500);

// Dismiss cookie banner if present
try {
  const cookieBtns = ['button:has-text("Accept")', 'button:has-text("Alles akzeptieren")', 'button:has-text("Akzeptieren")', 'button:has-text("Zustimmen")', '#onetrust-accept-btn-handler', '[data-testid="cookie-accept"]'];
  for (const sel of cookieBtns) {
    const btn = await page.$(sel);
    if (btn) {
      await btn.click().catch(() => {});
      await page.waitForTimeout(800);
      console.log(`Dismissed cookie via ${sel}`);
      break;
    }
  }
} catch {}

// Full page screenshot desktop
console.log('Screenshot desktop fullpage...');
await page.screenshot({ path: resolve(SHOT_DIR, 'qonto-de-desktop-full.png'), fullPage: true });
await page.screenshot({ path: resolve(SHOT_DIR, 'qonto-de-desktop-viewport.png'), fullPage: false });

// Global extraction
console.log('Extracting globals...');
const globals = await page.evaluate(() => {
  const getFont = el => getComputedStyle(el).fontFamily;
  const all = [...document.querySelectorAll('*')];
  const fonts = [...new Set(all.slice(0, 1000).map(getFont))];
  const images = [...document.querySelectorAll('img')].map(i => ({
    src: i.currentSrc || i.src,
    srcset: i.srcset,
    alt: i.alt,
    w: i.naturalWidth, h: i.naturalHeight,
    cls: i.className?.toString()?.slice(0, 80),
    parentCls: i.parentElement?.className?.toString()?.slice(0, 80),
  })).filter(i => i.src);
  const videos = [...document.querySelectorAll('video')].map(v => ({
    src: v.src || v.querySelector('source')?.src,
    poster: v.poster, autoplay: v.autoplay, loop: v.loop, muted: v.muted,
  }));
  const bgImages = [...document.querySelectorAll('*')].filter(el => {
    const bg = getComputedStyle(el).backgroundImage;
    return bg && bg !== 'none' && bg.includes('url(');
  }).map(el => ({
    url: getComputedStyle(el).backgroundImage,
    tag: el.tagName,
    cls: el.className?.toString()?.slice(0, 80),
  }));
  const links = [...document.querySelectorAll('link')].map(l => ({ rel: l.rel, href: l.href, type: l.type, sizes: l.sizes?.toString() }));
  const favicons = links.filter(l => l.rel.includes('icon') || l.rel.includes('apple') || l.rel.includes('manifest'));
  const svgCount = document.querySelectorAll('svg').length;

  const sampleColors = {};
  const sampleEls = {
    body: document.body,
    h1: document.querySelector('h1'),
    h2: document.querySelector('h2'),
    p: document.querySelector('p'),
    a: document.querySelector('a'),
    button: document.querySelector('button'),
    nav: document.querySelector('nav'),
  };
  for (const [k, el] of Object.entries(sampleEls)) {
    if (!el) continue;
    const cs = getComputedStyle(el);
    sampleColors[k] = {
      color: cs.color, bg: cs.backgroundColor, font: cs.fontFamily,
      size: cs.fontSize, weight: cs.fontWeight, lh: cs.lineHeight,
    };
  }

  // Detect smooth scroll libraries
  const scrollLib = {
    lenis: document.querySelector('.lenis, [data-lenis]') !== null || !!window.Lenis,
    locomotive: document.querySelector('[data-scroll-container], .locomotive-scroll') !== null,
  };

  // Get page structure - major landmark sections
  const sections = [...document.querySelectorAll('body > *, main > *, section, header, footer, nav[aria-label]')].map(el => ({
    tag: el.tagName,
    cls: el.className?.toString()?.slice(0, 120),
    id: el.id,
    role: el.getAttribute('role'),
    aria: el.getAttribute('aria-label'),
    childCount: el.children.length,
    rect: (() => { const r = el.getBoundingClientRect(); return { x: r.x|0, y: r.y|0, w: r.width|0, h: r.height|0 }; })(),
  })).filter(s => s.rect.h > 50);

  return {
    title: document.title,
    url: location.href,
    fonts, favicons, links: links.slice(0, 30),
    images, videos, bgImages: bgImages.slice(0, 50),
    svgCount, sampleColors, scrollLib, sections,
  };
});

writeFileSync(resolve(OUT_DIR, 'recon-globals.json'), JSON.stringify(globals, null, 2));
console.log(`Wrote docs/research/recon-globals.json (${globals.images.length} imgs, ${globals.videos.length} videos, ${globals.favicons.length} favicons, ${globals.sections.length} sections)`);

// Save raw HTML for reference
const html = await page.content();
writeFileSync(resolve(OUT_DIR, 'raw.html'), html);

// Extract CSS variable tokens from :root
const tokens = await page.evaluate(() => {
  const rs = getComputedStyle(document.documentElement);
  const out = {};
  for (const name of rs) {
    if (name.startsWith('--')) out[name] = rs.getPropertyValue(name).trim();
  }
  return out;
});
writeFileSync(resolve(OUT_DIR, 'recon-tokens.json'), JSON.stringify(tokens, null, 2));
console.log(`Wrote recon-tokens.json (${Object.keys(tokens).length} CSS vars)`);

// Mobile screenshot
console.log('Screenshot mobile 390px...');
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(1500);
await page.screenshot({ path: resolve(SHOT_DIR, 'qonto-de-mobile-full.png'), fullPage: true });

await browser.close();
console.log('Done.');
