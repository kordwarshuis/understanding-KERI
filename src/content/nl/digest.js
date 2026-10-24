// Digests zijn SHA-256 van de exacte UTF-8-string, getoond als de eerste vier
// hex-tekens, een ellips, en de laatste vier.
// "Kom naar de eik."
//   2da3e8acbf450ec3ea83ff65ce9ef9cafe72e5a6609097701a1dc514c53c00d1
// "Kom naar de eik!"
//   bc13afc77944f562cce08e58336dc5a8bd6761cb7f1d2a014da7b10a2222a8e0
// "De reservesleutel blijft in de la. De telefoon heeft alleen de sleutel van vandaag."
//   f52301f13d382c4c3c26f127407dd01b1363bbb9fd6794099dbc8cfd560bccbd
// "E7f2q2"
//   c770f4e1c1e36aba883628aea3dbb1ea5c7e6bbbfaa8331a6ddba84551f69bdc

export const scenes = [
  {
    id: 'length',
    kicker: 'Altijd even lang',
    title: 'Elke lengte erin. Eén korte digest eruit.',
    body: 'SHA-256 neemt de exacte bytes van een zin en geeft 256 bits terug — 64 hex-tekens. Het plaatje houdt de eerste vier en de laatste vier. Een korte notitie en een lange zin komen er even lang uit. Lees elke kaart als één regel. De afbrekingen zijn er alleen om de kaart te laten passen.',
    word: { id: 'digest', label: 'digest' },
    art: {
      short: 'Kom naar de eik.',
      longLines: [
        'De reservesleutel',
        'blijft in de la.',
        'De telefoon heeft alleen',
        'de sleutel van vandaag.',
      ],
      shortDigest: '2da3…00d1',
      longDigest: 'f523…ccbd',
      sameLength: 'even lang',
    },
  },
  {
    id: 'blocks',
    kicker: 'Hoe hij gemaakt wordt',
    title: 'De zin gaat erin als blokken',
    body: 'SHA-256 vult de zin aan tot blokken van 64 bytes en neemt die blokken op volgorde. Elk blok werkt een totaal van 256 bits bij, en het totaal na het laatste blok is de digest. Deze zin heeft twee blokken. Het plaatje geeft ze een naam en laat de aanvulling buiten beeld.',
    art: {
      wideLines: [
        'De reservesleutel blijft in de la.',
        'De telefoon heeft alleen de sleutel van vandaag.',
      ],
      block1: 'blok 1',
      block2: 'blok 2',
      digest: 'f523…ccbd',
    },
  },
  {
    id: 'same',
    kicker: 'Geen geheim',
    title: 'Dezelfde bytes, dezelfde digest',
    body: 'Draai “Kom naar de eik.” twee keer door SHA-256 en beide antwoorden zijn 2da3\u2060…\u206000d1. Iedereen die de zin heeft, kan die digest maken. Het recept gebruikt geen geheime sleutel.',
    art: {
      sentence: 'Kom naar de eik.',
      digest: '2da3…00d1',
      again: 'nog eens',
      same: 'hetzelfde',
      noKey: 'geen geheime sleutel',
    },
  },
  {
    id: 'change',
    kicker: 'Eén teken',
    title: 'Verander de punt, en de digest is een vreemde',
    body: '“Kom naar de eik.” en “Kom naar de eik!” verschillen één teken. Hun digests lijken niet op elkaar. Je ziet dat de bytes verschillen. De digest laat niet zien welk teken verschoof.',
    art: {
      before: 'Kom naar de eik',
      mark: '.',
      changedMark: '!',
      digest: '2da3…00d1',
      changedDigest: 'bc13…a8e0',
      unlike: 'totaal anders',
    },
  },
  {
    id: 'oneway',
    kicker: 'Eén richting',
    title: 'De woorden blijven aan deze kant van de digest',
    body: 'Vanaf 2da3\u2060…\u206000d1 is er geen stap die “Kom naar de eik.” teruggeeft. De digest is een vingerafdruk van die bytes. De bytes zitten er niet in. Daarom kan een digest in het openbaar staan terwijl de zin verborgen blijft.',
    art: {
      sentence: 'Kom naar de eik.',
      digest: '2da3…00d1',
      hidden: 'de woorden blijven verborgen',
    },
  },
  {
    id: 'check',
    kicker: 'Controleren',
    title: 'Controleren doe je door het recept nog eens te draaien',
    body: 'Iemand schreef 2da3\u2060…\u206000d1 op. Een vriend heeft de zin “Kom naar de eik.” en draait SHA-256. De nieuwe digest komt overeen met wat er al stond, dus dit zijn die bytes. Wijkt hij af, dan zijn het andere bytes. De vriend heeft de zin nodig. Een sleutel hoort niet bij de controle.',
    art: {
      friend: 'een vriend',
      sentence: 'Kom naar de eik.',
      digest: '2da3…00d1',
      written: 'opgeschreven',
      matches: 'het klopt',
    },
  },
  {
    id: 'commit',
    kicker: 'Waarom KERI er een opschrijft',
    title: 'Publiceer de digest. Bewaar de bytes.',
    body: 'De volgende openbare sleutel is hier de exacte tekens E7f2q2, en SHA-256 van die tekens is c770\u2060…\u20609bdc. De digest kan in het openbare logboek staan terwijl de sleutel van de telefoon af blijft. Wie later E7f2q2 ziet, draait SHA-256 en zoekt naar c770\u2060…\u20609bdc. Zo legt KERI een reservesleutel vast. Een SAID is hetzelfde idee voor een document: zijn naam is een digest van zijn eigen bytes.',
    word: { id: 'prerotation', label: 'pre-rotatie' },
    art: {
      you: 'jij',
      kept: 'apart gehouden',
      key: 'E7f2q2',
      exact: 'deze tekens',
      keyName: 'volgende openbare sleutel',
      record: 'openbaar logboek',
      digest: 'c770…9bdc',
      only: 'alleen de digest',
    },
  },
  {
    id: 'line',
    kicker: 'In één zin',
    title: 'Een vingerafdruk van precies die bytes',
    body: 'Dezelfde bytes, dezelfde digest. Verander je iets, dan komt de nieuwe digest niet overeen. De digest geeft de bytes niet terug. Je kunt iemand de vingerafdruk geven voordat je de bytes geeft.',
    final: true,
    art: {
      oak: 'eik.',
      oakBang: 'eik!',
      same: 'zelfde digest',
      unlike: 'geen match',
      hidden: 'geen weg terug',
      seal: '2da3…00d1',
      line: 'Dezelfde bytes. Dezelfde digest.',
    },
  },
]
