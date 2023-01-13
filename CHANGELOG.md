## Version 3.8.8
*13.01.2023*

- **composer**

## Version 3.8.8
*09.01.2023*

- **Social Media Links können nun im Fußbereich der Seite hinterlegt werden**
    - die Einstellung befindet sich im neuen Tab "Social media"
    - die Icons können beliebig angelegt und positioniert werden
    - aktuell stehen folgende Plattformen zur Auswahl: Instagram, Twitter, Facebook, Pinterest, Discord, TikTok, YouTube, LinkeIn, Whatsapp, E-Mail, Telefon, Anderes
    - Icons werden nur angezeigt, wenn ein Link hinterlegt ist und können jederzeit deaktiviert werden, ohne Sie komplett zu löschen
- **Neue Einstellung: Strukturseite hinzugefügt**
    - Seiten können nun in der Konfiguration als Strukturseite festgelegt werden - das bedeutet, die Seite ist selbst nicht mehr erreichbar und dient als strukturierendes Element für die Unterseiten
    - dadurch kann z.B. "Galerien" im Hauptmenü dargestellt werden, es sind jedoch nur die Unterseiten "Meeresgalerie" und "Berggalerie" erreichbar
    - versucht der Benutzer über die Adresszeile die Strukturseite zu erreichen (domain.xy/galerien/), landet er auf der ersten Unterseite (domain.xy/galerien/meeresgalerien/)
- **Das Element "Cardbox" wurde überarbeitet und bietet nun mehr Gestaltungsmöglichkeiten**
    - anstatt den bisher definierten Feldern, ist es jetzt möglich für die Boxen ein Layout anzulegen und Blöcke hinzuzufügen (so wie bisher im Akordeon-Element)
- **Das Element "Trenner" kann jetzt in jeder beliebigen Farbe angelegt werden**
    - Der Standard ist weiterhin die definierte Textfarbe
    - als Hilfe ist, für den Fall dass eine andere Farbe verwendet werden soll, die Primärfarbe / Firmenfarbe hinterlegt
- **Meta Tag msapplication hinzugefügt**
    - das appletouch-icon wird nun auch als msapplication-tileimage verwendet
    - das Icon wird auf der Windows 8, 10, 11 Kachel angezeigt, falls die Website dem Start-Menü hinzugefügt wurde
- **In der Administration werden die Events / Veranstaltungen in der Übersicht nach Datum / Zeitpunkt des Events sortiert**
- **Die Schriftgröße von Fließtexten wurde angepasst und das responsive Verhalten verbessert**
- **Die Einstellung "Seite nur für angemeldete Benutzer anzeigen" kann nicht mehr für Impressum, Datenschutz und Kontakt getroffen werden**
    - Die 3 Seiten konnten auch vorher nicht mit einem Passwortschutz versehen werden, allerdings existierte das Feld in der Administration
- **Layout und Verhalten der Seiten-Konfiguration verbessert**
    - es wurden Überschriften hinzugefügt
    - Einstellungen, die auf den Seiten-Typ keine Auswirkung haben, werden ausgeblendet
    - Wird eine Seite als Strukturseite definiert, kann die Menüzuweisung für den Footer nicht mehr angewählt werden
- **Das Layout der Eventübersicht, Beitragsübersicht und Beitragsvorschau (News und Veranstaltungen) wurde für Tablets und Mobilgeräte verbessert**
    - die Zeilen werden nun früher 2-spaltig / 1-spaltig, wodurch die Elemente nicht mehr so hoch und schmal dargestellt werden
- **Platzhalter hinzugefügt**
    - ist kein Logo vorhanden, wird auf einen Platzhalter zurückgegriffen
    - ist kein Hintergrund für den Footer vorhanden, wird auf einen Platzhalter zurückgegriffen
- **Bei passwortgeschützten Seiten wurde in der Administration ein Hinweis bzgl. der Benutzer hinterlegt**
    - Der angemeldete Admin-Benutzer sieht passwortgeschützte Seiten
    - Benutzer die als "Mitglied" angelegt sind, können sich auf der geschützten Seite anmelden und anschließend über das Hauptmenü weder abmelden
