import fs from 'node:fs';
import path from 'node:path';

// Llegeix les carpetes de public/fotos en compilar. Es fa servir a la portada i a les pàgines de pis.
export function listImgs(dir) {
  try {
    return fs.readdirSync(dir)
      .filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort();
  } catch (e) {
    return [];
  }
}

// Ordena les fotos comunes d'un pis: menjador, cuina, bany i després la resta
// (terrasses, balcons, patis, fotos sense categoria...).
export function ordenaFotosPis(files) {
  const prioritat = f => {
    const n = f.toLowerCase();
    if (/menjador/.test(n)) return 0;
    if (/cuina/.test(n)) return 1;
    if (/bany/.test(n)) return 2;
    return 3;
  };
  return [...files].sort((a, b) => {
    const pa = prioritat(a), pb = prioritat(b);
    if (pa !== pb) return pa - pb;
    return a.localeCompare(b, 'ca', { numeric: true, sensitivity: 'base' });
  });
}

export const FOTOS_DIR = path.join(process.cwd(), 'public', 'fotos');

export const PIS_SLUGS = {1:'22-juliol',2:'sant-jordi',3:'font-vella',4:'catalunya',6:'22-juliol-333',7:'universitat',8:'universitat-2',9:'sant-genis',10:'bartomeu-amat',11:'salvador-espriu',12:'prat-de-la-riba',13:'rellinars',14:'nord'};
export const HAB_PIS_OF = {
  'PAS-1':1,'PAS-2':1,'PAS-3':1,'PAS-4':1,
  'SJO-1':2,'SJO-2':2,'SJO-3':2,'SJO-4':2,'SJO-5':2,'SJO-6':2,
  'FON-1':3,'FON-2':3,'FON-3':3,'FON-4':3,
  'CAT-1':4,'CAT-2':4,'CAT-3':4,'CAT-4':4,'CAT-5':4,'CAT-6':4,
  'PASS-1':6,'PASS-2':6,'PASS-3':6,
  'UNI-1':7,'UNI-2':7,'UNI-3':7,'UNI-4':7,'UNI-5':7,
  'UNII-1':8,'UNII-2':8,
  'GEN-1':9,'GEN-2':9,'GEN-3':9,
  'BAR-1':10,'BAR-2':10,'BAR-3':10,'BAR-4':10,
  'ESP-1':11,'ESP-2':11,'ESP-3':11,'ESP-4':11,
  'PRA-1':12,'PRA-2':12,'PRA-3':12,'PRA-4':12,
  'REL-1':13,'REL-2':13,'REL-3':13,
  'NOR-1':14
};

export const fotosPisos = {};
for (const slug of Object.values(PIS_SLUGS)) {
  fotosPisos[slug] = ordenaFotosPis(listImgs(path.join(FOTOS_DIR, 'pisos', slug)))
    .map(f => `/fotos/pisos/${slug}/${encodeURIComponent(f)}`);
}

export const fotosHab = {};
for (const codi of Object.keys(HAB_PIS_OF)) {
  const slug = PIS_SLUGS[HAB_PIS_OF[codi]];
  fotosHab[codi] = listImgs(path.join(FOTOS_DIR, 'habitacions', slug, codi))
    .map(f => `/fotos/habitacions/${slug}/${codi}/${encodeURIComponent(f)}`);
}

export const fotosNosaltres = listImgs(path.join(FOTOS_DIR, 'nosaltres'))
  .map(f => `/fotos/nosaltres/${encodeURIComponent(f)}`);

export const fotosResenyes = {};
for (const f of listImgs(path.join(FOTOS_DIR, 'resenyes'))) {
  const base = f.replace(/\.[^.]+$/, '');
  const key = base.trim().split(/\s+/)[0].toLowerCase();
  fotosResenyes[key] = `/fotos/resenyes/${encodeURIComponent(f)}`;
}

