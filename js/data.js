// Re-Balan Content Data — Philosophical Edition
const APP_DATA = {

  meta: {
    title: "Balancering & Re-Balancering",
    subtitle: "Et stille rum at vende tilbage til",
    quote: {
      text: "Healing is not about getting rid of symptoms. It's about an individual wholeness, that we remember instinctively the moment we touch it.",
      author: "James Jealous"
    },
    closingQuote: {
      text: "Medicine is not found in a healed wound, but in a wound that is weeping.",
      author: "Matt Licata"
    }
  },

  sections: {

    essensen: {
      title: "Essensen",
      subtitle: "Det der allerede er til stede",
      pullQuote: "Vi behøver ikke skabe balancen. Den er allerede til stede — som en kapacitet, der venter på de rette betingelser.",
      intro: [
        {
          heading: "Noget der allerede er der",
          text: "Mærk efter et øjeblik. Din vejrtrækning sker af sig selv. Dit hjerte slår uden din indblanding. Tusindvis af processer opretholder lige nu livet i dig — uden at du behøver gøre noget. Den samme intelligens, der styrer alt dette, ved også hvordan balance genfindes. Den har altid vidst det."
        },
        {
          heading: "At give plads",
          text: "Hvad sker der, når det der er i ubalance får lov til at være præcis som det er? Når vi holder op med at forsøge at fikse, ændre eller skubbe? Der opstår et rum — ikke et fysisk rum, men en kvalitet af tilstedeværelse. Og i det rum har kroppen allerede alt, den behøver for at finde sin egen vej tilbage."
        },
        {
          heading: "Vejen kender sig selv",
          text: "Processen mod balance kender sit eget tempo. Den kender den grad af kontakt og plads, der er nødvendig. Den kender den rækkefølge, der skal til. Vores rolle er ikke at styre — men at være til stede. At tilbyde de betingelser, under hvilke noget kan udfolde sig af sine egne veje."
        }
      ],
      stillads: {
        title: "Det vi blev bygget på",
        pullQuote: "Det er ikke et spørgsmål om svaghed, men om de betingelser der var til rådighed.",
        text: "Der er noget i os, der blev formet meget tidligt — et indre fundament, et stillads. Når de tidligste betingelser var trygge, blev dette stillads robust og fleksibelt. Det giver os en grundlæggende evne til at møde selv det voldsomme og finde hjem igen.",
        text2: "Når de tidlige betingelser var anderledes, blev stilladset mere skrøbeligt. Det er ikke en svaghed — det er biologi. Og det betyder, at det samme input kan være helende for ét menneske og overvældende for et andet. Det kalder på respekt. På at lytte til, hvad netop dette system har brug for."
      },
      paradoks: {
        title: "Når mindre er mere",
        text: "Der er et smukt paradoks her: jo mindre vi gør, desto mere kan ske. Jo mere vi forsøger at kontrollere, desto mere begrænser vi. Det kræver mod at træde et skridt tilbage og lade kroppens egen intelligens tage føringen — men det er netop dér, i det åbne rum, at de dybeste forvandlinger bliver mulige.",
        principles: [
          "Det blideste er ofte det mest støttende",
          "Der er en akse i os, som alt orienterer sig imod",
          "Ofte er det nok at gøre langt mindre end vi tror",
          "Når kroppen har svaret, er det nok"
        ]
      },
      kontekst: {
        pullQuote: "Balance er aldrig absolut. Den er altid relativ til den kontekst, hvori den opstår.",
        text: "Vi lever aldrig i et vakuum. Ubalance opstår i en sammenhæng — i relation til det vi har oplevet, de relationer der formede os, den verden vi lever i. Og vejen tilbage mod balance kræver den samme opmærksomhed på sammenhæng. Vi kan ikke forstå et menneskes ubalance uden at forstå det liv, det menneske har levet. Vi bærer historier der rækker ud over vores eget liv — balancer og ubalancer der er kollektive, transgenerationelle. Når den sammenhæng bliver mødt og respekteret, har kroppen allerede alt den behøver for at finde sin egen vej."
      }
    },

    nervesystem: {
      title: "Nervesystemet",
      subtitle: "Den visdom kroppen bærer",
      intro: "Der er noget i dig, der konstant navigerer mellem aktivering og ro — helt uden din bevidste medvirken. Det registrerer mikrobevægelser i et ansigt, nuancer i en stemme, subtile skift i energien i et rum. Det ved om du er tryg, længe før din bevidste tanke når at formulere en vurdering. Denne kropslige visdom er hurtigere end tanken, dybere end sproget. Den afgør om du åbner dig eller lukker ned, om du bevæger dig mod forbindelse eller mod forsvar. Du kan ikke tænke dig ud af dens konklusioner. Du kan ikke argumentere med et nervesystem, der har besluttet, at det ikke er sikkert. Men du kan skabe betingelser — gennem nærvær, langsomhed og autentisk kontakt — hvor kroppen gradvist kan revidere sin vurdering og åbne for nye muligheder.",
      treStater: {
        intro: "Vi bevæger os alle mellem tre grundlæggende tilstande — tre måder at møde verden på:",
        states: [
          {
            title: "Tryghed & Forbindelse",
            label: "Når vi er hjemme i os selv",
            color: "green",
            description: "Du kender den. Øjeblikke hvor du kan mærke dig selv og mærke andre. Hvor du kan bevæge dig frit mellem aktivering og ro uden at miste fodfæstet. En åbenhed, en nysgerrighed, en fleksibilitet. Herfra kan du klatre op og ned uden at falde. Det er dit nervesystems naturlige hvilested — det sted du vender tilbage til, når betingelserne er til stede.",
            qualities: ["At kunne mærke sig selv", "Dyb, fri vejrtrækning", "Åben opmærksomhed", "Fleksibel respons", "Forbindelse til krop og omverden"]
          },
          {
            title: "Mobilisering",
            label: "Når kroppen gør klar",
            color: "warm",
            description: "Du kender også den. Tempoet øges, kroppen gør klar til handling. I sin sunde form giver den dig energi og handlekraft. Men når den løber løbsk, mister du kontakten — med dig selv og med verden omkring dig. Ofte er denne aktivering faktisk et forsøg på at holde dig ude af noget endnu dybere — en beskyttelse, du endnu ikke er klar over.",
            qualities: ["Hjertet banker hurtigere", "Vejrtrækningen bliver kort", "Energien stiger", "Kroppen spænder", "Fokus skærpes"]
          },
          {
            title: "Immobilisering",
            label: "Når alt lukker ned",
            color: "cool",
            description: "Og den. Når hverken kamp eller flugt er muligt, lukker kroppen ned. En tilbagetrækning, en energibesparelse. Det er ikke den hektiske aktivering, men den dybe frystilstand — det øjeblik, hvor forbindelsen til dig selv bliver brudt. Det er den ældste overlevelsesrespons vi har. Og det er her, i denne stilhed, at den dybeste heling venter.",
            qualities: ["Vejrtrækningen bliver langsom", "Energien falder", "En tilbagetrækning indad", "Følelserne bliver fjerne", "En fornemmelse af at være væk"]
          }
        ]
      },
      immobilisering: {
        title: "Det der ligger under",
        pullQuote: "Det er ikke den hektiske aktivering, men den dybe stilhed — det øjeblik, hvor forbindelsen til dig selv brydes.",
        text: "Vi tror ofte, at det svære handler om den hektiske aktivering — kampen, flugten, uroen. Men under al den bevægelse kan der ligge noget dybere: et øjeblik, hvor kroppen gik i stå. Hvor den lukkede ned, fordi alle andre strategier var udtømt. Det er i det skift, at noget grundlæggende brydes.",
        text2: "Når du mærker angst, uro, rastløshed — så kan det faktisk være kroppens forsøg på at holde dig ude af den dybere stilhed. Aktiveringen er ikke fjenden. Den er et forsvarssystem, der beskytter dig mod noget, du endnu ikke er klar til at møde. At forstå det ændrer alt."
      },
      dynamik: {
        title: "Tempo & Kontakt",
        pullQuote: "To grundlæggende kvaliteter — tempo og kontakt — bestemmer bevægelsen mellem tilstandene.",
        text: "Når tempoet løber løbsk, mister vi kontakt. Når kontakten forsvinder, falder tempoet mod kollaps. De to spejler hinanden — og vejen tilbage følger den modsatte sti. Tænk på tidevandet. Ebbe og flod. Vi aktiveres, vi finder ro, vi aktiveres igen, vi finder ro igen. En bølgende, organisk rytme. I et velreguleret nervesystem sker dette naturligt og ubesværet. Der er en grundlæggende tillid til, at bevægelsen i den ene retning altid vil blive fulgt af en bevægelse i den anden. Når den tillid brydes — når vi sidder fast i enten den ene eller den anden pol — mister kroppen sin frie bevægelse. Vejen tilbage handler ikke om at tvinge bevægelsen, men om at genopdage den rytme, der allerede eksisterer. At minde kroppen om, at den kan bevæge sig, at den har bevæget sig før, og at den vil bevæge sig igen.",
        slow: {
          title: "Slow Way Down",
          subtitle: "Når tempoet er løbet løbsk",
          text: "Når alt kører for hurtigt, er vejen tilbage gennem langsomhed. Et roligt åndedræt. En blidere rytme. En invitation til at mærke noget langsomt indeni dig selv. Ikke som en tvang, men som en åbning.",
          qualities: [
            "Inviter til langsomhed i krop og sind",
            "Find noget stabilt at hvile opmærksomheden på",
            "Bemærk noget der bevæger sig langsomt i dig",
            "Åbn sanserne udad — mærk verden omkring dig",
            "Mærk det der bærer dig — støtten under dig"
          ]
        },
        meet: {
          title: "Meet Me",
          subtitle: "Når forbindelsen er forsvundet",
          text: "Når alt er lukket ned, er vejen tilbage gennem forbindelse. En tilstedeværelse der siger: du er ikke alene. En kontakt der er tydelig nok til at nå igennem stilheden. Et rum, hvor kroppen naturligt kan begynde at finde sig selv igen.",
          qualities: [
            "En minimal grad af tryghed som indgang",
            "At tilkendegive: du er ikke alene",
            "Kvaliteten af kontakt som det vigtigste",
            "Stabiliteten og støtten i forbindelsen",
            "Tillid til at læne sig ind i nærværet"
          ]
        }
      }
    },

    rummet: {
      title: "Rummet",
      subtitle: "Stilheden og betingelserne for forandring",
      pullQuote: "Det handler ikke om at gøre noget ved tilstanden. Det handler om at være med den — på en måde der giver den plads til at bevæge sig.",
      intro: [
        {
          heading: "Tilstedeværelse",
          text: "Ikke en anspændt, koncentreret opmærksomhed — men en rolig, åben væren-med. At lade det, der er, være præcis som det er. Denne kvalitet skaber i sig selv et rum, hvori forandring kan opstå. Paradoksalt nok ikke fordi vi forsøger at skabe forandring, men fordi vi holder op med at forsøge."
        },
        {
          heading: "Relation",
          text: "Balance sker ikke i isolation. Den kræver forbindelse til noget udenfor dig selv. Vi regulerer hinanden konstant — oftest helt ubevidst. Nærvær og ro i ét menneske kan understøtte balance i et andet. Det er derfor, det ikke er ligegyldigt hvem der er til stede. Kvaliteten af det rum, der skabes imellem, er alt."
        },
        {
          heading: "Tryghed",
          text: "Kroppen finder kun sin balance, når den mærker, at det er sikkert. Denne vurdering sker ofte helt udenfor din bevidste kontrol — en kropslig fornemmelse af 'er det sikkert her?'. Trygheden er forudsætningen. Uden den kan kroppen ikke slippe sine overlevelsestilstande, uanset hvor meget vi ønsker det."
        },
        {
          heading: "Autenticitet",
          text: "Det handler ikke om en teknik eller en abstrakt idé, men om en levende erfaring. Nærvær der er ægte og integreret. Andre kroppe kan mærke forskellen — der opstår en samklang, en resonans. Det afgørende er ikke den specifikke form, men graden af autenticitet."
        },
        {
          heading: "Tid",
          text: "Det kan ikke fremskyndes. Der er en egen tidshorisont, en egen rytme, en indre kalender. I en kultur der hylder hastighed, er tålmodighed måske det mest radikale vi kan bringe. Kroppens dybeste processer følger en rytme, der ikke kan forceres — ligesom vi ikke kan fremskynde solopgangen eller tidevandets venden. Når vi giver den tid, viser det sig ofte, at processen kender sin egen tidsplan langt bedre end vi nogensinde kunne planlægge."
        }
      ],
      stilheden: {
        title: "Den Uantastelige Stilhed",
        poem: {
          text: "We love the movement in a seeming stillness,\nthe breath in the body of the loved one sleeping,\nthe highest leaves in the silent wood,\na great migration in the sky above..",
          author: "David Whyte"
        },
        pullQuote: "Stilheden er ikke noget vi skal skabe. Den er allerede til stede — som et grundlæggende aspekt af virkeligheden og af vores egen natur.",
        text: "Fugle der glider henover himlen. Bladenes langsomme bevægelse i vinden. Bølgernes rytmiske møde med stranden. Sollysets vandring over et landskab. Når vi møder disse udtryk med åben, nysgerrig opmærksomhed, begynder noget i os spontant at synkronisere sig med den samme kvalitet af ro. Det er som om naturen minder os om noget, vi allerede ved men har glemt — at stilhed ikke er fravær af lyd, men tilstedeværelsen af en dybere orden. En skov er aldrig tavs. Den er fuld af liv, bevægelse og kommunikation. Men alt dette sker inden for en ramme af dyb ro. Fuglesangen bryder ikke stilheden — den udtrykker den. Vindens susen gennem træernes kroner er ikke støj — det er stilhedens egen stemme.",
        text2: "Den samme uantastelige ro, der bor i naturen, er også til stede i dig. Selv i de mest intense tilstande af aktivering eller kollaps findes der altid områder, der forbliver i balance — øer af ro, som aldrig inddrages i stormen. Ved at opdage og forbinde dig med disse øer, opstår et anker. Denne stilhed er ikke blot en subjektiv oplevelse — den er den samme kraft, der får tidevandet til at vende, sæsonerne til at skifte, og frøet til at spire. Det er ikke en metafor. Det er en direkte forbindelse til den intelligens, der gennemsyrer alt levende."
      },
      neutral: {
        title: "Øjeblikket før forandring",
        pullQuote: "Ikke passivitet, men levende ro — hvorfra forandring kan begynde.",
        text: "Der kommer et øjeblik, hvor kroppen holder op med at kompensere og i stedet samler sig. Som en indånding før en dyb udånding. Ikke stilstand, men en levende, vibrerende ro. Her ophører forsøget på at håndtere og kontrollere, og i stedet opstår noget andet — en overgivelse. Ikke opgivelse, men dyb tillid. Et øjeblik af dyb lytning, hvor kroppen ikke længere taler med symptomernes sprog, men med helhedens.",
        text2: "I dette øjeblik samler kroppen sig omkring sin midte — den akse, der blev til som det allerførste i dig, og som forbliver et referencepunkt for alt i dig hele livet. Når du finder vej tilbage til den akse, sker der en genforening med det mest grundlæggende i dig. Det er som at finde hjem til noget, der altid har været der. Det er herfra, at den dybeste reorganisering kan begynde — ikke styret af en ekstern plan, men af den intelligens der fra begyndelsen formede dig.",
        qualities: [
          "Kroppen holder op med at kompensere",
          "Noget samler sig omkring din midte",
          "Levende stilhed — ikke fravær, men tilstedeværelse",
          "Kroppens egne kræfter vågner",
          "Forandringens begyndelse"
        ]
      },
      dosering: {
        title: "At lytte til hvad der er nok",
        pullQuote: "Mindre er mere — og det er sværere end det lyder.",
        text: "For meget, for hurtigt, overvælder. For lidt når ikke igennem. Det der er nok, matcher præcis de ressourcer der er til rådighed lige nu — ikke i går, ikke i morgen, men i dette øjeblik. Hver situation er sin egen. Hvert nervesystem har sin egen unikke tærskel, formet af alt det du har levet. Sensitivitet er ikke en defekt — det er en biologisk realitet. At møde oplevelser i små, håndterbare doser, der giver kroppen tid til at integrere før det næste lag præsenterer sig — det er en kunst. En kunst der kræver opmærksomhed og en dyb respekt for processens eget tempo.",
        text2: "Her bliver det indre stillads afgørende. Et robust stillads kan rumme en større intensitet. Et mere skrøbeligt fundament kræver en blidere, mere gradvis tilgang. Det er ikke en svaghed — det er en realitet, der kalder på respekt. Et stærkt stillads tillader en naturlig pendulering — kroppen kan bevæge sig mod det svære, trække sig tilbage, integrere, og bevæge sig frem igen. Et skrøbeligt stillads har brug for mere støtte, mere tid, mere tryghed. Det kræver en villighed til at gå langsommere end vi tror er nødvendigt — og en tillid til, at selv de mindste skridt kan føre til dyb forandring.",
        tegn: [
          "En blødhed og flydenhed i kroppen",
          "Bevægelser der føles symmetriske og harmoniske",
          "Et tempo der hverken er forceret eller stagnerende",
          "Vejrtrækningen finder sin egen rytme",
          "En grundlæggende ro"
        ]
      }
    },

    faenomener: {
      title: "Det levende landskab",
      subtitle: "Ord for det vi mærker",
      items: [
        {
          term: "Det autonome nervesystem",
          short: "Det der navigerer, f\u00f8r vi t\u00e6nker",
          text: "Består af to primære grene — den sympatiske og den parasympatiske — der ideelt fungerer i dynamisk balance. Den sympatiske aktiverer mobilisering, mens den parasympatiske faciliterer hvile og restitution. I den polyvagale forståelse tilføjes en tredje dimension: den ventrale vagale tilstand af tryghed og social forbindelse, som er nøglen til fleksibel regulering."
        },
        {
          term: "Neuroception",
          short: "Kroppen ved det, f\u00f8r du g\u00f8r",
          text: "Stephen Porges' begreb for nervesystemets konstante, ubevidste scanning af miljøet for signaler om sikkerhed eller fare. Det er denne proces, der afgør, om vi føler os trygge nok til at være åbne og forbundne — eller om vi automatisk aktiverer forsvarsstrategier. Neuroceptionen sker langt hurtigere end vores bevidste tanker og kan ikke overrules af rationelle argumenter."
        },
        {
          term: "Det indre stillads",
          short: "Det vi blev bygget p\u00e5",
          text: "Den indre struktur, der etableres under de tidligste betingelser i vores liv. Et robust stillads giver kapacitet til at møde og integrere selv voldsomme oplevelser. Et mere skrøbeligt stillads — dannet under belastende betingelser — er ikke et spørgsmål om svaghed, men om biologi. Det har dybtgående konsekvenser for, hvordan systemet møder ubalance og finder sin vej tilbage."
        },
        {
          term: "The Neutral",
          short: "\u00d8jeblikket f\u00f8r forandring",
          text: "En specifik fysiologisk tilstand, hvor kroppens kompensatoriske mønstre midlertidigt nedreguleres. Ikke passivitet, men dynamisk ligevægt, hvorfra forandring kan opstartes. Det er i dette øjeblik, kroppen samler sig omkring midtlinjen og finder sin egen vej — med en præcision, der overgår enhver ekstern plan."
        },
        {
          term: "Midtlinjen",
          short: "Det f\u00f8rste der blev til i dig",
          text: "Den første struktur, der dannes i den embryologiske udvikling, og som forbliver et fundamentalt referencepunkt for alle kroppens systemer gennem hele livet. Midtlinjen er ikke blot en anatomisk reference, men kroppens primære organiserende princip. Ved ubalance er forbindelsen til midtlinjen ofte svækket — og re-balancering handler i sin dybeste forstand om at genetablere denne forbindelse."
        },
        {
          term: "Pendulering",
          short: "Tidevandets rytme i os",
          text: "Peter Levines begreb for evnen til at bevæge sig frem og tilbage mellem aktivering og ro uden at blive fastlåst. Det er denne fleksible bevægelse — op og ned ad det, Deb Dana kalder 'den autonome stige' — der kendetegner et velreguleret nervesystem. Når penduleringen går tabt, fastlåses systemet i enten overaktivering eller kollaps."
        },
        {
          term: "Øer af ro",
          short: "Noget i dig er altid i balance",
          text: "Selv i de mest intense tilstande af aktivering eller kollaps findes der altid områder eller kvaliteter af systemet, der forbliver i balance — som aldrig inddrages i nervesystemets storm. Ved at opdage og forbinde sig med disse øer, skabes en ressource der fungerer som anker for selvregulering. Det er denne indsigt, der gør re-balancering mulig: der er altid noget, der allerede er i balance."
        },
        {
          term: "Somatisk resonans",
          short: "N\u00e6rv\u00e6r der ber\u00f8rer uden ord",
          text: "Processen hvor ét nervesystem påvirker og påvirkes af et andet i en gensidig, ofte ubevidst kommunikation. Thomas Hübl kalder det synkronisering — hvor et velreguleret nervesystem fungerer som støtte for et andet. Det er den mekanisme, hvorigennem nærvær og ro i ét menneske kan understøtte re-balancering i et andet."
        },
        {
          term: "Tolerance-vinduet",
          short: "Det rum hvor vi kan rumme",
          text: "Pat Ogdens begreb for det område, hvor systemet kan processere oplevelser og finde balance. Inden for vinduet er der fleksibilitet og integration. Udenfor vinduet er systemet i overlevelsestilstand — fastlåst i enten hyperarousal eller hypoarousal. Vinduets bredde er ikke statisk, men kan udvides gradvist gennem trygge, støttende oplevelser."
        },
        {
          term: "Den levende gråzone",
          short: "Hvor kontekst er alt",
          text: "Der findes ikke én klar grænse mellem sund reaktion og overbelastning. Det er en levende gråzone, hvor kontekst er alt. Træthed efter en dyb proces kan være det sundeste tegn på, at noget er i bevægelse. Den samme træthed i en anden kontekst kan signalere overbelastning. Det kræver en sensitiv opmærksomhed at skelne — og en villighed til at møde hvert øjeblik med friske øjne."
        },
        {
          term: "Tårer som forvandling",
          short: "N\u00e5r noget endelig f\u00e5r lov at bev\u00e6ge sig",
          text: "Mange anser tårer som svaghed eller noget forkert. Men egentlige gennembrud og forvandlinger indeholder altid de store følelser. Når tårer opstår spontant, er det ofte et tegn på, at en proces er levende og dynamisk — at noget der har været holdt, endelig får lov at bevæge sig. Det er den gode smerte — tegnet på, at noget er ved at ske."
        },
        {
          term: "Den skjulte gave",
          short: "Det ubalancen fors\u00f8ger at fort\u00e6lle",
          text: "Enhver kraftig reaktion indeholder information. Den fortæller om et område, der kalder på opmærksomhed — et sted, hvor energi har været bundet og drænende. Ubalancen er ikke en fjende, men en budbringer. Den peger præcis derhen, hvor frigørelse er mulig — og hvor systemet ved hjælp til netop dette område kan frisætte energi, der hidtil har haft drænende effekt."
        },
        {
          term: "Dosering",
          short: "Mindre er n\u00e6sten altid mere",
          text: "Omhyggelig tilpasning af enhver påvirknings intensitet til systemets aktuelle kapacitet. Gabor Maté påpeger, at hver person er unik i sin sensitivitet og grænser, formet gennem både genetik og livserfaring. Den optimale dosering er ofte blidere end vi tror — 'mindre er mere' er en levende erfaring af, at kroppens intelligens arbejder bedst, når den får plads frem for pres."
        }
      ]
    },

    refleksion: {
      title: "Tanker til eftertanke",
      questions: [
        "Hvornår har du sidst mærket din krop finde ro helt af sig selv — uden at du behøvede at gøre noget?",
        "Hvad sker der, når du holder op med at forsøge at ændre noget ved den tilstand, du er i lige nu?",
        "Hvad er forskellen for dig mellem at gøre noget og at være med noget?",
        "Hvornår oplever du, at en andens nærvær i sig selv er nok til at skabe forandring i dig?",
        "Hvordan mærker du forskellen mellem et tempo der er dit eget, og et tempo der er pålagt udefra?",
        "Hvad sker der i dig, når du virkelig føler dig mødt — uden at der er en agenda?",
        "Kan du genkende øjeblikke, hvor din krop vidste noget, som dit hoved endnu ikke havde forstået?",
        "Hvilke 'øer af ro' kan du finde i dig selv lige nu — steder der allerede er i balance?",
        "Hvad ville der ske, hvis du gav dig selv den samme tålmodighed, som naturen giver et frø?",
        "Kan du mærke forskel på den stilhed, der opstår, når noget mangler — og den stilhed, der opstår, når noget er helt?",
        "Hvornår har du sidst mærket, at dit nervesystem fandt sin egen vej uden din indblanding — og turde du stole på det?",
        "Hvordan ville det forandre din dag, hvis du vidste, at du allerede har alt det, du behøver for at finde balance?"
      ]
    }
  }
};
