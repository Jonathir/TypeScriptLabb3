i .env:
PGURI=postgresql://user:password@localhost:5432/postgres

I backend:
npm install
node dist/index.js

I frontend:
npm install
npm run dev

Vet inte ifall ni behöver göra npx tsc innan men tror inte det.

Ligger även med en init sql som ni kan använda för att skapa lite låtsasdata:
psql -U postgres -d ditt_databas_namn -f init.sql

Mål som uppnåtts:

Applikationen ska ha ett frontend, ett backend och en databas.
- Detta uppfylls nu genom att den har alla delar.

Applikationen ska fungera som en sammanhängande helhet. Frontend-delen ska kommunicera med backend-delen som i sin tur ska kommunicera med databasen.
- Detta uppgylls också då alla delar kommunicerar med varandra

Applikationens frontend ska kunna presentera (via GET och SELECT) uppgifter från databasen. Frontend-delen ska hämta JSON från backend-delen. Rendera uppgifterna i HTML-element (använd inte alert eller liknande).
- Detta uppfylls genom att jag gör ett GET-anrop med SELECT för att hämta uppgifterna jag vill nå från databasen, och detta hämtas sedan i frontend-delen via en useEffect i kombination med axios och sedan renderas det till slut via html-element.

Varken JavaScript eller JSX får användas. Använd TypeScript (och TSX, om React används) istället.
- Detta uppfylls då jag inte använder varken JavaScript eller JSX, utan istället TSX.

Använd props med ett tillhörande interface i åtminstone en komponent.
- Detta uppfylls så som texten beskriver. 

Använd useState med en tillhörande generics-deklaration i åtminstone en komponent. Båda värdet och funktionen som ingår i array:en som returneras av useState måste användas.
- Detta uppfylls enligt uppgiftens krav också.

Inkludera en README.md fil som innehåller en kort beskrivning för hur man startar projektet och vilka mål som uppnåtts. 
- Och i och med denna punkten så uppnår jag kraven för G, om jag inte missat något. :D Detta är en väldigt maget uppgift, jag vet, men som jag skrivit till er innan så har jag hamnat i lite trubbel mentalt och inte lyckats sammanställa uppgiften förrän nu. Men jag har gått över alla punkter i uppgiften flera gånger och det ser inte ut som att jag missar något i mina ögon i alla fall. 
