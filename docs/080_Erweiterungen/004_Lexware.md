# Lexware Buchhaltung  

:::danger ACHTUNG!

Wir bitten zu beachten, dass die Erweiterungen der Buchhaltung, die mit einem Sternchen gekenntzeichnet sind (Collmex, lexware, debevet)
nicht GLEICHZEITIG betrieben werden können, und zu Konflikten miteinander führen können. Ein Wechsel zwischen den Systemen sollte
kurz mit uns abgesprochen werden, damit wir Ihnen Tipps geben können, worauf Sie achten müssen.

:::  

Um die Erweiterung zu aktivieren, klicken Sie auf **Administration** und dann **Erweiterungen**.

Nun wählen Sie an der gewünschten Kachel **Anlegen**.

:::info Zu Beachten:  

lexware bietet mit seiner Schnittstelle KEINE Möglichkeit, tierärztliche Leistungen, angewandte Medikamente und abgegebene Medikamente getrennt
zu kontieren! Bitte sprechen Sie unbedingt mit Ihrem Steuerberater, ob Ihre Gewinne so liegen, dass Sie ansonsten ein Problem mit einer potentiellen Gewerbesteuerpflicht bekommen!   

:::

![](../../static/img/erweiterungen/buchhaltung_anlegen.png)  

## lexware einrichten  

Zunächst muss die Schnittstelle aktiviert und verbunden werden. Die Kosten für lexware und die Einrichtung des Accounts muss 
direkt über lexware erfolgen.  

Klicken Sie im debevet (als Administrator angemeldet) auf **Administration** und dann **Erweiterungen**. An der Kachel "lexware" 
klicken Sie auf **Anlegen**.  

![](../../static/img/erweiterungen/lxo-extension-anlegen.png)  

### Authentifizieren   

Klicken Sie nun auf der sich öffnenden Seite auf den blauen Button **Authentifizieren**.   

![](../../static/img/erweiterungen/lxo-authentifizieren.png)  

Das Programm leitet Sie nun zur Anmeldeseite von lexware weiter. Dort müssen Sie Ihre lexware Zugangsdaten eingeben. 

![](../../static/img/erweiterungen/lxo-anmelden.png)   

Sie müssen nun debevet den Zugriff auf lexware erlauben, indem Sie den grünen Button **Zugriff erlauben** klicken. 

![](../../static/img/erweiterungen/lxo-zugriff-erlauben.png)  

Nun werden Sie automatisch zurück zu debevet geleitet und sehen an dem Zugriffstoken, dass die Authentifizierung erfolgreich war.  

![](../../static/img/erweiterungen/token-gesichert.png)

### Synchronisiseren  

Kreuzen Sie **Belege hochladen an**, wenn Sie wünschen, dass debevet neben dem reinen Buchhaltungssatz ebenfalls das 
Original-Belegbild im PDF-Format (Kundenrechnung, Lieferantenrechnung, Gutschrift an Kunden und Gutschrift von Lieferanten) an lexware überträgt.

Wenn Sie **Kunden anonymisieren** oder **Lieferantendaten** anonymisieren ankreuzen, sorgt debevet dafür, dass lediglich 
ein Rückschluss über die Kunden- bzw. Lieferantennummer in lexware (Debitor, Kreditor) auf die Personendaten in debevet 
möglich ist und keine Personendaten aus debevet an lexware weitergegeben werden. Andernfalls überträgt debevet Ihre Kunden- bzw. 
Lieferantendaten (nur der primäre Rechnungsemfänger) an lexware und schickt auch künftige Änderungen dieser Daten in debevet 
an lexware (Ein-Weg-Synchronisierung).  

![](../../static/img/erweiterungen/lxo-synchronisieren.png)

:::caution Achtung  
Zusätzliche Liefer- oder Patientenadressen werden aus debevet nicht an lexware übertragen.  

:::

### Medikamtenabgabe als Dienstleistung verbuchen  

Wenn Sie den Haken bei Angewendete Medikamente als Dienstleistung setzen, wird debevet Medikamente und Produkte, 
die Sie Rahmen Ihrer tierärtzlichen oder sonstigen therapeutischen Tätigkeit verwenden nicht wie Ihre sonstigen Abgaben 
und Verkäufe als Warenverkäufe in lexware buchen, sondern diese Produkte ebenfalls wie Ihre Tätigkeit als Dienstleistung 
unter der Berücksichtigung des jeweiligen Steuersatzes (19%, 7%) buchen.   

