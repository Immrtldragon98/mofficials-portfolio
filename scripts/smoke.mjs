// Run after npm run build. Tests the built server and catalog without a browser.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import Module from 'node:module';
import path from 'node:path';
import ts from 'typescript';

const catalogPath = path.resolve('src/data/projects.ts');
const catalogModule = new Module(catalogPath);
catalogModule._compile(ts.transpileModule(readFileSync(catalogPath, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText, catalogPath);
const { projects } = catalogModule.exports;
const port = process.env.PORTFOLIO_TEST_PORT || '41461';
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', port], { stdio: ['ignore', 'pipe', 'pipe'] });
let logs = '';
server.stdout.on('data', chunk => { logs += chunk; });
server.stderr.on('data', chunk => { logs += chunk; });
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  assert.equal(new Set(projects.map(p => p.slug)).size, projects.length, 'Unique project routes');
  assert.equal(new Set(projects.map(p => p.id)).size, projects.length, 'Unique project identities');
  for (let attempt = 0; ; attempt++) {
    try { const response = await fetch(base); if (response.ok) break; } catch {}
    if (attempt >= 100 || server.exitCode !== null) throw new Error(`Server did not start: ${logs}`);
    await pause(100);
  }
  async function get(route) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert(!html.includes('<h1>Component</h1>'), `${route}: placeholder content`);
    assert.equal((html.match(/<main\b/g) || []).length, 1, `${route}: one main landmark`);
    return html;
  }
  const home = await get('/');
  for (const project of projects.filter(p => p.featured)) assert(home.includes(project.title.replace(/&/g, '&amp;')), `Featured: ${project.title}`);
  const catalog = await get('/projects');
  for (const p of projects) {
    assert(catalog.includes(`href="/projects/${p.slug}"`), `Catalog route: ${p.slug}`);
    const detail = await get(`/projects/${p.slug}`);
    assert(detail.includes('All projects'), `${p.slug}: return link`);
    if (p.github) assert(detail.includes(`href="${p.github}"`), `${p.slug}: source link`);
  }
  assert(!catalog.includes('href="https://market-memory-new.vercel.app"'));
  assert(!catalog.includes('href="https://workforce-hub-production.up.railway.app/"'));
  const finance = await get('/projects?category=Finance');
  assert(finance.includes('<option value="Finance" selected="">'));
  const invalid = await get('/projects?category=invalid');
  assert(invalid.includes('<option value="All" selected="">'));
  await get('/about'); await get('/roadmap');
  const contact = await get('/contact');
  assert(contact.includes('Copy email address'));
  assert(contact.includes('mailto:vyvsyadav98@proton.me'));
  for (const route of ['/missing-page', '/projects/missing-project']) {
    const html = await (await fetch(base + route)).text();
    assert(html.includes('Browse projects'), `${route}: recovery link`);
    assert(html.includes('This page isn'), `${route}: missing-page explanation`);
  }
  console.log(`PASS: ${projects.length} case studies, catalog links, featured projects, category defaults, navigation routes, contact actions, dead-demo removal and missing-page recovery.`);
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => { server.kill('SIGTERM'); });
