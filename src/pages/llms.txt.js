import { PISOS } from '../data/pisos.mjs';
import { HAB } from '../data/habitacions.mjs';
import { FAQS } from '../data/faqs.mjs';
import { buildLlms } from '../lib/seo.mjs';

export function GET() {
  return new Response(buildLlms({ PISOS, HAB, FAQS }), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