![](../../static/img/erweiterungen/lxo-kategorie.png)  

:::caution Hinweis  

Hinweis: Dies kann wichtig sein, wenn Verkäufe einen hohen Anteil an Ihren Praxisumsätzen haben und Sie diesen Anteil 
nicht noch durch Ihre Anwendungsmedikamente (z.B. Impfstoffe) erhöhen möchten, da Sie so unter Umständen in Gefahr kommen, 
Ihr Freiberufler-Privileg zu verlieren und gewerbesteuerpflichtig zu werden. Bitte sprechen Sie hierzu mit Ihrem Steuerberater.  

:::  

### Zahlungsbedingungen (lexware)

Legen Sie in dieser Liste für jede von Ihnen in debevet hinterlegte Zahlungsbedingung fest, wie der Status der jeweiligen
Rechnung in debevet nach erfolgter Buchung ist (Erledigt, Gebucht).

Wir empfehlen, alle Zahlungen via Karte oder bar auf **Erledigt** zu setzen, damit Sie keine zusätzliche Arbeit damit haben, diese 
später noch manuell alle als bezahlt verbuchen zu müssen.  

Dahingegen werden Rechnungen mit der Zahlmethode **Überweisung** in der Regel nach erfolgter Buchung als **Gebucht** gekennzeichnet,
da Sie noch die tatsächliche Zahlung der Rechnung durch den Kunden erwarten. So können Sie leichter und schneller filtern, welche Rechnungen
noch offen sind.

![](../../static/img/erweiterungen/lxo-zahlungsbedingungen.png)   

## Kunden und Lieferanten übertragen   

Sollten Sie lexware in debevet erstmalig aktivieren, nachdem Sie bereits Kunden und Lieferanten in debevet erfasst
haben, so sollten Sie einmal auf den Button **Kunden nach lexware** und **Lieferanten nach lexware** klicken.
debevet überträgt dann einmal alle Kunden und Lieferanten nach lexware als Debitoren bzw. Kreditoren.
Bei aktiver Schnittstelle werden Kunden- und Lieferantendaten künftig stets live von debevet nach lexware übertragen.

Es findet keine Übertragung von Kunden- und Lieferantendaten von lexware nach debevet statt, sondern nur von debevet nach lexware.
Des Weiteren wird aus debevet nur die primäre Rechnungsadresse an lexware übergeben und keine weiteren Adressen wie bspw. zusätzliche 
Liefer- und Patientenstandorte in debevet.   

![](../../static/img/erweiterungen/debevet-Collmex-Erweiterung-Start-Kunden-Lieferanten.png)

## Kunden und Lieferanten in lexware identifizieren   

Da Kunden- und Lieferantennummer in debevet und lexware nicht identisch sind, übergibt debevet an lexware eine 
sog. alternative Email-Adresse nach dem Muster 10004@netzfalken.lxo, wobei 10004 der Kunden- bzw. Lieferantennummer in debevet entspricht.

So könnten Sie in lexware Ihre Kunden als auch Lieferanten eindeutig anhand der Kunden- und Lieferantennummer aus debevet identifizieren.  

![](../../static/img/erweiterungen/debevet-lexoffice-kreditoren-abgleich.png)   

![](../../static/img/erweiterungen/kundenmapping.png)  

## Rechnungen und Gutschriften buchen 

Rechnungen und Gutschriften können entweder einzeln oder gesammelt gebucht werden. 

## Kundenrechnung einzeln buchen  

Von der Bearbeitungs- und Voransichtsseite einer Rechnung steht Ihnen oben rechts mit dem Button **Erweitert** die Funktion
**Rechnung Buchen** zur Verfügung. Klicken Sie auf **Rechnung Buchen**, so wird der Original-Beleg (PDF) inkl. Buchungssatz sofort nach lexware übertragen.  

![](../../static/img/erweiterungen/debevet-rechnung-einzeln-buchen.png)  

Im lexware kann der Beleg dann direkt einem Kontoumsatz zugeordnet werden bzw. oftmals passiert dies voll automatisch.  

![](../../static/img/erweiterungen/debevet-lexoffice-einnahme-rechnung-einzeln.png)

