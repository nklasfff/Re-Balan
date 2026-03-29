# Re-Balan — Identitets-transformation

## Vision
Fra undervisningsmateriale til **kontemplativ ledsager** — en app man vender
tilbage til for at mærke, ikke for at lære. Designet er allerede der.
Teksterne skal indhente det designet allerede ved.

## Principper for alle ændringer
- Bevar hvert eneste ord af indhold (tekster flyttes/reframes, slettes ikke)
- Bevar al æstetik, animationer, illustrationer
- Tone skifter fra "vi skal forstå" → "vi kan mærke"
- Struktur skifter fra pensum (01, 02, 03) → organisk udforskning
- Refleksion bliver mere central, Fænomener finder en levende form

---

## Trin 1: Onboarding — fra introduktion til invitation
**Hvad:** Onboarding sætter tonen for hele oplevelsen. Den skal ikke forklare
hvad appen er, men invitere brugeren ind i en tilstand.

- Step 0: Behold titel, fjern "Biodynamics"-label (allerede gjort)
- Step 1: Skift fra "En iboende intelligens" (forklarende) til noget
  der minder om, f.eks. "Noget i dig ved allerede"
- Step 2: Fjern de nummererede søjler (01, 02, 03) — erstat med et
  enkelt, poetisk udsagn om hvad brugeren kan finde her
- Step 3: Behold James Jealous-citatet — det er perfekt som tærskel
- Knaptekst: "Fortsæt" → "Træd ind" (på sidste step)

**Filer:** index.html (onboarding HTML), data.js (hvis tekster ligger der)

---

## Trin 2: Hjem — fra kursusplan til åbent landskab
**Hvad:** Forsiden skal føles som et roligt sted man lander, ikke en
indholdsfortegnelse med numre.

- Fjern numre (01, 02, 03) fra portal-kort
- Fjern pilene (→) fra kortene — de er portaler, ikke links
- Skriv nye, mere evokative undertekster der inviterer frem for at opsummere
- Flyt Refleksion op som ligeværdig portal (ikke sekundært deep-link)
- Fænomener integreres som del af undersiderne (fjernes som selvstændig
  portal fra forsiden)
- Behold pæle-illustration, closing quote, hero — alt det er perfekt

**Filer:** index.html (portal-sektion), css/style.css (evt. layout-justeringer)

---

## Trin 3: Undersider — fra pensum til udfoldelse
**Hvad:** Essensen, Nervesystemet, Rummet beholder alt indhold men
reframes fra didaktisk til kontemplativt.

- Fjern "01 —", "02 —", "03 —" fra page-hero labels
- Skriv nye subtitler der er inviterende frem for beskrivende
- Behold alle section-cards med fold-ud — men giv dem varmere, mere
  personlige titler hvor de er for kliniske
- Pull-quotes forbliver uændrede (de er allerede perfekte)
- Alle tekster forbliver — de er fantastiske, bare indramningen ændres

**Filer:** index.html (page-hero spans), js/data.js (card-titler)

---

## Trin 4: Fænomener — fra opslagsbog til levende væv
**Hvad:** Fænomener-sektionen er nødvendig men føles som en ordbog.
Den skal føles som en samling indsigter man kan blade i.

- Fjern "short" undertekster (de er for leksikon-agtige)
- Giv hvert begreb en mere poetisk/inviterende indramning i stedet
- Overvej at ændre titlen fra "Fænomener" til "Indsigter" eller
  "Det levende landskab"
- Behold fold-ud-mekanikken — den passer perfekt til kontemplativ browsing

**Filer:** js/data.js (term-tekster), index.html (evt. subtitel)

---

## Trin 5: Refleksion — fra sekundær til central
**Hvad:** Refleksions-karrusellen er appens mest autentiske sektion.
Den skal være mere synlig og mere central i oplevelsen.

- Gør Refleksion til en fuld portal på forsiden (ligeværdig med de tre andre)
- Giv den en egen illustration (kontemplative koncentriske cirkler)
- Tilføj et kort poetisk intro-afsnit før karrusellen
- Behold alle 12 spørgsmål uændrede — de er perfekte

**Filer:** index.html (portal-sektion, refleksion-side), css/style.css

---

## Trin 6: Navigation — fra kapitelstruktur til fri udforskning
**Hvad:** Nav-links skal afspejle den nye identitet.

- Desktop nav: Behold "Hjem", men overvej om undersiderne skal hedde
  noget andet end "Essensen", "Nervesystemet", "Rummet"
- Mobil-menu: Fjern separatoren mellem hoved- og sekundære links
  (alle er ligeværdige nu)
- Refleksion flyttes op i primær navigation

**Filer:** index.html (nav, menu), css/style.css

---

## Trin 7: Footer og afslutning
**Hvad:** Footeren skal afrunde oplevelsen stille.

- Fjern "Biodynamics" fra footer
- Behold "Balancering & Re-Balancering"
- Evt. tilføj en lille sætning som "Vend tilbage når du har brug for det"

**Filer:** index.html (footer), js/app.js (hvis footer genereres dynamisk)

---

## Rækkefølge og batchning
Trin 1-2 først (onboarding + hjem = førstehåndsindtrykket)
Trin 3-4 derefter (undersider + fænomener = indholdet)
Trin 5-6 så (refleksion + navigation = strukturen)
Trin 7 til sidst (footer = den stille afslutning)

Commit efter hvert trin.
