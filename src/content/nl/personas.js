export const personas = [
  {
    id: "parent",
    name: "Maya",
    role: "Bezorgde ouder",
    worry: "Wie beheert de sleutels tot de namen van mijn gezin?",
    blurb: "Je wilt dat het internet je kind kent als persoon, niet als een profiel dat een bedrijf kan verkopen of kwijtraken.",
    accent: "#c46b4a",
    lessons: [
      {
        id: "why",
        title: "Waarom dit een familiekwestie is",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Een schoolportaal, een inlog voor de gezondheidszorg, \"Inloggen met Google\": dit zijn identificatoren die door iemand anders zijn uitgegeven. Ze verwijzen naar je kind. Ze *zijn* niet je kind. De aanbieder kan ze resetten, inzien of uitschakelen.",
          },
          {
            kind: "p",
            text: "KERI scheidt drie zaken die in veel teksten door elkaar worden gehaald. Identiteit is de persoon zelf. Een identificator is een naam die naar die persoon verwijst. Een attestatie is een verklaring — bijvoorbeeld \"hier ingeschreven\" of \"oud genoeg voor deze excursie\" — die aan die naam is gekoppeld. De autonome identificator is de naam die je gezin zelf kan behouden. Scholen en klinieken kunnen nog steeds verklaringen afgeven (attesteren). Ze hoeven daarvoor niet de eigenaar van de naam te zijn.",
          },
          {
            kind: "pair",
            leftTitle: "De huidige situatie",
            left: "Geen sleutels in eigen beheer betekent geen identificator in eigen beheer. Bij een wachtwoordreset bepaalt een beheerder of de naam nog steeds bij je kind hoort. Als die instantie een fout maakt, of informatie over een gebeurtenis verkoopt, kun je meestal niet bewijzen wie er precies heeft gecommuniceerd.",
            rightTitle: "Wat KERI verandert",
            right: "De naam is afgeleid van sleutels die jij beheert. Het wijzigen van de sleutels verandert de naam niet. Een latere verklaring kan bevestigen dat \"deze naam bij dit kind hoort\", zonder dat het platform de ultieme vertrouwensbron hoeft te zijn.",
          },
          {
            kind: "note",
            title: "Een nuchtere grens",
            text: "KERI voedt je kind niet op en voorkomt niet dat iemand liegt in een bericht. Het maakt van een gestolen sleutel een openbaar en herstelbaar voorval, en het maakt de stelling \"wij zijn de enige kopie van wie u bent\" overbodig. Samuel Smith is duidelijk over een bijbehorende beperking: je kunt weliswaar beschikken over sterke authenticiteit en vertrouwelijkheid ten opzichte van vreemden, maar toch geen perfecte privacy hebben tegenover iemand met wie je daadwerkelijk zaken doet. Het doel is dat een derde partij, die nooit bij de interactie betrokken was, de relatie niet kan hergebruiken.",
          },
        ],
      },
      {
        id: "what",
        title: "Wat KERI is, zonder de witte jas",
        minutes: 5,
        blocks: [
          {
            kind: "lead",
            text: "KERI staat voor Key Event Receipt Infrastructure (infrastructuur voor ontvangstbevestigingen van sleutelgebeurtenissen). De uitspraak is hetzelfde als die van de naam Carrie. Het is een protocol, geen app en geen blockchain waar je lid van wordt. De naam die langdurig meegaat, is een 'autonomic identifier' — een AID. 'Autonomic' betekent zelfbesturend.",
          },
          {
            kind: "p",
            text: "De AID ontstaat op het moment dat je de eerste sleutelgebeurtenis ondertekent. Een logboek van sleutelgebeurtenissen legt vast wat er daarna gebeurt. Iemand die een gebeurtenis ontvangt, kan een ontvangstbevestiging ondertekenen: \"Ik heb deze versie gezien.\" Dankzij die bevestiging hebben beide partijen later iets om te laten zien. Zoals Smith zegt: het heet niet voor niets een infrastructuur voor ontvangstbevestigingen.",
          },
          {
            kind: "list",
            title: "Vijf fasen, in familietermen",
            items: [
              "Inception (ontstaan): de naam wordt gecreëerd op basis van sleutels die jij in bezit hebt.",
              "Pre-rotation (voorafgaande rotatie): de volgende sleutel wordt toegezegd in de vorm van een hash en kan ergens anders worden bewaard dan op de telefoon.",
              "Rotation (rotatie): de huidige sleutel wordt buiten gebruik gesteld. De naam blijft behouden.",
              "Delegation (delegering): een ouder of voogd krijgt een bewijsbare, beperkte bevoegdheid — gekoppeld aan hun eigen naam, niet aan een kopie van de sleutels van het kind.",
              "Revocation (intrekking): een bevoegdheid eindigt via een gebeurtenis die door iedereen opnieuw kan worden afgespeeld; dit omvat ook het opgeven van de naam zelf.",
            ],
          },
          {
            kind: "words",
            ids: [
              "keri",
              "aid",
              "kel",
            ],
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
            text: "Stel je voor dat de sleutel aan de schooltas wordt gekopieerd. Bij een normaal account heb je een helpdesk nodig. Bij een 'vingerafdruk van een sleutel' (basisconcept) zijn de naam en de gestolen sleutel hetzelfde object; je moet ze dus beide opgeven.",
          },
          {
            kind: "p",
            text: "KERI scheidt het ondertekenen van het herstel. De huidige sleutel bevestigt: \"Ja, wij zijn dit.\" De volgende sleutel is slechts een hash in het logboek, en de privésleutel voor noodgevallen (reserve) hoort niet op diezelfde tas thuis. Een dief die de gekopieerde sleutel gebruikt, moet een gebeurtenis publiceren. Door jou gekozen getuigen houden die publicatie tegen; de schade blijft dus bestaan ​​totdat jij het opmerkt en de sleutels vervangt (roteert) — niet totdat een bedrijf jou gelooft. Je maakt de reservesleutel bekend, trekt de gekopieerde sleutel in en legt een nieuwe reservesleutel vast. Leraren blijven dezelfde AID herkennen.",
          },
          {
            kind: "p",
            text: "De naam tonen is niet hetzelfde als het kind tonen. Een ACDC kan aantonen dat iemand \"oud genoeg is voor deze uitstap\" of \"hier ingeschreven is\", zonder de geboortedatum, het adres of de foto prijs te geven. Als een kind nog geen sleutels kan beheren, biedt delegatie de ouder een verifieerbaar voogdijschap. De identificatie van de ouder en die van het kind blijven gescheiden, en de koppeling kan worden ingetrokken.",
          },
          {
            kind: "words",
            ids: [
              "prerotation",
              "delegation",
              "acdc",
              "ipex",
              "gdpr",
            ],
          },
          {
            kind: "check",
            q: "Als Maya haar sleutels vervangt (roteert) na diefstal van haar laptop, wat gebeurt er dan met de AID van het gezin?",
            options: [
              {
                t: "Deze moet worden weggegooid en elke school moet opnieuw beginnen.",
                ok: false,
              },
              {
                t: "De naam blijft behouden. De gestolen sleutel verliest zijn autoriteit. Er wordt een nieuwe reservesleutel vastgelegd.",
                ok: true,
              },
              {
                t: "Een stemming via blockchain bepaalt of het gezin nog bestaat.",
                ok: false,
              },
            ],
            explain: "Die bestendigheid is precies waar het bij 'pre-rotation' om draait. De identificatiecode blijft bestaan, ook als een specifieke sleutel wordt vervangen.",
          },
        ],
      },
      {
        id: "next",
        title: "Wat u kunt vragen",
        minutes: 3,
        blocks: [
          {
            kind: "lead",
            text: "U hoeft zelf geen 'witness pool' (getuigennetwerk) te beheren. U hebt wel een manier nodig om toegang te krijgen tot het volgende portaal dat om een ​​gezinsinlog vraagt.",
          },
          {
            kind: "list",
            title: "Vragen om te stellen aan een school, kliniek of app-aanbieder",
            items: [
              "Als we een telefoon verliezen, wie roteert de sleutels dan: wij of uw helpdesk?",
              "Waar wordt de reservesleutel bewaard als deze niet op het dagelijks gebruikte toestel staat?",
              "Kunt u controleren of iemand 'aangemeld' is of 'oud genoeg' is, zonder de rest van de gegevens op te slaan?",
              "Als de voogd verandert, gaat het dan om een ​​intrekbare volmacht of om een ​​gedeeld wachtwoord?",
              "Als uw leverancier verdwijnt, blijft de identificatiecode dan bestaan, of was deze gekoppeld aan hun systeem?",
            ],
          },
          {
            kind: "note",
            title: "Het scenario doorlopen",
            text: "Het gedeelde verhaal op Hearth, 'Een naam die van slot kan wisselen', draait om hetzelfde idee, maar dan zonder dat er een functietitel aan verbonden is.",
          },
        ],
      },
    ],
  },
  {
    id: "legal",
    name: "Elena",
    role: "Jurist",
    worry: "Wat zou standhouden als bewijs?",
    blurb: "U hecht waarde aan autoriteit, onweerlegbaarheid, contracten en de vraag of een digitale handeling kan worden toegeschreven aan de juiste juridische entiteit.",
    accent: "#6d5a7a",
    lessons: [
      {
        id: "why",
        title: "Het toeschrijvingsprobleem",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "De waarde van een handtekening hangt af van het verhaal over welke sleutel op welk moment gezaghebbend was, en of een tweede ondertekend verhaal het eerste kan vervangen zonder dat dit wordt opgemerkt.",
          },
          {
            kind: "p",
            text: "Phil Windleys drie architecturen – zoals ze in vakartikelen worden aangeduid – zijn als volgt: bij *administratieve identiteit* koppelt een instantie (zoals een certificaatautoriteit of platformbeheerder) een naam aan een sleutel; deze koppeling faalt als de instantie een fout maakt. Bij *algoritmische identiteit* wordt de naam gekoppeld op een gedeeld grootboek (ledger); de koppeling is sterk, de geschiedenis is moeilijk te wissen en de identificator is aan dat grootboek gebonden. *Autonome identiteit* (zoals KERI) legt de primaire basis voor vertrouwen bij de beheerder; het logboek van sleutelgebeurtenissen is ondergeschikt: het is via hashes geketend en kan door de partijen zelf worden bijgehouden.",
          },
          {
            kind: "p",
            text: "Een ontvangstbevestiging is een onderdeel dat juristen niet over het hoofd mogen zien. Smiths keuze voor deze term is praktisch van aard: beide partijen bij een overeenkomst hebben behoefte aan een verifieerbaar verslag van wat er is waargenomen, zodat er een mogelijkheid tot verhaal bestaat. Dubbelzinnigheid – twee tegenstrijdige, ondertekende geschiedenissen – geldt als concreet bewijs. Een korter logboek dat niet in strijd is met het langere logboek, is simpelweg onvolledig en vormt geen tweede verhaal. Bovendien kan een verouderde sleutel dat tweede verhaal niet creëren: het vervalsen van een alternatief logboek van sleutelgebeurtenissen komt aan het licht als dubbelzinnigheid. Een compromittering van de huidige sleutel is een andere, beperktere kwestie; bij gebruik ervan wordt een gebeurtenis gepubliceerd op infrastructuur die door de beheerder is aangewezen, waardoor het risico beperkt blijft tot de tijd die nodig is voor detectie en sleutelvervanging.",
          },
          {
            kind: "words",
            ids: [
              "duplicity",
              "receipt",
              "kel",
              "end",
            ],
          },
        ],
      },
      {
        id: "what",
        title: "vLEI, ACDC en het document",
        minutes: 5,
        blocks: [
          {
            kind: "lead",
            text: "GLEIF geeft verifieerbare Legal Entity Identifiers (LEI's) uit op basis van KERI en ACDC's. Een organisatie kan cryptografisch aantonen welke juridische entiteit aan het woord is en welke rol gemachtigd is om namens die entiteit te spreken.",
          },
          {
            kind: "p",
            text: "Een ACDC is een verifieerbaar bewijsstuk (verifiable credential) met een strenger beveiligingsmodel: compact, koppelbaar en voorzien van een schema dat is vastgelegd via een zelf-adresserende identifier, zodat het schema zelf niet onder het document vandaan kan worden gewisseld. CESR maakt het mogelijk dat hetzelfde bewijs zowel als leesbare tekst als in binaire vorm bestaat. De praktische implicatie is eenvoudig: er is geen tweede procedure nodig om aan te tonen dat het leesbare contract en de verzonden bytes identiek zijn.",
          },
          {
            kind: "p",
            text: "IPEX is het uitwisselingsmechanisme. Een partij die informatie deelt (de 'discloser'), kan een gedeeltelijk inzicht bieden in combinatie met voorwaarden — een Ricardiaans contract binnen de stroom van bewijsstukken — en pas na overeenstemming meer informatie vrijgeven. Vertrouwelijkheid via 'chain-linking' (kettingkoppeling) beoogt deze voorwaarden door te geven aan de volgende ontvanger, en niet alleen aan de eerste.",
          },
          {
            kind: "words",
            ids: [
              "vlei",
              "acdc",
              "cesr",
              "ipex",
              "said",
            ],
          },
        ],
      },
      {
        id: "how",
        title: "Sleutelwijziging zonder de hele documentatie opnieuw te moeten opstellen",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "In veel systemen betekent het wijzigen (roteren) van een ondertekeningssleutel dat elk bestaand bewijsstuk opnieuw moet worden uitgegeven. Dit ondermijnt zowel de operationele beveiliging als de juridische continuïteit.",
          },
          {
            kind: "p",
            text: "Een ACDC is gekoppeld aan de sleutelstatus via een transactie-eventlogboek dat verankerd is in het sleutel-eventlogboek. Een latere sleutelwijziging verandert die koppeling niet en maakt eerdere bewijsstukken niet automatisch ongeldig. Een verificateur speelt de oprichtingsgebeurtenissen opnieuw af en controleert welke sleutel op dat moment gezaghebbend was. De herstelsleutel was vóór het incident al als hash vastgelegd; de bewering \"we hebben na de inbreuk een nieuwe sleutel bedacht\" kan dus niet ten onrechte worden gepresenteerd als de vooraf vastgelegde sleutelwijziging. Intrekking is een expliciete, latere gebeurtenis. Zolang die niet heeft plaatsgevonden, blijft de oude koppeling geldig voor die specifieke datum.",
          },
          {
            kind: "note",
            title: "Verwijdering, en wat dat niet belooft",
            text: "Er is geen enkel, volledig geordend grootboek van alle gebeurtenissen van iedereen; de gegevens van een identifier zijn dus niet structureel gedoemd om eeuwig te blijven bestaan. Zowel de *Hitchhiker’s Guide* als de KERI Foundation zien dit als een argument vóór de mogelijkheid tot verwijdering. Juridisch adviseurs moeten echter wel de implementatie bestuderen: getuigen, wederpartijen en leveranciers kunnen kopieën bewaren. Het protocol staat toe dat informatie wordt 'vergeten', maar een contract doet dat wellicht niet.",
          },
          {
            kind: "check",
            q: "Twee ondertekende sleutelgeschiedenissen voor dezelfde AID spreken elkaar tegen. Hoe wordt dit in KERI-termen genoemd?",
            options: [
              {
                t: "Een onschuldige synchronisatievertraging. Korter betekent altijd fout.",
                ok: false,
              },
              {
                t: "Dupliciteit: onweerlegbaar bewijs van inconsistente geschiedenissen.",
                ok: true,
              },
              {
                t: "Niets, tenzij een door de rechtbank aangewezen certificaatautoriteit er een bevestigt.",
                ok: false,
              },
            ],
            explain: "Een logboek dat simpelweg korter is, kan onvolledig zijn. Een tegenstrijdige, ondertekende versie duidt op dupliciteit.",
          },
        ],
      },
      {
        id: "next",
        title: "Verder lezen",
        minutes: 3,
        blocks: [
          {
            kind: "list",
            title: "Belangrijkste uitleg bij dit traject",
            items: [
              "Hitchhiker’s Guide to KERI, deel 1 en 2 — waarom geen globaal grootboek, en uitleg over AID, pre-rotatie, sleutelgebeurtenis en ontvangstbevestiging.",
              "KERI-jargon, deel 1–3 — waaronder het onderscheid tussen dupliciteit en een simpelweg onvolledig logboek.",
              "Beveiliging in KERI/ACDC — bewijs op basis van KEL (Key Event Log), en waarom een ​​verouderde sleutel geen alternatieve geschiedenis kan vervalsen.",
              "GLEIF vLEI en de ToIP KERI-, ACDC- en CESR v1.0-teksten, goedgekeurd op 21 januari 2026.",
            ],
          },
          {
            kind: "p",
            text: "Dit onderdeel dient als leeswijzer; het is geen juridisch advies en evenmin de officiële specificatie.",
          },
        ],
      },
    ],
  },
  {
    id: "policy",
    name: "Jonas",
    role: "Beleidsmaker",
    worry: "Beveiliging zonder een surveillancestaat te creëren",
    blurb: "Je staat voor de keuze tussen \"iedereen volgen\" en \"hopen dat datalekken beperkt blijven\". KERI biedt een derde ontwerpoptie.",
    accent: "#3f6f62",
    lessons: [
      {
        id: "why",
        title: "De scherpe keuze, zorgvuldig verwoord",
        minutes: 5,
        blocks: [
          {
            kind: "lead",
            text: "Samuel Smith, de bedenker van KERI, stelt een publieke vraag naar aanleiding van waarschuwingen van de 'Five Eyes'-alliantie over AI en cyberdefensie: als aanvallen sneller verlopen dan menselijke reacties, beveiligen we de samenleving dan door middel van voortdurende monitoring, of door verifieerbare autoriteit die bij mensen en organisaties zelf blijft?",
          },
          {
            kind: "p",
            text: "Het antwoord van KERI is niet \"geen identiteit\". Het gaat om een ​​identificator waarbij de 'root of trust' (basis van vertrouwen) gevormd wordt door de sleutels van de beheerder, aangevuld met verklaringen die verifieerbaar zijn zonder dat er een permanent gedragsdossier nodig is. Smith is specifieker dan de slogan doet vermoeden. Hij stelt authenticiteit en vertrouwelijkheid boven het streven om privacy voor altijd perfect te houden: interactie met iemand onthult nu eenmaal iets aan diegene. Wat absoluut voorkomen moet worden, is dat een derde partij – die geen deel uitmaakt van de relatie – gegevens uit die interactie gaat delven. Hij noemt de combinatie van authenticiteit en vertrouwelijkheid de werkbare oplossing. 'Graduated disclosure' (gedoseerde vrijgave) zorgt ervoor dat er zo min mogelijk wordt prijsgegeven. Dankzij ontvangstbevestigingen blijft de handeling toewijsbaar aan de juiste partij.",
          },
          {
            kind: "pair",
            leftTitle: "Vertrouwen gebaseerd op surveillance",
            left: "Een centrale waarnemer moet voldoende zien, en vaak genoeg, om te kunnen bepalen wie mag handelen. Een inbreuk bij die waarnemer betekent een inbreuk voor iedereen.",
            rightTitle: "Vertrouwen volgens het KERI-model",
            right: "Een verificateur controleert een bewijs. Zelfs als een server, een cloud of zelfs een certificaatautoriteit gecompromitteerd raakt, blijft de gezaghebbende sleutelstatus bewaard in logs die opnieuw kunnen worden afgespeeld. Geheimen die nooit zijn prijsgegeven — de volgende sleutels — blijven de herstelroute vormen.",
          },
          {
            kind: "note",
            title: "Utah en SEDI",
            text: "Initiatieven in de publieke sector rondom door de staat erkende digitale identiteit (SEDI) — waaronder de voortrekkersrol van Utah op het gebied van privacy en de SEDI-besprekingen in dit materiaal — beschouwen KERI als infrastructuur voor publiek-private samenwerking: de overheid kan erkenning verlenen zonder zelf de database met ieders sleutels te hoeven beheren.",
          },
        ],
      },
      {
        id: "what",
        title: "Wat u daadwerkelijk erkent",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Geen cryptocurrency en geen nationale inlogmethode. Wel een protocolsuite: KERI voor identifiers en sleutelgeschiedenis, ACDC voor credentials, en CESR zodat hetzelfde bewijs zowel tekstueel als binair kan zijn. Voor discovery (het opzoeken van gegevens) kunnen gewone webadressen worden gebruikt. Die adressen vormen op zichzelf geen bron van vertrouwen. Smith liet een vertrouwd discovery-netwerk vallen toen hij inzag dat het ergste wat er bij een opzoekactie kan gebeuren, is dat je niets vindt — want alles wat je wél vindt, moet nog steeds op eigen kracht worden geverifieerd.",
          },
          {
            kind: "p",
            text: "Het blockchain-trilemma draait om 'double-spending' (dubbele uitgave): één gedeeld grootboek met een strikte volgorde kan niet tegelijkertijd decentralisatie, beveiliging en schaalbaarheid maximaliseren. Het herhalen van \"dit zijn mijn sleutels\" creëert geen tweede persoon; voor identiteit is dat soort consensus dus niet nodig. KERI kan nog steeds een chain als getuige (witness) gebruiken. De identifier ontstaat daar niet en zit er ook niet aan vast. De ontwikkeling van administratieve namen, via namen die aan een grootboek gebonden zijn, naar autonome namen vormt de beleidsgeschiedenis in deze teksten. Wie \"gedecentraliseerde identiteit\" steunt zonder aan te geven wie de bevoegdheid heeft tot rotatie (wijziging van sleutels), valt terug op de eerste van die categorieën.",
          },
          {
            kind: "list",
            title: "Eigenschappen die aansluiten bij beleidsdoelen",
            items: [
              "Overdraagbaarheid: geen afhankelijkheid van één specifiek grootboek (lock-in) als een leverancier of chain uitvalt.",
              "Verwijdering: persoonsgegevens hoeven niet op één wereldwijd, geordend grootboek te staan.",
              "Herstel: een gestolen ondertekeningssleutel wordt gepubliceerd, is zichtbaar en kan worden vervangen (geroteerd). De reservesleutel was al vastgelegd vóór de diefstal.",
              "Toeschrijving: dubbelzinnig gedrag (dupliciteit) geldt als bewijs. Een verouderde sleutel kan de officiële geschiedenis niet ongemerkt vervangen.",
              "Proportionaliteit: stapsgewijze vrijgave van informatie in plaats van alles-of-niets-datadelen.",
            ],
          },
        ],
      },
      {
        id: "how",
        title: "Adoptie zonder te doen alsof het al voltooid is",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "De feitelijke status volgens deze bronnen: de vLEI van GLEIF wordt daadwerkelijk gebruikt. Het doel van de KERI Foundation blijft infrastructuur die met \"één klik\" werkt — wallet, witness, watcher, web, wizard — omdat mensen de onderliggende techniek niet hoeven te begrijpen om veilig te kunnen zijn.",
          },
          {
            kind: "p",
            text: "Op 21 januari 2026 keurde de stuurgroep van Trust Over IP de KERI-, ACDC- en CESR-specificaties (versie 1.0) goed. Dit is een mijlpaal op het gebied van standaarden, geen verplichting. Initiatieven rond HealthKERI, fraudebestrijding bij betaalkaartsystemen en telecom, en platforms voor zakelijke credentials laten een patroon zien: gereguleerde sectoren hebben meer behoefte aan verifieerbare rollen dan aan nóg een inlogmethode.",
          },
          {
            kind: "p",
            text: "Een beleid dat voorschrijft \"gebruik gedecentraliseerde identiteit\" zonder te specificeren wie de bevoegdheid heeft tot sleutelrotatie, leidt slechts tot een administratieve PKI met extra tussenstappen. De vraag die in richtlijnen moet worden opgenomen, is: wat blijft betrouwbaar na een inbreuk bij de operator, en wie kan de sleutels roteren?",
          },
          {
            kind: "check",
            q: "Waarom stellen deze bronnen dat identiteitssystemen zonder blockchain-consensus kunnen werken?",
            options: [
              {
                t: "Omdat blockchains voor overheden verboden zijn.",
                ok: false,
              },
              {
                t: "Omdat identiteit geen bescherming tegen 'double-spending' vereist, maar een consistente sleutelhistorie.",
                ok: true,
              },
              {
                t: "Omdat KERI helemaal geen gegevens kan opslaan.",
                ok: false,
              },
            ],
            explain: "KERI kan gegevens verankeren en zelfs een blockchain als 'getuige' (witness) gebruiken. Het weigert echter om wereldwijde consensus als basis voor vertrouwen (root of trust) te hanteren.",
          },
        ],
      },
      {
        id: "next",
        title: "Een korte samenvatting om door te sturen",
        minutes: 3,
        blocks: [
          {
            kind: "note",
            title: "Eén alinea",
            text: "KERI is een gedecentraliseerd protocol voor sleutelbeheer ten behoeve van persistente, zelfcertificerende identifiers. De controle ligt bij de eigenaar (controller), sleutelwijzigingen worden via hash-chains vastgelegd en zijn verifieerbaar, en credentials (ACDC's) kunnen stapsgewijs worden vrijgegeven. Het protocol is zo ontworpen dat beveiliging, schaalbaarheid en decentralisatie niet ten koste van elkaar gaan (zoals bij het blockchain-trilemma) en dat persoonsgegevens niet in één enkel, onuitwisbaar wereldwijd grootboek hoeven te worden opgeslagen. Het belangrijkste praktijkvoorbeeld is de vLEI van GLEIF.",
          },
          {
            kind: "words",
            ids: [
              "keri",
              "gdpr",
              "vlei",
              "witness",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "developer",
    name: "Priya",
    role: "Ontwikkelaar",
    worry: "Waartegen bouw ik eigenlijk?",
    blurb: "Je wilt weten wat de objecten zijn, waar de vertrouwensgrenzen liggen en waar de code zich bevindt — zonder een inleiding van veertig pagina's.",
    accent: "#b86b3d",
    lessons: [
      {
        id: "why",
        title: "De ontwerpbeperking",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "KERI is een DKMS: gedistribueerd sleutelbeheer voor identifiers die een langere levensduur moeten hebben dan een individuele sleutel. Samuel Smith beschreef het in 2019 en herzag het in 2021. De bijbehorende suite — ACDC, CESR, OOBI, IPEX — is wat men bedoelt wanneer men \"KERI\" in een repositorynaam gebruikt.",
          },
          {
            kind: "p",
            text: "Primaire vertrouwensbasis: de AID, afgeleid van entropie die de controller beheert. Secundair: de KEL, ontvangstbevestigingen (receipts) en getuigen (witnesses). Een blockchain, mocht je die gebruiken, is eveneens secundair. Daarom kan een AID van het ene naar het andere ontdekkingsnetwerk verhuizen zonder opnieuw te hoeven worden aangemaakt.",
          },
          {
            kind: "list",
            title: "Wat je niet hoeft te implementeren",
            items: [
              "Een wereldwijde, totale volgorde van alle identiteiten.",
              "Een grootboek voor tokens. KERI is niet bestand tegen 'double-spending' en is geen keten voor assets.",
              "Vertrouwen in de URL die je de log heeft verstrekt. OOBI dient voor ontdekking; verificatie gebeurt door het opnieuw afspelen (replay) van de KEL.",
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
            text: "Inception (\"icp\") koppelt de AID aan de eerste sleutelgebeurtenis: huidige publieke sleutels plus hashes (digests) van volgende sleutels, ondertekend door de huidige sleutels. Rotatie (\"rot\") wordt ondertekend door de volgende sleutels; deze worden eenmalig onthuld en vervolgens vervangen door een nieuwe vastlegging (commitment). Interactie (\"ixn\") verankert 'seals' — hashes van externe gegevens — zonder de status van de sleutels te wijzigen.",
          },
          {
            kind: "p",
            text: "Een KEL is de via hashes gekoppelde reeks gebeurtenissen. Een ontvangstbevestiging (receipt) is de handtekening van een ander bij een gebeurtenis. Een KERL is het logboek plus consistente ontvangstbevestigingen. Getuigen (witnesses) worden aangewezen bij oprichtingsgebeurtenissen en verzorgen de verspreiding (KA2CE, een BFT-achtige overeenstemming over de eerste consistente versie). Watchers worden gekozen door een verificateur. Juryleden leggen dubbelspel (duplicity) vast in een DEL. Een rechter weegt KERL's en DEL's tegen elkaar af.",
          },
          {
            kind: "p",
            text: "Directe modus: twee controllers wisselen paarsgewijs logboeken en ontvangstbevestigingen uit. Indirecte modus: getuigen passen 'store-and-forward' toe wanneer de controller offline is. Delegatie is een samenwerkingsproces: de 'parent' (ouder) verankert de gebeurtenis van de 'child' (kind), en de 'child' verwijst terug naar de locatie van de 'parent' in diens logboek.",
          },
          {
            kind: "words",
            ids: [
              "aid",
              "kel",
              "prerotation",
              "witness",
              "duplicity",
            ],
          },
        ],
      },
      {
        id: "how",
        title: "Credentials, bytes en discovery",
        minutes: 5,
        blocks: [
          {
            kind: "lead",
            text: "Een ACDC is een gelabelde container: versiestring, SAID (\"d\"), AID van de uitgever (\"i\") en attributen. Er zit geen W3C-bewijsblok in. Handtekeningen worden vervoerd via CESR, dat tekst en binaire data heen en weer kan omzetten. Schema's zijn JSON-schema's waarvan de $id een SAID is; een verwisseld schema wordt dus afgewezen. Uitgifte en intrekking vinden plaats in een TEL die verankerd is aan de KEL van de uitgever. Dankzij die verankering dwingt rotatie niet tot massale heruitgifte, en kan een verouderde sleutel geen credential met terugwerkende kracht uitgeven zonder dat er sprake is van dubbelspel.",
          },
          {
            kind: "list",
            title: "Drie beveiligingsklassen in de KERI/ACDC-notities — meng ze niet in één enkele blob",
            items: [
              "Hoog, KEL-gebaseerd: via hash-chains gekoppeld, door de eindgebruiker verifieerbaar, waarbij dubbel gebruik (duplicity) als bewijs geldt. Gebruik dit voor credentials en alles wat authentiek moet blijven na een sleutelwijziging. ACDC via TEL valt hier ook onder.",
              "Gemiddeld, BADA: \"de laatste telt\" (latest wins) op basis van een (tijd, sleutelstatus)-tuple. Voldoende voor discovery, zoals service-endpoints, omdat een foutieve opzoeking simpelweg een mislukte opzoeking is — wat je vindt, moet immers nog steeds geverifieerd worden. Niet voldoende voor credentials. Een gestolen huidige sleutel is niet per se zichtbaar op de manier waarop een KEL-publicatie dat wel is. Rotatie maakt niet elk eerder BADA-record ongeldig.",
              "Laag, KRAM: replay-bescherming bij een query naar een host, gebruikmakend van de tijd en sleutelstatus van de beantwoorder. Het beschermt de host. Het beschermt geen data in rust (data at rest). Sla het antwoord op onder BADA of, beter nog, in een ACDC.",
            ],
          },
          {
            kind: "p",
            text: "IPEX is één dialoog van vijf stappen voor zowel uitgifte als presentatie: aanvragen, aanbieden of afwijzen, akkoord gaan of afwijzen, toekennen of afwijzen, accepteren. OOBI- en did:web-achtige documenten dienen voor discovery. Smith's regel uit de beveiligingsnotities: als een tussenpersoon data kan injecteren zonder privésleutel — JSON-LD @context is het voorbeeld dat hij verwerpt — dan vormt die data geen bewijs. Eindverifieerbaarheid betekent dat jouw verifier, aan de 'edge', KEL-gebaseerde bytes opnieuw afspeelt (replayt). Een vertrouwde resolver is de fout die hij naar eigen zeggen al eens heeft gemaakt en vervolgens heeft laten vallen.",
          },
          {
            kind: "list",
            title: "Codenamen die voortdurend opduiken",
            items: [
              "KERIpy — de Python-kernimplementatie.",
              "KERIA — agent-/servicezijde.",
              "SignifyPy en Signify-TS — bibliotheken voor ondertekening aan clientzijde.",
              "did:webs en bijbehorende bridges — voor systemen die nog steeds DID-methoden gebruiken.",
              "De vijf W's die door de stichting worden gefinancierd: Wallet, Witness, Watcher, Web, Wizard.",
            ],
          },
          {
            kind: "check",
            q: "Je haalt een KEL op via een OOBI-URL. Wat maakt deze gezaghebbend?",
            options: [
              {
                t: "HTTPS op die host.",
                ok: false,
              },
              {
                t: "Replay: handtekeningen, hash-keten en controles op dubbelgebruik (duplicity) volgens KERI-regels.",
                ok: true,
              },
              {
                t: "De witness die als eerste antwoordde, zonder verdere controles.",
                ok: false,
              },
            ],
            explain: "De bronnen zijn duidelijk: een OOBI op zichzelf is onveilig. 'End-verifiability' (verifieerbaarheid aan de eindpunten) is de beveiligingseigenschap.",
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
              "Hitchhiker’s Guide deel 2 — het mentale model in één keer doorlezen.",
              "Jargon delen 1–3 — voor wanneer je geconfronteerd wordt met de terminologie uit de whitepaper.",
              "Beveiliging in KERI/ACDC — KEL-gebaseerd versus BADA versus KRAM, voordat je een API ontwerpt.",
              "KERI, ACDC en CESR v1.0 bij Trust Over IP — normatieve tekst.",
              "WebOfTrust-repositories (keripy, keria, signify) — werkende code.",
            ],
          },
          {
            kind: "note",
            title: "Begin niet met het onvoorbereid lezen van de whitepaper",
            text: "Zelfs in de community-artikelen wordt aangegeven dat het jargon eerst komt en de elegantie pas daarna. Gebruik dit pad als index en open vervolgens de specificatie voor het type dat je implementeert.",
          },
        ],
      },
    ],
  },
  {
    id: "business",
    name: "Omar",
    role: "Zakelijk leider",
    worry: "Zal ​​dit fraude verminderen zonder ons vast te pinnen op één leverancier?",
    blurb: "Je koopt systemen die moeten blijven werken, zelfs als een cloudprovider, een bankpartner of een aanbieder van grootboektechnologie van koers verandert.",
    accent: "#8a5a32",
    lessons: [
      {
        id: "why",
        title: "De kosten van geleende identiteit",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Factuurfraude, telefoontjes van nepleveranciers en berichten zoals \"de CFO stuurde een sms\" maken allemaal misbruik van hetzelfde lek: het kanaal is weliswaar geauthenticeerd, maar de organisatie niet. Een inlog op een platform bewijst dat iemand een account heeft. Het bewijst niet dat diegene de juridische entiteit rechtsgeldig mag vertegenwoordigen.",
          },
          {
            kind: "p",
            text: "vLEI – de verifieerbare Legal Entity Identifier van GLEIF, gebaseerd op KERI en ACDC's – is de productieversie van de oplossing. Het bedrijf beschikt over een identificatiecode. Rollen zijn via een keten daaraan gekoppeld. Een telefoongesprek, bericht of handtekening kan aan die keten worden getoetst, en beide partijen kunnen bewijsstukken (receipts) bewaren. Hetzelfde patroon zien we terug in de aantekeningen over verifieerbare spraak en betalingen aan leveranciers. GLEIF valideert organisaties, geen natuurlijke personen. Door die validatie worden de juridische naam en de cryptografische naam aan elkaar gekoppeld. Het zijn niet hetzelfde object.",
          },
          {
            kind: "pair",
            leftTitle: "Hoe Smith hier kwam",
            left: "Hij hielp bij het ontwerpen van Sovrin, een identiteitssysteem op basis van een openbaar grootboek. Eén enkel grootboek betekende dat iedereen het moest delen; eruit stappen leidde tot 'grootboekoorlogen'. Een identificatiecode die ontstaat op de blockchain of in de clouddirectory van een leverancier, kent hetzelfde risico.",
            rightTitle: "Wat hij in plaats daarvan bouwde",
            right: "Een protocol. De AID vormt de basis (de 'root'). Witnesses — of het nu gaat om een ​​database, een bestand of een keten — zorgen er slechts voor dat het logboek vindbaar blijft. Partners verifiëren de bytes. Zij huren de naam niet van uw leverancier.",
          },
        ],
      },
      {
        id: "what",
        title: "Wat uw team gaat gebruiken",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "U kiest niet voor \"een blockchain-strategie\". U implementeert een laag voor sleutelbeheer en credentials. Wallets bevatten sleutels. Witnesses publiceren de status van sleutels. Watchers stellen uw risicoteam in staat te verifiëren dat hen geen afgesplitste geschiedenis (fork) wordt voorgeschoteld. De web-API en een wizard zijn onderdelen die volgens de KERI Foundation nog in ontwikkeling zijn, zodat dit proces niet voorbehouden blijft aan experts.",
          },
          {
            kind: "p",
            text: "Schaalbaarheid is de zakelijke reden waarom in de artikelen de voorkeur wordt gegeven aan KERI boven op grootboeken (ledgers) gebaseerde identiteitssystemen: bij uitgifte in Indy-stijl duurde het in een aangehaald voorbeeld uren om tienduizenden credentials uit te geven, omdat wereldwijde consensus de flessenhals vormde. De controle-opzet van KERI is gebaseerd op lokale cryptografische historie en een drempelwaarde van witnesses; het systeem is dus ontworpen voor grootschalige credential-toepassingen — zoals supply chain, IoT en klant-onboarding — zonder te hoeven wachten op wereldwijde consensus.",
          },
          {
            kind: "words",
            ids: [
              "vlei",
              "witness",
              "keri",
            ],
          },
        ],
      },
      {
        id: "how",
        title: "Sleutels, personeelsverloop en bewijs",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Mensen vertrekken. Laptops raken kwijt. Een ondertekeningssleutel in één enkele HSM met een override-mogelijkheid voor de helpdesk vormt opnieuw een administratief 'root of trust'-risico.",
          },
          {
            kind: "p",
            text: "Pre-rotatie en multi-signature zijn de operationele instrumenten. Huidige sleutels kunnen bij een bewaarder (custodian) liggen voor dagelijkse ondertekening. De bevoegdheid tot rotatie kan bij de organisatie blijven, zodat de bewaarder kan worden vervangen zonder diens medewerking — in jargon: 'custodial rotation'. De reservesleutel mag niet op de laptop staan ​​die de ondertekening uitvoert. Dankzij gedeeltelijke pre-rotatie kunt u sommige sleutels inzetten en andere achter de hand houden. Elke wijziging is een ondertekende en verwerkbare gebeurtenis; hierdoor kan een auditor reconstrueren wie op een bepaalde datum namens het bedrijf verplichtingen kon aangaan. Een gestolen actieve sleutel verschijnt als een gepubliceerde gebeurtenis. Een verouderde sleutel kan die datum niet ongemerkt wijzigen.",
          },
          {
            kind: "p",
            text: "ACDC's geven vervolgens de actuele feiten weer: deze AID is de penningmeester, deze delegatie is van kracht, dit factuurschema is het schema dat we ondertekenen. Intrekking is een vermelding in het transactie-eventlogboek die verankerd is in de KEL, niet een telefoontje naar elke partner.",
          },
          {
            kind: "check",
            q: "Een aanbieder van cloud-identiteitsdiensten sluit het grootboek waarin je de 'discovery' (vindbaarheid) hebt verankerd. Wat gebeurt er met een KERI-AID?",
            options: [
              {
                t: "De identificatiecode (AID) van de rechtspersoon gaat verloren samen met die aanbieder.",
                ok: false,
              },
              {
                t: "De AID blijft bestaan. Je wijst getuigen elders aan. Verificateurs spelen hetzelfde logboek opnieuw af.",
                ok: true,
              },
              {
                t: "Je moet cryptocurrency kopen om te kunnen migreren.",
                ok: false,
              },
            ],
            explain: "Overdraagbaarheid is een expliciet ontwerpdoel: de 'root of trust' (basis van vertrouwen) is de AID, niet het discovery-netwerk.",
          },
        ],
      },
      {
        id: "next",
        title: "Een pilot die klein mag blijven",
        minutes: 3,
        blocks: [
          {
            kind: "list",
            title: "Een praktisch onderdeel",
            items: [
              "Eén AID voor de rechtspersoon, multi-sig, waarbij de bevoegdheid tot rotatie niet in dezelfde handen ligt als de bevoegdheid voor dagelijkse ondertekening.",
              "Eén rol-credential (een ACDC) voor een functie die momenteel kwetsbaar is voor aanvallen — zoals het vrijgeven van betalingen of verificatie bij terugbelverzoeken van leveranciers.",
              "Witnesses worden niet door één enkele partij beheerd, waardoor een individuele beheerder de geschiedenis niet onopgemerkt kan wijzigen.",
              "Een controleur op de ontvangende afdeling die het bewijsstuk (credential) verifieert in plaats van blindelings op het e-maildomein te vertrouwen.",
            ],
          },
          {
            kind: "note",
            title: "Wie heeft de grootschalige implementatie gerealiseerd?",
            text: "De vLEI van GLEIF geldt als de referentie-implementatie binnen de stichting en het conferentiemateriaal. Vraag leveranciers of ze de KERI-sleutelstatus verifiëren, of dat ze slechts een badge toevoegen aan een standaardaccount.",
          },
        ],
      },
    ],
  },
  {
    id: "health",
    name: "Aisha",
    role: "Zorgprofessional",
    worry: "Kunnen we gegevens uitwisselen zonder alle patiëntendossiers samen te voegen?",
    blurb: "Interoperabiliteit is verplicht. Eén centrale patiëntendatabase staat niet gelijk aan vertrouwen.",
    accent: "#3d6e8a",
    lessons: [
      {
        id: "why",
        title: "Het dossier is niet hetzelfde als de autoriteit",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "FHIR maakte het verplaatsen van zorggegevens mogelijk. Het bood echter op zichzelf geen antwoord op vragen als: wie mag de gegevens vrijgeven? Is de afzender daadwerkelijk de organisatie die hij beweert te zijn? En hoe kan een patiënt één specifiek feit aantonen zonder het volledige dossier prijs te geven?",
          },
          {
            kind: "p",
            text: "De conferentie- en projectnotities in deze bibliotheek — zoals HealthKERI, het CMS-werk rond interoperabiliteit, DirectTrust en de privacyarchitectuur van Utah — draaien allemaal om hetzelfde hiaat. Vertrouwensnetwerken zijn nog steeds afhankelijk van de partij die de directory beheert. KERI stelt voor dat de kliniek, de betaler, de patiënt en de app elk over eigen identificatoren beschikken, en dat een bewijsstuk (credential) kan worden gecontroleerd nadat het bericht de firewall heeft verlaten.",
          },
          {
            kind: "note",
            title: "Geen claim als medisch hulpmiddel",
            text: "Nergens wordt beweerd dat KERI diagnoses stelt, een juridisch geldig medisch dossier opslaat of HIPAA-procedures vervangt. Het is een laag voor identiteit en bewijsvoering die in de zorgsector onder de gegevensuitwisseling wordt gelegd.",
          },
        ],
      },
      {
        id: "what",
        title: "Bewijs dat met de data meereist",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Een ACDC kan verklaren: \"deze organisatie is deze vLEI\", \"deze zorgverlener vervult deze rol\" of \"deze verklaring over de patiënt is afgegeven door deze AID\". Deze verklaringen zijn aan elkaar gekoppeld, zodat de ontvanger het delegatiepad kan inzien. 'Graduated disclosure' (gedoseerde informatieverstrekking) houdt in dat een apotheek bijvoorbeeld wel een feit over de verzekeringsdekking kan zien, zonder de volledige probleemlijst te ontvangen.",
          },
          {
            kind: "p",
            text: "Omdat het bewijsstuk (credential) gekoppeld is aan de status van de sleutel, kan een ziekenhuis na een incident van sleutel wisselen zonder elke historische autorisatie opnieuw te hoeven ondertekenen; de verificateur kan zo nog steeds bevestigen wat op de datum van uitgifte waar was. Informatie over intrekking wordt vastgelegd in een transactielogboek dat gekoppeld is aan het sleutellogboek van de uitgever.",
          },
          {
            kind: "p",
            text: "De patiënt-identificator en de kliniek-identificator zijn verschillende aanduidingen. Een voogd, gevolmachtigde of waarnemend zorgverlener verkrijgt bevoegdheid via delegatie – waarbij beide partijen hun goedkeuring vastleggen – en niet door het delen van een wachtwoord. De teksten maken duidelijk dat de sleutelhouder toegang kan herstellen zonder afhankelijk te zijn van een helpdesk. Voor iemand die van kliniek wisselt, van naam verandert of een andere verzekering krijgt, kan de identificator hetzelfde blijven, terwijl de verklaringen wijzigen. Smiths niet-klinische voorbeeld illustreert dit principe: bewijs één feit – bijvoorbeeld dat iemand oud genoeg is – en geef verder geen informatie prijs. Een feit over verzekeringsdekking of een verwijzing werkt volgens hetzelfde principe.",
          },
          {
            kind: "words",
            ids: [
              "acdc",
              "ipex",
              "delegation",
              "vlei",
              "prerotation",
            ],
          },
        ],
      },
      {
        id: "how",
        title: "Na een inbreuk op de Exchange-server",
        minutes: 4,
        blocks: [
          {
            kind: "lead",
            text: "Smith stelt – in de reactie van de 'Five Eyes'-alliantie in dit materiaal – dat inbreuken op servers of certificaatautoriteiten niet het einde hoeven te betekenen van een betrouwbare historie. Het sleutellogboek en de vastgelegde bevestigingen (seals) blijven controleerbaar.",
          },
          {
            kind: "p",
            text: "Als een integratie-engine wordt gecompromitteerd, kan een aanvaller zonder de sleutels voor sleutelrotatie de historie van de organisatie niet wijzigen. Een verouderde sleutel kan geen nieuw logboek genereren dat door verificatie als geldig wordt aangemerkt. Een gestolen huidige sleutel kan alleen ondertekenen door te publiceren; die publicatie is waar toezichthouders — zoals een betaler of het netwerk — op letten, in plaats van te vertrouwen op de bewering van de verzender dat de directory in orde is. Het relevante tijdsbestek loopt tot de sleutelwissel, niet tot het einde van de levensduur van het record. Autorisaties die vóór het incident zijn vastgelegd, blijven verifieerbaar. Ze worden niet allemaal stilletjes ongeldig gemaakt of overschreven.",
          },
          {
            kind: "p",
            text: "Zet de gebeurtenissen van elke patiënt niet in één wereldwijd grootboek als verwijderbaarheid van belang is. 'Minimum disclosure' (minimale gegevensverstrekking) is een protocolstap — IPEX — en niet een API die op basis van goed vertrouwen de volledige 'Patient'-resource teruggeeft. Als er een keuze moet worden gemaakt, ligt de prioriteit bij Smith op de authenticiteit van de ondertekenaar en op vertrouwelijkheid ten opzichte van partijen die niet bij de uitwisseling betrokken waren; het gaat niet om de belofte dat de specialist met wie u zojuist contact had, niets heeft opgestoken.",
          },
          {
            kind: "check",
            q: "Een specialist moet weten of een verwijzing echt is, maar hoeft niet de volledige medische voorgeschiedenis van de patiënt te kennen. Bij welk idee uit de KERI-suite hoort dit?",
            options: [
              {
                t: "Plaats het volledige medische dossier op een openbare blockchain, zodat iedereen het kan controleren.",
                ok: false,
              },
              {
                t: "Gefaseerde vrijgave van een ACDC: toon alleen de vereiste claims, onder bepaalde voorwaarden.",
                ok: true,
              },
              {
                t: "Deel één beheerderswachtwoord van het ziekenhuis met het EPD van de specialist.",
                ok: false,
              },
            ],
            explain: "IPEX en ACDC-chaining zijn de termen die deze bronnen gebruiken voor gedeeltelijke, contractuele gegevensuitwisseling.",
          },
        ],
      },
      {
        id: "next",
        title: "Wie is er al betrokken?",
        minutes: 3,
        blocks: [
          {
            kind: "list",
            title: "Namen uit de bronvermeldingen met een link naar de gezondheidszorg",
            items: [
              "HealthKERI — Jared Jeffery, Philip Feairheller — zero-trust-uitwisseling, vraagstukken rondom FHIR.",
              "DirectTrust — Scott Stuewe — vertrouwenskaders voor gegevensuitwisseling in de Amerikaanse gezondheidszorg.",
              "CMS Blue Button en FHIR-werkzaamheden — Mark Scrimshire — API's van zorgverzekeraars op nationale schaal.",
              "Privacy en SEDI in Utah — identiteitsbeheer in de publieke sector dat niet wil ontaarden in een surveillancedossier.",
            ],
          },
          {
            kind: "p",
            text: "Laat een beveiligingsarchitect het ontwikkelaarstraject volgen en een privacyfunctionaris het beleidstraject. Het betreft hetzelfde protocol, maar toegesneden op de beslissing die ieder van hen daadwerkelijk moet nemen.",
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