## Individuell gefilterte Rechnungsliste buchen  

Wechseln Sie in debevet auf **Fakturierung** → **Rechnungen**. Filtern Sie die Liste nach Ihren Suchkriterien, z.B. durch die Suche 
aller Rechnungen **im Status "Zu buchen"**. Wählen Sie die gewünschten Rechnungen durch Ankreuzen der **Checkboxen** aus.   

Klicken Sie oben rechts auf **Erweitert** und dann auf **Rechnungen buchen**.  

Haben Sie mehr als fünf Rechnungen ausgewählt, wird der Prozess in das sogenannte Hintergrundfenster unten rechts gestellt. 
Der erfolgreiche Abschluss wird dort signalisiert. Während des Prozesses können Sie in debevet an anderen Stellen weiterarbeiten.  

![](../../static/img/erweiterungen/debevet-rechnung-aus-liste-buchen.png)  

In lexware können Sie die Rechnungen dann den Zahlungen zuordnen, bzw. im Normalfall wird dies sogar automatisch erledigt.  

![](../../static/img/erweiterungen/debevet-lexoffice-gebuchte-einnahmenrechnung.png)
  
## Lieferantenrechnung buchen

Von der Bearbeitungs- und Voransichtsseite einer Lieferantenrechnung steht Ihnen oben rechts mit dem Button **Erweitert** 
die Funktion **Buchen** zur Verfügung.   
Klicken Sie auf Buchen so wird der Orignal-Beleg (PDF) inkl. Buchungssatz sofort nach lexware übertragen.  

![](../../static/img/erweiterungen/debevet-lieferantenrechnung-buchen.png)  

Den Beleg können sie dann im lexware direkt sehen und zuordnen (bzw. dieser wird der Zahlung meist automatisch zugeordnet)  

![](../../static/img/erweiterungen/debevet-lexoffice-lieferanten-rechnung-einzeln.png)  

## Ausgewählte Liste von Lieferantenrechnungen buchen   

Wechseln Sie in debevet auf **Warenwirschaft** → **Lieferantenechnungen**. Filtern Sie die Liste nach Ihren Suchkriterien, z.B.
durch die Suche aller Rechnungen im **Status Zu buchen**. Wählen Sie die gewünschten Rechnungen durch Ankreuzen der **Checkboxen** aus. 
Klicken Sie oben rechts auf **Erweitert** und dann auf **Buchen**.

Haben Sie mehr als fünf Rechnungen ausgewählt, wird der Prozess in das sogenannten Hintergrundfenster unten rechts gestellt. 
Der erfolgreiche Abschluss wird dort signalisiert. Während des Prozesses können Sie in debevet an anderen Stellen weiterarbeiten. 

![](../../static/img/erweiterungen/debevet-lieferantenrechnung-aus-liste-buchen.png)  

Im lexware sind diese Rechnungen dann als Ausgaben zu finden.  

![](../../static/img/erweiterungen/debevet-lexoffice-liste-gebuchter-lieferantenrechnungen.png) 

## Kunden- und Lieferantengutschriften buchen    

Gutschriften an Ihre Kunden und von Ihren Lieferanten buchen Sie analog zum zuvor dargestellten Vorgehen für
Kunden- und Lieferantenrechnungen aus debevet heraus an lexware. Dabei werden Kundengutschriften in lexware als 
**Einnahmeminderung** und Gutschriften Ihrer Lieferanten als **Ausgabenminderung** verbucht.  

![](../../static/img/erweiterungen/debevet-lexoffice-gutschrift-buchen.png)

## Rechnungen und Gutschriften stornieren   

Analog zum Vorgehen beim Buchen, steht Ihnen bei Rechnungen (Lieferanten und Kunden), die erfolgreich gebucht wurden, die Funktion **Stornieren**
zur Verfügung. 

![](../../static/img/erweiterungen/debevet-lexoffice-stornieren.png)  

:::caution Hinweis 

Wenn Sie eine Kunden- oder Lieferantenrechnung oder Gutschrift in debevet stornieren, so führt dies aktuell zu keiner 
Stornierung in lexware. Bitte beachten Sie, dass Sie die gebuchten Belege in lexware ebenfalls manuell stornieren müssen.  

::: 

## Zahlungseingänge und Zahlungsausgänge   

