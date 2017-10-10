
# Inleiding

![Node.js](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/320px-Node.js_logo.svg.png)

Node.js is een "run-time environment" waar JavaScript uitgevoerd wordt voor bijvoorbeeld server-side applicaties.
Node.js wordt veel gebruikt voor server applicaties vergelijkbaar met een combinatie van Apache+PHP in 1.
Maar je kunt er ook desktop applicaties mee ontwikkelen bijvoorbeeld met [Electron](https://electronjs.org/).

In het verleden werd JavaScript alleen in de browser toegepast om websites aan te vullen met extra technologie en daarmee functionaliteiten.

JavaScript (JS) mag je niet verwarren Java (Oracle), ondanks dat de syntax erg veel op elkaar lijkt.


# Wat ga je leren

We zullen Node.js gebruiken om JavaScript te leren om jouw te laten zien wat de kracht van Node.js is.

Bij veel programmeertalen wordt ook gesproken over [concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)). Dit is zeer belangrijk om te leren, omdat Node.js eigenlijk niet anders werkt!

Dus dit zullen we snel moeten leren omdat alles eigenlijk zo werkt... :-S.
Als je dit een keer gedaan hebt, dan heb je de mindset in elk geval, ook voor andere programmeertalen.
We kunnen Node.js eigenlijk niet goed inzetten anders.

Daarnaast gaan we ons ook richten op versiebeheer met GIT.
Met GIT wordt op dit moment door elke softwareontwikkelaar gewerkt en is echt niet meer weg te denken uit de applicatieontwikkeling. Eigenlijk doe je niet mee als je niet GIT een beetje beheert.

