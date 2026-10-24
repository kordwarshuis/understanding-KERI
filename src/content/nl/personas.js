export const personas = [
  {
    id: "parent",
    name: "Maya",
    role: "Bezorgde ouder",
    worry: "Wie heeft de sleutels van de namen van mijn gezin?",
    blurb:
      "Je wilt dat het internet je kind kent als een persoon, niet als een profiel dat een bedrijf kan verkopen of kwijtraken.",
    accent: "#c46b4a",
    lessons: [
      {
        id: "why",
        title: "Waarom dit een vraag voor het gezin is",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Een schoolportaal, een zorglogin, „Inloggen met Google”: dat zijn identificatiecodes die iemand anders heeft uitgegeven. Ze wijzen naar je kind. Ze zijn je kind niet. De aanbieder kan ze resetten, inzien of uitzetten.",
          },
          {
            kind: "p",
            text: "KERI scheidt drie dingen die de essays steeds door elkaar zien lopen. Identiteit is de persoon. Een identificatiecode is een naam die naar die persoon wijst. Een attestatie is een uitspraak — hier ingeschreven, oud genoeg voor dit uitje — over die naam. De autonomic identifier, de zelfbesturende naam, is de naam die je gezin kan houden. Scholen en klinieken kunnen nog steeds attesteren. Ze hoeven de naam niet te bezitten om dat te doen.",
          },
          {
            kind: "pair",
            leftTitle: "Wat je nu hebt",
            left: "Niet jouw sleutels, niet jouw identificatiecode. Een wachtwoordreset is een beheerder die beslist dat de naam nog steeds je kind betekent. Als die instantie het mis heeft, of het feit verkoopt dat er iets gebeurde, kun je meestal niet bewijzen wie er sprak.",
            rightTitle: "Wat KERI verandert",
            right: "De naam is afgeleid van sleutels die jij houdt. Het wisselen van de sleutels verandert de naam niet. Een latere attestatie kan zeggen „deze naam is dit kind”, zonder dat het platform de vertrouwensbasis is.",
          },
          {
            kind: "note",
            title: "Een nuchtere grens",
            text: "KERI voedt je kind niet op, en het houdt niet tegen dat iemand in een bericht liegt. Het maakt van een gestolen sleutel een gepubliceerde, herstelbare gebeurtenis, en het maakt „wij zijn de enige kopie van wie je bent” overbodig. Samuel Smith is onverbloemd over een verwante grens: je kunt sterke authenticiteit en vertrouwelijkheid hebben tegenover vreemden, en toch geen perfecte privacy tegenover iemand met wie je echt te maken hebt. Het doel is dat een derde, die nooit in de kamer was, de relatie niet kan hergebruiken.",
          },
        ],
      },
      {
        id: "what",
        title: "Wat KERI is, in gewone taal",
        minutes: 5,
        blocks: [
          {
            kind: "lead",
            text: "KERI betekent Key Event Receipt Infrastructure: infrastructuur voor ontvangstbewijzen van sleutelgebeurtenissen. Je spreekt het uit als de naam Carrie. Het is een protocol, geen app, en geen blockchain waar je lid van wordt. De naam die lang meegaat is een autonomic identifier — een AID. Autonomic betekent zelfbesturend.",
          },
          {
            kind: "p",
            text: "De AID ontstaat als je de eerste sleutelgebeurtenis ondertekent. Een logboek van sleutelgebeurtenissen legt vast wat er daarna gebeurt. Wie een gebeurtenis ontvangt, kan een ontvangstbewijs ondertekenen: „ik zag deze versie.” Daardoor hebben beide kanten later iets om te laten zien. Smith zegt het zo: het heet niet voor niets infrastructuur voor ontvangstbewijzen.",
          },
          {
            kind: "list",
            title: "Vijf momenten, in taal voor een gezin",
            items: [
              "Ontstaan: de naam wordt gemaakt uit sleutels die jij houdt.",
              "Pre-rotatie: de volgende sleutel wordt als hash beloofd, en kan ergens anders staan dan op de telefoon.",
              "Rotatie: de sleutel van vandaag gaat buiten gebruik. De naam blijft.",
              "Delegatie: een ouder of voogd krijgt een bewijsbare, beperkte bevoegdheid — een eigen naam, niet een kopie van de sleutels van het kind.",
              "Intrekking: een bevoegdheid eindigt als een gebeurtenis die iedereen kan afspelen. Dat geldt ook voor het opgeven van de naam zelf.",
            ],
          },
          {
            kind: "words",
            ids: ["keri", "aid", "kel"],
          },
        ],
      },
      {
        id: "how",
        title: "Als een sleutel wordt gestolen",
        minutes: 5,
        blocks: [
          {
            kind: "lead",
            text: "Stel dat de sleutel aan de schooltas wordt gekopieerd. Een gewoon account betekent een helpdesk. Is de naam alleen de vingerafdruk van een sleutel, dan zijn de naam en de gestolen sleutel hetzelfde ding, en geef je ze allebei op.",
          },
          {
            kind: "p",
            text: "KERI scheidt ondertekenen van herstel. De sleutel van vandaag ondertekent „ja, wij zijn het.” De volgende sleutel is alleen een hash in het logboek, en die reservesleutel hoort niet op diezelfde tas. Een dief die de gekopieerde sleutel gebruikt, moet een gebeurtenis publiceren. Getuigen die jij hebt gekozen, bewaren die publicatie. De schade duurt dus totdat jij het merkt en roteert — niet totdat een bedrijf je gelooft. Je toont de reservesleutel, stelt de gekopieerde sleutel buiten gebruik, en legt een nieuwe reservesleutel vast. Leraren kennen nog steeds dezelfde AID.",
          },
          {
            kind: "p",
            text: "De naam laten zien is niet het kind laten zien. Een ACDC kan bewijzen „oud genoeg voor dit uitje” of „hier ingeschreven”, en de geboortedatum, het adres en de foto achterhouden. Kan een kind de sleutels nog niet houden, dan geeft delegatie een ouder een verifieerbare voogdij. De identificatiecode van de ouder en die van het kind blijven verschillend, en de koppeling kan worden ingetrokken.",
          },
          {
            kind: "words",
            ids: ["prerotation", "delegation", "acdc", "ipex", "gdpr"],
          },
          {
            kind: "check",
            q: "Als Maya na een gestolen laptop roteert, wat gebeurt er dan met de AID van het gezin?",
            options: [
              {
                t: "Die moet weg, en elke school begint opnieuw.",
                ok: false,
              },
              {
                t: "De naam blijft. De gestolen sleutel verliest zijn bevoegdheid. Er wordt een nieuwe reservesleutel vastgelegd.",
                ok: true,
              },
              {
                t: "Een stemming op een blockchain beslist of het gezin nog bestaat.",
                ok: false,
              },
            ],
            explain:
              "Die bestendigheid is het punt van pre-rotatie. De identificatiecode leeft langer dan één sleutel.",
          },
        ],
      },
      {
        id: "next",
        title: "Wat je kunt vragen",
        minutes: 3,
        blocks: [
          {
            kind: "lead",
            text: "Je hoeft geen getuigenpool te draaien. Je hebt wel de woorden nodig voor het volgende portaal dat om een gezinslogin vraagt.",
          },
          {
            kind: "list",
            title: "Vragen die je een school, een kliniek of een app kunt stellen",
            items: [
              "Als we een telefoon kwijtraken, wie roteert de sleutels dan: wij, of jullie helpdesk?",
              "Waar staat de reservesleutel, als die niet op het apparaat van alledag staat?",
              "Kunnen jullie „ingeschreven” of „oud genoeg” controleren zonder de rest van het dossier te bewaren?",
              "Als een voogd verandert, is dat een intrekbare delegatie, of een gedeeld wachtwoord?",
              "Als jullie leverancier verdwijnt, blijft de identificatiecode dan bestaan, of zat die opgesloten in hun systeem?",
            ],
          },
          {
            kind: "note",
            title: "Loop het verhaal",
            text: "Het gedeelde verhaal op de haard, „Een naam die zijn sloten kan veranderen”, is hetzelfde idee, zonder functietitel.",
          },
        ],
      },
    ],
  },
  {
    id: "legal",
    name: "Elena",
    role: "Jurist",
    worry: "Wat houdt stand als bewijs?",
    blurb:
      "Je let op bevoegdheid, onloochenbaarheid, contracten, en of een digitale handeling aan het juiste rechtssubject kan worden toegeschreven.",
    accent: "#6d5a7a",
    lessons: [
      {
        id: "why",
        title: "Het toeschrijvingsprobleem",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Een handtekening is alleen zo sterk als het verhaal over welke sleutel wanneer gezaghebbend was, en of een tweede ondertekend verhaal het eerste kan vervangen zonder dat iemand dat ziet.",
          },
          {
            kind: "p",
            text: "De drie architecturen van Phil Windley, zoals de jargonteksen ze gebruiken: administratieve identiteit koppelt een naam aan een sleutel via een instantie — een certificaatautoriteit, een platformbeheerder. Die koppeling faalt als de instantie het mis heeft. Algoritmische identiteit koppelt de naam op een gedeeld grootboek. De koppeling is sterk, de geschiedenis is lastig te wissen, en de identificatiecode zit vast aan dat grootboek. Autonomische identiteit — zelfbesturend, en dat is KERI — legt de primaire vertrouwensbasis bij de controller, degene die de sleutels houdt. Het logboek van sleutelgebeurtenissen is secundair. Het is via een hashketen gekoppeld, en de partijen kunnen het zelf bijhouden.",
          },
          {
            kind: "p",
            text: "Een ontvangstbewijs is het deel dat een jurist niet mag overslaan. Smiths reden voor het woord is praktisch: beide kanten van een afspraak hebben een verifieerbaar verslag nodig van wat er is gezien, zodat er een rechtsmiddel is. Dupliciteit — twee inconsistente ondertekende geschiedenissen — is zelf het bewijs. Een korter logboek dat het langere niet tegenspreekt, is onvolledig, geen tweede verhaal. En een verouderde sleutel kan dat tweede verhaal niet verzinnen: een vervalst alternatief logboek komt aan het licht als dupliciteit. Compromittering van de huidige sleutel is anders, en beperkter. Wie die sleutel gebruikt, publiceert een gebeurtenis op infrastructuur die de controller heeft aangewezen. De blootstelling duurt tot je het merkt en roteert.",
          },
          {
            kind: "words",
            ids: ["duplicity", "receipt", "kel", "end"],
          },
        ],
      },
      {
        id: "what",
        title: "vLEI, ACDC, en het document",
        minutes: 5,
        blocks: [
          {
            kind: "lead",
            text: "GLEIF geeft verifieerbare identificatiecodes voor rechtspersonen uit, op KERI en ACDC’s. Een organisatie kan cryptografisch laten zien welke rechtspersoon spreekt, en welke rol bevoegd is om namens die rechtspersoon te spreken.",
          },
          {
            kind: "p",
            text: "Een ACDC is een verifieerbare credential met een strenger beveiligingsmodel: compact, koppelbaar, en het schema zit vast met een zelfadresserende identificatie, zodat het schema niet onder het document vandaan kan worden gewisseld. CESR laat hetzelfde bewijs bestaan als leesbare tekst en als binaire gegevens. Voor de praktijk is het punt eenvoudig. Je hebt geen tweede ceremonie nodig om te bewijzen dat het leesbare contract en de verzonden bytes hetzelfde zijn.",
          },
          {
            kind: "p",
            text: "IPEX is de uitwisseling. Wie gegevens deelt, kan een gedeeltelijk beeld plus voorwaarden aanbieden — een Ricardiaans contract in de stroom van credentials — en pas meer prijsgeven na overeenstemming. Vertrouwelijkheid via kettingkoppeling is bedoeld om die voorwaarden mee te geven aan de volgende ontvanger, niet alleen aan de eerste.",
          },
          {
            kind: "words",
            ids: ["vlei", "acdc", "cesr", "ipex", "said"],
          },
        ],
      },
      {
        id: "how",
        title: "Sleutels wisselen zonder de wereld opnieuw op papier te zetten",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "In veel systemen betekent het roteren van een ondertekeningssleutel dat elke uitstaande credential opnieuw moet worden uitgegeven. Zo vallen operationele beveiliging en juridische continuïteit uit elkaar.",
          },
          {
            kind: "p",
            text: "Een ACDC is verzegeld aan de sleutelstatus, via een transactielogboek dat verankerd is in het logboek van sleutelgebeurtenissen. Een latere rotatie herschrijft dat zegel niet, en maakt niet elke eerdere credential vanzelf ongeldig. Een verificateur speelt de instellingsgebeurtenissen af en controleert de sleutel die toen gezaghebbend was. De herstelsleutel was vóór het incident als hash vastgelegd, dus „we hebben na de inbreuk een nieuwe sleutel verzonnen” kan niet doorgaan voor de vooraf vastgelegde rotatie. Intrekking is een expliciete latere gebeurtenis. Tot die er is, spreekt het oude zegel nog over die dag.",
          },
          {
            kind: "note",
            title: "Wissing, en wat die niet belooft",
            text: "Er is geen enkel totaal geordend grootboek van ieders gebeurtenissen, dus de gegevens van een identificatiecode zijn niet structureel gedoemd om eeuwig te blijven bestaan. De Hitchhiker’s Guide en de KERI Foundation zien dat allebei als steun voor wissing. Als adviseur lees je nog steeds de concrete inrichting: getuigen, wederpartijen en leveranciers kunnen kopieën bewaren. Het protocol staat vergeten toe. Een contract misschien niet.",
          },
          {
            kind: "check",
            q: "Twee ondertekende sleutelgeschiedenissen voor dezelfde AID spreken elkaar tegen. Hoe heet dat in KERI?",
            options: [
              {
                t: "Een onschuldige synchronisatievertraging. Korter betekent altijd fout.",
                ok: false,
              },
              {
                t: "Dupliciteit: onloochenbaar bewijs van inconsistente geschiedenissen.",
                ok: true,
              },
              {
                t: "Niets, tenzij een door de rechter aangewezen certificaatautoriteit er één bevestigt.",
                ok: false,
              },
            ],
            explain:
              "Een logboek dat alleen korter is, kan onvolledig zijn. Een tegenstrijdige ondertekende versie is dupliciteit.",
          },
        ],
      },
      {
        id: "next",
        title: "Waar je daarna leest",
        minutes: 3,
        blocks: [
          {
            kind: "list",
            title: "De primaire uitleg achter dit pad",
            items: [
              "Hitchhiker’s Guide to KERI, deel 1 en 2 — waarom geen globaal grootboek, en AID, pre-rotatie, sleutelgebeurtenis, ontvangstbewijs.",
              "KERI-jargon, deel 1–3 — waaronder dupliciteit tegenover een logboek dat alleen onvolledig is.",
              "Security in KERI/ACDC — bewijs dat op de KEL steunt, en waarom een verouderde sleutel geen alternatieve geschiedenis kan vervalsen.",
              "GLEIF vLEI, en de ToIP-teksten voor KERI, ACDC en CESR v1.0, goedgekeurd op 21 januari 2026.",
            ],
          },
          {
            kind: "p",
            text: "Deze haard is een leeswijzer, geen juridisch advies, en niet de specificatie.",
          },
        ],
      },
    ],
  },
  {
    id: "policy",
    name: "Jonas",
    role: "Beleidsmaker",
    worry: "Beveiliging zonder een surveillancestaat op te bouwen",
    blurb:
      "Je krijgt de keuze voorgelegd tussen „volg iedereen” en „hoop dat inbreuken klein blijven”. KERI is een derde ontwerp.",
    accent: "#3f6f62",
    lessons: [
      {
        id: "why",
        title: "De scherpe keuze, zorgvuldig geformuleerd",
        minutes: 5,
        blocks: [
          {
            kind: "lead",
            text: "Samuel Smith, de bedenker van KERI, stelt een publieke vraag in reactie op waarschuwingen van de Five Eyes over AI en cyberdefensie. Als aanvallen sneller gaan dan mensen, beveiligen we de samenleving dan met voortdurende monitoring, of met verifieerbare bevoegdheid die bij mensen en organisaties blijft?",
          },
          {
            kind: "p",
            text: "Het antwoord van KERI is niet „geen identiteit”. Het is een identificatiecode waarvan de vertrouwensbasis de sleutels van de controller zijn. De controller is de persoon of organisatie die die sleutels houdt. Daarnaast zijn er attestaties, te controleren zonder een permanent gedragsdossier. Smith is preciezer dan de slogan. Hij zet authenticiteit en vertrouwelijkheid boven de poging om privacy voor altijd perfect te houden: wie met iemand te maken heeft, onthult die persoon al iets. Wat niet mag gebeuren, is dat een derde, die nooit in die relatie stond, die relatie uitbuit. Het werkbare paar noemt hij authenticiteit plus vertrouwelijkheid. Met gedoseerde openbaarmaking geef je zo weinig mogelijk prijs. Ontvangstbewijzen maken dat de handeling toerekenbaar blijft.",
          },
          {
            kind: "pair",
            leftTitle: "Vertrouwen in de vorm van surveillance",
            left: "Een centrale waarnemer moet genoeg zien, vaak genoeg, om te beslissen wie mag handelen. Een inbreuk bij die waarnemer is een inbreuk bij iedereen.",
            rightTitle: "Vertrouwen in de vorm van KERI",
            right: "Een verificateur controleert een bewijs. Nadat een server, een cloud, of zelfs een certificaatautoriteit is gecompromitteerd, staat de gezaghebbende sleutelstatus nog in logboeken die je kunt afspelen. Geheimen die nooit zijn getoond — de volgende sleutels — blijven het herstelpad.",
          },
          {
            kind: "note",
            title: "Utah en SEDI",
            text: "Publiek werk rond State-Endorsed Digital Identity — digitale identiteit die een staat bekrachtigt — waaronder het privacywerk in Utah en de SEDI-gesprekken van 2025 in dit materiaal, behandelt KERI als infrastructuur voor samenwerking tussen overheid en private partijen. De overheid kan bekrachtigen, zonder de database van ieders sleutels te worden.",
          },
        ],
      },
      {
        id: "what",
        title: "Wat je feitelijk zou onderschrijven",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Geen cryptovaluta, en geen nationale login. Een protocolsuite: KERI voor identificatiecodes en sleutelgeschiedenis, ACDC voor credentials, CESR zodat hetzelfde bewijs tekst of binair kan zijn. Om iets te vinden mag je gewone webadressen gebruiken. Die adressen zijn niet de vertrouwensbasis. Smith liet een vertrouwd discovery-netwerk vallen toen hij zag dat het ergste van een zoekactie is dat je niets vindt — want wat je wél vindt, moet nog steeds uit zichzelf te controleren zijn.",
          },
          {
            kind: "p",
            text: "Het blockchain-trilemma gaat over dubbele uitgave. Eén gedeeld, totaal geordend grootboek kan decentralisatie, beveiliging en schaal niet tegelijk maximaliseren. Nog een keer „dit zijn mijn sleutels” zeggen maakt geen tweede persoon, dus identiteit heeft die consensus niet nodig. KERI kan een keten nog steeds als getuige gebruiken. De identificatiecode wordt daar niet geboren, en zit daar niet aan vast. De weg van administratieve namen, naar namen die aan een grootboek vastzitten, naar zelfbesturende namen is de beleidsgeschiedenis in deze teksten. Wie „gedecentraliseerde identiteit” onderschrijft zonder te zeggen wie de rotatiebevoegdheid heeft, glijdt terug naar de eerste van die drie.",
          },
          {
            kind: "list",
            title: "Eigenschappen die bij beleidsdoelen passen",
            items: [
              "Overdraagbaarheid: geen lock-in op een grootboek als een leverancier of een keten uitvalt.",
              "Wissing: persoonsgegevens hoeven niet op één globaal geordend grootboek te staan.",
              "Herstel: een gestolen ondertekeningssleutel wordt gepubliceerd, is zichtbaar, en is te roteren. De reserve was vastgelegd vóór de diefstal.",
              "Toerekening: dupliciteit is bewijs. Een verouderde sleutel kan de officiële geschiedenis niet stilletjes vervangen.",
              "Evenredigheid: gedoseerde openbaarmaking, in plaats van alles of niets delen.",
            ],
          },
        ],
      },
      {
        id: "how",
        title: "Invoeren zonder te doen alsof het af is",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "De eerlijke stand in deze bronnen: de vLEI van GLEIF is echt in gebruik. Het doel van de KERI Foundation zelf is nog steeds infrastructuur in één klik — wallet, witness, watcher, web, wizard — omdat mensen de machinerie niet hoeven te begrijpen om veilig te zijn.",
          },
          {
            kind: "p",
            text: "Op 21 januari 2026 keurde de stuurgroep van Trust Over IP de specificaties van KERI, ACDC en CESR goed, als v1.0. Dat is een mijlpaal voor de standaard, geen verplichting. HealthKERI, werk aan fraude bij kaartschema’s en telecom, en platforms voor zakelijke credentials laten het patroon zien. Gereguleerde sectoren willen verifieerbare rollen, liever dan nog een login.",
          },
          {
            kind: "p",
            text: "Beleid dat zegt „gebruik gedecentraliseerde identiteit”, zonder te zeggen wie de rotatiebevoegdheid heeft, bouwt administratieve PKI opnieuw, met extra stappen. De vraag voor de leidraad: na een inbreuk bij de exploitant, wat blijft betrouwbaar, en wie kan roteren?",
          },
          {
            kind: "check",
            q: "Waarom zeggen deze bronnen dat identiteit de consensus van een blockchain kan overslaan?",
            options: [
              {
                t: "Omdat blockchains voor overheden verboden zijn.",
                ok: false,
              },
              {
                t: "Omdat identiteit geen bescherming tegen dubbele uitgave nodig heeft. Ze heeft een consistente sleutelgeschiedenis nodig.",
                ok: true,
              },
              {
                t: "Omdat KERI helemaal geen gegevens kan opslaan.",
                ok: false,
              },
            ],
            explain:
              "KERI kan gegevens verankeren, en kan zelfs een keten als getuige gebruiken. Het weigert om globale consensus tot vertrouwensbasis te maken.",
          },
        ],
      },
      {
        id: "next",
        title: "Een korte notitie die je kunt doorsturen",
        minutes: 3,
        blocks: [
          {
            kind: "note",
            title: "Eén alinea",
            text: "KERI is een gedecentraliseerd protocol voor sleutelbeheer, voor blijvende zelfcertificerende identificatiecodes. De zeggenschap ligt bij de controller, sleutelwijzigingen zijn via een hashketen gekoppeld en kunnen een ontvangstbewijs krijgen, en credentials (ACDC’s) laten zich gedoseerd prijsgeven. Het is zo ontworpen dat beveiliging, schaal en decentralisatie niet via een blockchain-trilemma tegen elkaar worden uitgeruild, en dat persoonsgegevens niet in één onuitwisbaar grootboek voor de hele wereld hoeven. Het toonaangevende voorbeeld in productie is de vLEI van GLEIF.",
          },
          {
            kind: "words",
            ids: ["keri", "gdpr", "vlei", "witness"],
          },
        ],
      },
    ],
  },
  {
    id: "developer",
    name: "Priya",
    role: "Ontwikkelaar",
    worry: "Waar bouw ik precies tegen?",
    blurb:
      "Je wilt de objecten, de vertrouwensgrenzen, en waar de code staat — zonder een aanloop van veertig pagina’s.",
    accent: "#b86b3d",
    lessons: [
      {
        id: "why",
        title: "De ontwerpbeperking",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "KERI is een DKMS: gedistribueerd sleutelbeheer voor identificatiecodes die langer moeten leven dan één sleutel. Samuel Smith beschreef het in 2019 en herzag het in 2021. De suite eromheen — ACDC, CESR, OOBI, IPEX — is wat mensen bedoelen als ze „KERI” in een reponaam zetten.",
          },
          {
            kind: "p",
            text: "Primaire vertrouwensbasis: de AID, uit entropie die de controller houdt. Secundair: de KEL, ontvangstbewijzen, getuigen. Een blockchain, als je die gebruikt, is ook secundair. Daarom kan een AID van het ene discovery-netwerk naar het andere verhuizen, zonder opnieuw geboren te worden.",
          },
          {
            kind: "list",
            title: "Wat je niet hoeft te bouwen",
            items: [
              "Een globale totale ordening van alle identiteiten.",
              "Een grootboek voor tokens. KERI is niet double-spend-proof, en is geen keten voor assets.",
              "Vertrouwen in de URL die je het logboek gaf. OOBI is discovery. Verificatie is het afspelen van de KEL.",
            ],
          },
        ],
      },
      {
        id: "what",
        title: "De objecten",
        minutes: 6,
        blocks: [
          {
            kind: "lead",
            text: "Inception („icp”) bindt de AID aan de eerste sleutelgebeurtenis: de huidige publieke sleutels plus de digests van de volgende sleutels, ondertekend door de huidige sleutels. Rotatie („rot”) wordt ondertekend door de volgende sleutels. Die worden één keer getoond, en daarna vervangen door een nieuwe vastlegging. Interactie („ixn”) verankert zegels — digests van gegevens van buiten — zonder de sleutelstatus te wijzigen.",
          },
          {
            kind: "p",
            text: "Een KEL is de hashgeketende reeks. Een ontvangstbewijs is de handtekening van iemand anders over een gebeurtenis. Een KERL is het logboek plus consistente ontvangstbewijzen. Getuigen worden aangewezen in instellingsgebeurtenissen en doen de promulgatie (KA2CE, een BFT-achtige overeenstemming over de eerste consistente versie). De verificateur kiest de watchers. Jurors leggen dupliciteit vast in een DEL. Een judge weegt KERL’s en DEL’s.",
          },
          {
            kind: "p",
            text: "Directe modus: twee controllers wisselen paarsgewijs logboeken en ontvangstbewijzen uit. Indirecte modus: getuigen doen store-and-forward als de controller offline is. Delegatie is coöperatief. De parent verzegelt de gebeurtenis van het child, en het child wijst terug naar de plek van de parent in het logboek van de parent.",
          },
          {
            kind: "words",
            ids: ["aid", "kel", "prerotation", "witness", "duplicity"],
          },
        ],
      },
      {
        id: "how",
        title: "Credentials, bytes, en discovery",
        minutes: 5,
        blocks: [
          {
            kind: "lead",
            text: "Een ACDC is een gelabelde container: version string, SAID („d”), AID van de uitgever („i”), attributen. Er zit geen W3C-proofblok in. Handtekeningen reizen mee in CESR, dat tekst en binair heen en weer omzet. Schema’s zijn JSON Schema waarvan de $id een SAID is, dus een verwisseld schema faalt. Uitgifte en intrekking staan in een TEL die verankerd is aan de KEL van de uitgever. Die verankering is waarom rotatie geen massale heruitgifte afdwingt, en waarom een verouderde sleutel een credential niet kan antedateren zonder dupliciteit.",
          },
          {
            kind: "list",
            title: "Drie beveiligingsklassen in de notities over KERI/ACDC — meng ze niet in één hoop",
            items: [
              "Hoog, op de KEL: hashgeketend, eindverifieerbaar, dupliciteit is bewijs. Gebruik dit voor credentials en voor alles wat authentiek moet blijven nadat de sleutel verandert. Een ACDC via een TEL telt mee.",
              "Gemiddeld, BADA: „de laatste wint”, op een tupel van tijd en sleutelstatus. Genoeg voor discovery, zoals service-endpoints, want een foute lookup is een mislukte lookup — wat je vindt, moet nog steeds op zichzelf te controleren zijn. Niet genoeg voor credentials. Een gestolen huidige sleutel is niet gegarandeerd zichtbaar zoals een publicatie op de KEL. Rotatie maakt niet elk eerder BADA-record ongeldig.",
              "Laag, KRAM: bescherming tegen replay op een query aan een host, met de tijd en de sleutelstatus van wie antwoordt. Het beschermt de host. Het beschermt geen gegevens in rust. Bewaar het antwoord onder BADA of, beter, in een ACDC.",
            ],
          },
          {
            kind: "p",
            text: "IPEX is één dialoog van vijf stappen, voor uitgifte én presentatie: apply, offer of spurn (afwijzen), agree of spurn, grant of spurn, admit. OOBI en documenten in de stijl van did:webs zijn discovery. Smiths regel uit de beveiligingsnotities: als een tussenpersoon gegevens kan injecteren zonder een privésleutel — JSON-LD @context is het voorbeeld dat hij afwijst — dan zijn die gegevens geen bewijs. Eindverifieerbaarheid betekent dat jouw verificateur, aan de rand, de bytes die op de KEL steunen afspeelt. Een vertrouwde resolver is de fout die hij naar eigen zeggen al eens maakte, en daarna liet vallen.",
          },
          {
            kind: "list",
            title: "Codenamen die steeds terugkomen",
            items: [
              "KERIpy — de kern in Python.",
              "KERIA — de agent, aan de dienstkant.",
              "SignifyPy en Signify-TS — bibliotheken waarmee de client ondertekent.",
              "did:webs en de bruggen eromheen — voor systemen die nog DID-methoden spreken.",
              "De vijf W’s die de stichting financiert: Wallet, Witness, Watcher, Web, Wizard.",
            ],
          },
          {
            kind: "check",
            q: "Je haalt een KEL op via een OOBI-URL. Wat maakt die gezaghebbend?",
            options: [
              { t: "HTTPS op die host.", ok: false },
              {
                t: "Afspelen: handtekeningen, de hashketen, en controles op dupliciteit, volgens de regels van KERI.",
                ok: true,
              },
              {
                t: "De getuige die het eerst antwoordde, zonder verdere controles.",
                ok: false,
              },
            ],
            explain:
              "De bronnen zijn expliciet: een OOBI op zichzelf is onveilig. Eindverifieerbaarheid is de beveiligingseigenschap.",
          },
        ],
      },
      {
        id: "next",
        title: "Een verstandige eerste week",
        minutes: 3,
        blocks: [
          {
            kind: "list",
            title: "Lees in deze volgorde",
            items: [
              "Hitchhiker’s Guide, deel 2 — het denkmodel in één zit.",
              "Jargon, delen 1–3 — voor als het vocabulaire van de whitepaper je raakt.",
              "Security in KERI/ACDC — KEL tegenover BADA tegenover KRAM, voordat je een API ontwerpt.",
              "KERI, ACDC en CESR v1.0 bij Trust Over IP — de normatieve tekst.",
              "De repo’s van WebOfTrust (keripy, keria, signify) — draaiende code.",
            ],
          },
          {
            kind: "note",
            title: "Begin niet onvoorbereid aan de whitepaper",
            text: "Zelfs de essays uit de community zeggen dat het jargon eerst komt, en de elegantie daarna. Gebruik dit pad als index, en open daarna de specificatie van het type dat je bouwt.",
          },
        ],
      },
    ],
  },
  {
    id: "business",
    name: "Omar",
    role: "Bedrijfsleider",
    worry: "Vermindert dit fraude, zonder ons aan één leverancier te binden?",
    blurb:
      "Je koopt systemen die nog moeten werken als een cloud, een bankpartner of een leverancier van een grootboek van koers verandert.",
    accent: "#8a5a32",
    lessons: [
      {
        id: "why",
        title: "De kosten van geleende identiteit",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Factuurfraude, telefoontjes van nepleveranciers, en „de CFO appt” gebruiken hetzelfde gat. Het kanaal is geauthenticeerd, de organisatie niet. Een login op een platform bewijst dat iemand een account heeft. Het bewijst niet dat diegene de rechtspersoon mag binden.",
          },
          {
            kind: "p",
            text: "vLEI, de verifieerbare identificatiecode voor rechtspersonen van GLEIF, op KERI en ACDC’s, is de productieversie van die oplossing. De onderneming heeft een identificatiecode. Rollen zijn via een keten naar die code terug te voeren. Een gesprek, een bericht of een handtekening kun je aan die keten toetsen, en beide kanten kunnen ontvangstbewijzen houden. Hetzelfde patroon staat in deze notities voor verifieerbare spraak en voor betalingen aan leveranciers. GLEIF attesteert organisaties, geen natuurlijke personen. De juridische naam en de cryptografische naam zijn gekoppeld door die attestatie. Het zijn niet hetzelfde object.",
          },
          {
            kind: "pair",
            leftTitle: "Hoe Smith hier kwam",
            left: "Hij hielp Sovrin ontwerpen, een identiteitssysteem op een openbaar grootboek. Eén grootboek betekende dat iedereen het moest delen, en vertrekken betekende grootboekoorlogen. Een identificatiecode die geboren wordt op de keten of in de clouddirectory van een leverancier heeft dezelfde val.",
            rightTitle: "Wat hij in plaats daarvan bouwde",
            right: "Een protocol. De AID is de basis. Getuigen — een database, een bestand, of een keten — houden het logboek alleen vindbaar. Partners controleren de bytes. Ze huren de naam niet van jouw leverancier.",
          },
        ],
      },
      {
        id: "what",
        title: "Wat je team zou draaien",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Je neemt geen „blockchainstrategie” aan. Je neemt een laag voor sleutelbeheer en credentials aan. Wallets houden sleutels. Getuigen publiceren de sleutelstatus. Watchers laten je risicoteam nagaan dat ze geen afgesplitste geschiedenis te zien krijgen. De web-API en een wizard zijn de delen waarvan de KERI Foundation zegt dat ze nog rijpen, zodat dit geen ritueel voor alleen experts wordt.",
          },
          {
            kind: "p",
            text: "Schaal is de zakelijke reden die de essays geven om KERI boven identiteit op een grootboek te verkiezen. Uitgifte in de stijl van Indy deed er, in één aangehaald verslag, uren over voor tienduizenden credentials, omdat globale consensus de flessenhals is. Het vestigen van zeggenschap in KERI is lokale cryptografische geschiedenis plus een drempel van getuigen. Het is gebouwd om onder credentials met een hoog volume te liggen — toeleveringsketen, IoT, het aansluiten van klanten — zonder te wachten tot de wereld het eens is.",
          },
          {
            kind: "words",
            ids: ["vlei", "witness", "keri"],
          },
        ],
      },
      {
        id: "how",
        title: "Sleutels, verloop, en bewijs",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Mensen gaan weg. Laptops raken kwijt. Een ondertekeningssleutel in één HSM, met een override door de helpdesk, is weer een administratieve vertrouwensbasis.",
          },
          {
            kind: "p",
            text: "Pre-rotatie en multi-sig zijn de operationele middelen. De huidige sleutels kunnen bij een bewaarder liggen, voor het ondertekenen van alledag. De rotatiebevoegdheid kan bij de organisatie blijven, zodat de bewaarder weg kan zonder mee te werken — custodial rotation, in het jargon. De reserve hoort niet op de laptop die ondertekent. Gedeeltelijke pre-rotatie laat je sommige sleutels tonen en andere in reserve houden. Elke wijziging is een gebeurtenis, ondertekend en met een ontvangstbewijs. Daardoor kan een auditor reconstrueren wie de onderneming op een gegeven datum kon binden. Een gestolen huidige sleutel verschijnt als een gepubliceerde gebeurtenis. Een verouderde sleutel kan die datum niet stilletjes herschrijven.",
          },
          {
            kind: "p",
            text: "ACDC’s zeggen daarna de levende feiten: deze AID is de penningmeester, deze delegatie geldt, dit factuurschema is het schema dat wij ondertekenen. Intrekking is een vermelding in het transactielogboek, verankerd aan de KEL, niet een telefoontje naar elke partner.",
          },
          {
            kind: "check",
            q: "Een leverancier van cloudidentiteit stopt het grootboek waarop je de discovery verankerde. Wat gebeurt er met een KERI-AID?",
            options: [
              {
                t: "De identificatiecode van de rechtspersoon sterft met die leverancier.",
                ok: false,
              },
              {
                t: "De AID blijft. Je wijst de getuigen ergens anders aan. Verificateurs spelen hetzelfde logboek af.",
                ok: true,
              },
              {
                t: "Je moet cryptovaluta kopen om te verhuizen.",
                ok: false,
              },
            ],
            explain:
              "Overdraagbaarheid is een genoemd ontwerpdoel: de vertrouwensbasis is de AID, niet het discovery-netwerk.",
          },
        ],
      },
      {
        id: "next",
        title: "Een pilot die klein mag zijn",
        minutes: 3,
        blocks: [
          {
            kind: "list",
            title: "Een praktisch stuk",
            items: [
              "Eén AID voor de rechtspersoon, multi-sig, waarbij de rotatiebevoegdheid niet in dezelfde handen ligt als het ondertekenen van alledag.",
              "Eén rolcredential, een ACDC, voor een functie die nu wordt aangevallen — betalingen vrijgeven, of een leverancier terugbellen.",
              "Getuigen die je niet in je eentje draait, zodat één beheerder de geschiedenis niet ongemerkt kan herschrijven.",
              "Een verificateur op de ontvangende afdeling, die de credential controleert in plaats van het e-maildomein te vertrouwen.",
            ],
          },
          {
            kind: "note",
            title: "Wie de grote versie al deed",
            text: "De vLEI van GLEIF is de referentie-inzet die het materiaal van de stichting en de conferenties noemt. Vraag een leverancier of die de sleutelstatus van KERI verifieert, of die alleen een badge om een gewoon account vouwt.",
          },
        ],
      },
    ],
  },
  {
    id: "health",
    name: "Aisha",
    role: "Zorgprofessional",
    worry: "Kunnen we dossiers uitwisselen zonder ieders dossier op één hoop te leggen?",
    blurb:
      "Interoperabiliteit is verplicht. Eén database van patiënten is niet hetzelfde als vertrouwen.",
    accent: "#3d6e8a",
    lessons: [
      {
        id: "why",
        title: "Het dossier is niet hetzelfde als de bevoegdheid",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "FHIR heeft zorggegevens in beweging gebracht. Het gaf op zichzelf geen antwoord op wie de gegevens mag vrijgeven, of de afzender de organisatie is die hij zegt te zijn, of hoe een patiënt één feit toont zonder het dossier te tonen.",
          },
          {
            kind: "p",
            text: "De conferentie- en projectnotities in deze bibliotheek — HealthKERI, het interoperabiliteitswerk van CMS, DirectTrust, de privacyarchitectuur van Utah — draaien om hetzelfde gat. Vertrouwensnetwerken hangen nog steeds af van wie de directory draait. Het voorstel van KERI is dat de kliniek, de betaler, de patiënt en de app elk identificatiecodes hebben die zij zelf beheersen, en dat een credential gecontroleerd kan worden nadat het bericht je firewall heeft verlaten.",
          },
          {
            kind: "note",
            title: "Geen claim over een medisch hulpmiddel",
            text: "Niets hier zegt dat KERI een diagnose stelt, een juridisch medisch dossier bewaart, of een HIPAA-proces vervangt. Het is een laag voor identiteit en bewijs, die mensen in de zorg onder de uitwisseling proberen te leggen.",
          },
        ],
      },
      {
        id: "what",
        title: "Bewijs dat met de gegevens meereist",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Een ACDC kan zeggen „deze organisatie is deze vLEI”, of „deze zorgverlener heeft deze rol”, of „deze bewering over de patiënt is uitgegeven door deze AID”, geketend zodat een ontvanger het delegatiepad ziet. Gedoseerde openbaarmaking betekent dat een apotheek een feit over de dekking kan zien zonder de probleemlijst te krijgen.",
          },
          {
            kind: "p",
            text: "Omdat de credential aan de sleutelstatus is verzegeld, kan een ziekenhuis na een incident sleutels roteren zonder elke historische machtiging opnieuw te ondertekenen. De verificateur kan nog aanvaarden wat waar was op de dag van uitgifte. Intrekking staat in een transactielogboek dat verankerd is aan het sleutellogboek van de uitgever.",
          },
          {
            kind: "p",
            text: "De identificatiecode van de patiënt en die van de kliniek zijn verschillende namen. Een voogd, een gevolmachtigde of een waarnemend zorgverlener krijgt bevoegdheid door delegatie, die beide kanten verzegelen, niet door een wachtwoord te delen. De essays zijn expliciet: de houder van de sleutels kan herstellen zonder dat een helpdesk de enige weg terug is. Voor iemand die van kliniek, van naam of van dekking verandert, kan de identificatiecode blijven terwijl de attestaties veranderen. Het niet-klinische voorbeeld van Smith is het patroon. Bewijs één feit — oud genoeg — en geef verder niets prijs. Een feit over de dekking, of een verwijzing, heeft dezelfde vorm.",
          },
          {
            kind: "words",
            ids: ["acdc", "ipex", "delegation", "vlei", "prerotation"],
          },
        ],
      },
      {
        id: "how",
        title: "Nadat de uitwisselingsserver is gecompromitteerd",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Smiths kader, in de reactie op de Five Eyes in dit materiaal, is dat inbraken op servers en certificaatautoriteiten niet het einde van betrouwbare geschiedenis hoeven te zijn. Wat controleerbaar blijft, is het sleutellogboek en de zegels.",
          },
          {
            kind: "p",
            text: "Is een integratie-engine gecompromitteerd, dan kan een aanvaller zonder de rotatiesleutels de geschiedenis van de organisatie niet vervangen. Een verouderde sleutel kan geen ander logboek vervalsen dat verifieert. Een gestolen huidige sleutel kan alleen ondertekenen door te publiceren, en die publicatie is wat watchers — een betaler, een netwerk — zoeken, in plaats van de verzender op zijn woord te geloven dat de directory in orde is. Het venster is de tijd tot de rotatie, niet de levensduur van het dossier. Machtigingen die vóór het incident zijn verzegeld, blijven controleerbaar. Ze zijn niet allemaal stilletjes ongeldig, en niet allemaal stilletjes herschreven.",
          },
          {
            kind: "p",
            text: "Zet de gebeurtenissen van elke patiënt niet op één globaal grootboek, als wissing ertoe doet. Minimale openbaarmaking is een stap in het protocol, IPEX, en niet een API op goed vertrouwen die de hele Patient-resource teruggeeft. Als je moet kiezen, is Smiths prioriteit de authenticiteit van wie attesteerde, en vertrouwelijkheid tegenover partijen die niet in de uitwisseling zaten — niet de belofte dat de specialist met wie je net te maken had, niets heeft geleerd.",
          },
          {
            kind: "check",
            q: "Een specialist moet weten dat een verwijzing echt is, niet de hele voorgeschiedenis van de patiënt. Welk idee uit de KERI-suite is dat?",
            options: [
              {
                t: "Zet het hele dossier op een openbare blockchain, zodat iedereen het kan controleren.",
                ok: false,
              },
              {
                t: "Gedoseerde openbaarmaking van een ACDC: de nodige claims tonen, onder voorwaarden.",
                ok: true,
              },
              {
                t: "Deel één beheerderswachtwoord van het ziekenhuis met het EPD van de specialist.",
                ok: false,
              },
            ],
            explain:
              "IPEX en het ketenen van ACDC’s zijn hoe deze bronnen praten over gedeeltelijke, contractuele openbaarmaking.",
          },
        ],
      },
      {
        id: "next",
        title: "Wie in de bibliotheek al meedoet",
        minutes: 3,
        blocks: [
          {
            kind: "list",
            title: "Namen uit de bronnotities die bij de zorg horen",
            items: [
              "HealthKERI — Jared Jeffery, Philip Feairheller — uitwisseling met zero trust, vraagstukken rond FHIR.",
              "DirectTrust — Scott Stuewe — vertrouwenskaders voor uitwisseling in de Amerikaanse zorg.",
              "CMS Blue Button en het FHIR-werk — Mark Scrimshire — API’s van betalers, op nationale schaal.",
              "Privacy in Utah, en SEDI — identiteit bij de overheid die probeert geen surveillancedossier te worden.",
            ],
          },
          {
            kind: "p",
            text: "Geef een beveiligingsarchitect het pad van de ontwikkelaar, en een privacyofficer het pad van de beleidsmaker. Het is hetzelfde protocol, verteld voor de beslissing die ieder van hen echt neemt.",
          },
        ],
      },
    ],
  },
]

export function findPersona(id) {
  return personas.find((p) => p.id === id)
}

export function findLesson(persona, lessonId) {
  return persona?.lessons.find((l) => l.id === lessonId)
}