Zahlungseingänge können Sie entweder manuell erfassen, oder aber sehr bequem Ihr Onlinebanking im lexware aktivieren. 


:::tip Tipp

Für detaillierte Hilfe und Anleitung zur Erfassung von Zahlungsein- und Ausgängen fragen Sie bei lexware nach. 
lexware bietet eine hervorragende Online-Hilfe als auch Support über Email-Anfragen.   

:::

### Zahlungen/ Zahlungseingänge abgleichen

Um die Zahlungen abzugleichen, wenn diese via Onlinebanking abgerufen und erkannt wurden, gehen Sie wie folgt vor:

Klicken Sie auf das **Eurosymbol** und dann **Rechnungen** und klicken dort den Dropdown Pfeil, um die erweiterte Suche zu öffnen.

![](../../static/img/erweiterungen/zahlungsstatus1.png)

Setzten Sie nun am Dropdownmenü "Status" den Status auf "gebucht". Klicken Sie anschließend die Lupe.

![](../../static/img/erweiterungen/zahlungsstatus2.png)

Markieren Sie nun alle Rechnungen mit einem Klick in das oberste Kästchen und klicken dann auf **Erweitert**.

![](../../static/img/erweiterungen/zahlungsstatus3.png)

Klicken Sie nun "Zahlungsstatus aktualisieren". Die Zahlungen werden abgeglichen und die bezahlten Rechnungen werden in den Status "erledigt"
überführt und verschwinden somit aus der Liste.

![](../../static/img/erweiterungen/zahlungsstatus4.png)

::tip Tipp:  
Eine Rechnung wurde bezahlt aber nicht automatisch im Onlinebankung zugeordnet, weil der Kunde ohne "Zusammenhang" überwiesen hat? In diesem Fall
müssen Sie in lexware zunächst die Rechnung manuell der Zahlung zuordnen.

:::

## Offene Posten und Mahnungen  

lexware bietet Ihnen zahlreiche Live-Auswertungen z.B. der offenen Posten (Lieferanten, Kunden) als auch über Ihren 
betriebswirtschaftlichen Status (EÜR, Bilanz, Gewinn- und Verlustrechnung, Saldenliste etc.).

Ebenso bietet Ihnen lexware ein Mahnsystem, sollten Ihre Kunden ihre debevet-Rechnungen einmal vergessen zu zahlen.  
Auch hier hilft die Online-Hilfe als auch der Support des Anbieters weiter. 

:::caution: Achtung!

Die lexware Schnittstelle bietet nicht die Tiefe, in der die Belege komplett als offene Belege in lexware auflaufen. Mahnungen können
deshalb nie direkt erstellt werden. Leider muss im lexware zuerst manuell ein Beleg erstellt werden, der dieser Summe entspricht und dann
dort abgemahnt werden kann. Wir empfehlen also bei lexware Nutzung das Mahnsystem von debevet zu nutzen.

::: 



## Token aktualisieren/ erneut authentifizieren

Teilweise kann es dazu kommen, dass im laufenden Praxisbetrieb Ihre Rechnungen bei Nutzung der Schnittstelle zu lexware nicht buchen können. Dies liegt zu 99% daran, dass
der Authentifierungs-Token abgelaufen ist.
Um diesen erneut zu aktualisieren, gehen Sie wie folgt vor:

Klicken Sie im debevet (als Administrator angemeldet) auf **Administration** und dann **Erweiterungen**. An der Kachel "lexware"
klicken Sie auf **Bearbeiten**.

![](../../static/img/erweiterungen/lexoffice_bearbeiten.png)

Klicken Sie nun auf der sich öffnenden Seite auf den blauen Button **Authentifizieren**.

![](../../static/img/erweiterungen/lxo-authentifizieren.png)

Das Programm leitet Sie nun zur Anmeldeseite von lexware weiter. Dort müssen Sie Ihre lexware Zugangsdaten eingeben.

![](../../static/img/erweiterungen/lxo-anmelden.png)

Sie müssen nun debevet den Zugriff auf lexware erlauben, indem Sie den grünen Button **Zugriff erlauben** klicken.

![](../../static/img/erweiterungen/lxo-zugriff-erlauben.png)

Nun werden Sie automatisch zurück zu debevet geleitet und sehen an dem Zugriffstoken, dass die Authentifizierung erfolgreich war.

Alle Rechnungen können nun wieder gebucht werden.
