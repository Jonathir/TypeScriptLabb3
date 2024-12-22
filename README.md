i .env:
PGURI=postgresql://user:password@localhost:5432/postgres

I backend:
npm install
kompilera backend
npm start

I frontend:
npm install
npm run dev
npx cypress open

Databaserna eller tablesen som ska skapas heter journal och person, det ska vara 2 st. 

Ligger även med en init sql som ni kan använda för att skapa lite låtsasdata:
psql -U postgres -d ditt_databas_namn -f init.sql

https://github.com/Jonathir/TypeScriptLabb3

-- När det kommer till UML-diagrammet, jag har skrivit det i mermaid, men av någon märklig anledning så behöver man uppdatera manuellt varje gång man går in på fliken, annars står det bara "syntax error". --

Mål som uppnåtts:

Applikationen ska ha ett frontend, ett backend och en databas.
-Detta mål uppnås då jag har ett frontend, ett backend och en databas med 2 tabeller.

Varken JavaScript eller JSX får användas. Använd TypeScript (och TSX, om React används) istället. Notera att TypeScript är en stor del av kursen och att TypeScript-insatsen därför ska vara särskilt omfattande.
-Målet uppnås då jag enbart använder mig av tsx och ts.

Testa applikationens funktionalitet med E2E-tester och komponenttester. Notera att mjukvarutester är en stor del av kursen och att testinsatsen därför ska vara särskilt omfattande.
-Målet uppnås då jag har 2st e2e-tester och även ett komponenttest.

Alla måste individuellt utveckla en komponent med testdriven utveckling (TDD). Detta innebär att testerna ska skrivas innan koden för respektive komponentfunktionalitet. Rapporten och Git commit-historiken ska visa att testet/testen kom först. Par- eller mob-programmering är inte tillåtet för att uppfylla detta krav.
-Målet uppnås, egentligen med 2 tillfället, men jag har bara bevis för det ena tillfället. Bevis: https://github.com/Jonathir/TypeScriptLabb3/commit/320f3fe9f75acc5cf51025ecb9952632ca8e3886

Det andra testet som jag gjorde långt innan råkade jag pusha upp samtidigt som koden, som skulle pushats upp efteråt, men eftersom jag inte kan bevisa det så var jag tvungen att göra ett till test så att det syntes, men här är den commiten jag pratar om ändå: https://github.com/Jonathir/TypeScriptLabb3/commit/e53ed7d6d2b19202761ed41f88094f373545e80f

Alla måste individuellt utveckla någon funktionalitet som testas med BDD och Given-When-Then. Eftersom BDD är en utökning av TDD går detta krav att uppfylla samtidigt som TDD-kravet. Par- eller mob-programmering är inte heller tillåtet för att uppfylla detta krav.
-Detta uppfylls också med hänvisning till den första commit-länken, då jag även här anpassade både TDD och BDD och given-when-then.

Alla måste individuellt skapa åtminstone ett UML-diagram som beskriver någon del av projektet.
-Detta mål uppnås då jag skapat ett ER-diagram i UML med hjälp av mermaid, som ni kan se live på sidan.

Alla måste individuellt följa relevanta designprinciper såsom DRY.
-Detta uppnås då jag inte (vad jag märkt) upprepar mig. 

Inkludera en README.md fil som innehåller en kort beskrivning för hur man startar projektet och vilka mål som uppnåtts. 
-Detta uppnås i och med denna filen. 

Jag kan även tillägga att trots att jag mått superdåligt under perioden så tycker jag ändå att jag har lärt mig en bra del om både tester och typescript. Det har varit extremt klurigt att få testmiljöerna att fungera och även få själva testerna att fungera. Likaså att helt ställa om sig när det kommer till typer när man är så van att inte behöva bry sig om det för fem öre. Men tycker kursen har varit kul och lärorik, även om jag önskar att jag inte mådde så dåligt så jag kunde lagt all min energi på att göra alla uppgifter på en lite högre nivå. Jag hoppas att denna uppgift ändå duger för er, detta är liksom det jag hunnit med nu i mån av tid, vet att ni ville ha ett mycket större projekt men som sagt, det blev som det blev. Ber om ursäkt ännu en gång för detta. Men jag har försökt mitt bästa och hoppas det syns. 