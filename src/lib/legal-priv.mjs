import { TIT } from '../data/legal.mjs';
const f = (v, l) => v ? v : `<mark class="pend">[PENDENT: ${l}]</mark>`;
const resp = (a) => `<dl class="idt"><dt>${a[0]}</dt><dd>${TIT.nom}</dd><dt>${a[1]}</dt><dd>${f(TIT.nif,'NIF')}</dd><dt>${a[2]}</dt><dd>${f(TIT.adreca,'domicili')}</dd><dt>${a[3]}</dt><dd><a href="mailto:${TIT.email}">${TIT.email}</a></dd></dl>`;

export const PRIV = {
  ca: { title: 'Política de privacitat', html: `
<p class="upd">Última actualització: ${TIT.actualitzat.ca}</p>
<p>A CoLiving Terrassa ens prenem seriosament la privacitat. Aquesta política t'explica, d'acord amb el Reglament (UE) 2016/679 (RGPD) i la Llei orgànica 3/2018 (LOPDGDD), com tractem les dades personals que ens facilites a través del web.</p>
<h2>1. Responsable del tractament</h2>
${resp(['Responsable','NIF','Domicili','Correu de contacte'])}
<h2>2. Quines dades tractem</h2>
<p>Només les que tu ens facilites als formularis del web: nom i cognoms, correu electrònic, telèfon (opcional) i el contingut del missatge. Segons el formulari, també la informació sobre l'habitació o el pis pel qual preguntes o, si ets propietari, la zona, el nombre d'habitacions i l'estat del pis. Els camps marcats com a obligatoris són necessaris per poder atendre la teva sol·licitud. Si ens facilites dades de tercers, declares que tens la seva autorització.</p>
<p>Addicionalment, els servidors que allotgen el web poden registrar dades tècniques (com l'adreça IP) per raons de seguretat i funcionament. Si acceptes les cookies d'anàlisi, Google Analytics recull dades d'ús agregades (vegeu la <a href="/politica-cookies/?l=ca">política de cookies</a>).</p>
<h2>3. Per a què les fem servir i amb quina base legal</h2>
<ul>
<li><strong>Atendre les teves consultes i sol·licituds</strong> (informació sobre habitacions, visites, valoració del teu pis com a propietari): base legal, el teu consentiment (art. 6.1.a RGPD) i l'aplicació de mesures precontractuals a petició teva (art. 6.1.b RGPD).</li>
<li><strong>Anàlisi estadística de l'ús del web</strong>: base legal, el teu consentiment (art. 6.1.a RGPD), que pots retirar en qualsevol moment.</li>
<li><strong>Seguretat del web i compliment d'obligacions legals</strong>: interès legítim (art. 6.1.f RGPD) i obligació legal (art. 6.1.c RGPD).</li>
</ul>
<p>No fem servir les teves dades per enviar-te publicitat sense el teu consentiment previ, ni prenem decisions automatitzades que et puguin afectar.</p>
<h2>4. A qui comuniquem les dades</h2>
<p>No venem ni cedim les teves dades a tercers per a finalitats pròpies d'aquests. Només hi accedeixen proveïdors que ens presten serveis i actuen com a encarregats del tractament, amb el corresponent contracte: el servei que envia els formularis al nostre correu (Web3Forms), els proveïdors de correu electrònic i d'allotjament web (Cloudflare, Inc.) i, només si ho acceptes, Google Ireland Limited (Google Analytics). També podem comunicar dades quan una norma ho exigeixi (administracions públiques, jutjats i tribunals).</p>
<p>Per mostrar el web també es carreguen recursos de tercers (tipografies de Google Fonts i, a la vista de mapa, Leaflet i OpenStreetMap), que reben l'adreça IP del teu dispositiu. Més detalls a la política de cookies.</p>
<h2>5. Transferències internacionals</h2>
<p>Alguns d'aquests proveïdors poden tractar dades fora de l'Espai Econòmic Europeu, en particular als Estats Units. En aquest cas es fa sota les garanties previstes al RGPD, com ara la decisió d'adequació del Marc de Privacitat de Dades UE-EUA o les clàusules contractuals tipus de la Comissió Europea.</p>
<h2>6. Quant de temps conservem les dades</h2>
<p>Conservem les dades de les consultes mentre sigui necessari per atendre-les i, després, bloquejades durant els terminis de prescripció de possibles responsabilitats legals. Si finalment es formalitza un contracte, les dades passen a tractar-se per a la gestió d'aquesta relació i es conserven durant la seva vigència i els terminis legals aplicables. Les dades d'analítica es conserven segons la configuració de Google Analytics.</p>
<h2>7. Els teus drets</h2>
<p>Pots exercir els drets d'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat, i retirar el consentiment en qualsevol moment (sense que això afecti la licitud del tractament anterior), escrivint a <a href="mailto:${TIT.email}">${TIT.email}</a> i indicant quin dret vols exercir. Podem demanar-te que acreditis la teva identitat.</p>
<p>Si consideres que no hem tractat les teves dades correctament, pots presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>
<h2>8. Seguretat</h2>
<p>Apliquem mesures tècniques i organitzatives raonables per protegir les teves dades contra l'accés no autoritzat, la pèrdua o l'alteració.</p>
<h2>9. Menors d'edat</h2>
<p>Els serveis d'aquest web no s'adrecen a menors de 14 anys. Si ets menor de 14 anys, no ens facilitis dades sense el consentiment dels teus pares o tutors.</p>
<h2>10. Canvis en aquesta política</h2>
<p>Podem actualitzar aquesta política per adaptar-la a canvis legals o del web. La versió vigent és sempre la publicada en aquesta pàgina.</p>` },
  es: { title: 'Política de privacidad', html: `
<p class="upd">Última actualización: ${TIT.actualitzat.es}</p>
<p>En CoLiving Terrassa nos tomamos en serio la privacidad. Esta política te explica, de acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), cómo tratamos los datos personales que nos facilitas a través del sitio web.</p>
<h2>1. Responsable del tratamiento</h2>
${resp(['Responsable','NIF','Domicilio','Correo de contacto'])}
<h2>2. Qué datos tratamos</h2>
<p>Solo los que tú nos facilitas en los formularios del sitio: nombre y apellidos, correo electrónico, teléfono (opcional) y el contenido del mensaje. Según el formulario, también la información sobre la habitación o el piso por el que preguntas o, si eres propietario, la zona, el número de habitaciones y el estado del piso. Los campos marcados como obligatorios son necesarios para poder atender tu solicitud. Si nos facilitas datos de terceros, declaras que cuentas con su autorización.</p>
<p>Además, los servidores que alojan el sitio pueden registrar datos técnicos (como la dirección IP) por motivos de seguridad y funcionamiento. Si aceptas las cookies de analítica, Google Analytics recoge datos de uso agregados (consulta la <a href="/politica-cookies/?l=es">política de cookies</a>).</p>
<h2>3. Para qué los usamos y con qué base legal</h2>
<ul>
<li><strong>Atender tus consultas y solicitudes</strong> (información sobre habitaciones, visitas, valoración de tu piso como propietario): base legal, tu consentimiento (art. 6.1.a RGPD) y la aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD).</li>
<li><strong>Análisis estadístico del uso del sitio</strong>: base legal, tu consentimiento (art. 6.1.a RGPD), que puedes retirar en cualquier momento.</li>
<li><strong>Seguridad del sitio y cumplimiento de obligaciones legales</strong>: interés legítimo (art. 6.1.f RGPD) y obligación legal (art. 6.1.c RGPD).</li>
</ul>
<p>No usamos tus datos para enviarte publicidad sin tu consentimiento previo, ni tomamos decisiones automatizadas que puedan afectarte.</p>
<h2>4. A quién comunicamos los datos</h2>
<p>No vendemos ni cedemos tus datos a terceros para fines propios de estos. Solo acceden a ellos proveedores que nos prestan servicios y actúan como encargados del tratamiento, con el correspondiente contrato: el servicio que envía los formularios a nuestro correo (Web3Forms), los proveedores de correo electrónico y de alojamiento web (Cloudflare, Inc.) y, solo si lo aceptas, Google Ireland Limited (Google Analytics). También podemos comunicar datos cuando una norma lo exija (administraciones públicas, juzgados y tribunales).</p>
<p>Para mostrar el sitio también se cargan recursos de terceros (tipografías de Google Fonts y, en la vista de mapa, Leaflet y OpenStreetMap), que reciben la dirección IP de tu dispositivo. Más detalles en la política de cookies.</p>
<h2>5. Transferencias internacionales</h2>
<p>Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo, en particular en Estados Unidos. En ese caso se hace con las garantías previstas en el RGPD, como la decisión de adecuación del Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo de la Comisión Europea.</p>
<h2>6. Cuánto tiempo conservamos los datos</h2>
<p>Conservamos los datos de las consultas mientras sea necesario para atenderlas y, después, bloqueados durante los plazos de prescripción de posibles responsabilidades legales. Si finalmente se formaliza un contrato, los datos pasan a tratarse para la gestión de esa relación y se conservan durante su vigencia y los plazos legales aplicables. Los datos de analítica se conservan según la configuración de Google Analytics.</p>
<h2>7. Tus derechos</h2>
<p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, y retirar el consentimiento en cualquier momento (sin que ello afecte a la licitud del tratamiento anterior), escribiendo a <a href="mailto:${TIT.email}">${TIT.email}</a> e indicando qué derecho quieres ejercer. Podemos pedirte que acredites tu identidad.</p>
<p>Si consideras que no hemos tratado tus datos correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>
<h2>8. Seguridad</h2>
<p>Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente al acceso no autorizado, la pérdida o la alteración.</p>
<h2>9. Menores de edad</h2>
<p>Los servicios de este sitio no están dirigidos a menores de 14 años. Si eres menor de 14 años, no nos facilites datos sin el consentimiento de tus padres o tutores.</p>
<h2>10. Cambios en esta política</h2>
<p>Podemos actualizar esta política para adaptarla a cambios legales o del sitio. La versión vigente es siempre la publicada en esta página.</p>` },
  en: { title: 'Privacy policy', html: `
<p class="upd">Last updated: ${TIT.actualitzat.en}</p>
<p>At CoLiving Terrassa we take privacy seriously. This policy explains, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD), how we process the personal data you provide through this website.</p>
<h2>1. Data controller</h2>
${resp(['Controller','Tax ID (NIF)','Address','Contact email'])}
<h2>2. What data we process</h2>
<p>Only what you provide in the website forms: full name, email address, phone number (optional) and the content of your message. Depending on the form, also the room or flat you are asking about or, if you are an owner, the area, the number of rooms and the condition of the flat. Fields marked as required are needed to handle your request. If you give us someone else's data, you confirm you have their permission.</p>
<p>In addition, the servers hosting the website may log technical data (such as the IP address) for security and operational reasons. If you accept analytics cookies, Google Analytics collects aggregated usage data (see the <a href="/politica-cookies/?l=en">cookie policy</a>).</p>
<h2>3. Why we use it and the legal basis</h2>
<ul>
<li><strong>Handling your enquiries and requests</strong> (information about rooms, viewings, valuation of your flat as an owner): legal basis, your consent (Art. 6.1.a GDPR) and taking pre-contractual steps at your request (Art. 6.1.b GDPR).</li>
<li><strong>Statistical analysis of website use</strong>: legal basis, your consent (Art. 6.1.a GDPR), which you can withdraw at any time.</li>
<li><strong>Website security and compliance with legal obligations</strong>: legitimate interest (Art. 6.1.f GDPR) and legal obligation (Art. 6.1.c GDPR).</li>
</ul>
<p>We do not use your data to send you advertising without your prior consent, and we do not make automated decisions that could affect you.</p>
<h2>4. Who we share data with</h2>
<p>We do not sell your data or hand it to third parties for their own purposes. Only service providers acting as data processors under a contract have access: the service that forwards the forms to our email (Web3Forms), email and web hosting providers (Cloudflare, Inc.) and, only if you accept, Google Ireland Limited (Google Analytics). We may also disclose data where required by law (public authorities, courts).</p>
<p>To display the website, third-party resources are also loaded (Google Fonts typefaces and, in the map view, Leaflet and OpenStreetMap), which receive your device's IP address. More details in the cookie policy.</p>
<h2>5. International transfers</h2>
<p>Some of these providers may process data outside the European Economic Area, in particular in the United States. This is done under the safeguards provided for in the GDPR, such as the adequacy decision for the EU-US Data Privacy Framework or the European Commission's standard contractual clauses.</p>
<h2>6. How long we keep data</h2>
<p>We keep enquiry data for as long as needed to handle it and, afterwards, blocked for the limitation periods of any legal liability. If a contract is eventually signed, the data is then processed to manage that relationship and kept for its duration and the applicable legal periods. Analytics data is kept according to the Google Analytics settings.</p>
<h2>7. Your rights</h2>
<p>You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability, and withdraw your consent at any time (without affecting the lawfulness of earlier processing), by writing to <a href="mailto:${TIT.email}">${TIT.email}</a> and stating which right you wish to exercise. We may ask you to prove your identity.</p>
<p>If you believe we have not handled your data properly, you may lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>
<h2>8. Security</h2>
<p>We apply reasonable technical and organisational measures to protect your data against unauthorised access, loss or alteration.</p>
<h2>9. Minors</h2>
<p>The services on this website are not aimed at children under 14. If you are under 14, please do not give us data without the consent of your parents or guardians.</p>
<h2>10. Changes to this policy</h2>
<p>We may update this policy to reflect legal changes or changes to the website. The version in force is always the one published on this page.</p>` }
};
