export const personas = [
  {
    id: 'parent',
    name: 'Maya',
    role: 'Bezorgde ouder',
    worry: 'Wie houdt de sleutels van de namen van mijn gezin?',
    blurb: 'Je wilt dat het internet je kind kent als mens, niet als profiel dat een bedrijf kan verkopen of verliezen.',
    accent: '#c46b4a',
    lessons: [
      {
        id: 'why',
        title: 'Waarom dit een gezinsvraag is',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Een schoolportaal, een zorglogin, „Inloggen met Google”: dat zijn identifiers die iemand anders heeft uitgegeven. Ze wijzen naar je kind. Ze zijn niet je kind. De aanbieder kan ze resetten, uitlezen of uitzetten.',
          },
          {
            kind: 'p',
            text: 'KERI haalt drie dingen uit elkaar die in de essays steeds verstrikt raken. Identiteit is de persoon. Een identifier is een naam die naar die persoon wijst. Een attestatie is een uitspraak over die naam: hier ingeschreven, oud genoeg voor deze reis. De autonomic identifier is de naam die je gezin kan houden. Scholen en klinieken kunnen nog steeds attesteren. Ze hoeven de naam niet te bezitten om dat te doen.',
          },
          {
            kind: 'pair',
            leftTitle: 'Wat je nu hebt',
            left: 'Niet jouw sleutels, niet jouw identifier. Een wachtwoordreset betekent dat een beheerder beslist dat de naam nog steeds je kind betekent. Als dat kantoor fout zit, of het feit verkoopt dat er iets is gebeurd, kun je meestal niet bewijzen wie sprak.',
            rightTitle: 'Wat KERI verandert',
            right: 'De naam wordt afgeleid uit sleutels die jij houdt. Als de sleutels veranderen, verandert de naam niet. Een latere attestatie kan zeggen „deze naam is dit kind” zonder dat het platform de wortel van vertrouwen is.',
          },
          {
            kind: 'note',
            title: 'Een rustige grens',
            text: 'KERI voedt je kind niet op en voorkomt niet dat iemand liegt in een bericht. Het maakt van een gestolen sleutel een gepubliceerd event waarvan je kunt herstellen, en het maakt „wij zijn de enige kopie van wie je bent” overbodig. Samuel Smith is scherp over een verwante grens: je kunt sterke authenticiteit en vertrouwelijkheid tegen vreemden hebben, en toch geen perfecte privacy tegen iemand met wie je echt te maken hebt. Het doel is dat de derde partij die nooit in de kamer was de relatie niet kan hergebruiken.',
          },
        ],
      },
      {
        id: 'what',
        title: 'Wat KERI is, zonder jargon',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'KERI betekent Key Event Receipt Infrastructure. Mensen spreken het uit als de naam Carrie. Het is een protocol, geen app en geen blockchain waar je lid van wordt. De langlevende naam is een autonomic identifier: een AID. Autonomic betekent zelfbesturend.',
          },
          {
            kind: 'p',
            text: 'De AID wordt geboren wanneer je het eerste key event ondertekent. Een key event log legt vast wat daarna gebeurt. Iemand die een event ontvangt kan een receipt tekenen: „ik heb deze versie gezien.” Dat receipt is waarom beide kanten later iets hebben om te laten zien. Smiths punt is dat het niet voor niets receipt infrastructure heet.',
          },
          {
            kind: 'list',
            title: 'Vijf handelingen, in gezinstaal',
            items: [
              'Inception: de naam wordt gemaakt uit sleutels die jij houdt.',
              'Pre-rotation: de volgende sleutel wordt als hash beloofd en kan ergens anders liggen dan op de telefoon.',
              'Rotation: de sleutel van vandaag gaat met pensioen. De naam blijft.',
              'Delegation: een ouder of voogd krijgt aantoonbare, beperkte bevoegdheid: een eigen naam, geen kopie van de sleutels van het kind.',
              'Revocation: een bevoegdheid eindigt als event dat iedereen opnieuw kan afspelen, inclusief het opgeven van de naam zelf.',
            ],
          },
          {
            kind: 'words',
            ids: ['keri', 'aid', 'kel'],
          },
        ],
      },
      {
        id: 'how',
        title: 'Als een sleutel wordt gestolen',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'Stel je voor dat de sleutel aan de schooltas wordt gekopieerd. Bij een normaal account kom je bij een helpdesk. Bij een simpele vingerafdruk-van-een-sleutel zijn de naam en de gestolen sleutel hetzelfde object, dus geef je beide op.',
          },
          {
            kind: 'p',
            text: 'KERI splitst ondertekenen en herstel. De sleutel van vandaag tekent „ja, dit zijn wij.” De volgende sleutel staat alleen als hash in het log, en de private reserve hoort niet op diezelfde tas te zitten. Een dief die de gekopieerde sleutel gebruikt moet een event publiceren. De witnesses die jij koos bewaren die publicatie, dus de schade duurt tot jij het merkt en roteert, niet tot een bedrijf je gelooft. Je onthult de reserve, zet de gekopieerde sleutel met pensioen en legt een nieuwe reserve vast. Leraren kennen nog steeds dezelfde AID.',
          },
          {
            kind: 'p',
            text: 'De naam tonen is niet hetzelfde als het kind tonen. Een ACDC kan bewijzen „oud genoeg voor deze reis” of „hier ingeschreven” en de geboortedatum, het adres en de foto achterhouden. Als een kind nog geen sleutels kan houden, geeft delegation een ouder een verifieerbare voogdij. De identifier van de ouder en die van het kind blijven verschillend, en de koppeling kan worden ingetrokken.',
          },
          {
            kind: 'words',
            ids: ['prerotation', 'delegation', 'acdc', 'ipex', 'gdpr'],
          },
          {
            kind: 'check',
            q: 'Als Maya sleutels roteert na een gestolen laptop, wat gebeurt er dan met de AID van het gezin?',
            options: [
              { t: 'Die moet worden weggegooid en elke school begint opnieuw.', ok: false },
              { t: 'De naam blijft. De gestolen sleutel verliest bevoegdheid. Er wordt een nieuwe reserve vastgelegd.', ok: true },
              { t: 'Een blockchainstemming beslist of het gezin nog bestaat.', ok: false },
            ],
            explain:
              'Die duurzaamheid is precies het punt van pre-rotation. De identifier leeft langer dan één sleutel.',
          },
        ],
      },
      {
        id: 'next',
        title: 'Waar je om kunt vragen',
        minutes: 3,
        blocks: [
          {
            kind: 'lead',
            text: 'Je hoeft geen witness-pool te draaien. Je hebt wel taal nodig voor het volgende portaal dat om een gezinslogin vraagt.',
          },
          {
            kind: 'list',
            title: 'Vragen die het waard zijn aan een school, kliniek of app',
            items: [
              'Als we een telefoon verliezen, wie roteert de sleutels: wij, of jullie helpdesk?',
              'Waar woont de reservesleutel, als hij niet op het dagelijkse apparaat staat?',
              'Kunnen jullie „ingeschreven” of „oud genoeg” controleren zonder de rest van het dossier op te slaan?',
              'Als een voogd verandert, is dat dan een intrekbare delegation, of een gedeeld wachtwoord?',
              'Als jullie leverancier verdwijnt, overleeft de identifier dan, of zat hij vast aan hun systeem?',
            ],
          },
          {
            kind: 'note',
            title: 'Loop door het verhaal',
            text: 'Het gedeelde verhaal op de Hearth, „Een naam die zijn sloten kan vervangen”, is hetzelfde idee zonder functietitel eraan vast.',
          },
        ],
      },
    ],
  },
  {
    id: 'legal',
    name: 'Elena',
    role: 'Jurist',
    worry: 'Wat zou standhouden als bewijs?',
    blurb: 'Je geeft om bevoegdheid, onweerlegbaarheid, contracten en of een digitale handeling aan de juiste rechtspersoon kan worden toegeschreven.',
    accent: '#6d5a7a',
    lessons: [
      {
        id: 'why',
        title: 'Het toerekeningsprobleem',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Een handtekening is maar zo sterk als het verhaal welke sleutel bevoegd was, wanneer, en of een tweede ondertekend verhaal het eerste ongemerkt kan vervangen.',
          },
          {
            kind: 'p',
            text: 'Phil Windleys drie architecturen, zoals de jargonessays ze gebruiken: administratieve identiteit koppelt een naam aan een sleutel via een kantoor: een certificaatautoriteit, een platformbeheerder. Die koppeling faalt wanneer het kantoor fout zit. Algoritmische identiteit bindt de naam op een gedeeld ledger. De koppeling is sterk, de geschiedenis is moeilijk te wissen, en de identifier zit vast aan dat ledger. Autonomic identity, KERI dus, legt de primaire wortel van vertrouwen bij de controller. Het key event log is secundair: hash-chained en te bewaren door de partijen zelf.',
          },
          {
            kind: 'p',
            text: 'Een receipt is het deel dat juristen niet moeten overslaan. Smiths reden voor dat woord is praktisch: beide kanten van een afspraak hebben een verifieerbaar verslag nodig van wat is gezien, zodat er verhaal mogelijk is. Dupliciteit, twee inconsistente ondertekende geschiedenissen, is positief bewijs. Een korter log dat het langere niet tegenspreekt is onvolledig, geen tweede verhaal. En een oude sleutel kan dat tweede verhaal niet verzinnen: een alternatief key event log vervalsen verschijnt als dupliciteit. Compromittering van de huidige sleutel is anders en smaller. Hem gebruiken betekent publiceren op infrastructuur die de controller heeft aangewezen, dus de blootstelling wordt begrensd door de tijd tot ontdekken en roteren.',
          },
          {
            kind: 'words',
            ids: ['duplicity', 'receipt', 'kel', 'end'],
          },
        ],
      },
      {
        id: 'what',
        title: 'vLEI, ACDC en het document',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'GLEIF geeft verifiable Legal Entity Identifiers uit op KERI en ACDCs. Een organisatie kan cryptografisch laten zien welke rechtspersoon spreekt, en welke rol bevoegd is om namens haar te spreken.',
          },
          {
            kind: 'p',
            text: 'Een ACDC is een verifiable credential met een strenger beveiligingsmodel: compact, ketenbaar, met een schema dat door een self-addressing identifier is vastgezet zodat het schema zelf niet onder het document kan worden verwisseld. CESR laat hetzelfde bewijs bestaan als leesbare tekst en als binary. Voor de praktijk is het punt simpel: je zou geen tweede ceremonie nodig moeten hebben om te bewijzen dat het leesbare contract en de verzonden bytes hetzelfde zijn.',
          },
          {
            kind: 'p',
            text: 'IPEX is de uitwisseling. Een discloser kan een gedeeltelijke weergave plus voorwaarden aanbieden, een Ricardiaans contract in de credential-flow, en pas meer onthullen na akkoord. Chain-link confidentiality probeert die voorwaarden mee te dragen naar de volgende ontvanger, niet alleen naar de eerste.',
          },
          {
            kind: 'words',
            ids: ['vlei', 'acdc', 'cesr', 'ipex', 'said'],
          },
        ],
      },
      {
        id: 'how',
        title: 'Sleutels veranderen zonder de wereld opnieuw te papiereren',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'In veel systemen betekent het roteren van een ondertekenende sleutel dat elke openstaande credential opnieuw moet worden uitgegeven. Zo vallen operationele beveiliging en juridische continuïteit uit elkaar.',
          },
          {
            kind: 'p',
            text: 'Een ACDC wordt aan sleutelstatus verzegeld via een transaction event log dat in het key event log is verankerd. Latere rotatie herschrijft dat zegel niet, en maakt niet automatisch elke eerdere credential ongeldig. Een verifier speelt de establishment events opnieuw af en controleert de sleutel die toen bevoegd was. De herstelsleutel was vóór het incident als hash vastgelegd, dus „we hebben na de inbraak een nieuwe sleutel verzonnen” kan zich niet voordoen als de vooraf vastgelegde rotatie. Intrekking is een expliciet later event. Tot het bestaat, spreekt het oude zegel nog steeds over die dag.',
          },
          {
            kind: 'note',
            title: 'Wissen, en wat het niet belooft',
            text: 'Er is geen enkel volledig geordend ledger van ieders events, dus de data van een identifier is niet structureel veroordeeld om voor altijd te blijven leven. De Hitchhiker’s Guide en de KERI Foundation zien dat allebei als steun voor wissen. Counsel moet nog steeds de implementatie lezen: witnesses, wederpartijen en leveranciers kunnen kopieën bewaren. Het protocol staat vergeten toe. Een contract misschien niet.',
          },
          {
            kind: 'check',
            q: 'Twee ondertekende sleutelgeschiedenissen voor dezelfde AID spreken elkaar tegen. Wat heb je dan in KERI-termen?',
            options: [
              { t: 'Een onschuldige synchronisatievertraging. Korter betekent altijd fout.', ok: false },
              { t: 'Dupliciteit: non-repudiable bewijs van inconsistente geschiedenissen.', ok: true },
              { t: 'Niets, tenzij een door de rechtbank aangewezen certificaatautoriteit er één bevestigt.', ok: false },
            ],
            explain:
              'Een log dat alleen korter is kan onvolledig zijn. Een conflicterende ondertekende versie is dupliciteit.',
          },
        ],
      },
      {
        id: 'next',
        title: 'Waar je verder leest',
        minutes: 3,
        blocks: [
          {
            kind: 'list',
            title: 'Primaire uitleg achter dit pad',
            items: [
              'Hitchhiker’s Guide to KERI, Parts 1 and 2 — waarom geen globaal ledger, en AID, pre-rotation, key event, receipt.',
              'KERI jargon, Parts 1–3 — inclusief dupliciteit tegenover een alleen onvolledig log.',
              'Security in KERI/ACDC — KEL-backed bewijs, en waarom een oude sleutel geen alternatieve geschiedenis kan vervalsen.',
              'GLEIF vLEI, en de ToIP-teksten KERI, ACDC en CESR v1.0 die op 21 januari 2026 zijn goedgekeurd.',
            ],
          },
          {
            kind: 'p',
            text: 'Deze Hearth is een leesgids, geen juridisch advies en niet de specificatie.',
          },
        ],
      },
    ],
  },
  {
    id: 'policy',
    name: 'Jonas',
    role: 'Beleidsmaker',
    worry: 'Beveiliging zonder een surveillancestaat te bouwen',
    blurb: 'Je wordt gevraagd te kiezen tussen „iedereen volgen” en „hopen dat datalekken klein blijven”. KERI is een derde ontwerp.',
    accent: '#3f6f62',
    lessons: [
      {
        id: 'why',
        title: 'De scherpe keuze, zorgvuldig gezegd',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'Samuel Smith, de uitvinder van KERI, formuleert in reactie op Five Eyes-waarschuwingen over AI en cyberverdediging een publieke vraag: als aanvallen sneller worden dan mensen, beveiligen we de samenleving dan met continue monitoring, of met verifieerbare bevoegdheid die bij mensen en organisaties blijft?',
          },
          {
            kind: 'p',
            text: 'KERI’s antwoord is niet „geen identiteit”. Het is een identifier waarvan de wortel van vertrouwen de sleutels van de controller zijn, plus attestaties die kunnen worden gecontroleerd zonder permanent gedragsdossier. Smith is preciezer dan de slogan. Hij plaatst authenticiteit en vertrouwelijkheid boven de poging om privacy voor altijd perfect te houden: met iemand omgaan onthult al iets aan die persoon. Wat niet mag gebeuren, is dat een derde partij die nooit in die relatie zat haar ontgint. Hij noemt de werkbare combinatie authenticiteit plus vertrouwelijkheid. Graduated disclosure is hoe weinig wordt onthuld. Receipts zijn hoe de handeling toerekenbaar blijft.',
          },
          {
            kind: 'pair',
            leftTitle: 'Vertrouwen in surveillancestijl',
            left: 'Een centrale waarnemer moet genoeg zien, vaak genoeg, om te beslissen wie mag handelen. Een inbraak bij die waarnemer is een inbraak bij iedereen.',
            rightTitle: 'Vertrouwen in KERI-stijl',
            right: 'Een verifier controleert een bewijs. Nadat een server, cloud of zelfs certificaatautoriteit is gecompromitteerd, leeft de bevoegde sleutelstatus nog steeds in logs die opnieuw kunnen worden afgespeeld. Geheimen die nooit zijn getoond, de volgende sleutels, blijven de herstelroute.',
          },
          {
            kind: 'note',
            title: 'Utah en SEDI',
            text: 'Publieke-sectorwerk rond State-Endorsed Digital Identity, inclusief privacy-leiderschap in Utah en de SEDI-gesprekken van 2025 in deze materialen, behandelt KERI als infrastructuur voor publiek-private samenwerking: de overheid kan onderschrijven, zonder de database van ieders sleutels te worden.',
          },
        ],
      },
      {
        id: 'what',
        title: 'Wat je eigenlijk zou onderschrijven',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Geen cryptocurrency en geen nationale login. Een protocolsuite: KERI voor identifiers en sleutelgeschiedenis, ACDC voor credentials, CESR zodat hetzelfde bewijs tekst of binary kan zijn. Discovery mag gewone webadressen gebruiken. Die adressen zijn geen vertrouwen. Smith liet een vertrouwd discovery-netwerk vallen toen hij zag dat het ergste falen van een lookup is dat je niets vindt, omdat alles wat je wel vindt nog steeds op zichzelf moet verifiëren.',
          },
          {
            kind: 'p',
            text: 'Het blockchaintrilemma gaat over double-spending: één gedeeld, volledig geordend ledger kan decentralisatie, beveiliging en schaal niet tegelijk maximaliseren. Herhalen „dit zijn mijn sleutels” maakt geen tweede persoon, dus identiteit heeft die consensus niet nodig. KERI kan een chain nog steeds als witness gebruiken. De identifier wordt daar niet geboren en zit er niet aan vast. Het pad van administratieve namen, naar ledger-gebonden namen, naar autonome namen is de beleidsgeschiedenis in deze teksten. „Decentrale identiteit” onderschrijven zonder te zeggen wie rotatiebevoegdheid houdt, glijdt terug naar de eerste.',
          },
          {
            kind: 'list',
            title: 'Eigenschappen die passen bij beleidsdoelen',
            items: [
              'Portabiliteit: geen ledger lock-in als een leverancier of chain faalt.',
              'Wissen: persoonsgegevens hoeven niet op één globaal geordend ledger te leven.',
              'Herstel: een gestolen ondertekenende sleutel wordt gepubliceerd, zichtbaar en roteerbaar. De reserve was vóór de diefstal vastgelegd.',
              'Toerekening: dupliciteit is bewijs. Een oude sleutel kan de officiële geschiedenis niet stilletjes vervangen.',
              'Proportionaliteit: graduated disclosure in plaats van alles-of-niets data delen.',
            ],
          },
        ],
      },
      {
        id: 'how',
        title: 'Adoptie zonder te doen alsof het af is',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'De eerlijke status in deze bronnen: GLEIFs vLEI is echt in gebruik. Het eigen doel van de KERI Foundation is nog steeds „1-click” infrastructuur: wallet, witness, watcher, web, wizard, omdat mensen de machine niet hoeven te begrijpen om veilig te zijn.',
          },
          {
            kind: 'p',
            text: 'Op 21 januari 2026 keurde de stuurgroep van Trust Over IP de specificaties KERI, ACDC en CESR goed op v1.0. Dat is een standaardenmijlpaal, geen mandaat. HealthKERI, werk rond kaart- en telecomfraude en enterprise credential-platforms tonen het patroon: gereguleerde sectoren willen verifieerbare rollen meer dan nog een login.',
          },
          {
            kind: 'p',
            text: 'Een beleid dat zegt „gebruik decentrale identiteit” zonder te zeggen wie rotatiebevoegdheid houdt, bouwt administratieve PKI opnieuw met extra stappen. De vraag voor richtlijnen is: wat blijft na een inbraak bij de operator betrouwbaar, en wie kan roteren?',
          },
          {
            kind: 'check',
            q: 'Waarom zeggen deze bronnen dat identiteit blockchainconsensus kan overslaan?',
            options: [
              { t: 'Omdat blockchains verboden zijn voor overheden.', ok: false },
              { t: 'Omdat identiteit geen double-spend-bescherming nodig heeft; zij heeft consistente sleutelgeschiedenis nodig.', ok: true },
              { t: 'Omdat KERI helemaal geen data kan opslaan.', ok: false },
            ],
            explain:
              'KERI kan data verankeren en zelfs een chain als witness gebruiken. Het weigert globale consensus de wortel van vertrouwen te maken.',
          },
        ],
      },
      {
        id: 'next',
        title: 'Een korte notitie om door te sturen',
        minutes: 3,
        blocks: [
          {
            kind: 'note',
            title: 'Eén alinea',
            text: 'KERI is een decentraal sleutelbeheerprotocol voor persistente self-certifying identifiers. Controle ligt bij de controller, sleutelwissels zijn hash-chained en receivable, en credentials (ACDCs) kunnen stapsgewijs worden onthuld. Het is ontworpen zodat beveiliging, schaal en decentralisatie niet via een blockchaintrilemma tegen elkaar worden ingeruild, en zodat persoonsgegevens niet in één onuitwisbaar wereldledger hoeven te worden geschreven. Het belangrijkste productievoorbeeld is GLEIFs vLEI.',
          },
          {
            kind: 'words',
            ids: ['keri', 'gdpr', 'vlei', 'witness'],
          },
        ],
      },
    ],
  },
  {
    id: 'developer',
    name: 'Priya',
    role: 'Developer',
    worry: 'Waar bouw ik eigenlijk tegenaan?',
    blurb: 'Je wilt de objecten, de vertrouwensgrenzen en waar de code leeft, zonder een koude start van veertig pagina’s.',
    accent: '#b86b3d',
    lessons: [
      {
        id: 'why',
        title: 'De ontwerpgrens',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'KERI is een DKMS: distributed key management voor identifiers die langer moeten leven dan één sleutel. Samuel Smith beschreef het in 2019 en herzag het in 2021. De suite eromheen, ACDC, CESR, OOBI, IPEX, is wat mensen bedoelen wanneer ze „KERI” in een repo-naam zetten.',
          },
          {
            kind: 'p',
            text: 'Primaire wortel van vertrouwen: de AID, uit entropy die de controller houdt. Secundair: de KEL, receipts, witnesses. Een blockchain, als je er een gebruikt, is ook secundair. Daarom kan een AID van het ene discovery-netwerk naar het andere verhuizen zonder opnieuw geboren te worden.',
          },
          {
            kind: 'list',
            title: 'Wat je niet hoeft te implementeren',
            items: [
              'Globale totale ordening van alle identiteiten.',
              'Een tokenledger. KERI is niet double-spend-proof en is geen chain voor assets.',
              'Vertrouwen in de URL die je het log gaf. OOBI is discovery. Verificatie is het opnieuw afspelen van de KEL.',
            ],
          },
        ],
      },
      {
        id: 'what',
        title: 'De objecten',
        minutes: 6,
        blocks: [
          {
            kind: 'lead',
            text: 'Inception („icp”) bindt de AID aan het eerste key event: huidige publieke sleutels plus digests van volgende sleutels, ondertekend door de huidige sleutels. Rotation („rot”) wordt ondertekend door de volgende sleutels, die één keer worden onthuld en daarna vervangen door een nieuwe commitment. Interaction („ixn”) verankert seals, digests van externe data, zonder sleutelstatus te veranderen.',
          },
          {
            kind: 'p',
            text: 'Een KEL is de hash-chained reeks. Een receipt is iemands anders handtekening over een event. Een KERL is het log plus consistente receipts. Witnesses worden in establishment events aangewezen en draaien promulgation (KA2CE, een BFT-achtige overeenkomst over de eerste consistente versie). Watchers worden gekozen door een verifier. Jurors leggen dupliciteit vast in een DEL. Een judge weegt KERLs en DELs.',
          },
          {
            kind: 'p',
            text: 'Direct mode: twee controllers wisselen logs en receipts één-op-één uit. Indirect mode: witnesses bewaren en sturen door wanneer de controller offline is. Delegation is coöperatief: de parent verzegelt het child event, het child wijst terug naar de locatie van de parent in zijn log.',
          },
          {
            kind: 'words',
            ids: ['aid', 'kel', 'prerotation', 'witness', 'duplicity'],
          },
        ],
      },
      {
        id: 'how',
        title: 'Credentials, bytes en discovery',
        minutes: 5,
        blocks: [
          {
            kind: 'lead',
            text: 'Een ACDC is een gelabelde container: version string, SAID („d”), issuer AID („i”), attributes. Er zit geen W3C proof block in. Handtekeningen reizen in CESR, dat heen en terug kan tussen tekst en binary. Schema’s zijn JSON Schema waarvan de $id een SAID is, dus een verwisseld schema faalt. Uitgifte en intrekking leven in een TEL dat aan de issuer KEL is verankerd. Die verankering is waarom rotatie geen massale heruitgifte afdwingt, en waarom een oude sleutel geen credential kan antedateren zonder dupliciteit.',
          },
          {
            kind: 'list',
            title: 'Drie beveiligingsklassen in de KERI/ACDC-notities: meng ze niet in één blob',
            items: [
              'Hoog, KEL-backed: hash-chained, eindverifieerbaar, dupliciteit is bewijs. Gebruik dit voor credentials en alles wat authentiek moet blijven nadat de sleutel verandert. ACDC via TEL telt mee.',
              'Middel, BADA: „laatste wint” op basis van een (tijd, sleutelstatus)-tuple. Genoeg voor discovery, zoals service endpoints, omdat een slechte lookup een mislukte lookup is: wat je vindt moet nog steeds verifiëren. Niet genoeg voor credentials. Een gestolen huidige sleutel is niet gegarandeerd zichtbaar zoals een KEL-publicatie dat is. Rotatie maakt niet elk eerder BADA-record ongeldig.',
              'Laag, KRAM: replay-bescherming op een query naar een host, met de tijd en sleutelstatus van de replier. Het beschermt de host. Het beschermt geen data at rest. Sla het antwoord op onder BADA of, beter, in een ACDC.',
            ],
          },
          {
            kind: 'p',
            text: 'IPEX is één dialoog in vijf stappen voor zowel uitgifte als presentatie: apply, offer of spurn, agree of spurn, grant of spurn, admit. OOBI en did:webs-achtige documenten zijn discovery. Smiths regel uit de security notes: als een tussenpartij data kan injecteren zonder private sleutel, JSON-LD @context is zijn afgewezen voorbeeld, dan is die data geen bewijs. Eindverifieerbaarheid betekent dat jouw verifier, aan de rand, KEL-backed bytes opnieuw afspeelt. Een vertrouwde resolver is de fout waarvan hij zegt dat hij die één keer maakte en daarna liet vallen.',
          },
          {
            kind: 'list',
            title: 'Codenamen die steeds terugkomen',
            items: [
              'KERIpy — core Python.',
              'KERIA — agent / service side.',
              'SignifyPy en Signify-TS — client signing libraries.',
              'did:webs en verwante bridges — voor systemen die nog DID methods spreken.',
              'De vijf W’s die de foundation financiert: Wallet, Witness, Watcher, Web, Wizard.',
            ],
          },
          {
            kind: 'check',
            q: 'Je haalt een KEL op via een OOBI-URL. Wat maakt hem bevoegd?',
            options: [
              { t: 'HTTPS op die host.', ok: false },
              { t: 'Replay: handtekeningen, hash-keten en duplicity-checks volgens KERI-regels.', ok: true },
              { t: 'Welke witness ook maar als eerste antwoordde, zonder verdere checks.', ok: false },
            ],
            explain:
              'De bronnen zijn expliciet: een OOBI op zichzelf is onveilig. Eindverifieerbaarheid is de beveiligingseigenschap.',
          },
        ],
      },
      {
        id: 'next',
        title: 'Een verstandige eerste week',
        minutes: 3,
        blocks: [
          {
            kind: 'list',
            title: 'Lees in deze volgorde',
            items: [
              'Hitchhiker’s Guide Part 2 — het mentale model in één zit.',
              'Jargon Parts 1–3 — wanneer de whitepaper-vocabulaire binnenkomt.',
              'Security in KERI/ACDC — KEL-backed tegenover BADA tegenover KRAM, voordat je een API ontwerpt.',
              'KERI, ACDC en CESR v1.0 bij Trust Over IP — normatieve tekst.',
              'WebOfTrust repos (keripy, keria, signify) — draaiende code.',
            ],
          },
          {
            kind: 'note',
            title: 'Begin niet koud met de whitepaper',
            text: 'Zelfs de community-essays zeggen dat eerst de jargon komt en daarna de elegantie. Gebruik dit pad als index, en open daarna de spec voor het type dat je implementeert.',
          },
        ],
      },
    ],
  },
  {
    id: 'business',
    name: 'Omar',
    role: 'Bedrijfsleider',
    worry: 'Vermindert dit fraude zonder ons aan een leverancier vast te ketenen?',
    blurb: 'Je koopt systemen die moeten blijven werken wanneer een cloud, bankpartner of ledgerbedrijf van gedachten verandert.',
    accent: '#8a5a32',
    lessons: [
      {
        id: 'why',
        title: 'De prijs van geleende identiteit',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Factuurfraude, neptelefoontjes van leveranciers en „de CFO appte” misbruiken allemaal hetzelfde gat: het kanaal is geauthenticeerd, de organisatie niet. Een platformlogin bewijst dat iemand een account heeft. Het bewijst niet dat die persoon de rechtspersoon mag binden.',
          },
          {
            kind: 'p',
            text: 'vLEI, GLEIFs verifiable Legal Entity Identifier op KERI en ACDCs, is de productieversie van de oplossing. Het bedrijf heeft een identifier. Rollen ketenen daarnaar terug. Een gesprek, bericht of handtekening kan tegen die keten worden gecontroleerd, en beide kanten kunnen receipts houden. Hetzelfde patroon verschijnt in deze notities voor verifieerbare spraak en voor leveranciersbetalingen. GLEIF attesteert organisaties, geen natuurlijke personen. De juridische naam en de cryptografische naam worden door die attestatie gekoppeld. Ze zijn niet hetzelfde object.',
          },
          {
            kind: 'pair',
            leftTitle: 'Hoe Smith hier kwam',
            left: 'Hij hielp Sovrin ontwerpen, een identity-systeem op een publiek ledger. Eén ledger betekende dat iedereen het moest delen, en vertrekken betekende ledgeroorlogen. Een identifier die op de chain of clouddirectory van een leverancier wordt geboren, heeft dezelfde valkuil.',
            rightTitle: 'Wat hij in plaats daarvan bouwde',
            right: 'Een protocol. De AID is de wortel. Witnesses, een database, een bestand of een chain, houden het log alleen vindbaar. Partners verifiëren de bytes. Ze huren de naam niet van je leverancier.',
          },
        ],
      },
      {
        id: 'what',
        title: 'Wat je team zou draaien',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Je adopteert geen „blockchainstrategie”. Je adopteert een laag voor sleutelbeheer en credentials. Wallets houden sleutels. Witnesses publiceren sleutelstatus. Watchers laten je riskteam bevestigen dat zij geen gevorkte geschiedenis te zien krijgen. De web-API en een wizard zijn de onderdelen waarvan de KERI Foundation zegt dat ze nog moeten rijpen, zodat dit geen ritueel alleen voor experts blijft.',
          },
          {
            kind: 'p',
            text: 'Schaal is de zakelijke reden die de essays geven om KERI boven ledger-based identity te verkiezen: Indy-achtige uitgifte duurde in een aangehaald verslag uren voor tienduizenden credentials, omdat globale consensus de bottleneck is. KERI’s control establishment is lokale cryptografische geschiedenis plus een threshold van witnesses, dus het is gebouwd om onder credentials met hoog volume te liggen: supply chain, IoT, customer onboarding, zonder te wachten tot de wereld het eens is.',
          },
          {
            kind: 'words',
            ids: ['vlei', 'witness', 'keri'],
          },
        ],
      },
      {
        id: 'how',
        title: 'Sleutels, personeelsverloop en bewijs',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Mensen vertrekken. Laptops raken zoek. Een ondertekenende sleutel in één HSM met een helpdesk-override is opnieuw een administratieve wortel van vertrouwen.',
          },
          {
            kind: 'p',
            text: 'Pre-rotation en multi-signature zijn de operationele gereedschappen. Huidige sleutels kunnen bij een custodian liggen voor dagelijks ondertekenen. Rotatiebevoegdheid kan bij de organisatie blijven, zodat de custodian zonder medewerking kan worden verwijderd: custodial rotation, in de jargon. De reserve hoort niet op de laptop te staan die ondertekent. Partial pre-rotation laat je sommige sleutels blootleggen en andere in reserve houden. Elke wijziging is een event, ondertekend en receivable, en daarmee kan een auditor reconstrueren wie het bedrijf op een bepaalde datum kon binden. Een gestolen huidige sleutel verschijnt als gepubliceerd event. Een oude sleutel kan die datum niet stilletjes herschrijven.',
          },
          {
            kind: 'p',
            text: 'ACDCs drukken daarna de levende feiten uit: deze AID is de penningmeester, deze delegation is van kracht, dit factuurschema is wat wij ondertekenen. Intrekking is een transaction-event-log entry verankerd aan de KEL, geen telefoontje naar elke partner.',
          },
          {
            kind: 'check',
            q: 'Een cloud-identityleverancier sluit het ledger waar je discovery verankerde. Wat gebeurt er met een KERI AID?',
            options: [
              { t: 'De identifier van de rechtspersoon sterft met die leverancier.', ok: false },
              { t: 'De AID blijft. Je wijst witnesses ergens anders aan. Verifiers spelen hetzelfde log opnieuw af.', ok: true },
              { t: 'Je moet een cryptocurrency kopen om te migreren.', ok: false },
            ],
            explain:
              'Portabiliteit is een uitgesproken ontwerpdoel: de wortel van vertrouwen is de AID, niet het discovery-netwerk.',
          },
        ],
      },
      {
        id: 'next',
        title: 'Een pilot die klein mag zijn',
        minutes: 3,
        blocks: [
          {
            kind: 'list',
            title: 'Een praktische plak',
            items: [
              'Eén rechtspersoon-AID, multi-sig, met rotatiebevoegdheid niet in dezelfde handen als dagelijks ondertekenen.',
              'Eén rolcredential (een ACDC) voor een functie die vandaag wordt aangevallen: betalingsvrijgave of terugbellen van leveranciers.',
              'Witnesses die je niet allemaal zelf beheert, zodat één admin de geschiedenis niet ongemerkt kan herschrijven.',
              'Een verifier in de ontvangende afdeling die de credential controleert in plaats van het e-maildomein te vertrouwen.',
            ],
          },
          {
            kind: 'note',
            title: 'Wie de grote versie al deed',
            text: 'GLEIFs vLEI is de referentie-implementatie die door de foundation- en conferentiematerialen heen wordt genoemd. Vraag leveranciers of zij KERI key state verifiëren, of alleen een badge om een normaal account wikkelen.',
          },
        ],
      },
    ],
  },
  {
    id: 'health',
    name: 'Aisha',
    role: 'Zorgprofessional',
    worry: 'Kunnen we dossiers uitwisselen zonder ieders dossier op één hoop te leggen?',
    blurb: 'Interoperabiliteit is verplicht. Eén database van patiënten is niet hetzelfde als vertrouwen.',
    accent: '#3d6e8a',
    lessons: [
      {
        id: 'why',
        title: 'Het dossier is niet hetzelfde als de bevoegdheid',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'FHIR bracht zorgdata in beweging. Het gaf op zichzelf geen antwoord op wie die data mag vrijgeven, of de afzender de organisatie is die hij zegt te zijn, of hoe een patiënt één feit toont zonder het dossier te tonen.',
          },
          {
            kind: 'p',
            text: 'De conferentie- en projectnotities in deze bibliotheek, HealthKERI, CMS-interoperabiliteitswerk, DirectTrust, privacyarchitectuur in Utah, cirkelen rond dezelfde kloof. Vertrouwensnetwerken hangen nog steeds af van wie de directory beheert. KERI’s voorstel is dat de kliniek, verzekeraar, patiënt en app ieder identifiers hebben die zij controleren, en dat een credential kan worden gecontroleerd nadat het bericht je firewall heeft verlaten.',
          },
          {
            kind: 'note',
            title: 'Geen claim over medische hulpmiddelen',
            text: 'Niets hier zegt dat KERI diagnosticeert, een wettelijk medisch dossier opslaat of HIPAA-processen vervangt. Het is een identiteits- en bewijslaag die mensen in de zorg onder uitwisseling proberen te leggen.',
          },
        ],
      },
      {
        id: 'what',
        title: 'Bewijs dat met de data meereist',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Een ACDC kan zeggen „deze organisatie is deze vLEI” of „deze clinicus heeft deze rol” of „deze patiëntverklaring is uitgegeven door deze AID”, zo geketend dat een ontvanger het delegatiepad kan zien. Graduated disclosure betekent dat een apotheek misschien een dekkingsfeit ziet zonder de probleemlijst te ontvangen.',
          },
          {
            kind: 'p',
            text: 'Omdat de credential aan sleutelstatus is verzegeld, kan een ziekenhuis na een incident sleutels roteren zonder elke historische machtiging opnieuw te ondertekenen voordat de verifier accepteert wat op de dag van uitgifte waar was. Intrekking leeft in een transaction event log dat aan het key log van de uitgever is verankerd.',
          },
          {
            kind: 'p',
            text: 'De patiëntidentifier en de kliniekidentifier zijn verschillende namen. Een voogd, gevolmachtigde of waarnemend arts krijgt bevoegdheid via delegation, die beide kanten verzegelen, niet door een wachtwoord te delen. De essays zijn expliciet dat de houder van de sleutels kan herstellen zonder dat een helpdesk de enige weg terug is. Voor iemand die van kliniek, naam of dekking verandert, kan de identifier blijven terwijl attestaties veranderen. Smiths niet-klinische voorbeeld is het patroon: bewijs één feit, oud genoeg, en onthul niets anders. Een dekkingsfeit of verwijzing heeft dezelfde vorm.',
          },
          {
            kind: 'words',
            ids: ['acdc', 'ipex', 'delegation', 'vlei', 'prerotation'],
          },
        ],
      },
      {
        id: 'how',
        title: 'Na een inbraak op de uitwisselingsserver',
        minutes: 4,
        blocks: [
          {
            kind: 'lead',
            text: 'Smiths framing, in het Five Eyes-antwoord in deze materialen, is dat inbraken op servers en certificaatautoriteiten niet het einde mogen zijn van betrouwbare geschiedenis. Wat controleerbaar blijft, is het key log en de seals.',
          },
          {
            kind: 'p',
            text: 'Als een integratiemotor wordt gecompromitteerd, kan een aanvaller zonder rotatiesleutels de geschiedenis van de organisatie niet vervangen. Een oude sleutel kan geen ander log vervalsen dat verifieert. Een gestolen huidige sleutel kan alleen tekenen door te publiceren, en die publicatie is waar watchers, een verzekeraar of netwerk, naar kijken, in plaats van het woord van de afzender te vertrouwen dat de directory in orde is. Het venster is de tijd tot rotatie, niet de levensduur van het dossier. Machtigingen die vóór het incident zijn verzegeld blijven controleerbaar. Ze zijn niet allemaal stilletjes ongeldig, en ze zijn niet allemaal stilletjes herschreven.',
          },
          {
            kind: 'p',
            text: 'Zet niet ieders patiënt-events op één globaal ledger als wissen telt. Minimale openbaarmaking is een protocolstap, IPEX, in plaats van een API op erewoord die de hele Patient-resource teruggeeft. Smiths prioriteit, als je moet kiezen, is authenticiteit van wie attesteerde en vertrouwelijkheid tegenover partijen die niet in de uitwisseling zaten, niet de belofte dat de specialist met wie je net te maken had niets leerde.',
          },
          {
            kind: 'check',
            q: 'Een specialist moet weten dat een verwijzing echt is, niet de hele voorgeschiedenis van de patiënt. Welk KERI-suite-idee is dat?',
            options: [
              { t: 'Zet het volledige dossier op een publieke blockchain zodat iedereen het kan auditen.', ok: false },
              { t: 'Graduated disclosure van een ACDC: onthul de nodige claims, onder voorwaarden.', ok: true },
              { t: 'Deel één ziekenhuisadminwachtwoord met het EPD van de specialist.', ok: false },
            ],
            explain:
              'IPEX en ACDC-chaining zijn hoe deze bronnen over gedeeltelijke, contractuele openbaarmaking spreken.',
          },
        ],
      },
      {
        id: 'next',
        title: 'Wie in de bibliotheek al aan tafel zit',
        minutes: 3,
        blocks: [
          {
            kind: 'list',
            title: 'Namen die in de bronnotities aan zorg zijn verbonden',
            items: [
              'HealthKERI — Jared Jeffery, Philip Feairheller — zero-trust exchange, FHIR-vormige problemen.',
              'DirectTrust — Scott Stuewe — vertrouwensraamwerken voor Amerikaanse zorguitwisseling.',
              'CMS Blue Button en FHIR-werk — Mark Scrimshire — payer APIs op nationale schaal.',
              'Privacy in Utah en SEDI — publieke-sectoridentiteit die geen surveillancedossier probeert te worden.',
            ],
          },
          {
            kind: 'p',
            text: 'Geef een security architect het developer-pad, en een privacy officer het beleidsmakerspad. Het is hetzelfde protocol, verteld voor de beslissing die ieder echt neemt.',
          },
        ],
      },
    ],
  },
]
