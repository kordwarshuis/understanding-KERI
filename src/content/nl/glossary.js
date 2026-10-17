export const concepts = [
  {
    id: 'keri',
    term: 'KERI',
    say: 'Wordt uitgesproken zoals de naam Carrie.',
    plain:
      'Key Event Receipt Infrastructure. Een protocol — geen platform — voor langdurige identificatiecodes die worden beheerd door sleutels die de houder zelf bewaart. Elke identificatiecode heeft een via een hash-keten gekoppeld logboek van sleutelgebeurtenissen. Iedereen kan dat logboek overal verifiëren, zonder een gedeelde database of een certificaatuitgever als vertrouwensbasis.',
    why: 'Samuel Smith kwam hierop na zijn werk aan op een grootboek gebaseerde identiteit (Sovrin): één gedeeld grootboek dwingt iedereen op hetzelfde platform. KERI behoudt de cryptografie en schrapt de eis dat de wereld één grootboek deelt.',
    source: 'Hitchhiker’s Guide, delen 1–2; interview met Smith over zelfcertificerende identificatiecodes',
  },
  {
    id: 'aid',
    term: 'AID',
    say: 'Autonomic Identifier',
    plain:
      'Een zelfcertificerende identificatiecode die langer meegaat dan welke sleutel dan ook. Deze is afgeleid van de aanmaakgebeurtenis en wordt niet uitgegeven door een beheerder. „Autonomisch“ betekent zelfbesturend: de beheerder van de sleutels bepaalt de identiteitscode. Het is niet de persoon. Het is de naam waarnaar verklaringen kunnen verwijzen.',
    why: 'Een standaard zelfcertificerende identiteitscode verdwijnt samen met zijn sleutel. Een AID blijft bestaan omdat de volgende sleutel, als hash, al was vastgelegd voordat deze ooit werd gebruikt.',
    source: 'KERI-jargon, deel 1; “Je hebt de controle, dus je bestaat”',
  },
  {
    id: 'scid',
    term: 'Zelfcertificerende identificatiecode',
    say: 'SCID',
    plain:
      'Een identificatiecode die cryptografisch is afgeleid van een openbare sleutel. De houder bewijst dat hij de controle heeft door te ondertekenen. Er is geen derde partij nodig om te bevestigen dat de identificatiecode bestaat. Een standaard SCID kan niet worden vernieuwd, dus als een sleutel wordt gestolen, moet de identificatiecode worden opgegeven.',
    why: 'Dit is de seed die Smith uit eerdere whitepapers heeft bewaard. KERI zorgt ervoor dat die seed blijvend is.',
    source: 'KERI-jargon, deel 1; interview met Smith',
  },
  {
    id: 'prerotation',
    term: 'Pre-rotatie',
    say: 'Leg de volgende sleutel vast voordat je hem nodig hebt',
    plain:
      'De ondertekeningsbevoegdheid en de rotatiebevoegdheid zijn verschillende sleutels. De huidige openbare sleutel is gepubliceerd, en de bijbehorende privésleutel ondertekent gewone handelingen. De volgende sleutel wordt alleen vastgelegd als hash van de openbare sleutel, en het sleutelpaar kan ergens anders worden bewaard — niet op de telefoon die dagelijks ondertekent. Bij rotatie wordt die openbare sleutel eenmalig onthuld, wordt de huidige sleutel buiten gebruik gesteld en wordt een nieuwe, verborgen volgende sleutel vastgelegd. Alleen de vooraf vastgelegde sleutel kan de volgende ondertekeningssleutel worden.',
    why: 'Een verouderde sleutel kan geen nieuwe geschiedenis verzinnen: een vervalst logboek komt niet overeen met de hashketen, en die tegenstrijdigheid is dubbelzinnigheid. Een gestolen huidige sleutel kan blijven ondertekenen totdat je het merkt, omdat het gebruik ervan betekent dat er een gebeurtenis wordt gepubliceerd die je eigen getuigen kunnen zien. Hashes zijn, in tegenstelling tot de huidige handtekeningen, het herstelpad tegen een kwantumbreuk van de huidige sleutel.',
    source: 'Hitchhiker’s Guide, deel 2; Beveiliging in KERI/ACDC; Interview met Smith',
  },
  {
    id: 'kel',
    term: 'Key Event Log',
    say: 'KEL',
    plain:
      'De uitsluitend aan te vullen, via een hash-keten opgebouwde geschiedenis van één identificatiecode: ontstaan, rotaties, interacties die externe gegevens verankeren, en delegaties. Speel deze geschiedenis af en je weet welke sleutels bij elke stap gezaghebbend waren. Het is eindverifieerbaar: iedereen, overal, op elk moment, uitsluitend op basis van de bytes.',
    why: 'Smith noemt dit de meest gedetailleerde vorm van zero trust. Het logboek is een verifieerbare gegevensstructuur. Een blockchain is daar een voorbeeld van. Een KEL is een ander voorbeeld, en deze heeft geen gedeeld beheer nodig.',
    source: 'Hitchhiker’s Guide, deel 2; interview met Smith; Beveiliging in KERI/ACDC',
  },
  {
    id: 'receipt',
    term: 'Ontvangstbewijs van een belangrijke gebeurtenis',
    say: 'Een ondertekende verklaring „Ik heb deze versie gezien“',
    plain:
      'Een handtekening bij een belangrijke gebeurtenis door iemand die deze heeft ontvangen. De beheerder kan die handtekening bewaren. Later kan de getuige niet ontkennen dat hij die versie heeft gezien, en kan hij niet stilletjes de voorkeur geven aan een andere geschiedenis. Een logboek plus de bijbehorende consistente ontvangstbewijzen vormt een KERL.',
    why: 'Smiths reden voor het middelste woord van KERI: overeenkomsten hebben ontvangstbewijzen nodig, zodat beide partijen iets hebben om te kunnen laten zien. Een ontvangstbewijs is geen beleefdheid. Het is het rechtsmiddel.',
    source: 'Hitchhiker’s Guide, deel 2; interview met Smith',
  },
  {
    id: 'duplicity',
    term: 'Dubbelzinnigheid',
    say: 'Twee ondertekende verslagen die met elkaar in tegenspraak zijn',
    plain:
      'Als twee versies van dezelfde gebeurtenis beide ondertekend zijn en onderling tegenstrijdig, vormt dat conflict het bewijs. Een logboek dat louter korter is en niet in tegenspraak is met het langere, is onvolledig — niet dubbelzinnig. KERI belooft niet dat een leugenaar nooit zal spreken. Het belooft dat het tweede verhaal niet als dezelfde geschiedenis zal worden geverifieerd.',
    why: 'Beveiliging in KERI/ACDC: elke succesvolle aanval op door KEL ondersteunde gegevens begint met een gestolen privésleutel, en een dergelijke aanval is detecteerbaar als dupliciteit.',
    source: 'KERI-jargon, deel 1; Beveiliging in KERI/ACDC',
  },
  {
    id: 'witness',
    term: 'Getuige',
    say: 'Iedereen die het logboek kan opslaan en ervoor kan ondertekenen',
    plain:
      'De controller wijst getuigen aan bij een instellingsgebeurtenis. Zij bewaren het logboek, ondertekenen ontvangstbewijzen en geven antwoord wanneer de controller offline is. Een getuige kan een ander logboek, een database, een bestand of een blockchain zijn. Omdat de beheerder hen heeft gekozen, kan een verificateur ook waarnemers inzetten, en juryleden die conflicten vastleggen voor een rechter.',
    why: 'De getuige is niet de basis van vertrouwen. Dat is de AID. Getuigen zorgen ervoor dat de geschiedenis vindbaar blijft. Een tegenstrijdige geschiedenis die zij ondertekenen, is bewijs tegen de beheerder of tegen een gestolen sleutel.',
    source: 'Hitchhiker’s Guide, deel 2; interview met Smith',
  },
  {
    id: 'acdc',
    term: 'ACDC',
    say: 'Authentic Chained Data Container',
    plain:
      'Een verifieerbare referentie voor KERI. Claims worden gebundeld, aan elkaar gekoppeld en verzegeld aan de sleutelstatus van de uitgever via een transactielogboek dat is verankerd in het sleutelgebeurtenislogboek. De referentie wordt niet verwijderd wanneer sleutels worden vernieuwd. Intrekking is een afzonderlijke, verankerde gebeurtenis. Er zijn compacte veldnamen beschikbaar, zodat ook kleine apparaten er een kunnen bevatten.',
    why: 'Verankering behoort tot de hoge beveiligingsklasse: de handtekening is gebonden aan de sleutelstatus op dat moment in het logboek. Een verouderde sleutel kan een nieuwe referentie niet met terugwerkende kracht dateren zonder duplicatie te veroorzaken.',
    source: 'KERI-jargon, deel 2; Beveiliging in KERI/ACDC; „KERI vereenvoudigt”',
  },
  {
    id: 'said',
    term: 'SAID',
    say: 'Zelfadresserende identificatie',
    plain:
      'Een identificatie die een cryptografische samenvatting is van de gegevens waarin deze zich bevindt, inclusief het eigen veld. Verander één bit en de identificatie komt niet meer overeen. AID’s zijn SAID’s van hun aanmaakgebeurtenissen. ACDC-schema’s gebruiken een SAID als hun id, dus een verwisseld schemabestand mislukt.',
    why: 'Een verbintenis met de SAID is een verbintenis met precies die serialisatie. Er is geen afzonderlijke discussie over welke versie is ondertekend.',
    source: 'KERI-jargon, deel 2',
  },
  {
    id: 'cesr',
    term: 'CESR',
    say: 'Composable Event Streaming Representation',
    plain:
      'Eén codering die heen en weer schakelt tussen leesbare tekst en compacte binaire gegevens zonder het bewijs te verliezen. Smith had dit nodig zodat KERI niet afhankelijk zou zijn van het winnen van een formaatoorlog tussen JSON, CBOR en MsgPack.',
    why: 'Er kan worden aangetoond dat de leesbare vorm en de gestreamde vorm hetzelfde cryptografische materiaal zijn. Dat is de eigenschap die van belang is wanneer een document zowel leesbaar als verifieerbaar moet zijn.',
    source: '“KERI vereenvoudigt”; Waarom we CESR waarderen',
  },
  {
    id: 'oobi',
    term: 'OOBI',
    say: 'Out-of-band-introductie',
    plain:
      'Een URL, die je al op het internet hebt, die verwijst naar een sleutellogboek of naar zelfadresserende gegevens. De URL is niet vertrouwd. Wat je ophaalt, moet nog steeds worden geverifieerd. Een slechte introductie is niet erger dan een mislukte zoekopdracht: in het ergste geval ontdek je niets, niet dat je een vervalsing accepteert.',
    why: 'Smith liet het idee van een vertrouwd opsporingsnetwerk varen toen hij zag dat eindverifieerbare gegevens geen vertrouwde opzoeker nodig hebben. Redundante links zijn voldoende om een geblokkeerde zoekopdracht te doorstaan.',
    source: 'KERI-jargon, deel 3; Beveiliging in KERI/ACDC',
  },
  {
    id: 'ipex',
    term: 'IPEX',
    say: 'Uitgifte- en presentatie-uitwisseling',
    plain:
      'Eén dialoog voor zowel het verstrekken als het tonen van een ACDC. Een openbaarmaker en een ontvanger. Aanvragen, aanbieden, akkoord gaan, toekennen, toelaten — of stoppen. Het aanbod mag slechts enkele velden onthullen, plus voorwaarden. Meer wordt onthuld na overeenstemming. Die voorwaarden zijn bedoeld om de referentie te blijven volgen: vertrouwelijkheid via kettingkoppelingen.',
    why: 'Het concrete voorbeeld van Smith: bewijs dat je oud genoeg bent, en maak verder niets bekend. Dezelfde structuur geldt voor een rol, een dekkingsfeit of een ondertekeningsbevoegdheid.',
    source: 'KERI-jargon, deel 3; interview met Smith',
  },
  {
    id: 'vlei',
    term: 'vLEI',
    say: 'Verifieerbare identificatiecode voor rechtspersonen',
    plain:
      'De verifieerbare identificatiecode voor rechtspersonen van GLEIF, uitgegeven samen met KERI en ACDCs. Deze koppelt een rechtspersoon, en de rollen die namens deze rechtspersoon mogen optreden, aan autonome identificatiecodes. GLEIF doet dit voor organisaties, niet voor natuurlijke personen. De cryptografische naam en de juridische naam zijn aan elkaar gekoppeld door de verklaring van de uitgever, en deze koppeling kan worden getoond of achtergehouden.',
    why: 'Dit is het productiesysteem waarnaar de essays verwijzen wanneer ze zeggen dat het ontwerp niet langer alleen op papier staat. Het is ook het patroon voor „een gerenommeerde partij koppelt een cryptonome identificatiecode aan een echte organisatie“.',
    source: 'Aantekeningen van de KERI Foundation; interview met Smith; Waarom we KERI waarderen',
  },
  {
    id: 'delegation',
    term: 'Delegatie',
    say: 'Bevoegdheid verlenen zonder zelf de andere partij te worden',
    plain:
      'De ene AID kan een andere autoriseren. Beide partijen verbinden zich hiertoe: de delegerende gebeurtenis bekrachtigt de gedelegeerde gebeurtenis, en de gedelegeerde gebeurtenis verwijst terug. Een ouder, voogd, penningmeester of beheerder kan een bepaald deel van de bevoegdheid bezitten. De keten is herhaalbaar. Intrekking is een gebeurtenis, geen telefoontje.',
    why: 'Smiths antwoord voor mensen die de sleutels niet zelf kunnen beheren: bewijs wie de voogd is, en houd de keten verifieerbaar. Rotatie van de bewaarder is de scherpere versie — iemand anders kan de ondertekeningssleutel bezitten terwijl jij alleen de rotatie in handen hebt, zodat je het ondertekenen weer over kunt nemen zonder hun hulp.',
    source: 'KERI-jargon, deel 1; interview met Smith',
  },
  {
    id: 'end',
    term: 'Verifieerbaarheid aan het einde',
    say: 'Controleer de bytes. Vertrouw de boodschapper niet.',
    plain:
      'De sleutelstatus kan door iedereen, overal en op elk moment worden geverifieerd aan de hand van het logboek zelf. De host, de resolver en de URL maken geen deel uit van het bewijs. Als een tussenpersoon gegevens kan invoegen zonder een sleutel te bezitten, vormen die gegevens geen KERI-bewijs.',
    why: 'Dit is de reden waarom het opsporen van diensten gewoon en onbetrouwbaar mag zijn, en waarom door KEL ondersteunde inloggegevens in een andere beveiligingsklasse vallen dan een ondertekende „laatste waarde“ die alleen wordt gebruikt om een dienst te vinden.',
    source: 'Interview met Smith; Beveiliging in KERI/ACDC',
  },
  {
    id: 'gdpr',
    term: 'Recht om vergeten te worden',
    say: 'Wissen, omdat geschiedenissen geen wereldwijd grootboek vormen',
    plain:
      'Een volledig geordend wereldwijd grootboek maakt het verwijderen van persoonsgegevens structureel moeilijk. KERI plaatst de gebeurtenissen van elke identificatie niet in één gedeelde geschiedenis. De vertrouwensbasissen zijn scheidbaar, zodat de gegevens van een identificatiecode kunnen worden gewist. Het leegmaken van de ‘next-key’-verbintenis is de manier waarop een identificatiecode wordt opgegeven.',
    why: 'De KERI Foundation stelt dit voor als ondersteuning van gegevensbeschermingsrechten. Een bepaalde implementatie kan nog steeds kopieën bewaren. Het protocol dwingt de wereld niet om te onthouden.',
    source: 'Hitchhiker’s Guide, Deel 1; KERI Foundation',
  },
]
