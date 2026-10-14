export const story = {
    title: 'Een naam die zijn sloten kan veranderen',
    lede: 'Tien beats.Voor iedereen dezelfde botten.De plek die je daarna kiest, bepaalt welk bot ertoe doet.',
    beats: [
        {
            id: 'missing',
            kicker: 'De kloof',
            title: 'Het internet heeft geen laag voor “dit zijn ze echt”',
            body: 'Kim Cameron schreef in 2005 dat het internet is gebouwd zonder een identiteitslaag. Er is nog steeds niets in het internetprotocol dat lijkt op nummerbehoud: een naam die je mee kunt nemen als je van provider verandert. Wachtwoorden en „Inloggen met Google“ vulden het gat op. Ze plaatsten ook een bedrijf in het midden van elke kennismaking.',
        },
        {
            id: 'notyou',
            kicker: 'Een onderscheid',
            title: 'Een naam is geen persoon',
            body: 'Een e-mailadres, een gebruikersnaam, een patiëntnummer: dat zijn identificatiegegevens. Ze verwijzen naar iemand. Ze zijn niet die persoon. Een rijbewijs is ook geen identiteit. Het is een verklaring: een autoriteit die zegt dat deze identificatie een recht, een rol of een leeftijd heeft. KERI draait om de identificatie en de sleutels, zodat latere verklaringen iets stabiels en controleerbaars hebben om naar te verwijzen. Door deze drie door elkaar te halen, beloven producten “jouw identiteit” en geven ze je een login.',
        },
        {
            id: 'middle',
            kicker: 'De tussenpersoon',
            title: 'Wie de naam beheert, kan zich vergissen',
            body: 'Het slotpictogram in een browser betekent meestal dat een certificeringsinstantie een sitenaam aan een sleutel heeft gekoppeld. Dat is een administratieve vertrouwensbasis. Als de instantie wordt misleid, of als een insider het account reset, vertrouwt iedereen die de beheerder vertrouwde op de verkeerde sleutel. De koppeling ziet er officieel uit. Ze is slechts zo sterk als de instantie die haar heeft gemaakt.',
        },
        {
            id: 'chain',
            kicker: 'De omweg',
            title: 'Een gedeeld grootboek was het verkeerde instrument',
            body: 'Blockchains voorkomen dat een munt twee keer wordt uitgegeven, wat één geordende geschiedenis vereist waar het hele netwerk het over eens is. Als je een tweede keer zegt wie je bent, word je daardoor nog geen twee personen. Smith hielp bij het ontwerpen van een op een grootboek gebaseerd identiteitssysteem, maar stapte er vervolgens uit: één openbaar grootboek betekent grootboekoorlogen, gedeeld bestuur en een identificatiecode die aan dat grootboek is gekoppeld. KERI is het protocol dat hij ontwierp, zodat dezelfde sleutels en dezelfde verifieerbare geschiedenis overal werken, zonder dat er een gedeelde database nodig is.',
        },
        {
            id: 'name',
            kicker: 'Je naam',
            title: 'De identificatiecode is afgeleid van de sleutels die je bezit',
            body: 'Je genereert willekeurige waarden, maakt een sleutelpaar, en de eerste ondertekende sleutelgebeurtenis — het begin — is waaruit de autonome identificatiecode wordt afgeleid. Door later te ondertekenen, bewijs je dat je deze nog steeds in bezit hebt. Er is geen register nodig om de geboorte te bekrachtigen. Een overheid, een ziekenhuis of GLEIF kan achteraf bevestigen: „deze identificatiecode behoort toe aan deze persoon of dit bedrijf.” Die bevestiging is een afzonderlijke handeling. De identificatiecode was al van jou.',
        },
        {
            id: 'spare',
            kicker: 'De reserve',
            title: 'De sleutel van vandaag ondertekent. De sleutel van morgen is slechts een hash.',
            body: 'Bij aanvang publiceer je de ondertekeningssleutel en een samenvatting van de volgende sleutel. De volgende privésleutel mag niet op het apparaat staan dat je dagelijks gebruikt. Als de huidige sleutel wordt gekopieerd, kan de dief alleen ondertekenen door een gebeurtenis te publiceren. Getuigen die je hebt gekozen, zullen die gebeurtenis ontvangen. Je onthult de reserve, roteert, trekt de gestolen sleutel in en legt een nieuwe verborgen reserve vast. De AID verandert niet. Een sleutel die al verouderd is, kan geen tweede geschiedenis vervalsen die verifieert: de keten zal het conflict laten zien. De verborgen reservesleutel dient ook als hersteloptie als een kwantumcomputer de huidige handtekeningen zou kraken, omdat de hash nooit een openbare sleutel was die gekraakt kon worden.',
            interactive: 'locks',
        },
        {
            id: 'diary',
            kicker: 'Het dagboek',
            title: 'Iedereen kan de geschiedenis van één naam afspelen',
            body: 'Elke gebeurtenis bevat de hash van de gebeurtenis die eraan voorafgaat. Door het logboek met belangrijke gebeurtenissen te herhalen, weet je welke sleutels konden ondertekenen, en wanneer. Smith noemt dit “eindverifieerbaar”: de bytes zijn voldoende, overal en altijd. Een getuige is elk systeem dat het logboek kan opslaan en teruggeven — een ander logboek, een database, een bestand, zelfs een keten. De getuige is niet degene die je vertrouwt. Het logboek is wat je controleert. Twee inconsistente ondertekende versies duiden op dubbelheid, wat bewijs vormt. Een louter korter logboek is gewoon onvolledig.',
        },
        {
            id: 'note',
            kicker: 'De notitie',
            title: 'Een referentie blijft geldig nadat het slot is gewijzigd',
            body: 'Een ACDC-zegel bevestigt de sleutelstatus van de uitgever op het moment van uitgifte, via een transactielogboek dat is verankerd in het logboek met sleutelgebeurtenissen. Verificateurs spelen dat moment in de geschiedenis opnieuw af. Ze vragen de uitgever niet om elk diploma, elke rol of elke vLEI na een rotatie opnieuw te ondertekenen. Intrekking is een op zichzelf staande, verankerde gebeurtenis. Tot die gebeurtenis geeft het oude zegel nog steeds weer wat op die dag waar was.',
        },
        {
            id: 'little',
            kicker: 'De kleine onthulling',
            title: 'Bewijs het feit.Houd de rest voor jezelf.',
            body: 'Het voorbeeld van Smith is alledaags: bewijs dat je oud genoeg bent om iets te kopen waarvoor leeftijdsbeperkingen gelden, en geef verder niets prijs — geen geboortedatum, geen adres. IPEX is dat gesprek. De openbaarmaker kan een deel van een ACDC plus voorwaarden aanbieden, en pas meer onthullen nadat de andere partij akkoord is gegaan. De voorwaarden zijn bedoeld om ook de volgende ontvanger te binden. De weblink die je hielp het logboek te vinden, een OOBI, maakt geen deel uit van het bewijs. Een slechte link betekent dat je niets hebt gevonden. Dat betekent niet dat je een vervangende link moet geloven.',
        },
        {
            id: 'forget',
            kicker: 'Het afscheid',
            title: 'Je kunt delegeren, en je kunt stoppen',
            body: 'Bevoegdheid kan worden uitgeleend. Een ouder, voogd of penningmeester krijgt een eigen identificatiecode, en beide partijen bezegelen de delegatie zodat een buitenstaander kan nagaan wie bevoegd was om te handelen. Dat is niet hetzelfde als hen je sleutels geven. Wanneer een identificatiecode moet worden beëindigd, kan de “next- key”-verbintenis worden gewist en hoeft de geschiedenis niet in één wereldwijd grootboek van iedereen te blijven staan. De KERI Foundation beschrijft die scheidbaarheid als ondersteuning voor het wissen. De naam is nooit gehuurd van een platform dat weigert je te vergeten.',
        },
    ],
}
