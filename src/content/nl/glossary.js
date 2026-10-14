export const concepts = [
  {
    id: 'keri',
    term: 'KERI',
    say: 'Uitgesproken als de naam Carrie.',
    plain:
      'Key Event Receipt Infrastructure. Een protocol, geen platform, voor langlevende identifiers die worden bestuurd door sleutels die de houder zelf bewaart. Elke identifier heeft een met hashes aaneengeschakeld key event log. Iedereen kan dat log overal controleren, zonder gedeelde database of certificaatbedrijf als wortel van vertrouwen.',
    why: 'Samuel Smith kwam hierop na zijn werk aan identiteit op basis van ledgers (Sovrin): één gedeeld ledger dwingt iedereen hetzelfde platform op. KERI behoudt de cryptografie en laat de eis vallen dat de wereld één ledger deelt.',
    source: 'Hitchhiker’s Guide, Parts 1–2; Smith interview on self-certifying identifiers',
  },
  {
    id: 'aid',
    term: 'AID',
    say: 'Autonomic Identifier',
    plain:
      'Een zelfcertificerende identifier die langer kan leven dan één sleutel. Hij wordt afgeleid uit de inception event, niet uitgegeven door een beheerder. „Autonomic” betekent zelfbesturend: wie de sleutels beheert, bestuurt de identifier. Het is niet de persoon. Het is de naam waar attestaties naar kunnen verwijzen.',
    why: 'Een gewone zelfcertificerende identifier sterft met zijn sleutel. Een AID blijft bestaan omdat de volgende sleutel al als hash was vastgelegd voordat hij ooit werd gebruikt.',
    source: 'KERI jargon, Part 1; “You control, therefore you are”',
  },
  {
    id: 'scid',
    term: 'Self-certifying identifier',
    say: 'SCID',
    plain:
      'Een identifier die cryptografisch uit een publieke sleutel is afgeleid. De houder bewijst controle door te ondertekenen. Geen derde partij hoeft te bevestigen dat de identifier bestaat. Een gewone SCID kan niet roteren, dus bij een gestolen sleutel moet de identifier worden opgegeven.',
    why: 'Dit is het zaadje dat Smith meenam uit eerdere whitepapers. KERI maakt dat zaadje duurzaam.',
    source: 'KERI jargon, Part 1; Smith interview',
  },
  {
    id: 'prerotation',
    term: 'Pre-rotation',
    say: 'Leg de volgende sleutel vast voordat je hem nodig hebt',
    plain:
      'Ondertekenbevoegdheid en rotatiebevoegdheid gebruiken verschillende sleutels. De huidige sleutel is openbaar en ondertekent gewone handelingen. De volgende sleutel wordt alleen als hash vastgelegd en kan ergens anders liggen, niet op de telefoon die elke dag ondertekent. Rotatie onthult die sleutel één keer, zet de huidige sleutel met pensioen en legt een nieuwe verborgen volgende sleutel vast. Alleen de vooraf vastgelegde sleutel kan de volgende ondertekenende sleutel worden.',
    why: 'Een oude sleutel kan geen nieuwe geschiedenis verzinnen: een vervalst log past niet in de hash-keten, en de tegenspraak is dupliciteit. Een gestolen huidige sleutel kan ondertekenen tot je het merkt, want hem gebruiken betekent een event publiceren dat jouw witnesses kunnen zien. Hashes, anders dan de handtekeningen van vandaag, zijn de herstelroute als een quantumdoorbraak de huidige sleutel breekt.',
    source: 'Hitchhiker’s Guide, Part 2; Security in KERI/ACDC; Smith interview',
  },
  {
    id: 'kel',
    term: 'Key Event Log',
    say: 'KEL',
    plain:
      'De append-only, met hashes verbonden geschiedenis van één identifier: inception, rotaties, interacties die externe data verankeren, en delegaties. Speel het opnieuw af en je weet welke sleutels op elk moment bevoegd waren. Het is eindverifieerbaar: iedereen, overal, altijd, alleen op basis van de bytes.',
    why: 'Smith noemt dit de meest fijnmazige vorm van zero trust. Het log is een verifieerbare datastructuur. Een blockchain is één soort. Een KEL is een andere, en heeft geen gedeeld bestuur nodig.',
    source: 'Hitchhiker’s Guide, Part 2; Smith interview; Security in KERI/ACDC',
  },
  {
    id: 'receipt',
    term: 'Key event receipt',
    say: 'Een ondertekend „ik heb deze versie gezien”',
    plain:
      'Een handtekening over een key event door iemand die het ontving. De controller kan die handtekening bewaren. Later kan de witness niet ontkennen dat die deze versie zag, en ook niet stilletjes een andere geschiedenis verkiezen. Een log plus zijn consistente receipts is een KERL.',
    why: 'Smiths reden voor het middelste woord in KERI: afspraken hebben receipts nodig, zodat beide kanten iets hebben om te tonen. Een receipt is geen beleefdheid. Het is het verhaal waarop je kunt terugvallen.',
    source: 'Hitchhiker’s Guide, Part 2; Smith interview',
  },
  {
    id: 'duplicity',
    term: 'Duplicity',
    say: 'Twee ondertekende geschiedenissen die elkaar tegenspreken',
    plain:
      'Als twee versies van hetzelfde event allebei ondertekend en inconsistent zijn, is dat conflict bewijs. Een log dat alleen korter is en het langere log niet tegenspreekt, is onvolledig, niet duplicitous. KERI belooft niet dat een leugenaar nooit zal spreken. Het belooft dat het tweede verhaal niet als dezelfde geschiedenis verifieert.',
    why: 'Security in KERI/ACDC: elke geslaagde aanval op data die door een KEL wordt ondersteund begint met een gestolen private sleutel, en zo’n aanval is als dupliciteit detecteerbaar.',
    source: 'KERI jargon, Part 1; Security in KERI/ACDC',
  },
  {
    id: 'witness',
    term: 'Witness',
    say: 'Iedereen die het log kan bewaren en ervoor kan tekenen',
    plain:
      'De controller noemt witnesses in een establishment event. Zij bewaren het log, tekenen receipts en antwoorden wanneer de controller offline is. Een witness kan een ander log zijn, een database, een bestand of een blockchain. Omdat de controller hen koos, kan een verifier ook watchers draaien, en jurors die conflicten voor een judge vastleggen.',
    why: 'De witness is niet de wortel van vertrouwen. De AID is dat. Witnesses zorgen dat de geschiedenis vindbaar blijft. Een conflicterende geschiedenis die zij ondertekenen is bewijs tegen de controller, of tegen een gestolen sleutel.',
    source: 'Hitchhiker’s Guide, Part 2; Smith interview',
  },
  {
    id: 'acdc',
    term: 'ACDC',
    say: 'Authentic Chained Data Container',
    plain:
      'Een verifiable credential voor KERI. Claims worden gebundeld, geketend en verzegeld aan de sleutelstatus van de uitgever via een transaction event log dat in het key event log is verankerd. De credential wordt niet weggegooid wanneer sleutels roteren. Intrekking is een eigen verankerd event. Er bestaan compacte veldnamen zodat kleine apparaten er een kunnen dragen.',
    why: 'Verankering is de hoge beveiligingsklasse: de handtekening is gebonden aan de sleutelstatus op dat punt in het log. Een oude sleutel kan geen nieuwe credential antedateren zonder dupliciteit te veroorzaken.',
    source: 'KERI jargon, Part 2; Security in KERI/ACDC; “KERI simplifies”',
  },
  {
    id: 'said',
    term: 'SAID',
    say: 'Self-addressing identifier',
    plain:
      'Een identifier die een cryptografische digest is van de data waarin hij zelf staat, inclusief zijn eigen veld. Verander één bit en de identifier klopt niet meer. AIDs zijn SAIDs van hun inception events. ACDC-schema’s gebruiken een SAID als hun id, dus een verwisseld schemabestand faalt.',
    why: 'Een commitment aan de SAID is een commitment aan precies die serialisatie. Er is geen apart debat over welke versie werd ondertekend.',
    source: 'KERI jargon, Part 2',
  },
  {
    id: 'cesr',
    term: 'CESR',
    say: 'Composable Event Streaming Representation',
    plain:
      'Eén encoding die heen en terug kan tussen leesbare tekst en compacte binary zonder het bewijs te verliezen. Smith had dit nodig zodat KERI niet afhankelijk zou zijn van het winnen van een formatoorlog tussen JSON, CBOR en MsgPack.',
    why: 'De leesbare vorm en de gestreamde vorm kunnen worden aangetoond als hetzelfde cryptografische materiaal. Dat is de eigenschap die telt wanneer een document zowel leesbaar als verifieerbaar moet zijn.',
    source: '“KERI simplifies”; Why we like CESR',
  },
  {
    id: 'oobi',
    term: 'OOBI',
    say: 'Out-of-band introduction',
    plain:
      'Een URL, op het internet dat je al hebt, die naar een key log of naar self-addressing data wijst. De URL wordt niet vertrouwd. Wat je ophaalt moet nog steeds verifiëren. Een slechte introductie is niet erger dan een mislukte lookup: in het ergste geval ontdek je niets, niet dat je een vervalsing accepteert.',
    why: 'Smith liet het idee van een vertrouwd discovery-netwerk los toen hij zag dat eindverifieerbare data geen vertrouwde vinder nodig heeft. Redundante links zijn genoeg om een geblokkeerde lookup te overleven.',
    source: 'KERI jargon, Part 3; Security in KERI/ACDC',
  },
  {
    id: 'ipex',
    term: 'IPEX',
    say: 'Issuance and presentation exchange',
    plain:
      'Eén dialoog voor zowel het geven als het tonen van een ACDC. Een discloser en een disclosee. Apply, offer, agree, grant, admit, of stoppen. Het offer kan alleen enkele velden tonen, plus voorwaarden. Meer wordt pas na akkoord onthuld. Die voorwaarden zijn bedoeld om met de credential mee te reizen: chain-link confidentiality.',
    why: 'Smiths concrete voorbeeld: bewijs dat je oud genoeg bent, en onthul niets anders. Dezelfde vorm past op een rol, een dekkingfeit of een ondertekenbevoegdheid.',
    source: 'KERI jargon, Part 3; Smith interview',
  },
  {
    id: 'vlei',
    term: 'vLEI',
    say: 'Verifiable Legal Entity Identifier',
    plain:
      'GLEIFs verifiable Legal Entity Identifier, uitgegeven met KERI en ACDCs. Hij bindt een rechtspersoon, en de rollen die namens die rechtspersoon mogen spreken, aan autonomic identifiers. GLEIF doet dit voor organisaties, niet voor natuurlijke personen. De cryptografische naam en de juridische naam worden gekoppeld door de attestatie van de uitgever, en die koppeling kan worden getoond of achtergehouden.',
    why: 'Dit is het productiesysteem waar de essays naar wijzen wanneer ze zeggen dat het ontwerp niet meer alleen papier is. Het is ook het patroon voor „een betrouwbare partij verbindt een cryptonieme identifier met een echte organisatie”.',
    source: 'KERI Foundation notes; Smith interview; Why we like KERI',
  },
  {
    id: 'delegation',
    term: 'Delegation',
    say: 'Leen bevoegdheid uit zonder de ander te worden',
    plain:
      'Eén AID kan een andere machtigen. Beide kanten leggen zich vast: het delegerende event verzegelt het gedelegeerde event, en het gedelegeerde event wijst terug. Een ouder, voogd, penningmeester of custodian kan een afgebakend stuk bevoegdheid houden. De keten is opnieuw afspeelbaar. Intrekking is een event, geen telefoontje.',
    why: 'Smiths antwoord voor mensen die de sleutels niet zelf kunnen bedienen: bewijs de guardian en houd de keten verifieerbaar. Custodial rotation is de scherpere versie: iemand anders mag de ondertekenende sleutel houden terwijl jij alleen rotatie houdt, zodat je ondertekenen kunt terugnemen zonder hun hulp.',
    source: 'KERI jargon, Part 1; Smith interview',
  },
  {
    id: 'end',
    term: 'End-verifiability',
    say: 'Controleer de bytes. Vertrouw de boodschapper niet.',
    plain:
      'De sleutelstatus kan door iedereen, overal, altijd worden gecontroleerd, vanuit het log zelf. De host, resolver en URL horen niet bij het bewijs. Als een tussenpartij data kan invoegen zonder een sleutel te hebben, is die data geen KERI-bewijs.',
    why: 'Daarom mag discovery gewoon en onvertrouwd zijn, en daarom zitten credentials die door een KEL worden ondersteund in een andere beveiligingsklasse dan een ondertekende „laatste waarde” die alleen wordt gebruikt om een service te vinden.',
    source: 'Smith interview; Security in KERI/ACDC',
  },
  {
    id: 'gdpr',
    term: 'Recht om vergeten te worden',
    say: 'Wissen, omdat geschiedenissen niet één wereldledger zijn',
    plain:
      'Een volledig geordend globaal ledger maakt het wissen van persoonsgegevens structureel moeilijk. KERI zet niet de events van elke identifier in één gedeelde geschiedenis. De vertrouwensbases zijn scheidbaar, dus de data van een identifier kan worden gewist. De commitment aan de volgende sleutel leegmaken is hoe een identifier wordt verlaten.',
    why: 'De KERI Foundation noemt dit ondersteuning voor gegevensbeschermingsrechten. Een concrete implementatie kan nog steeds kopieën bewaren. Het protocol dwingt de wereld niet om te onthouden.',
    source: 'Hitchhiker’s Guide, Part 1; KERI Foundation',
  },
]
