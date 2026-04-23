#!/usr/bin/env node
import { chromium } from 'playwright';
import { resolve } from 'path';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('http://localhost:3201', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2500);
await page.screenshot({ path: resolve('docs/design-references/clone-desktop-full.png'), fullPage: true });
await page.screenshot({ path: resolve('docs/design-references/clone-desktop-viewport.png'), fullPage: false });
console.log('Clone screenshots saved.');
await browser.close();
