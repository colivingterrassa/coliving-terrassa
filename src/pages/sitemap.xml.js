import { PISOS } from '../data/pisos.mjs';
import { SITE } from '../lib/seo.mjs';
import { urlPis } from '../lib/paginas.mjs';

// Sitemap generat en compilar: portada en 3 idiomes (amb hreflang), pàgines d'aterratge, un pis per pàgina i pàgines legals.
const alt = `
    <xhtml:link rel="alternate" hreflang="es" href="${SITE}/"/>
    <xhtml:link rel="alternate" hreflang="ca" href="${SITE}/ca/"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>`;
const u = (path, freq, prio, extra = '') => `  <url>\n    <loc>${SITE}${path}</loc>${extra}\n    <changefreq>${freq}</changefreq>\n    <priority>${prio}</priority>\n  </url>`;

export function GET() {
  const urls = [
    u('/', 'weekly', '1.0', alt),
    u('/ca/', 'weekly', '0.8', alt),
    u('/en/', 'weekly', '0.6', alt),
    u('/habitaciones-estudiantes-terrassa/', 'weekly', '0.9'),
    u('/habitaciones-profesionales-terrassa/', 'weekly', '0.9'),
    ...PISOS.map(p => u(urlPis(p.id), 'weekly', '0.7')),
    u('/avis-legal/', 'yearly', '0.2'),
    u('/politica-privacitat/', 'yearly', '0.2'),
    u('/politica-cookies/', 'yearly', '0.2')
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
