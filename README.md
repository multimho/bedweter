# bedweter requirements #

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
