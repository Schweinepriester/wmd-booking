# wmd-booking

Web &amp; Mobile-Development - Projekt - Veranstaltungssystem

## Installation

- `/service/Config.php` anpassen
- In `/.htaccess` `AuthUserFile` anpassen
- Ggf. `/.htuser` anpassen
- `wmd_booking.sql` oder `wmd_booking_structure_only.sql` um die Datenbank zu erstellen

## Strato-Installation

- <http://stackoverflow.com/questions/2916232/call-to-undefined-function-apache-request-headers>
- <http://strato-faq.de/1632>
- `event.sql`
- <http://www.strato-faq.de/10>


## Knowissues

- mobile: rücksprung nach löschen
- mobile: pushrefresh wording falsch

## Todo?

- event.config.js
- <del>config.php</del>
- <http://api.jqueryui.com/datepicker/#method-setDate>

## Aufgabe

Siehe [hier](ress/Projektarbeit%20-%20Aufgabenstellung%20WS%202013.pdf)

## Team

Florian, Marcel, Kai

## Idee

- <del>Einfaches Buchungssystem</del>
- Veranstaltungssystem

## Datenbankfelder

- Name der Veranstaltung (name)
- Datum (date)
- Startzeit (time)
- Endzeit (time)
- Dauer, berechnen!
- Ersteller (admin)
- Beschreibung (notes)

## Berechnung

<del>-> ich würde vorschlagen, dass wir einen Countdown bis zum Veranstaltungsbeginn einbauen. Also noch xx Tage.</del>
<del>Das wäre dann der Teil der Aufgabenstellung</del>

- Siehe oben, Dauer berechnen!

## Besucher 

Was können Besucher?

- Veranstaltung lesen
- Einloggen (HTTP-Basic, explizit keine benutzerverwaltung! ggf. sogar dass man sich vor der benutzung generell anmelden muss!)
- (Registrieren) im ersten schritt nicht
  

## Registrierte User

- Veranstaltung erstellen
- Veranstaltung löschen
- Veranstaltung editieren
- (Ausloggen)