# Hemiron onderzoek Fastify vs ExpressJS

Om de tests uit te kunnen voeren moet de volgende software geïnstalleerd worden met de versies die hiervoor zijn beschreven.
* NodeJS
  * https://nodejs.org/en/download/ 
* NPM 
  * https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* Typescript
  * https://www.npmjs.com/package/typescript


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

Start de Fastify server
```bash
npm run start-fastify-server
```

Wanneer je 1 van de servers heb gestart is kan je de tests uitvoeren (doe dit in een aparte terminal zodat de webserver wel aan blijft). 
Dit doe je door middel van het draaien van 1 van de volgende scripts:

Voor Fastify 
```bash
npm run start-performance-tests-fastify
``` 

Voor ExpressJS
```bash
npm run start-performance-tests-express
``` 