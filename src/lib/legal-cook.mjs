import { TIT } from '../data/legal.mjs';
const NOM_P = TIT.nom.endsWith('.') ? TIT.nom : TIT.nom + '.';
const tbl = (h, rows) => `<div class="tw"><table><thead><tr>${h.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => `<td data-h="${h[i]}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const btn = t => `<p><a class="btn" href="/?cookies=1">${t}</a></p>`;

export const COOK = {
  ca: { title: 'Política de cookies', html: `
<p class="upd">Última actualització: ${TIT.actualitzat.ca}</p>
<p>Aquesta web, titularitat de ${TIT.nom}, fa servir emmagatzematge tècnic propi i, només si hi dones el consentiment, cookies d'anàlisi de tercers. Aquí t'expliquem quines són, per a què serveixen i com pots gestionar-les, d'acord amb l'article 22 de la LSSI-CE i el RGPD.</p>
<h2>1. Què són les cookies</h2>
<p>Són petits fitxers que un lloc web desa al teu dispositiu quan el visites. Serveixen, per exemple, per recordar les teves preferències o per entendre com s'utilitza el web.</p>
<h2>2. Quines fem servir</h2>
${tbl(['Nom','Titular','Finalitat','Tipus','Durada'], [
 ['ct_consent (emmagatzematge local)', 'Pròpia', 'Recorda la teva elecció sobre les cookies perquè no t'+"'"+'ho hàgim de tornar a preguntar.', 'Tècnica (exempta de consentiment)', '365 dies'],
 ['_ga', 'Google Ireland Limited', 'Distingeix usuaris de manera anònima per elaborar estadístiques d'+"'"+'ús.', 'Anàlisi (amb consentiment)', 'Fins a 2 anys'],
 ['_ga_MXHGDY7B17', 'Google Ireland Limited', 'Manté l'+"'"+'estat de la sessió de Google Analytics.', 'Anàlisi (amb consentiment)', 'Fins a 2 anys']
])}
<p>Les cookies d'anàlisi només s'instal·len si prems «Acceptar» al bàner. Mentre no ho facis, o si prems «Rebutjar», Google Analytics no es carrega i no s'instal·la cap cookie d'anàlisi. No fem servir cookies de publicitat ni de seguiment entre llocs web.</p>
<h2>3. Altres serveis de tercers que es carreguen amb el web</h2>
<p>Per mostrar correctament el web es carreguen recursos de tercers que no instal·len cookies, però reben l'adreça IP del teu dispositiu: les tipografies de Google Fonts (Google Ireland Limited) i, a la vista de mapa, la biblioteca Leaflet (unpkg.com) i els mosaics de mapa d'OpenStreetMap.</p>
<h2>4. Com pots gestionar-les</h2>
<p>Pots canviar la teva elecció en qualsevol moment des del botó següent o amb l'enllaç «Configurar cookies» del peu de pàgina. També pots esborrar o bloquejar les cookies des de la configuració del teu navegador (Chrome, Firefox, Safari, Edge…), tot i que algunes funcions del web podrien veure's afectades.</p>
${btn('Configurar cookies')}
<h2>5. Responsable i més informació</h2>
<p>El responsable és ${NOM_P} Per a qualsevol dubte, escriu-nos a <a href="mailto:${TIT.email}">${TIT.email}</a>. Consulta també la nostra <a href="/politica-privacitat/?l=ca">política de privacitat</a>.</p>` },
  es: { title: 'Política de cookies', html: `
<p class="upd">Última actualización: ${TIT.actualitzat.es}</p>
<p>Este sitio web, titularidad de ${TIT.nom}, utiliza almacenamiento técnico propio y, solo si das tu consentimiento, cookies de analítica de terceros. Aquí te explicamos cuáles son, para qué sirven y cómo puedes gestionarlas, de acuerdo con el artículo 22 de la LSSI-CE y el RGPD.</p>
<h2>1. Qué son las cookies</h2>
<p>Son pequeños archivos que un sitio web guarda en tu dispositivo cuando lo visitas. Sirven, por ejemplo, para recordar tus preferencias o para entender cómo se utiliza el sitio.</p>
<h2>2. Cuáles usamos</h2>
${tbl(['Nombre','Titular','Finalidad','Tipo','Duración'], [
 ['ct_consent (almacenamiento local)', 'Propia', 'Recuerda tu elección sobre las cookies para no tener que volver a preguntártelo.', 'Técnica (exenta de consentimiento)', '365 días'],
 ['_ga', 'Google Ireland Limited', 'Distingue usuarios de forma anónima para elaborar estadísticas de uso.', 'Analítica (con consentimiento)', 'Hasta 2 años'],
 ['_ga_MXHGDY7B17', 'Google Ireland Limited', 'Mantiene el estado de la sesión de Google Analytics.', 'Analítica (con consentimiento)', 'Hasta 2 años']
])}
<p>Las cookies de analítica solo se instalan si pulsas «Aceptar» en el banner. Mientras no lo hagas, o si pulsas «Rechazar», Google Analytics no se carga y no se instala ninguna cookie de analítica. No usamos cookies de publicidad ni de seguimiento entre sitios web.</p>
<h2>3. Otros servicios de terceros que se cargan con el sitio</h2>
<p>Para mostrar correctamente el sitio se cargan recursos de terceros que no instalan cookies, pero reciben la dirección IP de tu dispositivo: las tipografías de Google Fonts (Google Ireland Limited) y, en la vista de mapa, la biblioteca Leaflet (unpkg.com) y los mosaicos de mapa de OpenStreetMap.</p>
<h2>4. Cómo puedes gestionarlas</h2>
<p>Puedes cambiar tu elección en cualquier momento desde el botón siguiente o con el enlace «Configurar cookies» del pie de página. También puedes borrar o bloquear las cookies desde la configuración de tu navegador (Chrome, Firefox, Safari, Edge…), aunque algunas funciones del sitio podrían verse afectadas.</p>
${btn('Configurar cookies')}
<h2>5. Responsable y más información</h2>
<p>El responsable es ${NOM_P} Para cualquier duda, escríbenos a <a href="mailto:${TIT.email}">${TIT.email}</a>. Consulta también nuestra <a href="/politica-privacitat/?l=es">política de privacidad</a>.</p>` },
  en: { title: 'Cookie policy', html: `
<p class="upd">Last updated: ${TIT.actualitzat.en}</p>
<p>This website, owned by ${TIT.nom}, uses its own technical storage and, only if you consent, third-party analytics cookies. Here we explain which ones they are, what they are for and how you can manage them, in accordance with Article 22 of the LSSI-CE and the GDPR.</p>
<h2>1. What cookies are</h2>
<p>They are small files that a website saves on your device when you visit it. They are used, for example, to remember your preferences or to understand how the website is used.</p>
<h2>2. Which ones we use</h2>
${tbl(['Name','Owner','Purpose','Type','Duration'], [
 ['ct_consent (local storage)', 'Own', 'Remembers your cookie choice so we do not have to ask you again.', 'Technical (exempt from consent)', '365 days'],
 ['_ga', 'Google Ireland Limited', 'Distinguishes users anonymously to produce usage statistics.', 'Analytics (with consent)', 'Up to 2 years'],
 ['_ga_MXHGDY7B17', 'Google Ireland Limited', 'Keeps the Google Analytics session state.', 'Analytics (with consent)', 'Up to 2 years']
])}
<p>Analytics cookies are only set if you click “Accept” on the banner. Until you do, or if you click “Reject”, Google Analytics is not loaded and no analytics cookie is set. We do not use advertising or cross-site tracking cookies.</p>
<h2>3. Other third-party services loaded with the website</h2>
<p>To display the website properly, third-party resources are loaded that do not set cookies but do receive your device's IP address: Google Fonts typefaces (Google Ireland Limited) and, in the map view, the Leaflet library (unpkg.com) and OpenStreetMap map tiles.</p>
<h2>4. How you can manage them</h2>
<p>You can change your choice at any time using the button below or the “Cookie settings” link in the footer. You can also delete or block cookies in your browser settings (Chrome, Firefox, Safari, Edge…), although some website features may be affected.</p>
${btn('Cookie settings')}
<h2>5. Controller and more information</h2>
<p>The controller is ${NOM_P} If you have any questions, write to us at <a href="mailto:${TIT.email}">${TIT.email}</a>. See also our <a href="/politica-privacitat/?l=en">privacy policy</a>.</p>` }
};
