// Contingut per a robots i cercadors (JSON-LD, <noscript>, llms.txt).
// Es genera en compilar a partir de src/data/*.mjs: no s'ha d'editar a mà.
export const SITE = 'https://www.colivingterrassa.com';
export const SITE_NAME = 'CoLiving Terrassa';
export const EMAIL = 'hola@colivingterrassa.com';
export const PHONE = '+34646321585';
export const PHONE_FMT = '646 32 15 85';
export const GMAPS = 'https://www.google.com/maps?cid=11265816990376276175';
export const INSTAGRAM = 'https://www.instagram.com/colivingterrassa/';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const INTRO = {
  ca: "CoLiving Terrassa lloga habitacions en pisos compartits de qualitat a Terrassa (Barcelona) per a estudiants i professionals. Pisos gestionats directament per nosaltres, sense comissió d'agència.",
  es: "CoLiving Terrassa alquila habitaciones en pisos compartidos de calidad en Terrassa (Barcelona) para estudiantes y profesionales. Pisos gestionados directamente por nosotros, sin comisión de agencia.",
  en: "CoLiving Terrassa rents rooms in quality shared flats in Terrassa (Barcelona) for students and professionals. Flats managed directly by us, with no agency fee."
};
const H = {
  ca: { pisos: 'Els nostres pisos', faq: 'Preguntes freqüents', contact: 'Contacte', hours: 'Dilluns a divendres, 9:00–18:00', hab: 'habitacions', hab1: 'habitació', banys: 'banys', price: 'Habitacions de' , priceTo: 'a', perMonth: '€/mes' },
  es: { pisos: 'Nuestros pisos', faq: 'Preguntas frecuentes', contact: 'Contacto', hours: 'Lunes a viernes, 9:00–18:00', hab: 'habitaciones', hab1: 'habitación', banys: 'baños', price: 'Habitaciones de', priceTo: 'a', perMonth: '€/mes' },
  en: { pisos: 'Our flats', faq: 'Frequently asked questions', contact: 'Contact', hours: 'Monday to Friday, 9:00–18:00', hab: 'rooms', hab1: 'room', banys: 'bathrooms', price: 'Rooms from', priceTo: 'to', perMonth: '€/month' }
};
const LANGS = ['ca', 'es', 'en'];

export function stats({ PISOS, HAB }) {
  const preus = HAB.map(h => h.preu).filter(Number.isFinite);
  const barris = [...new Set(PISOS.map(p => p.barri))];
  return { pisos: PISOS.length, hab: HAB.length, min: Math.min(...preus), max: Math.max(...preus), barris };
}
const pisLine = (p, l) => [p.barri, p.adreca, p.m2 ? `${p.m2} m²` : '', `${p.nhab} ${p.nhab === 1 ? H[l].hab1 : H[l].hab}`, p.nbany ? `${p.nbany} ${H[l].banys}` : ''].filter(Boolean).join(' · ');

export function buildJsonLd({ PISOS, HAB, FAQS }) {
  const st = stats({ PISOS, HAB });
  const org = {
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    '@id': SITE + '/#organization',
    name: SITE_NAME,
    url: SITE + '/',
    logo: SITE + '/logo.png',
    image: SITE + '/og-image.jpg',
    description: INTRO.ca,
    email: EMAIL,
    telephone: PHONE,
    sameAs: [INSTAGRAM],
    hasMap: GMAPS,
    address: { '@type': 'PostalAddress', addressLocality: 'Terrassa', addressRegion: 'Barcelona', addressCountry: 'ES' },
    areaServed: { '@type': 'City', name: 'Terrassa' },
    knowsLanguage: LANGS,
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }]
  };
  const website = { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/', name: SITE_NAME, inLanguage: LANGS, publisher: { '@id': SITE + '/#organization' } };
  const list = {
    '@type': 'ItemList',
    '@id': SITE + '/#pisos',
    name: H.ca.pisos,
    numberOfItems: PISOS.length,
    itemListElement: PISOS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Apartment',
        name: `Pis ${p.nom}`,
        description: p.desc.ca,
        url: SITE + '/',
        address: { '@type': 'PostalAddress', streetAddress: p.adreca.replace(/, Terrassa$/, ''), addressLocality: 'Terrassa', addressRegion: 'Barcelona', addressCountry: 'ES' },
        geo: { '@type': 'GeoCoordinates', latitude: p.lat, longitude: p.lng },
        ...(p.m2 ? { floorSize: { '@type': 'QuantitativeValue', value: p.m2, unitCode: 'MTK' } } : {}),
        numberOfRooms: p.nhab,
        ...(p.nbany ? { numberOfBathroomsTotal: p.nbany } : {}),
        amenityFeature: (p.amen && p.amen.ca || []).map(a => ({ '@type': 'LocationFeatureSpecification', name: a, value: true }))
      }
    }))
  };
  const faq = {
    '@type': 'FAQPage',
    '@id': SITE + '/#faq',
    inLanguage: 'ca',
    mainEntity: FAQS.ca.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  };
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [org, website, list, faq] }).replace(/</g, '\\u003c');
}

