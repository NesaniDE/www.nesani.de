#!/usr/bin/env node
import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const URL = process.argv[2] || 'https://qonto.com/de';
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();

const fontUrls = new Set();
ctx.on('request', req => {
  const u = req.url();
  if (/\.(woff2|woff|otf|ttf|eot)(\?|$)/i.test(u)) fontUrls.add(u);
});

await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4000);
await page.evaluate(() => window.scrollBy(0, 500));
await page.waitForTimeout(500);
await page.evaluate(() => window.scrollBy(0, 3000));
await page.waitForTimeout(500);

// Also enumerate @font-face via document.fonts
const fontFaces = await page.evaluate(() => {
  const list = [];
  for (const f of document.fonts) list.push({ family: f.family, style: f.style, weight: f.weight, status: f.status, display: f.display });
  // Also walk stylesheets
  const css = [];
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.constructor.name === 'CSSFontFaceRule') css.push(rule.cssText);
      }
    } catch {}
  }
  return { list, css };
});

const result = { networkFonts: [...fontUrls], ...fontFaces };
writeFileSync(resolve('docs/research/fonts.json'), JSON.stringify(result, null, 2));
console.log(`Network fonts: ${fontUrls.size}`);
console.log(`document.fonts: ${fontFaces.list.length}`);
console.log(`@font-face rules: ${fontFaces.css.length}`);

await browser.close();
