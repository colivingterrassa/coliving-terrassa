// Utilitats per a les pàgines estàtiques (estudiants, professionals i una per pis).
// Tot es genera en compilar a partir de src/data/*.mjs i de les carpetes public/fotos.
import { PISOS } from '../data/pisos.mjs';
import { HAB } from '../data/habitacions.mjs';
import { SORTIDES } from '../data/sortides.mjs';
import { PIS_SLUGS, fotosPisos } from './fotos.mjs';

export const urlPis = id => `/pisos/${PIS_SLUGS[id]}/`;
export const fotoMini = u => u.replace('/fotos/', '/fotos-t/');
export const habsDe = id => HAB.filter(h => h.pis === id);
export const fd = iso => { const p = iso.split('-'); return `${p[2]}/${p[1]}/${p[0].slice(2)}`; };
export const fotosDe = id => fotosPisos[PIS_SLUGS[id]] || [];
export const nomCurt = p => p.adreca.replace(/, Terrassa$/, '');

const iso = d => d.toISOString().slice(0, 10);
const _avui = new Date();
export const AVUI = iso(_avui);
const _lim6 = new Date(_avui); _lim6.setMonth(_lim6.getMonth() + 6);
const _lim7 = new Date(_avui); _lim7.setMonth(_lim7.getMonth() + 7);

// Estat d'una habitació en el moment de compilar. El navegador el torna a calcular amb la data d'avui
// (vegeu ESTAT_JS) perquè la pàgina no es quedi desfasada entre publicacions.
export function estatHab(h) {
  if (h.estat === 'ocupada') {
    const s = SORTIDES[h.codi];
    if (s && s <= iso(_lim6)) {
      const d = new Date(s + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + 1);
      const lliure = iso(d);
      if (lliure > AVUI) return { c: 'soon', t: `Ocupada · libre desde el ${fd(lliure)}`, surt: s };
    }
    return { c: 'off', t: 'Ocupada', surt: s && s <= iso(_lim7) ? s : '' };
  }
  if (h.des && h.des > AVUI) return { c: 'soon', t: `Disponible desde el ${fd(h.des)}`, des: h.des };
  return { c: 'ok', t: 'Disponible ahora' };
}
export const disponible = h => h.estat !== 'ocupada';
export const preuDesde = id => {
  const l = habsDe(id).filter(disponible).map(h => h.preu);
  return l.length ? Math.min(...l) : null;
};
export const preuMinTotal = id => Math.min(...habsDe(id).map(h => h.preu));

// Petit script que actualitza l'estat de cada habitació amb la data del navegador.
export const ESTAT_JS = String.raw`
(function(){
  var avui=new Date().toISOString().slice(0,10);
  var l6=new Date();l6.setMonth(l6.getMonth()+6);l6=l6.toISOString().slice(0,10);
  function fd(i){var p=i.split('-');return p[2]+'/'+p[1]+'/'+p[0].slice(2);}
  document.querySelectorAll('[data-st]').forEach(function(e){
    var st=e.getAttribute('data-st'),des=e.getAttribute('data-des'),sur=e.getAttribute('data-surt'),c,t;
    if(st==='ocupada'){
      c='off';t='Ocupada';
      if(sur&&sur<=l6){var d=new Date(sur+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+1);var li=d.toISOString().slice(0,10);
        if(li>avui){c='soon';t='Ocupada · libre desde el '+fd(li);}}
    }else if(des&&des>avui){c='soon';t='Disponible desde el '+fd(des);}
    else{c='ok';t='Disponible ahora';}
    e.className='bdg bdg--'+c;e.textContent=t;
  });
})();
`;