export function buildNoscript({ PISOS, HAB, FAQS }) {
  const st = stats({ PISOS, HAB });
  let h = `<div style="max-width:880px;margin:0 auto;padding:28px 20px;font-family:system-ui,sans-serif;line-height:1.6;color:#1F2A33">`;
  h += `<h1>${esc(SITE_NAME)} · Lloguer d'habitacions per a estudiants i professionals</h1>`;
  for (const l of LANGS) h += `<p lang="${l}">${esc(INTRO[l])}</p>`;
  h += `<p>${esc(H.ca.price)} ${st.min} ${H.ca.priceTo} ${st.max} ${H.ca.perMonth} · ${esc(st.barris.join(', '))}</p>`;
  for (const l of LANGS) {
    h += `<section lang="${l}"><h2>${esc(H[l].pisos)}</h2><ul>`;
    for (const p of PISOS) {
      h += `<li><strong>${l === 'en' ? 'Flat' : l === 'es' ? 'Piso' : 'Pis'} ${esc(p.nom)}</strong> — ${esc(pisLine(p, l))}.`;
      if (l === 'ca') h += ` ${esc(p.desc.ca)}`;
      h += `</li>`;
    }
    h += `</ul><h2>${esc(H[l].faq)}</h2>`;
    for (const [q, a] of FAQS[l]) h += `<h3>${esc(q)}</h3><p>${esc(a)}</p>`;
    h += `</section>`;
  }
  h += `<h2>${esc(H.ca.contact)}</h2><p><a href="mailto:${EMAIL}">${EMAIL}</a> · <a href="tel:${PHONE}">${PHONE_FMT}</a> · <a href="${INSTAGRAM}">Instagram</a> · Terrassa, Barcelona · ${esc(H.ca.hours)}</p></div>`;
  return h;
}

export function buildLlms({ PISOS, HAB, FAQS }) {
  const st = stats({ PISOS, HAB });
  const L = [];
  L.push(`# ${SITE_NAME}`, '');
  L.push(`> ${INTRO.en}`, '');
  L.push(`- ES: ${INTRO.es}`, `- CA: ${INTRO.ca}`, '');
  L.push(`Web: ${SITE}/ (català, castellano, English; el selector d'idioma és a la capçalera) · Contact: ${EMAIL} · Phone: ${PHONE} · Instagram: ${INSTAGRAM} · ${H.en.hours}`, '');
  L.push('## Key facts', '');
  L.push(`- ${st.pisos} flats and ${st.hab} rooms in Terrassa (Barcelona): ${st.barris.join(', ')}.`);
  L.push(`- Monthly rent per room ranges from ${st.min} to ${st.max} euros; see the FAQ for what the price includes. Availability changes over time and is shown on the website.`);
  L.push('- Rooms are rented for students (6-month contract, extendable with no penalty) and professionals; flats are managed directly by CoLiving Terrassa, with no agency fee.');
  L.push('- Enquiries and visit requests are made through the forms on the website or by email.', '');
  L.push('## Flats', '');
  for (const p of PISOS) L.push(`- ${p.nom}: ${pisLine(p, 'en')}. ${p.desc.en}`);
  L.push('');
  for (const l of LANGS) {
    L.push(`## ${H[l].faq} (${l})`, '');
    for (const [q, a] of FAQS[l]) L.push(`**${q}**`, a, '');
  }
  L.push('## Optional', '', `- [Website](${SITE}/): rooms, photos, reviews and enquiry forms`, '');
  return L.join('\n');
}
