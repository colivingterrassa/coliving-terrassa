// Google Analytics 4 amb Consent Mode v2: no es carrega fins que el visitant accepta les cookies d'anàlisi.
// Es fa servir a la portada i a totes les pàgines noves (un únic lloc on editar-ho).
export const GA_SNIPPET = String.raw`
/* Google Analytics 4: no es carrega fins que el visitant accepta les cookies d'anàlisi */
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted'});
window.ckLoadGA=function(){
  if(window.__gaOn) return; window.__gaOn=true;
  window['ga-disable-G-MXHGDY7B17']=false;
  var s=document.createElement('script'); s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id=G-MXHGDY7B17';
  document.head.appendChild(s);
  gtag('js',new Date());
  gtag('consent','update',{analytics_storage:'granted'});
  gtag('config','G-MXHGDY7B17');
};
/* Esdeveniments de conversió: només s'envien si l'usuari ha acceptat les cookies d'anàlisi */
window.ctTrack=function(n,p){try{if(window.__gaOn&&window['ga-disable-G-MXHGDY7B17']!==true)gtag('event',n,p||{});}catch(e){}};
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href]'); if(!a) return;
  var h=a.getAttribute('href')||'';
  if(h.indexOf('tel:')===0) ctTrack('click_phone',{link_url:h});
  else if(h.indexOf('mailto:')===0) ctTrack('click_email',{link_url:h});
  else if(h.indexOf('instagram.com')>-1) ctTrack('click_instagram',{link_url:h});
  else if(h.indexOf('g.page/r/')>-1) ctTrack('click_google_review',{link_url:h});
  else if(h.indexOf('google.com/maps?cid=')>-1) ctTrack('click_google_profile',{link_url:h});
});
try{var __o=JSON.parse(localStorage.getItem('ct_consent')||'null');
if(__o&&__o.v==='all'&&Date.now()-__o.t<365*864e5){window.ckLoadGA();}}catch(e){}
`;
