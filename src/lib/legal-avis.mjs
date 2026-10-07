import { TIT } from '../data/legal.mjs';
const f = (v, l) => v ? v : `<mark class="pend">[PENDENT: ${l}]</mark>`;
const d = () => `<dl class="idt"><dt>@@1</dt><dd>${TIT.nom}</dd><dt>@@2</dt><dd>${f(TIT.nif,'NIF')}</dd><dt>@@3</dt><dd>${f(TIT.adreca,'domicili')}</dd>${TIT.registre ? `<dt>@@4</dt><dd>${TIT.registre}</dd>` : ''}<dt>@@5</dt><dd><a href="mailto:${TIT.email}">${TIT.email}</a> · ${TIT.tel}</dd><dt>@@6</dt><dd>${TIT.web}</dd></dl>`;
const idt = (a) => d().replace(/@@(\d)/g, (_, n) => a[n - 1]);

export const AVIS = {
  ca: { title: 'Avís legal', html: `
<p class="upd">Última actualització: ${TIT.actualitzat.ca}</p>
<h2>1. Dades identificatives</h2>
<p>En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s'informa que el titular d'aquest lloc web és:</p>
${idt(['Denominació social','NIF','Domicili social','Inscripció registral','Contacte','Lloc web'])}
<h2>2. Objecte i acceptació</h2>
<p>Aquest lloc web té per objecte informar sobre l'activitat de CoLiving Terrassa (lloguer d'habitacions en pisos compartits a Terrassa i serveis de gestió per a propietaris) i facilitar el contacte amb nosaltres. Navegar pel web i fer-lo servir implica l'acceptació d'aquest avís legal. Si no hi estàs d'acord, et demanem que no facis servir el web.</p>
<h2>3. Condicions d'ús</h2>
<p>Et compromets a fer servir el web de manera lícita, de bona fe i sense perjudicar drets o interessos de tercers. En particular, no és permès: introduir dades falses o de tercers sense autorització als formularis, intentar accedir a àrees restringides o alterar el funcionament del web, ni fer-lo servir per enviar publicitat o comunicacions no sol·licitades.</p>
<h2>4. Informació sobre habitacions i pisos</h2>
<p>La informació sobre pisos, habitacions, preus, disponibilitat i condicions que apareix al web és orientativa i pot canviar sense avís previ. Les fotografies i descripcions són il·lustratives. Res del que es publica al web constitueix una oferta contractual vinculant: la reserva o el lloguer d'una habitació només es formalitza mitjançant el corresponent contracte escrit. Per confirmar disponibilitat i condicions actualitzades, contacta amb nosaltres.</p>
<h2>5. Propietat intel·lectual i industrial</h2>
<p>Els continguts del web (textos, fotografies, imatges, logotip, marca, disseny i codi) són propietat de ${TIT.nom} o es fan servir amb la llicència corresponent, i estan protegits per la normativa de propietat intel·lectual i industrial. Queda prohibida la seva reproducció, distribució, comunicació pública o transformació sense autorització expressa i per escrit del titular, excepte per a l'ús personal i no comercial que la llei permeti.</p>
<h2>6. Responsabilitat</h2>
<p>Fem els esforços raonables perquè la informació del web sigui correcta i estigui actualitzada, però no garantim l'absència d'errors ni la disponibilitat contínua del servei. En la mesura que ho permeti la llei, ${TIT.nom} no respon dels danys derivats d'ús del web, d'interrupcions tècniques, de virus o d'errors en la informació. Aquesta limitació no afecta els drets que la normativa de consumidors reconeix als usuaris.</p>
<h2>7. Enllaços</h2>
<p>El web pot contenir enllaços a llocs de tercers (per exemple, Google o Instagram). No controlem aquests llocs ni som responsables dels seus continguts o de les seves polítiques de privacitat. Si algú vol enllaçar el nostre web, ho pot fer sempre que no suggereixi una relació inexistent amb nosaltres ni en perjudiqui la imatge.</p>
<h2>8. Protecció de dades i cookies</h2>
<p>El tractament de dades personals es regeix per la nostra <a href="/politica-privacitat/?l=ca">política de privacitat</a>, i l'ús de cookies per la <a href="/politica-cookies/?l=ca">política de cookies</a>.</p>
<h2>9. Legislació aplicable i jurisdicció</h2>
<p>Aquest avís legal es regeix per la legislació espanyola. Si ets consumidor, qualsevol controvèrsia es resoldrà davant els jutjats i tribunals del teu domicili; en la resta de casos, davant els del domicili social del titular, amb renúncia a qualsevol altre fur que pogués correspondre.</p>
<h2>10. Modificacions</h2>
<p>Podem modificar aquest avís legal quan sigui necessari per adaptar-lo a canvis legals o del web. La versió vigent és sempre la publicada en aquesta pàgina.</p>` },
  es: { title: 'Aviso legal', html: `
<p class="upd">Última actualización: ${TIT.actualitzat.es}</p>
<h2>1. Datos identificativos</h2>
<p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que el titular de este sitio web es:</p>
${idt(['Denominación social','NIF','Domicilio social','Inscripción registral','Contacto','Sitio web'])}
<h2>2. Objeto y aceptación</h2>
<p>Este sitio web tiene por objeto informar sobre la actividad de CoLiving Terrassa (alquiler de habitaciones en pisos compartidos en Terrassa y servicios de gestión para propietarios) y facilitar el contacto con nosotros. La navegación y el uso del sitio implican la aceptación de este aviso legal. Si no estás de acuerdo, te pedimos que no utilices el sitio.</p>
<h2>3. Condiciones de uso</h2>
<p>Te comprometes a utilizar el sitio de forma lícita, de buena fe y sin perjudicar derechos o intereses de terceros. En particular, no está permitido: introducir datos falsos o de terceros sin su autorización en los formularios, intentar acceder a áreas restringidas o alterar el funcionamiento del sitio, ni utilizarlo para enviar publicidad o comunicaciones no solicitadas.</p>
<h2>4. Información sobre habitaciones y pisos</h2>
<p>La información sobre pisos, habitaciones, precios, disponibilidad y condiciones que aparece en el sitio es orientativa y puede cambiar sin previo aviso. Las fotografías y descripciones son ilustrativas. Nada de lo publicado en el sitio constituye una oferta contractual vinculante: la reserva o el alquiler de una habitación solo se formaliza mediante el correspondiente contrato escrito. Para confirmar la disponibilidad y las condiciones actualizadas, contacta con nosotros.</p>
<h2>5. Propiedad intelectual e industrial</h2>
<p>Los contenidos del sitio (textos, fotografías, imágenes, logotipo, marca, diseño y código) son propiedad de ${TIT.nom} o se utilizan con la licencia correspondiente, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito del titular, salvo el uso personal y no comercial que la ley permita.</p>
<h2>6. Responsabilidad</h2>
<p>Hacemos esfuerzos razonables para que la información del sitio sea correcta y esté actualizada, pero no garantizamos la ausencia de errores ni la disponibilidad continua del servicio. En la medida en que la ley lo permita, ${TIT.nom} no responde de los daños derivados del uso del sitio, de interrupciones técnicas, de virus o de errores en la información. Esta limitación no afecta a los derechos que la normativa de consumidores reconoce a los usuarios.</p>
<h2>7. Enlaces</h2>
<p>El sitio puede contener enlaces a sitios de terceros (por ejemplo, Google o Instagram). No controlamos esos sitios ni somos responsables de sus contenidos o de sus políticas de privacidad. Quien quiera enlazar a nuestro sitio puede hacerlo siempre que no sugiera una relación inexistente con nosotros ni perjudique su imagen.</p>
<h2>8. Protección de datos y cookies</h2>
<p>El tratamiento de datos personales se rige por nuestra <a href="/politica-privacitat/?l=es">política de privacidad</a>, y el uso de cookies por la <a href="/politica-cookies/?l=es">política de cookies</a>.</p>
<h2>9. Legislación aplicable y jurisdicción</h2>
<p>Este aviso legal se rige por la legislación española. Si eres consumidor, cualquier controversia se resolverá ante los juzgados y tribunales de tu domicilio; en los demás casos, ante los del domicilio social del titular, con renuncia a cualquier otro fuero que pudiera corresponder.</p>
<h2>10. Modificaciones</h2>
<p>Podemos modificar este aviso legal cuando sea necesario para adaptarlo a cambios legales o del sitio. La versión vigente es siempre la publicada en esta página.</p>` },
  en: { title: 'Legal notice', html: `
<p class="upd">Last updated: ${TIT.actualitzat.en}</p>
<h2>1. Identification details</h2>
<p>In accordance with Article 10 of Spanish Law 34/2002 of 11 July on information society services and electronic commerce (LSSI-CE), the owner of this website is:</p>
${idt(['Company name','Tax ID (NIF)','Registered address','Commercial register','Contact','Website'])}
<h2>2. Purpose and acceptance</h2>
<p>This website provides information about CoLiving Terrassa (room rentals in shared flats in Terrassa and management services for property owners) and makes it easy to contact us. Browsing and using the website means you accept this legal notice. If you do not agree, please do not use the website.</p>
<h2>3. Terms of use</h2>
<p>You agree to use the website lawfully, in good faith and without harming the rights or interests of third parties. In particular, you must not enter false data or data belonging to others without their permission in the forms, attempt to access restricted areas or interfere with the operation of the website, or use it to send advertising or unsolicited communications.</p>
<h2>4. Information about rooms and flats</h2>
<p>The information about flats, rooms, prices, availability and conditions shown on the website is indicative and may change without notice. Photographs and descriptions are illustrative. Nothing published on the website is a binding contractual offer: a room is only reserved or rented under a written contract. To confirm availability and up-to-date conditions, please contact us.</p>
<h2>5. Intellectual and industrial property</h2>
<p>The contents of the website (texts, photographs, images, logo, brand, design and code) belong to ${TIT.nom} or are used under licence, and are protected by intellectual and industrial property law. Reproduction, distribution, public communication or modification without the owner's express written authorisation is prohibited, except for the personal, non-commercial use the law allows.</p>
<h2>6. Liability</h2>
<p>We make reasonable efforts to keep the information on the website correct and up to date, but we do not guarantee that it is error-free or that the service will always be available. To the extent permitted by law, ${TIT.nom} is not liable for damage arising from the use of the website, technical interruptions, viruses or errors in the information. This limitation does not affect the rights that consumer law grants to users.</p>
<h2>7. Links</h2>
<p>The website may contain links to third-party sites (for example Google or Instagram). We do not control those sites and are not responsible for their content or privacy policies. Anyone may link to our website provided they do not suggest a relationship with us that does not exist or harm our image.</p>
<h2>8. Data protection and cookies</h2>
<p>Personal data is processed in accordance with our <a href="/politica-privacitat/?l=en">privacy policy</a>, and cookies are governed by our <a href="/politica-cookies/?l=en">cookie policy</a>.</p>
<h2>9. Applicable law and jurisdiction</h2>
<p>This legal notice is governed by Spanish law. If you are a consumer, any dispute will be resolved by the courts of your place of residence; in all other cases, by the courts of the owner's registered address, waiving any other jurisdiction that might apply.</p>
<h2>10. Changes</h2>
<p>We may change this legal notice when necessary to reflect legal changes or changes to the website. The version in force is always the one published on this page.</p>` }
};