- **Umbenennung von Tabs**
    - der Tab "Einstellungen / META" auf dem Dashboard wurde umbenannt zu "Grundeinstellungen"
    - der Tab "Einstellungen" in den Seiten wurde umbenannt zu "Konfiguration" ("Einstellung" doppelt sich ansonsten)
- **Kleine optische Verbesserungen an verschiedenen Stellen im Pagebuilder**
- **Fix: Im Hauptmenü wurde der Dropdownpfeil teilweise auch angezeigt, wenn die Unterseiten im Menü ausgeblendet wurden**
- **Fix: Im Wartungsmodus wurde das isolierte Menü (Impressum, Datenschutz) teilweise doppelt angezeigt**
- **Fix: Im Wartungsmodus war der Link zur Kontaktierung per Mail nicht korrekt**
- **Fix: Der Hintergrund von Dropdownmenüs im Hauptmenü war immer weiß, anstatt sich an die Hintergrundfarbe der Menüleiste anzupassen**

## Version 3.8.72
*29.12.2022*

- **Fix: Bei überschriften funktionierten Umbrüche und sonstiges HTML nicht**
- **Fix: Die Kontaktseite konnte nicht mit einer Anmeldung versehen werden**

## Version 3.8.7
*28.12.2022*

- **Beiträge / Blogs / News werden jetzt in der Übersicht in Seiten gegliedert**
    - um die Seitenladegeschwindigkeit und die Übersichtlichkeit zu verbessern, erhält die Übersicht bei mehr als 6 Beiträgen eine Paginierung
    - der Besucher kann vor- / zurückblättern um die vorherige / nächste Seite zu sehen
- **PDF-Dateien können jetzt als iFrame eingebunden werden**
    - auf der Seite wird eine interaktive Vorschau der Datei eingebunden
    - Optional kann ein Link zur PDF und ein Link zum direkten Download angezeigt werden
    - das Element im Pagebuilder heißt "PDF-Datei"
- **Das Khepri-Logo in der Administration wurde getauscht**
    - Die Schrift wurde leicht verändert
- **Generell wurde die Struktur des Templates erheblich verbessert**
- **Für den Seitentyp "Link" wurde die Überschrift im ersten Tab zu "Link" geändert**
- **Für den Seitentyp "Link" wurde das Icon im ersten Tab ausgetauscht**
- **Fix: der Seitentyp "Link" hatte ein Problem mit den Footerspalten-Überschriften in der Menü-Zuweisung**

## Version 3.8.6
*11.12.2022*

- **Lade-Animation beim versenden des Kontaktformulars hinzugefügt**
    - um dem Besucher nach dem Absenden des Formulars ein optisches Feedback zu geben, wir eine Lade-Animation abgespielt
    - nach einigen Sekunden sieht der Besucher die Bestätigungs-Seite

- **Generell wurde die Struktur des Templates erheblich verbessert**
- **Fix: ein fehler wurde behoben, bei dem teilweise das Event- / News-Vorschaubild abgeschnitten dargestellt wurde**
- **Fix: die Seitenübersicht in der Administration, zeigte News und Events nicht an, wenn diese in einer nicht-Übersichtsseite angelegt waren**

## Version 3.8.5
*06.12.2022*

- **Neu Angelegte Seiten werden nun automatisch dem Hauptmenü hinzugefügt**
    - die Seite kann weiterhin wie gewohnt für das Hauptmenü deaktiviert werden
    - direkt nach dem Anlegen befindet sich die Seite dennoch im Status "Entwurf" und ist nur für angemeldete Admins sichtbar.
- **Fix: Die Login-Seite warf einen Fehler**
- **Javascript-Dateien wurden intern auf mehrere Dateien aufgeteilt**
    - das verbessert die Wartung, Aktualisierung und Administrierung der Seite
    - die finale einbindung auf der Website bleibt bei einer minifizierten Datei

- **Die Animation des Navigation-Icons in der mobilen Darstellung wird nun nicht mehr als eigene CSS-Datei geladen**
    - besser Ladezeiten und sauberer Code
    - flexbilere Anpassungen möglich
    
