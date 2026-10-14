export const story = {
  title: 'Een naam die zijn sloten kan vervangen',
  lede: 'Tien momenten. Dezelfde botten voor iedereen. De stoel die je daarna kiest, bepaalt welk bot ertoe doet.',
  beats: [
    {
      id: 'missing',
      kicker: 'Het gat',
      title: 'Het internet heeft geen laag voor „dit zijn zij echt”',
      body: 'Kim Cameron schreef in 2005 dat het internet is gebouwd zonder identiteitslaag. Nog steeds bestaat er in het internetprotocol niets zoals nummerbehoud: een naam die je meeneemt wanneer je bij een aanbieder weggaat. Wachtwoorden en „Log in met Google” vulden het gat. Ze zetten ook een bedrijf midden in elke kennismaking.',
    },
    {
      id: 'notyou',
      kicker: 'Een onderscheid',
      title: 'Een naam is geen persoon',
      body: 'Een e-mailadres, een handle, een patiëntnummer: dat zijn identifiers. Ze wijzen naar iemand. Ze zijn niet die iemand. Een rijbewijs is ook geen identiteit. Het is een attestatie: een autoriteit die zegt dat deze identifier een recht, rol of leeftijd heeft. KERI gaat over de identifier en de sleutels, zodat latere attestaties iets stabiels en controleerbaars hebben om naar te wijzen. Die drie door elkaar halen is hoe producten „jouw identiteit” beloven en je een login geven.',
    },
    {
      id: 'middle',
      kicker: 'De tussenpersoon',
      title: 'Wie de naam beheert, kan het mis hebben',
      body: 'Het slotje in een browser betekent meestal dat een certificaatautoriteit een sitenaam aan een sleutel koppelde. Dat is een administratieve wortel van vertrouwen. Als die autoriteit wordt misleid, of een insider het account reset, vertrouwt iedereen die de beheerder vertrouwde de verkeerde sleutel. De koppeling ziet er officieel uit. Zij is maar zo sterk als het kantoor dat haar maakte.',
    },
    {
      id: 'chain',
      kicker: 'De omweg',
      title: 'Een gedeeld ledger was het verkeerde gereedschap',
      body: 'Blockchains voorkomen dat een munt twee keer wordt uitgegeven, en daarvoor is één geordende geschiedenis nodig waar het hele netwerk het over eens is. Nog een keer zeggen wie je bent maakt je niet twee mensen. Smith hielp een identity-systeem op basis van een ledger ontwerpen en stapte er daarna uit: één publiek ledger betekent ledgeroorlogen, gedeeld bestuur en een identifier die aan dat ledger vastzit. KERI is het protocol dat hij ontwierp zodat dezelfde sleutels en dezelfde verifieerbare geschiedenis overal werken, zonder gedeelde database.',
    },
    {
      id: 'name',
      kicker: 'Jouw naam',
      title: 'De identifier wordt geboren uit sleutels die jij houdt',
      body: 'Je trekt willekeur, maakt een sleutelpaar, en het eerste ondertekende key event, de inception, is waar de autonomic identifier uit wordt afgeleid. Later ondertekenen bewijst dat je hem nog steeds beheert. Geen register hoeft de geboorte te zegenen. Een overheid, ziekenhuis of GLEIF kan daarna attesteren: „deze identifier hoort bij deze persoon of dit bedrijf.” Die attestatie is een aparte handeling. De identifier was al van jou.',
    },
    {
      id: 'spare',
      kicker: 'De reservesleutel',
      title: 'De sleutel van vandaag tekent. Die van morgen is alleen een hash.',
      body: 'Bij inception publiceer je de ondertekenende sleutel en een digest van de volgende sleutel. De volgende private sleutel hoort niet op het apparaat te staan dat je elke dag gebruikt. Als de huidige sleutel wordt gekopieerd, kan de dief alleen tekenen door een event te publiceren. De witnesses die jij koos hebben dat event. Je onthult de reserve, roteert, zet de gestolen sleutel met pensioen en legt een nieuwe verborgen reserve vast. De AID verandert niet. Een sleutel die al verouderd is kan geen tweede geschiedenis vervalsen die verifieert: de keten toont het conflict. De verborgen reserve is ook het herstel als een quantumcomputer de handtekeningen van vandaag breekt, omdat de hash nooit een publieke sleutel was om te breken.',
      interactive: 'locks',
    },
    {
      id: 'diary',
      kicker: 'Het dagboek',
      title: 'Iedereen kan de geschiedenis van één naam opnieuw afspelen',
      body: 'Elk event bevat de hash van het vorige. Door het key event log opnieuw af te spelen zie je welke sleutels mochten tekenen, en wanneer. Smiths woord hiervoor is eindverifieerbaar: de bytes zijn genoeg, overal en altijd. Een witness is elk systeem dat het log kan bewaren en teruggeven: een ander log, een database, een bestand, zelfs een chain. De witness is niet wie je vertrouwt. Het log is wat je controleert. Twee inconsistente ondertekende versies zijn dupliciteit, en dat is bewijs. Een log dat alleen korter is, is gewoon nog niet af.',
    },
    {
      id: 'note',
      kicker: 'De notitie',
      title: 'Een credential blijft geldig nadat het slot verandert',
      body: 'Een ACDC verzegelt claims aan de sleutelstatus van de uitgever op het moment van uitgifte, via een transaction log dat in het key event log is verankerd. Verifiers spelen dat punt in de geschiedenis opnieuw af. Ze vragen de uitgever niet om elk diploma, elke rol of elke vLEI na een rotatie opnieuw te ondertekenen. Intrekking is een eigen verankerd event. Tot dat event zegt het oude zegel nog steeds wat die dag waar was.',
    },
    {
      id: 'little',
      kicker: 'De kleine onthulling',
      title: 'Bewijs het feit. Houd de rest.',
      body: 'Smiths voorbeeld is heel gewoon: bewijs dat je oud genoeg bent om iets beperkts te kopen, en geef niets anders af, niet je geboortedatum, niet je adres. IPEX is dat gesprek. De discloser kan een deel van een ACDC plus voorwaarden aanbieden, en pas meer onthullen nadat de andere kant akkoord gaat. De voorwaarden zijn bedoeld om ook de volgende ontvanger te binden. De weblink die je hielp het log te vinden, een OOBI, hoort niet bij het bewijs. Een slechte link betekent dat je niets vond. Het betekent niet dat je een vervanger moet geloven.',
    },
    {
      id: 'forget',
      kicker: 'Het afscheid',
      title: 'Je kunt delegeren, en je kunt stoppen',
      body: 'Bevoegdheid kan worden uitgeleend. Een ouder, voogd of penningmeester krijgt een eigen identifier, en beide kanten verzegelen de delegatie zodat een vreemde kan afspelen wie mocht handelen. Dat is niet hetzelfde als jouw sleutels geven. Wanneer een identifier moet eindigen, kan de commitment aan de volgende sleutel worden geleegd en hoeft de geschiedenis niet te blijven leven op één globaal ledger van iedereen. De KERI Foundation beschrijft die scheidbaarheid als steun voor wissen. De naam was nooit gehuurd van een platform dat weigert je te vergeten.',
    },
  ],
}
