// Entorn de cada barri (serveis i vida de barri). Editar aquí. Temps aproximats a peu des del pis.
export const ENTORN={
 'Sant Pere':{
  vibe:{ca:"Sant Pere és el barri històric al nord del centre, a l'altra banda del Parc de Vallparadís. Conserva l'ambient de poble amb comerç de tota la vida, terrasses tranquil·les i molt poc trànsit, però tens el centre a un quart d'hora caminant.",
        es:"Sant Pere es el barrio histórico al norte del centro, al otro lado del Parc de Vallparadís. Conserva el ambiente de pueblo con comercio de toda la vida, terrazas tranquilas y muy poco tráfico, pero tienes el centro a un cuarto de hora andando.",
        en:"Sant Pere is the historic district north of the centre, on the far side of Parc de Vallparadís. It keeps a village feel with long-standing local shops, quiet terraces and very little traffic, yet the centre is a fifteen-minute walk away."},
  cats:[
   {k:'transport',ic:'🚆',items:[
    {n:'FGC Terrassa · Estació del Nord',t:'10 min',d:{ca:'Línia S1 cap a Barcelona Pl. Catalunya',es:'Línea S1 hacia Barcelona Pl. Catalunya',en:'S1 line to Barcelona Pl. Catalunya'}},
    {n:'Renfe R4 · Terrassa',t:'12 min',d:{ca:'Rodalies cap a Barcelona i Manresa',es:'Cercanías hacia Barcelona y Manresa',en:'Commuter rail to Barcelona and Manresa'}},
    {n:{ca:'Parada de bus urbà',es:'Parada de bus urbano',en:'City bus stop'},t:'2 min',d:{ca:'Connexió directa amb el campus UPC',es:'Conexión directa con el campus UPC',en:'Direct link to the UPC campus'}}]},
   {k:'educacio',ic:'🎓',items:[
    {n:'UPC · Campus de Terrassa (ESEIAAT)',t:'15 min',d:{ca:'Enginyeries industrial, aeroespacial i audiovisual',es:'Ingenierías industrial, aeroespacial y audiovisual',en:'Industrial, aerospace and audiovisual engineering'}},
    {n:{ca:'Biblioteca del Districte',es:'Biblioteca del Distrito',en:'District library'},t:'6 min',d:{ca:'Sales d\'estudi obertes fins al vespre',es:'Salas de estudio abiertas hasta la noche',en:'Study rooms open until evening'}}]},
   {k:'salut',ic:'🏥',items:[
    {n:'Hospital Universitari MútuaTerrassa',t:'14 min',d:{ca:'Urgències 24 h · Pl. Doctor Robert, 5',es:'Urgencias 24 h · Pl. Doctor Robert, 5',en:'24-hour A&E · Pl. Doctor Robert, 5'}},
    {n:{ca:'CAP de referència',es:'CAP de referencia',en:'Local health centre'},t:'7 min',d:{ca:'Atenció primària i farmàcia al costat',es:'Atención primaria y farmacia al lado',en:'Primary care with a pharmacy next door'}}]},
   {k:'compres',ic:'🛒',items:[
    {n:{ca:'Comerç de proximitat del barri',es:'Comercio de proximidad del barrio',en:'Local neighbourhood shops'},t:'2 min',d:{ca:'Forn, fruiteria i supermercat al mateix carrer',es:'Panadería, frutería y supermercado en la misma calle',en:'Bakery, greengrocer and supermarket on the same street'}},
    {n:'Mercat de la Independència',t:'13 min',d:{ca:'Mercat modernista amb parades de fresc',es:'Mercado modernista con paradas de fresco',en:'Modernist market hall with fresh produce'}}]},
   {k:'parcs',ic:'🌳',items:[
    {n:'Parc de Vallparadís',t:'5 min',d:{ca:'Un dels parcs urbans més grans de Catalunya',es:'Uno de los parques urbanos más grandes de Cataluña',en:'One of the largest urban parks in Catalonia'}},
    {n:{ca:'Zona esportiva municipal',es:'Zona deportiva municipal',en:'Municipal sports area'},t:'9 min',d:{ca:'Pistes obertes i gimnàs municipal',es:'Pistas abiertas y gimnasio municipal',en:'Open courts and a municipal gym'}}]},
   {k:'cultura',ic:'🎭',items:[
    {n:'mNACTEC · Vapor Aymerich',t:'12 min',d:{ca:'Museu de la Ciència i la Tècnica, icona modernista',es:'Museo de la Ciencia y la Técnica, icono modernista',en:'Science and Technology Museum, a modernist landmark'}},
    {n:{ca:'Bars i terrasses del barri',es:'Bares y terrazas del barrio',en:'Neighbourhood bars and terraces'},t:'3 min',d:{ca:'Ambient tranquil, molt de veïnat',es:'Ambiente tranquilo, muy de vecindario',en:'Relaxed, very local atmosphere'}}]}]},

 'Centre':{
  vibe:{ca:"Viure al Centre vol dir tenir-ho tot a peu: el mercat, les botigues, els cinemes, els bars i les dues estacions de tren. És la zona amb més vida del dia i de nit, i la millor opció si no vols dependre del transport per a res.",
        es:"Vivir en el Centre significa tenerlo todo a pie: el mercado, las tiendas, los cines, los bares y las dos estaciones de tren. Es la zona con más vida de día y de noche, y la mejor opción si no quieres depender del transporte para nada.",
        en:"Living in the Centre means having everything on foot: the market, the shops, the cinemas, the bars and both train stations. It is the liveliest area day and night, and the best choice if you would rather not rely on transport at all."},
  cats:[
   {k:'transport',ic:'🚆',items:[
    {n:'FGC Terrassa · Rambla',t:'4 min',d:{ca:'Línia S1 · Barcelona Pl. Catalunya en ~50 min',es:'Línea S1 · Barcelona Pl. Catalunya en ~50 min',en:'S1 line · Barcelona Pl. Catalunya in ~50 min'}},
    {n:'FGC Vallparadís Universitat',t:'8 min',d:{ca:'Parada directa per al campus de la UPC',es:'Parada directa para el campus de la UPC',en:'Direct stop for the UPC campus'}},
    {n:'Renfe R4 · Terrassa',t:'9 min',d:{ca:'Rodalies cap a Barcelona i Manresa',es:'Cercanías hacia Barcelona y Manresa',en:'Commuter rail to Barcelona and Manresa'}}]},
   {k:'educacio',ic:'🎓',items:[
    {n:'UPC · Campus de Terrassa (ESEIAAT)',t:'12 min',d:{ca:'C/ Colom, 1 · també amb FGC en una parada',es:'C/ Colom, 1 · también con FGC en una parada',en:'C/ Colom, 1 · also one FGC stop away'}},
    {n:'Biblioteca Central de Terrassa',t:'6 min',d:{ca:'Sales d\'estudi, wifi i horari ampliat en exàmens',es:'Salas de estudio, wifi y horario ampliado en exámenes',en:'Study rooms, Wi-Fi and extended hours during exams'}}]},
   {k:'salut',ic:'🏥',items:[
    {n:'Hospital Universitari MútuaTerrassa',t:'8 min',d:{ca:'Urgències 24 h · Pl. Doctor Robert, 5',es:'Urgencias 24 h · Pl. Doctor Robert, 5',en:'24-hour A&E · Pl. Doctor Robert, 5'}},
    {n:{ca:'Farmàcies de guàrdia',es:'Farmacias de guardia',en:'Duty pharmacies'},t:'2 min',d:{ca:'Diverses farmàcies a la Rambla',es:'Varias farmacias en la Rambla',en:'Several pharmacies along the Rambla'}}]},
   {k:'compres',ic:'🛒',items:[
    {n:'Mercat de la Independència',t:'5 min',d:{ca:'Mercat modernista, fresc cada matí',es:'Mercado modernista, fresco cada mañana',en:'Modernist market hall, fresh produce every morning'}},
    {n:{ca:'Eix comercial Rambla d\'Ègara',es:'Eje comercial Rambla d\'Ègara',en:'Rambla d\'Ègara shopping area'},t:'3 min',d:{ca:'Botigues, cafeteries i supermercats',es:'Tiendas, cafeterías y supermercados',en:'Shops, cafés and supermarkets'}}]},
   {k:'parcs',ic:'🌳',items:[
    {n:'Parc de Vallparadís',t:'8 min',d:{ca:'Passejos, circuit de running i llac',es:'Paseos, circuito de running y lago',en:'Walking paths, a running circuit and a lake'}},
    {n:{ca:'Places del nucli antic',es:'Plazas del casco antiguo',en:'Old-town squares'},t:'2 min',d:{ca:'Terrasses i mercats ambulants els caps de setmana',es:'Terrazas y mercadillos los fines de semana',en:'Terraces and weekend street markets'}}]},
   {k:'cultura',ic:'🎭',items:[
    {n:{ca:'Teatre Principal i cinemes',es:'Teatre Principal y cines',en:'Teatre Principal and cinemas'},t:'5 min',d:{ca:'Programació estable tot l\'any',es:'Programación estable todo el año',en:'Year-round programming'}},
    {n:{ca:'Ruta modernista de Terrassa',es:'Ruta modernista de Terrassa',en:'Terrassa modernist trail'},t:'4 min',d:{ca:'Masia Freixa i edificis de Lluís Muncunill',es:'Masia Freixa y edificios de Lluís Muncunill',en:'Masia Freixa and buildings by Lluís Muncunill'}}]}]},

 "Ca n'Aurell":{
  vibe:{ca:"Ca n'Aurell és el barri residencial per excel·lència de Terrassa: carrers amples, molts arbres i un comerç de barri molt viu. És tranquil i familiar, amb bona connexió a peu tant amb el centre com amb el campus universitari.",
        es:"Ca n'Aurell es el barrio residencial por excelencia de Terrassa: calles anchas, muchos árboles y un comercio de barrio muy vivo. Es tranquilo y familiar, con buena conexión a pie tanto con el centro como con el campus universitario.",
        en:"Ca n'Aurell is Terrassa's residential district par excellence: wide streets, plenty of trees and a thriving local high street. It is quiet and family-oriented, within easy walking distance of both the centre and the university campus."},
  cats:[
   {k:'transport',ic:'🚆',items:[
    {n:'FGC Terrassa · Rambla',t:'11 min',d:{ca:'Línia S1 cap a Barcelona Pl. Catalunya',es:'Línea S1 hacia Barcelona Pl. Catalunya',en:'S1 line to Barcelona Pl. Catalunya'}},
    {n:'FGC Terrassa · Nacions Unides',t:'9 min',d:{ca:'Final de línia, sempre trobes seient',es:'Final de línea, siempre encuentras asiento',en:'End of the line, you always get a seat'}},
    {n:{ca:'Bus urbà línia de barri',es:'Bus urbano línea de barrio',en:'Neighbourhood bus route'},t:'3 min',d:{ca:'Connecta amb el centre en 10 minuts',es:'Conecta con el centro en 10 minutos',en:'Reaches the centre in 10 minutes'}}]},
   {k:'educacio',ic:'🎓',items:[
    {n:'UPC · Campus de Terrassa (ESEIAAT)',t:'18 min',d:{ca:'A peu, o 8 minuts en bus',es:'A pie, o 8 minutos en bus',en:'On foot, or 8 minutes by bus'}},
    {n:{ca:'Biblioteca de barri',es:'Biblioteca de barrio',en:'Neighbourhood library'},t:'5 min',d:{ca:'Molt poc concorreguda en època d\'exàmens',es:'Muy poco concurrida en época de exámenes',en:'Rarely crowded during exam season'}}]},
   {k:'salut',ic:'🏥',items:[
    {n:'Hospital Universitari MútuaTerrassa',t:'12 min',d:{ca:'Urgències 24 h · Pl. Doctor Robert, 5',es:'Urgencias 24 h · Pl. Doctor Robert, 5',en:'24-hour A&E · Pl. Doctor Robert, 5'}},
    {n:{ca:'CAP Ca n\'Aurell',es:'CAP Ca n\'Aurell',en:'Ca n\'Aurell health centre'},t:'5 min',d:{ca:'Atenció primària del barri',es:'Atención primaria del barrio',en:'Neighbourhood primary care'}}]},
   {k:'compres',ic:'🛒',items:[
    {n:{ca:'Eix comercial de Ca n\'Aurell',es:'Eje comercial de Ca n\'Aurell',en:'Ca n\'Aurell high street'},t:'3 min',d:{ca:'Supermercats, forns i botigues de barri',es:'Supermercados, panaderías y tiendas de barrio',en:'Supermarkets, bakeries and local shops'}},
    {n:'Mercat de la Independència',t:'14 min',d:{ca:'Producte fresc al centre de la ciutat',es:'Producto fresco en el centro de la ciudad',en:'Fresh produce in the city centre'}}]},
   {k:'parcs',ic:'🌳',items:[
    {n:{ca:'Places i zones verdes del barri',es:'Plazas y zonas verdes del barrio',en:'Neighbourhood squares and green spaces'},t:'2 min',d:{ca:'Carrers amb arbrat i places amb bancs',es:'Calles con arbolado y plazas con bancos',en:'Tree-lined streets and squares with benches'}},
    {n:'Parc de Vallparadís',t:'15 min',d:{ca:'El gran pulmó verd de Terrassa',es:'El gran pulmón verde de Terrassa',en:'Terrassa\'s great green lung'}}]},
   {k:'cultura',ic:'🎭',items:[
    {n:{ca:'Centre cívic del barri',es:'Centro cívico del barrio',en:'Neighbourhood civic centre'},t:'6 min',d:{ca:'Tallers, idiomes i activitats obertes',es:'Talleres, idiomas y actividades abiertas',en:'Workshops, language classes and open activities'}},
    {n:{ca:'Festa Major de Ca n\'Aurell',es:'Fiesta Mayor de Ca n\'Aurell',en:'Ca n\'Aurell street festival'},t:'—',d:{ca:'Una de les més participatives de la ciutat',es:'Una de las más participativas de la ciudad',en:'One of the most popular in the city'}}]}]},

 'Can Palet':{
  vibe:{ca:"Can Palet és un barri residencial i molt pràctic per a estudiants: al sud del centre, a tocar de la zona universitària i de l'estació de Vallparadís Universitat. Carrers amples, comerç de barri i el gran centre comercial Parc Vallès a la porta de casa.",
        es:"Can Palet es un barrio residencial y muy práctico para estudiantes: al sur del centro, junto a la zona universitaria y a la estación de Vallparadís Universitat. Calles anchas, comercio de barrio y el gran centro comercial Parc Vallès a la puerta de casa.",
        en:"Can Palet is a residential district that works especially well for students: south of the centre, right next to the university area and the Vallparadís Universitat station. Wide streets, local shops and the large Parc Vallès shopping centre on your doorstep."},
  cats:[
   {k:'transport',ic:'🚆',items:[
    {n:'FGC/Renfe · Vallparadís Universitat',t:'5 min',d:{ca:'Estació compartida FGC i Renfe, a tocar del campus',es:'Estación compartida FGC y Renfe, junto al campus',en:'Shared FGC and Renfe station, right by the campus'}},
    {n:{ca:'Bus urbà',es:'Bus urbano',en:'City bus'},t:'3 min',d:{ca:'Diverses línies cap al centre i altres barris',es:'Varias líneas hacia el centro y otros barrios',en:'Several routes to the centre and other districts'}}]},
   {k:'educacio',ic:'🎓',items:[
    {n:'UPC · Campus de Terrassa',t:'5 min',d:{ca:'A peu des de la zona universitària del barri',es:'A pie desde la zona universitaria del barrio',en:"Walking distance from the district's university area"}},
    {n:{ca:'Escoles i instituts del barri',es:'Colegios e institutos del barrio',en:'Local schools'},t:'8 min',d:{ca:'Diversos centres públics a Can Palet',es:'Varios centros públicos en Can Palet',en:'Several state schools in Can Palet'}}]},
   {k:'salut',ic:'🏥',items:[
    {n:'CAP Terrassa Sud',t:'6 min',d:{ca:'Centre d\'atenció primària de referència del barri',es:'Centro de atención primaria de referencia del barrio',en:"The district's primary healthcare centre"}},
    {n:'Hospital Universitari MútuaTerrassa',t:'15 min',d:{ca:'Urgències 24 h, en bus o FGC',es:'Urgencias 24 h, en bus o FGC',en:'24-hour A&E, reachable by bus or FGC'}}]},
   {k:'compres',ic:'🛒',items:[
    {n:'Centre Comercial Parc Vallès',t:'7 min',d:{ca:'Supermercat, botigues i restaurants sota un mateix sostre',es:'Supermercado, tiendas y restaurantes bajo un mismo techo',en:'Supermarket, shops and restaurants all under one roof'}},
    {n:{ca:'Comerç de proximitat',es:'Comercio de proximidad',en:'Local neighbourhood shops'},t:'2 min',d:{ca:'Forn, fruiteria i petit comerç al carrer',es:'Panadería, frutería y pequeño comercio en la calle',en:'Bakery, greengrocer and small shops on the street'}}]},
   {k:'parcs',ic:'🌳',items:[
    {n:{ca:'Plaça Can Palet i zones verdes properes',es:'Plaza Can Palet y zonas verdes cercanas',en:'Plaça Can Palet and nearby green spaces'},t:'4 min',d:{ca:'Espai públic on es fan les festes del barri',es:'Espacio público donde se celebran las fiestas del barrio',en:'Public square where the neighbourhood festivities take place'}},
    {n:'Parc de Vallparadís',t:'12 min',d:{ca:'El gran parc urbà de Terrassa, a un pas caminant',es:'El gran parque urbano de Terrassa, a un paso andando',en:"Terrassa's great urban park, an easy walk away"}}]},
   {k:'cultura',ic:'🎭',items:[
    {n:'Centre Cívic Municipal Alcalde Morera',t:'4 min',d:{ca:'A la plaça Can Palet, activitats i tallers de barri',es:'En la plaza Can Palet, actividades y talleres de barrio',en:'On Plaça Can Palet, with neighbourhood activities and workshops'}},
    {n:{ca:'Vida universitària del barri',es:'Vida universitaria del barrio',en:"The district's student life"},t:'5 min',d:{ca:'Bars i cafeteries amb ambient d\'estudiants',es:'Bares y cafeterías con ambiente de estudiantes',en:'Bars and cafés with a student atmosphere'}}]}]},

 'Vallparadís':{
  vibe:{ca:"Viure a Vallparadís vol dir tenir el parc urbà més gran de Catalunya com a jardí de casa. És una zona verda i tranquil·la, a poca distància del centre i de la zona universitària, amb el museu i el castell del parc com a veïns.",
        es:"Vivir en Vallparadís significa tener el parque urbano más grande de Cataluña como jardín de casa. Es una zona verde y tranquila, a poca distancia del centro y de la zona universitaria, con el museo y el castillo del parque como vecinos.",
        en:"Living in Vallparadís means having Catalonia's largest urban park as your own back garden. It's a green, quiet area within easy reach of both the centre and the university district, with the park's museum and castle right next door."},
  cats:[
   {k:'transport',ic:'🚆',items:[
    {n:'FGC/Renfe · Vallparadís Universitat',t:'8 min',d:{ca:'Estació compartida FGC i Renfe',es:'Estación compartida FGC y Renfe',en:'Shared FGC and Renfe station'}},
    {n:'FGC Terrassa · Rambla',t:'10 min',d:{ca:'Línia S1 cap a Barcelona Pl. Catalunya',es:'Línea S1 hacia Barcelona Pl. Catalunya',en:'S1 line to Barcelona Pl. Catalunya'}}]},
   {k:'educacio',ic:'🎓',items:[
    {n:'UPC · Campus de Terrassa (ESEIAAT)',t:'10 min',d:{ca:'Enginyeries industrial, aeroespacial i audiovisual',es:'Ingenierías industrial, aeroespacial y audiovisual',en:'Industrial, aerospace and audiovisual engineering'}},
    {n:'Biblioteca Pere Roca',t:'6 min',d:{ca:'Dins del parc, sales d\'estudi amb llum natural',es:'Dentro del parque, salas de estudio con luz natural',en:'Inside the park, study rooms with natural light'}}]},
   {k:'salut',ic:'🏥',items:[
    {n:'Hospital Universitari MútuaTerrassa',t:'10 min',d:{ca:'Urgències 24 h · Pl. Doctor Robert, 5',es:'Urgencias 24 h · Pl. Doctor Robert, 5',en:'24-hour A&E · Pl. Doctor Robert, 5'}},
    {n:{ca:'CAP de referència',es:'CAP de referencia',en:'Local health centre'},t:'9 min',d:{ca:'Atenció primària a prop del parc',es:'Atención primaria cerca del parque',en:'Primary care close to the park'}}]},
   {k:'compres',ic:'🛒',items:[
    {n:{ca:'Comerç de proximitat',es:'Comercio de proximidad',en:'Local neighbourhood shops'},t:'5 min',d:{ca:'Botigues i supermercats als carrers propers al parc',es:'Tiendas y supermercados en las calles cercanas al parque',en:'Shops and supermarkets on the streets around the park'}},
    {n:'Mercat de la Independència',t:'11 min',d:{ca:'Mercat modernista amb parades de fresc',es:'Mercado modernista con paradas de fresco',en:'Modernist market hall with fresh produce'}}]},
   {k:'parcs',ic:'🌳',items:[
    {n:'Parc de Vallparadís',t:'1 min',d:{ca:'Més de 395.000 m² de zona verda enmig de la ciutat',es:'Más de 395.000 m² de zona verde en medio de la ciudad',en:'Over 395,000 m² of green space right in the middle of the city'}},
    {n:{ca:'Circuit de running i zones esportives',es:'Circuito de running y zonas deportivas',en:'Running circuit and sports areas'},t:'2 min',d:{ca:'Pistes i camins dins del mateix parc',es:'Pistas y caminos dentro del mismo parque',en:'Courts and paths within the park itself'}}]},
   {k:'cultura',ic:'🎭',items:[
    {n:'Museu Tèxtil de Terrassa',t:'7 min',d:{ca:'Col·lecció tèxtil dins del recinte del parc',es:'Colección textil dentro del recinto del parque',en:'Textile collection within the park grounds'}},
    {n:'Castell Cartoixa de Vallparadís',t:'3 min',d:{ca:'Antic castell medieval, seu del Museu de Terrassa',es:'Antiguo castillo medieval, sede del Museu de Terrassa',en:'A medieval castle, home to the Museu de Terrassa'}}]}]}
};
