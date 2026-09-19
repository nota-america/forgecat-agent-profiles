import * as fs from 'node:fs';
import * as path from 'node:path';
import { createHash } from 'node:crypto';

const RENDERER_SHA256 = '46ed274ca8b6bc763308c87fea05fa9ad940d7f6bcfbd1bc0abbf56c6c0c705d';

// Only the pinned diagram page gets this policy. Same-origin JSON carries
// PDF call arguments; other web origins, including the font CDN, are blocked.
export const DIAGRAM_CSP = [
  "default-src 'none'",
  "script-src 'unsafe-inline' 'wasm-unsafe-eval' blob:",
  "style-src 'unsafe-inline'",
  "connect-src 'self'",
  "img-src data: blob:",
  "font-src data:",
  "worker-src blob:",
  "base-uri https://gstack-render.localhost",
  "form-action 'none'",
  "frame-ancestors 'none'",
].join('; ');

export function renderResponse(file: string): Response {
  if (path.extname(file).toLowerCase() !== '.html') return new Response(Bun.file(file));
  const bytes = fs.readFileSync(file);
  const digest = createHash('sha256').update(bytes).digest('hex');
  if (digest === RENDERER_SHA256) {
    return new Response(bytes, { headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Security-Policy': DIAGRAM_CSP,
      'Cache-Control': 'no-store',
    } });
  }
  const name = path.basename(file);
  if (name === 'diagram-render.html' || /^gstack-diagram-render-[a-f0-9]+\.html$/.test(name)) {
    return new Response('diagram renderer integrity mismatch', { status: 409 });
  }
  return new Response(bytes, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
