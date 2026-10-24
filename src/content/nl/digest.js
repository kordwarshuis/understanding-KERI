// Digests zijn SHA-256 van de exacte UTF-8-string, getoond als de eerste vier
// hex-tekens, een ellips, en de laatste vier.
// "Kom naar de eik."
//   2da3e8acbf450ec3ea83ff65ce9ef9cafe72e5a6609097701a1dc514c53c00d1
// "Kom naar de eik!"
//   bc13afc77944f562cce08e58336dc5a8bd6761cb7f1d2a014da7b10a2222a8e0
// "Kom naar de eik achter de school. Neem het blauwe schrift mee."
//   bc94d9c3aa35fd8606073f441bf9bb341e897592a93ab2082a25af79a8adb902
// "E7f2q2"
//   c770f4e1c1e36aba883628aea3dbb1ea5c7e6bbbfaa8331a6ddba84551f69bdc

export const scenes = [
  {
    id: 'length',
    kicker: 'Altijd even lang',
    title: 'Elke lengte erin. Eén korte digest eruit.',
    body: 'De kaarten zijn notities: de bytes die erin gaan. Een korte notitie en een langere komen er allebei uit als 256 bits, 64 hex-tekens. Het plaatje houdt de eerste vier en de laatste vier.',
    word: { id: 'digest', label: 'digest' },
    art: {
      shortLabel: 'een korte notitie',
      longLabel: 'een langere notitie',
      short: 'Kom naar de eik.',
      longLines: ['Kom naar de eik', 'achter de school.', 'Neem het blauwe schrift mee.'],
      shortDigest: '2da3…00d1',
      longDigest: 'bc94…b902',
      sameLength: 'even lang',
    },
  },
  {
    id: 'blocks',
    kicker: 'Hoe hij gemaakt wordt',
    title: 'De zin gaat erin als blokken',
    body: 'SHA-256 vult die langere notitie aan tot blokken van 64 bytes en neemt die blokken op volgorde. Elk blok werkt een totaal van 256 bits bij, en het totaal na het laatste blok is de digest. Deze notitie heeft twee blokken. Het plaatje geeft ze een naam en laat de aanvulling buiten beeld.',
    art: {
      wideLines: ['Kom naar de eik achter de school.', 'Neem het blauwe schrift mee.'],
      block1: 'blok 1',
      block2: 'blok 2',
      digest: 'bc94…b902',
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
    kicker: 'Dezelfde controle als de notitie',
    title: 'Een openbare sleutel is ook bytes',
    body: 'De vorige scène controleerde een notitie. Een openbare sleutel is ook een reeks bytes, dus dezelfde controle werkt. KERI publiceert de vingerafdruk van de volgende openbare sleutel, en jij bewaart de sleutel, E7f2q2. Die sleutel later laten zien controleer je zoals de notitie: hash hem, en zoek naar c770\u2060…\u20609bdc.',
    word: { id: 'prerotation', label: 'pre-rotatie' },
    art: {
      noteLabel: 'de notitie, zoals daarnet',
      sentence: 'Kom naar de eik.',
      noteDigest: '2da3…00d1',
      same: 'hetzelfde recept als de notitie',
      keyLabel: 'een openbare sleutel',
      keyRole: 'de volgende',
      key: 'E7f2q2',
      keepLine: 'die bewaar je',
      keyDigest: 'c770…9bdc',
      only: 'dit wordt gepubliceerd',
    },
  },
  {
    id: 'line',
    kicker: 'In één zin',
    title: 'Een vingerafdruk van precies die bytes',
    body: 'Dezelfde bytes, dezelfde digest. Verander je iets, dan komt de nieuwe digest niet overeen. De digest geeft de bytes niet terug. Je kunt iemand de vingerafdruk geven voordat je de bytes geeft.',
    final: true,
    art: {
      sameTitle: 'dezelfde notitie',
      changedTitle: 'één letter anders',
      note: 'Kom naar de eik.',
      before: 'Kom naar de eik',
      mark: '!',
      same: 'zelfde digest',
      unlike: 'geen match',
      hidden: 'geen weg terug',
      seal: '2da3…00d1',
      line: 'Dezelfde bytes. Dezelfde digest.',
    },
  },
]
