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
        title: "Immobiliseringens sande natur",
        pullQuote: "Essensen af et traume er ikke sympatisk aktivering, men immobilisering — den frystilstand, der aktiveres, når alle andre strategier er udtømt.",
        text: "En udbredt antagelse er, at traumatiske tilstande primært handler om den sympatiske gren — kamp, flugt, hektisk aktivering. Men den egentlige essens er en dybere immobilisering. I det øjeblik en situation bliver traumatisk, sker det fordi organismen overskrider tærsklen fra mobiliserbare forsvarsstrategier til immobilisering. Det er i dette skift, at den psykobiologiske kontinuitet brydes.",
        text2: "Når vi møder udtalt sympatisk aktivering — angst, hyperarousal, uro — er det afgørende at forstå, at disse tilstande ikke repræsenterer selve essensen, men nervesystemets forsøg på at håndtere det underliggende. Den sympatiske aktivering fungerer som et forsvarssystem, der ubevidst aktiveres for at holde os ude af den mere truende immobiliseringstilstand."
      },
      dynamik: {
        title: "Tempo & Kontakt",
        pullQuote: "To grundlæggende kvaliteter — tempo og kontakt — bestemmer nervesystemets bevægelse mellem tilstandene.",
        text: "Når tempoet i systemet løber løbsk, mister vi kontakt. Når kontakten forsvinder, falder tempoet mod kollaps. Disse to dynamikker spejler hinanden — og vejen tilbage mod balance følger den modsatte sti. Peter Levine kalder denne evne til at bevæge sig frem og tilbage for 'pendulering' — kapaciteten til at bevæge sig mellem aktivering og ro uden at blive fastlåst. Penduleringen er ikke en lineær bevægelse fra ét punkt til et andet, men en bølgende, organisk rytme — som tidevandets uophørlige vekslen mellem ebbe og flod. I et velreguleret nervesystem sker denne pendulering naturligt og ubesværet: vi aktiveres, vi finder ro, vi aktiveres igen, vi finder ro igen. Der er en grundlæggende tillid i systemet til, at bevægelsen i den ene retning altid vil blive fulgt af en bevægelse i den anden. Når denne tillid brydes — når systemet fastlåses i enten den ene eller den anden pol — mister penduleringen sin frie bevægelse. Deb Dana beskriver det som at sidde fast på den autonome stige, ude af stand til at klatre op eller ned. Vejen tilbage handler ikke om at tvinge bevægelsen, men om at genopdage den rytme, der allerede eksisterer — at minde systemet om, at det kan bevæge sig, at det har bevæget sig før, og at det vil bevæge sig igen.",
        slow: {
          title: "Slow Way Down",
          subtitle: "Når tempoet er primært",
          text: "Når systemet er overaktiveret, skyldes det primært tempoet — mistet kontakt er en konsekvens. Vejen tilbage går gennem langsomhed: et roligt åndedræt, en blidere rytme, en invitation til at mærke noget langsomt indeni sig selv. Ikke som en tvang, men som en åbning.",
          qualities: [
            "Invitere til langsomhed i krop og sind",
            "Finde et roligt kontaktsted — noget stabilt at hvile opmærksomheden på",
            "Bemærke noget langsomt indeni sig selv",
            "Kontakt med omverdenen — åbne sanserne udad",
            "Mærke støtten under sig — det der bærer"
          ]
        },
        meet: {
          title: "Meet Me",
          subtitle: "Når kontakt er primært",
          text: "Når systemet er kollapset, skyldes det primært mistet kontakt — det sænkede tempo er en konsekvens. Vejen tilbage går gennem forbindelse: en tilstedeværelse der siger 'du er ikke alene', en kontakt der er tydelig nok til at nå igennem stilheden. Gabor Maté beskriver det som et relationelt rum, hvor nervesystemet naturligt kan begynde at regulere sig selv.",
          qualities: [
            "Etablere en minimal grad af tryghed som indgang",
            "Tilkendegive tilstedeværelse — du er ikke alene",
            "Fokusere på kvaliteten af kontakt som det primære",
            "Mærke støtten og stabiliteten i forbindelsen",
            "Give tillid til at læne sig ind i nærværet"
          ]
        }
      }
    },

    rummet: {
      title: "Rummet",
      subtitle: "Betingelserne for re-balancering",
      pullQuote: "Det handler ikke om at gøre noget ved tilstanden. Det handler om at være med den — på en måde der giver den plads til at bevæge sig.",
      intro: [
        {
          heading: "Tilstedeværelse",
          text: "Den vigtigste betingelse for re-balancering er kvaliteten af tilstedeværelse. Ikke en anspændt, koncentreret opmærksomhed, men en rolig, åben væren-med — som det, der er, præcis som det er. Denne kvalitet skaber i sig selv et rum, hvori forandring kan opstå. Paradoksalt nok ikke fordi vi forsøger at skabe forandring, men fordi vi holder op med at forsøge."
        },
        {
          heading: "Relation",
          text: "Re-balancering sker ikke i isolation. Den kræver relation — en forbindelse til noget udenfor sig selv. Thomas Hübl beskriver det som en proces af synkronisering, hvor ét velreguleret nervesystem kan fungere som støtte for et andet. Vi regulerer hinanden konstant — oftest helt ubevidst. Det er denne somatiske resonans, der gør, at nærvær og ro i ét menneske kan understøtte balancering i et andet."
        },
        {
          heading: "Sikkerhed",
          text: "Nervesystemet re-balancerer kun, når det vurderer, at det er sikkert at gøre det. Denne vurdering sker ofte helt udenfor vores bevidste kontrol — det er neuroception, en kropslig fornemmelse af 'er det sikkert her?'. Trygheden er den absolutte forudsætning for enhver form for regulering og integration. Uden den kan nervesystemet ikke bevæge sig ud af overlevelsestilstande."
        },
        {
          heading: "Autenticitet",
          text: "Det er afgørende, at kvaliteten af nærvær er autentisk og integreret. Det handler ikke om en abstrakt idé eller en teknik, men om en levende erfaring. Netop fordi denne kvalitet er autentisk tilgængelig, kan andre nervesystemer registrere den — der opstår en samklang, en resonans mellem systemer. Det afgørende er graden af integration og autenticitet, ikke den specifikke form."
        },
        {
          heading: "Tid",
          text: "Re-balancering kan ikke fremskyndes. Den har sin egen tidshorisont, sin egen rytme, sin egen indre kalender. I en kultur der hylder hastighed og umiddelbare resultater, er tålmodighed måske den mest radikale kvalitet, vi kan bringe til processen. James Jealous talte om at 'vente på tidevandet' — at anerkende, at kroppens dybeste processer følger en rytme, der ikke kan forceres, ligesom vi ikke kan fremskynde solopgangen eller tidevandets venden. Peter Levine beskriver, hvordan nervesystemet har brug for tid til at integrere — tid til at pendulerere, tid til at finde sin egen vej igennem. Når vi giver den tid, viser det sig ofte, at processen kender sin egen tidsplan langt bedre, end vi nogensinde kunne planlægge den."
        }
      ],
      stilheden: {
        title: "Den Uantastelige Stilhed",
        poem: {
          text: "We love the movement in a seeming stillness,\nthe breath in the body of the loved one sleeping,\nthe highest leaves in the silent wood,\na great migration in the sky above..",
          author: "David Whyte"
        },
        pullQuote: "Stilheden er ikke noget vi skal skabe eller fremtvinge. Den er allerede til stede som et grundlæggende aspekt af virkeligheden og af vores egen natur.",
        text: "I naturen finder stilheden sine mest umiddelbare udtryk. Det autonome nervesystem responderer naturligt på mødet med stilhedens udtryk: fugle der glider henover himlen, bladenes langsomme bevægelse i vinden, bølgernes rytmiske møde med stranden, sollysets vandring over et landskab. Når vi observerer disse fænomener med åben, nysgerrig opmærksomhed, begynder vores nervesystem spontant at synkronisere sig med den samme stilhedskvalitet. Det er som om naturen minder os om noget, vi allerede ved, men har glemt — at stilhed ikke er fravær af lyd, men tilstedeværelsen af en dybere orden. En skov er aldrig tavs; den er fuld af liv, bevægelse og kommunikation. Men alt dette sker inden for en ramme af dyb ro. Fuglesangen bryder ikke stilheden — den udtrykker den. Vindens susen gennem træernes kroner er ikke støj — det er stilhedens egen stemme. Og det er præcis denne kvalitet, der resonerer med noget i os: en erindring om, at vi selv er en del af den samme levende stilhed.",
        text2: "Vi mærker, hvordan den samme uantastelige ro, der bor i naturen, også er til stede i os. Selv i de mest intense tilstande af aktivering eller kollaps findes der altid områder eller kvaliteter af systemet, der forbliver i balance — øer af ro, som aldrig inddrages i nervesystemets storm. Ved at opdage og forbinde sig med disse øer, skabes en ressource, der kan fungere som anker for nervesystemets egen selvregulerende kapacitet. James Jealous pegede på, at denne stilhed ikke blot er en subjektiv oplevelse, men en fundamental kraft — den samme kraft, der organiserer embryonets udvikling, der styrer celledeling og vækst, der opretholder de rytmer, som livet hviler på. Når vi berører den stilhed i os selv, berører vi det samme princip, der får tidevandet til at vende, sæsonerne til at skifte, og frøet til at spire. Det er ikke en metafor. Det er en direkte forbindelse til den intelligens, der gennemsyrer alt levende."
      },
      neutral: {
        title: "The Neutral",
        pullQuote: "Ikke passivitet, men dynamisk ligevægt — hvorfra forandring kan opstarte.",
        text: "The Neutral er en specifik fysiologisk tilstand, hvor kroppens kompensatoriske mønstre midlertidigt nedreguleres. Det er det øjeblik, hvor systemet holder op med at kompensere og i stedet samler sig — som en indånding før en dyb udånding. Det er ikke stilstand, men en levende, vibrerende ro, hvorfra kroppens selvregulerende kræfter kan mobiliseres optimalt. I The Neutral ophører systemets forsøg på at håndtere og kontrollere, og i stedet opstår der et øjeblik af overgivelse — ikke i betydningen opgivelse, men i betydningen en dyb tillid til den iboende intelligens. James Jealous beskrev dette som det øjeblik, hvor 'The Breath of Life' — livskraftens eget åndedræt — kan komme til udtryk uhindret. Det er et øjeblik af dyb lytning, hvor kroppen ikke længere taler med symptomernes sprog, men med helhedens.",
        text2: "Pat Ogden beskriver dette som at 'arbejde inden for tolerancevinduet' — det område, hvor oplevelser kan bearbejdes og integreres uden at systemet overvældes. I The Neutral samler systemet sig omkring midtlinjen — den første struktur, der dannes i den embryologiske udvikling, og som forbliver et fundamentalt referencepunkt for alle kroppens systemer gennem hele livet. Midtlinjen er ikke blot en anatomisk linje, men et organiserende princip — en akse, hvoromkring alt i kroppen orienterer sig. Når systemet finder sin vej tilbage til midtlinjen, sker der en genforening med det mest grundlæggende i os. Det er som at finde hjem til noget, der altid har været der. Enhver struktur, ethvert væv, ethvert organ har en relation til midtlinjen, og i The Neutral genetableres denne relation. Det er herfra, at kroppens dybeste reorganisering kan begynde — ikke styret af en ekstern plan, men af den intelligens, der fra begyndelsen formede os.",
        qualities: [
          "Kompensatoriske mønstre ophører midlertidigt",
          "Systemet samler sig omkring midtlinjen",
          "En levende stilhed — ikke fravær, men tilstedeværelse",
          "Kroppens selvregulerende kræfter mobiliseres",
          "Forandringens udgangspunkt"
        ]
      },
      dosering: {
        title: "Dosering",
        pullQuote: "Mindre er mere — og det er sværere end det lyder.",
        text: "I enhver proces mod balance spiller doseringen en afgørende rolle. For meget stimuli, for hurtigt, overskrider systemets kapacitet og skaber ny ubalance. For lidt når ikke igennem. Den optimale dosering matcher præcis de ressourcer, der er tilgængelige lige nu — ikke i går, ikke i morgen, men i dette øjeblik. Hver situation er sin egen, og vi må i den enkelte situation vurdere alt med nye øjne. Gabor Maté minder os om, at sensitivitet ikke er en defekt, men en biologisk realitet — at hvert nervesystem har sin egen unikke tærskel, formet af genetik, livshistorie og de betingelser, der var til rådighed i de tidligste år. Peter Levine taler om at 'titrere' oplevelser — at møde dem i små, håndterbare doser, der tillader systemet at integrere, før det næste lag præsenterer sig. Det er en kunst, der kræver sensitiv opmærksomhed og en dyb respekt for processens eget tempo.",
        text2: "Det er her, det indre stillads bliver afgørende. Et system med et robust stillads kan rumme en større intensitet. Et system med et mere skrøbeligt fundament kræver en blidere, mere gradueret tilgang. Det er ikke en svaghed — det er en realitet, der kalder på respekt og sensitiv opmærksomhed. Stilladsets kvalitet bestemmer ikke blot, hvor meget systemet kan tåle, men også hvordan det forarbejder det, det møder. Et stærkt stillads tillader en naturlig pendulering — systemet kan bevæge sig mod det svære, trække sig tilbage, integrere, og bevæge sig frem igen. Et skrøbeligt stillads har brug for mere støtte udefra — mere tid, mere tryghed, mere gradvis eksponering. Pat Ogden beskriver det som at udvide tolerancevinduet langsomt og respektfuldt, altid med opmærksomhed på, hvornår vinduet er ved at blive overskredet. Det kræver en villighed til at gå langsommere end vi tror er nødvendigt — og en tillid til, at selv de mindste skridt kan føre til dyb forandring.",
        tegn: [
          "Bevægelserne er symmetriske og harmoniske",
          "Der er en blødhed og flydenhed i systemet",
          "Tempoet er naturligt — hverken forceret eller stagnerende",
          "Vejrtrækningen finder sin egen rytme",
          "En grundlæggende ro er til stede"
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
