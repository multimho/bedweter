# bedweter v1 eisen #

## Versie 1 ##

### actoren ###
  * **Verpleging**; Iemand binnen een ziekenhuis die een bed zoekt 
    voor een (ontslagen?) patient. Wil graag een overzicht zien 
    van alle beschikbare bedden van _aangesloten_ _beddenplekken_. 
    Doel is om snel een geschikt beschikbaar bed te vinden en 
    te reserveren.
  * **Beddenplek**; Iemand binnen een organisatie met verzorgingsmogelijkheden
    voor patienten. Zij willen graag hun bedden ter beschikking stellen
    aan _aangesloten_ organisaties. Bedden kunnen bepaalde eigenschappen
    hebben. En bedden zijn beschikbaar (te resereveren) of bezet.
  * **Aangesloten**; In versie 1 van de bedweter betekent dit dat 
    de personen binnen de _beddenplek_ en _verpleging_ organisaties
    bedden mogen inzien en reserveren. Het is op dit moment onbekend
    wat de voorwaarden zijn om _aangesloten_ te worden. 

### Functionele wensen
  * Twee GUI's; een voor de verpleging, een voor de beddenplek
  * Verpleging ziet verschillende tabellen met beschikbare bedden
    van aangesloten beddenplekken.
  * Beddenplek ziet hun eigen tabel met beschikbare bedden.

### nice to have
  * Beddenplek kan zien wie toegang heeft
  * Verpleging kan toegang vragen bij beddenplek 
  * Beddenplek kan status (beschikbaar, niet beschikbaar) aanpassen van 
    een bed
  * Verpleging kan beschikbaar bed reserveren 
  * Beddenplekken (organisatie kaarten) sorteren op basis van afstand tot
    woonhuis familie patient

### UI Design schetsen

#### Voor de beddenplek
![Beddenplek view](https://github.com/mho/bedweter/blob/master/design/beddenplek_view.png "Scherm van de beddenplek")

#### Voor de verpleging 
![Verpleging view](https://github.com/mho/bedweter/blob/master/design/verpleging_view.png "Scherm van de verpleging")

Ja er is genoeg ruimte om deze UI's ter verbeteren. Voel je vrij!

### Technische systeem eisen en technieken
  * SPA (Single page webapplication)
  * HTML5, CSS en javascript
  * Voor de business logica en "backend" wordt node.js gebruikt via npm.
    De applicatie wordt dan via browserify omgezet tot een bundle.js en 
    in de HTML gezet.
  * Frontend UI en applicatie framework moet nog bepaald worden! Suggesties?

### Afhankelijkheden
  * IPFS, OpenPGP, 

# bedweter: uiteindelijke wensen #

## Verpleging ##
Moet
  * kunnen zoeken naar bedden
  * burger kunnen aanmelden voor een bed
  * duur van opname ingeven
  * DBC nummer opgeven

## Burger ##
Heeft

  * BSN
  * Voornaam
  * Achternaam
  * Geboortedatum (en dus leeftijd)
  * Geslacht
  * Verzekeringsnummer
  * Verzekeraar
  * Rekening nummer

Schrijft de verzekeraar in het dossier
  * Verzekerd [ja/nee]

Voor de demo alvast dit klaar zetten? Of wordt dit als
aparte "tabel" ingeschreven in de locker?
  * toegewezen bed (locatie, type etc)

Verpleging dingen (DBC, duur opname)
  
## Beddenplek ##
Heeft

  * Lijst met bedden (en een totaal)
      - formaat
      - type [ IC, normaal, kort, lang, nood ]
      - alleen || gedeelde kamer
      - beschikbaarheid [vrij || gereserveerd tot]
  * locatie
      - adres
      - plaats
      - postcode  (en dus afstand !)
      - GPS ?

## Verzekeraar ##
Moet
  * een bed goedkeuren (DBC en duur controleren)
  * kijken of iemand betaald heeft (verzekerd is)

verzekeraar krijgt een popup dat verpleging een burger
heeft aangemeld voor een bed. Verzekeraar neemt automatisch
beslissing, want je bent verzekerd of niet.