- **verschiedene Dateien wurden ausgelagert**
    - das verbessert die Wartung, Aktualisierung und Administrierung der Seite

## Version 3.8.4
*04.12.2022*

- **es ist nun möglich, für die angelegten Seiten, ein Vorschaubild zu hinterlegen, welches in der Googlesuche und beim Teilen via Social media, angezeigt wird**

- **Das Icon zum öffnen / schließen der mobilen Navigation wurde verbessert**
    - das icon hat nun immer die gleiche Position und eine Animation beim Klicken

- **Neues Seitenlayout "Seite mit Überschrift" hinzugefügt**
    - das Seitenlayout beeinhaltet automatisch den Seitentitel als Überschrift und einen Trenner
    - ansonsten ist das Layout wie gewohnt gestaltbar

- **Benutzerdefinierte Links im Menü können nun optional im neuen Tab geöffnet werden**
    - insbesondere bei Verlinkungen auf eine externe Seite, ist es sinnvoll, wenn der Besucher die aktuelle Seite nicht verlässt, sondern sie in einem Tab bestehen bleibt

- **Auf kleinen Mobilgeräten, stapelt sich das Footermenü**
    - das verbessert die Darstellung auf schmalen Bildschirmen
    
- **In der Einstellung des Abstandelements kann nun per Dropdownmenü die Einheit ausgewählt werden**
    - die Verfügbaren Einheiten sind px, %, rem, vw und vh
    - optional kann auch eine andere Einheit eingetragen werden
    
- **Fix: ein Fehler wurde behoben, bei dem der Abstand zwischen den Elementen im Hauptmenü nicht immer gleich war**

- **Fix: auf der Impressums- und Datenschutz-Seite war der Abstand zwischen Überschrift und Trenner zu gering**

- **Fix: der Seitentyp "Link" wurde als "page", beim Anlegen in der Administration, angezeigt**

## Version 3.8.32
*26.11.2022*

- **Hotfix: Ein Fehler wurde behoben, bei dem die Bildunterschrift im Bildergalleriemodus nicht richtig gesetzt wurde**

## Version 3.8.31
*25.11.2022*

- **Hotfix: Ein Fehler wurde behoben, bei dem die Hintergrundabdunklung im Bildergalleriemodus nicht überall zu sehen war**

## Version 3.8.3
*25.11.2022*

- **Fix: Bildergallery konnte im Safari-Browser nicht vergrößert werden (MacOS / IOS)**

    - Der "Vollbild"-Modus für die Bildergallery wurde Grundlegend erneuert
    - Funktionalität für alle Browser gewährleistet
    
- **Fix: Der Eventcountdown funktionierte nicht in Safari für IOS**
    
- **Die Event- und Newsvorschau wird jetzt immer in gleicher Höhe angezeigt**

    - Bisher variierte die Höhe abhängig von der Länge des Vorschautextes
    - Der Vorschautext wurde auf 200 Zeichen beschränkt
    
- **Die Startseite erhält jetzt in Google Search als Titel den hinterlegten Firmennamen**

    - am 14.10.22 führte Google den Seitennamen in der Suche ein
    - ob Google den Seitennamen immer richtig erkennt, ist nicht sicher
    
- **Fix: Nach fehlerhafter Eingabe auf der Loginseite wurde der Besucher zurück auf die Startseite geschmissen**

- **Das Trennerelement kann jetzt auch in der Primärfarbe angelegt werden**
    
- **Das Abstandselement kann jetzt mit allen Einheiten konfiguriert werden**

    - Bisher konnte nur ein Pixelabstand (z.B. 10px) eingestellt werden
    - es ist jetzt möglich alle möglichen Einheiten zu hinterlegen (z.B. rem, %, vw etc.)

- **In Formularen mit Dateiupload ändert sich nun der Text beim hineinziehen einer Datei**
    
    - Der Text wurde geändert zu "Loslassen zum Hochladen"


- **Startseite, Impressum und Datenschutz kann nicht mehr gelöscht werden**

    - Da diese Seiten nicht gelöscht werden sollten, ist dies nun nicht mehr möglich
    
