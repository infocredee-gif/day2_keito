// 指定パターンを 900px / 390px で撮影して目視QAに使う。
// usage: node scripts/shoot.mjs <outdir> [ID ...]   （ID 省略時は全件）
// playwright-core の場所は環境変数 PLAYWRIGHT_CORE で上書きできる。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = path.join(here, '..', 'references', 'catalog.json');
const [outDir, ...ids] = process.argv.slice(2);
if (!outDir) { console.error('usage: node scripts/shoot.mjs <outdir> [ID ...]'); process.exit(1); }

const candidates = [
  process.env.PLAYWRIGHT_CORE,
  '/Users/miurakeinin/.hermes/hermes-agent/node_modules/playwright-core/index.mjs',
  'playwright-core',
].filter(Boolean);
let chromium;
for (const c of candidates) {
  try { ({ chromium } = await import(c)); break; } catch { /* next */ }
}
if (!chromium) { console.error('playwright-core が見つかりません。PLAYWRIGHT_CORE=/path/to/playwright-core/index.mjs を指定してください'); process.exit(1); }

const exe = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium'].find(p => fs.existsSync(p));
fs.mkdirSync(outDir, { recursive: true });
const want = new Set(ids.map(s => s.toUpperCase()));
const patterns = JSON.parse(fs.readFileSync(catalogPath, 'utf8')).patterns.filter(p => !want.size || want.has(p.id));

const browser = await chromium.launch({ executablePath: exe, headless: true });
const report = [];
for (const [w, tag] of [[900, 'pc'], [390, 'sp']]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 600 } });
  const page = await ctx.newPage();
  for (const p of patterns) {
    await page.setContent(p.document, { waitUntil: 'load' });
    const m = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
    await page.screenshot({ path: path.join(outDir, `${p.id}_${tag}.png`), fullPage: true });
    report.push({ id: p.id, tag, overflowX: m.sw > m.cw + 1 });
  }
  await ctx.close();
}
await browser.close();
const over = report.filter(r => r.overflowX);
console.log(`shots: ${report.length} -> ${outDir}` + (over.length ? `\n横はみ出し: ${over.map(r => r.id + '/' + r.tag).join(', ')}` : ''));
