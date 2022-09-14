# Hemiron onderzoek Fastify vs ExpressJS

Installeer de dependencies
```bash
npm install
```

Download de bin files voor het testen van file uploads en zorg dat ze in de assets folder staan (test/assets/).
Dit kan met de volgende commandos (of handmatig)
```bash
wget -O test/assets/100MB.bin https://speed.hetzner.de/100MB.bin

wget -O test/assets/1GB.bin https://speed.hetzner.de/1GB.bin 
```

# Kies een server om te starten
Start de ExpressJS server
```bash
npm run start-express-server
```

Start de ExpressJS server
```bash
npm run start-fastify-server
```



Wanneer je 1 van de servers heb gestart kan je de tests uitvoeren. Dit doe je door middel van het draaien van het volgende script (in een aparte terminal)
```bash
npm run start-performance-tests
```