We gaan je ook leren om netjes te documenteren in de programmeercode. Dit doen we doormiddel va `jsdocs` en een z.g.n. linter.
We leren ook omgaan met de [.editorconfig](http://editorconfig.org/) file. Later hier meer over ;)

Dit alles zullen we tijdens de lessen met Windows uitvoeren, maar het is heel goed mogelijk met MacOS of Linux!

# Wat ga je niet leren bij de lessen

We zullen zoveel mogelijk proberen toe te lichten om GIT, Node.js en JavaScript te doen tijdens deze lessen.
Maar 1 ding staat als een paal boven water, dat is dat je zelf er mee aan de gang moet. Alleen dan leer je het echt!

Dus zorg dat je mee doet in de lessen, aanwezig bent, en actief ermee aan de gang gaat (wellicht buiten de lessen om ook!).

Node.js applicaties worden voornamelijk in JavaScript geschreven.
Maar het is ook mogelijk om C++ programma's te combineren met Node.js.
Dit is te complex, en zullen we niet behandelen.

# Het programma

## Periode xx

* 00 Introductie
  1. Wat is Node.js en wat zijn overeenkomsten met andere platformen
  1. Voordelen Node.js: Sneller ontwikkelen in JavaScript dan in Java
  1. Wie gebruikt Node.js: Paypal, LinkedIn, Yahoo, Mozilla, Netflix

* 01 Beginnen (Programma's die nodig zijn om goed te beginnen)
  1. [Node Version Manager (nvm) for Windows](https://github.com/coreybutler/nvm-windows) installeren en kunnen bedienen
  1. Een Node.js LTS (Long Term Support) versie installeren met nvm en testen
  1. [Microsoft Visual Studio Code (VS Code)](https://code.visualstudio.com/) of [IntelliJ](https://www.jetbrains.com/idea/) downloaden en installeren
  1. Een directory maken voor het eerste Node.js project
  1. Open de directory met VS Code of IntelliJ
  1. [package.json](https://docs.npmjs.com/files/package.json) creëren en begrijpen
  1. package.json voorzien van node_modules (`dependencies` en `devDependecies`)

* 02 Oefeningen die ertoe doen (Kopieren/plakken van voorbeeldcode aanpassen en bestuderen)
  1. Een eenvoudige eerste HTTP server
  1. Een meer geavanceerde HTTP Server en HTML tonen in de browser
  1. Ontdekken dat een argument in een functie ook de referentie naar een functie kan zijn!

* 03 De basis - deel 2
  1. Node.js Debuggen met VS Code of IntelliJ
  1. Datatypes bestuderen tijdens het Debuggen (geheugenmodel hierin terugzien)
  1. Objecten in Javascript met eigenschappen en functies (Object literal)

* 04 De basis - deel 1 (Functies en verwerkingen)
  1. Variabelen gebruiken (geheugen) in relatie tot datatypes in JavaScript
  1. Functies en Sequentiele verwerking oefenen
  1. Callback functies als functie-argument doorgeven (anonymous callback `function`)
  1. Asynchrone verwerkingen uitleggen (Bij Input/Output gebruiken zoals database requests, netwerk requests, filesystem)
  1. Callback functies debuggen met `Asynchrone` verwerkingen (`setTimeout` als voorbeeld)

* 05 Oefeningen die ertoe doen (Asynchrone verwerkingen)
  1. JSON Data ophalen van een andere api
  1. Deze data verwerken en tonen op jouw eigen website
  1. Leren hoe error verwerking afgesproken is in Node.js ("Ongeschreven regel" maar wel doen!)
  1. Try Catch principe, wat niet kan bij Asynchrone verwerkingen, alleen sequentiele verwerkingen

* 06 Meer basis
  1. `Truthy` en `Falsy` begrijpen in JavaScript (telkens opnieuw nadenken)
  1. [Lussen](https://www.stackchief.com/tutorials/JavaScript%20ES6%20Loops) begrijpen en oefenen
  1. Functies en "Parallele" verwerkingen (Bewustwording `Concurrency` in Node.js)
  1. The Eventloop (1 Thread??)

* 07 Oefeningen die ertoe doen
  1. Snappen dat je Server Side JavaScript en Client Side JavaScript in verschillende omgevingen uitgevoerd worden
  1. Direct hosten/serveren van statische content (zoals HTML, CSS, Client side JavaScript etc)
  1. Direct hosten/serveren van statische content van node_modules (bijvoorbeeld bootstrap e.d.)
  1. Scheiden van HTML en Data doormiddel van HTML Templating (Hergebruiken HTTP code renderen met JSON)

* 08 NPM Scripts
  1. Documentatie schrijven en genereren uit jouw JavaScript code volgens jsdocs
  1. Je eerste Unit Test Schrijven
  1. Linter (eslint) toepassen voor Node.js code
  1. Regels vaststellen in eslint configuratie (plugins)

* 08 Herhalen en meer Asynchrone verwerkingen met oefeningen die ertoe doen
  1. Asynchrone verwerkingen met manipuleren van grafische bestanden (files verwerken)
  1. Async callbacks, Promisses
  1. "Parallele" verwerkingen van meerdere grafische bestanden tegelijk (Concurrent)

* 09 Jullie eerste project in een Team! Maar hoe? Starten met GIT!
  1. Vorm Teams van 2 a 3 ontwikkelaars (developers), 1 project(tje)
  1. Projecten (inspiratie): Een eenvoudige chat website (HTTP POST/GET requests)
  1. GIT: Introductie (Grafische GIT client installeren)
  1. GIT: Initializeren (`git init`)
  1. GIT: .gitignore aanmaken en begrijpen
  1. GIT commit (leren dat een commit message heel belangrijk is, maar zeer kort dient te zijn)
  1. Een "Remote repository" koppelen
  1. De volgorde aanhouden : `1.` Commit `2.` Pull `3.` Push 




# Bronnen

## GIT (Grafisch)
* [A free Git client for Windows and Mac](https://www.sourcetreeapp.com/)
* [The legendary Git GUI client for Windows, Mac and Linux](https://www.gitkraken.com/)
* [GIT Download](https://git-scm.com/downloads)
* [A collection of useful .gitignore templates](https://github.com/github/gitignore)

## JavaScript
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [ECMAScript 2015 (ES6)](http://es6-features.org/)

## Node + 
* [Real-time Web with Node.js - Code School](https://www.codeschool.com/courses/real-time-web-with-node-js)
* [Exercise (Video): Basics of Node.js and NPM](https://www.coursera.org/learn/angular/lecture/leTwJ/exercise-video-basics-of-node-js-and-npm)
* [Learning Node.js : Introducing the Event Loop | packtpub.com](https://www.youtube.com/watch?v=EQL9r8UlrPA)
* [Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [Parallel vs Concurrent in Node.js](https://bytearcher.com/articles/parallel-vs-concurrent/)

## Node installeren
* [How to Install npm & Manage npm Versions](https://docs.npmjs.com/getting-started/installing-node)

## Zeer veel gebruikte Node Bibliotheken (npm libraries)
* [Express](https://expressjs.com/)
* [Understanding Express](https://evanhahn.com/understanding-express/)
* [Using template engines with Express](http://expressjs.com/en/guide/using-template-engines.html)
* [Use EJS to Template Your Node Application](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
* [ESLint - The pluggable linting utility for JavaScript and JSX](https://eslint.org/)
* [Mocha JavaScript test framework](https://mochajs.org/) => [Mocha npm module](https://www.npmjs.com/package/mocha)
* [JavaScript test coverage made simple](https://istanbul.js.org/) => [Istanbul npm module](https://www.npmjs.com/package/nyc)
* [JSDocs 3](http://usejsdoc.org/) => [jsdoc npm module](https://www.npmjs.com/package/jsdoc)
* [Node.js native addon build tool](https://github.com/nodejs/node-gyp)

## Voorbeelden in Node.js
* [Creating an HTTPS Server with Node.js](https://blog.cloudboost.io/everything-about-creating-an-https-server-using-node-js-2fc5c48a8d4e)

## RESTful api's
* [swagger-routes](https://github.com/krakenjs/swaggerize-routes)

## Node.js referenties
* [Top 15 sites built with Node.js](https://medium.com/@DanSiepen/top-15-sites-built-with-node-js-a6412638eb28)

## Benchmark

* [Apache (Benchmark)](https://www.apachelounge.com/download/)