- **Diverse Responsive Darstellungen wurden verbessert**

- **Eingebundene iframe-Videos wurden mit Lazyloading versehen**

    - Eingebaute YouTube-Videos werden nun erst geladen, wenn der Besucher zu diesem Element gescrollt hat
    - Dadurch wird die Ladegeschwindigkeit und der SEO-Wert der Seite verbessert
    
- **Die Navigationsleiste wechselt früher zum "Burger-Menü" (Mobilenavigation)**

    - Insbesondere die Darstellung für Hochkant-Tablets wurde hiermit verbessert
    
- **Fix: Das Firmenlogo im Footer wurde bei kleinere Auflösungen abgeschnitten**

    - Das Logo wurde mit einer maximalen breite versehen
    
- **Fix: Ein Fehler wurde behoben, bei dem die Bildbeschreibungsbox im Gallerymodus geladen wurde, auch wenn keine Beschreibung hinterlegt wurde**


- **Fix: Der Copyright-Hinweis unterhalb der Seite wurde auf Mobilgeräten teilweise nicht richtig dargestellt**

- **Fix: Ein Fehler wurde behoben, bei dem Elemente aus der ersten Footer-Navigation auch in der Copyrigth-Leiste angezeigt wurde**

- **Fix: Der Beschreibungstext im Footer konnte hinterlegtes HTML nicht richtig darstellen**

- **Fix: Der Meta-Tag "Topics"  war auf der Startseite immer Leer**


- **Beschreibung für Rolle "Mitglied" in Administration hinzugefügt**

- **Generell wurde der Technische Hintergrund stark verbessert und aufgeräumt**
    
    - Das vereinfacht das Betreuen, Updaten und Anpassen des Website-Templates

## Version 3.8.2
*15.11.2022*

- **neues Block-Element "Akordeon" hinzugefügt**  

    - Es ist nun möglich  Akordeons anzulegen
    - Akordeons sind ausklappbare Bereiche, die mit Inhalt gefüllt werden können  

- **Seiten mit einem Passwort schützen**  

    - Es ist nun möglich, in den Einstellungen einer angelegte Seite, den Passwortschutz zu aktivieren. (gilt nicht für Impressum, Datenschutz und Kontakt)
    - Ruft ein Seitenbesucher diese Seite auf, wird er zur Loginseite weitergeleitet.  
    - Benutzer für den Login, kann der Seitenadministrator in der Administration anlegen.
    - Benutzer mit der Rolle "Administrator" haben Zugriff auf passwortgeschützte Bereiche und die Administrator-Seite.
    - Benutzer mit der Rolle "Mitglied" haben Zugriff auf passwortgeschütze Bereiche
    - Ist ein Benutzer mit der Rolle "Mitglied" angemeldet, hat er die Möglichkeit sich in der Hauptnavigation über "abmelden" wieder abzumelden.
    - Für den Administrator ist "admelden" in der Navigation versteckt, er kann sich über die Administration abmelden
    
- **CSS- und JS-Dateien minifiziert und zusammengefügt**
    - css- und js-Dateien werden jetzt minifiziert und zusammengefügt. Das spart Bandbreite und verringert die Seitenladezeit  
    
- **Formular kann mit Anhängen versendet werden**

    - Bis zu 5 Anhänge (jeweils 2MB) können über Formulare versendet werden
    - unterstützt die Dateiformate PDF, ZIP, PNG, und JPG / JPEG
    - Drag and Drop im Browser wird unterstützt
    - Dateien können wieder entfernt werden
    - mehrere Dateien können nach und nach separat hochgeladen werden
    
- **Tab "Menü-Zuweisung" in Seiteneinstellungen umbenannt zu "Einstellungen"**
    
    *verbesserte Übersicht - zukünftige Einstellungen landen in diesem Bereich*
    
- **Überschriften passen sich nun besser an die Bildschirmauflösung an**

- **verbesserte Darstellung des Footers**

- **Bootstrap 5 implementiert**  

- **FontAwesome 6 implementiert**  

- **PHP-Logging ermöglicht**

## Version 3.8.1
*8.11.2022*

- **initial**