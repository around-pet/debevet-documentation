# Collmex Buchhaltung 

Collmex ist ein Buchhaltungsprogramm, welches sehr ideal mit unserer Software kompatibel ist. Wenn Sie wollen, 
können wir die gesamte Einrichtung für Sie vornehmen und die Abrechnung der monatlichen Kosten kann über uns erfolgen. 

Alternativ können Sie das Programm auch wie hier beschrieben selbst anbinden/aktivieren.


:::danger ACHTUNG!

Wir bitten zu beachten, dass die Erweiterungen der Buchhaltung, die mit einem Sternchen gekenntzeichnet sind (Collmex, lexoffice, debevet)
nicht GLEICHZEITIG betrieben werden können, und zu Konflikten miteinander führen können. Ein Wechsel zwischen den Systemen sollte
kurz mit uns abgesprochen werden, damit wir Ihnen Tipps geben können, worauf Sie achten müssen.

:::  

## Collmex registrieren und einrichten 

Registrieren Sie sich bei Collmex für den kostenlosen und unverbindlichen 30-Tage-Test der Finanzbuchhaltung in der Variante Basic.  

[Collmex testen](https://www.collmex.de/kostenlos_testen.html?0,7?partnerId=133144)

Füllen Sie das angezeigte Formular aus und klicken Sie abschließend auf den Button **Ok, Testzugang anfordern**.  

![](../../static/img/erweiterungen/Collmex-Registrierung-Kostenloser-Test.png)  

Die Registrierung wird Ihnen umgehend bestätigt und die Zugangsdaten an die von Ihnen soeben hinterlegte Emailadresse gesendet.  

![](../../static/img/erweiterungen/Collmex-Zugang-Erfolgreich-Eingerichtet.png)  

Schauen Sie nun in Ihrem Mailprogramm nach, um sich mit Ihren Benutzerdaten anzumelden, die von Collmex an die von Ihnen
angegebene Emailadresse gesendet wurden.

:::tip Tipp 

Wenn wir bei debevet Ihren Account bei Collmex für Sie aufsetzen, bekommen Sie auch die Email mit Ihren Zugangsdaten. Bitte bewahren Sie diese 
gut auf. 

:::  

## Anmelden in Collmex  

Besuchen Sie im Internet die Seite www.collmex.de. Geben Sie im Bereich Anmeldung für unsere Kunden Ihre Kundennummer aus 
der Email ein und und klicken Sie auf **anmelden**.  

![](../../static/img/erweiterungen/Collmex-Anmeldung-Erster-Schritt.png)  

:::tip Tipp:  

Legen Sie sich in Ihrem Browser ein Lesezeichen für diese Seite an, damit Sie diese künftig mittels Lezesezeichen 
direkt aufrufen können ohne vorher Ihre Kundennummer einzugeben.  

:::  

Geben Sie in die Felder **Benutzer** und **Kennwort**, die entsprechenden Zugangsdaten für Collmex ein und klicken Sie auf **Anmelden**.  

Sie werden nun auf die Startseite der Anwendung Collmex weitergeleitet.  

![](../../static/img/erweiterungen/Collmex-Dashboard-Buchhaltung.png)  

## Schnittstellen-Benutzer für debevet anlegen  

Sie sind nun in der Cloud-Buchhaltung von Collmex angemeldet.

Klicken Sie oben in der Maske auf den Button **Verwaltung**. Klicken Sie danach in der Kachel **Benutzer** auf den Link **Benutzer anlegen**.  

![](../../static/img/erweiterungen/Collmex-Dashboard-Verwaltung.png)  

Kreuzen Sie die Checkbox **Nur für API** an, geben Sie im Feld Name einen Benutzernamen an (z.B. apidbv) und klicken Sie 
abschließend auf den Button **Benutzer anlegen**.  

(Für Benutzer mit der Eigenschaft "Nur für API" berechnet Collmex keine Zusatzkosten.)

![](../../static/img/erweiterungen/Collmex-API-Benutzer-Anlegen-Erster-Schritt.png)  

Auf dieser Seite klicken Sie nun auf **Kennwort ändern**, um ein Kennwort für den neuen Benutzer zu hinterlegen.  

![](../../static/img/erweiterungen/Collmex-API-Benutzer-Kennwort-setzen-nach-anlegen.png)  

Geben Sie nun ein von Ihnen bestimmtes Kennwort für den API-Benutzer an. Klicken Sie abschließend auf **Speichern**.

![](../../static/img/erweiterungen/Collmex-API-Benutzer-Kennwort-setzen-oder-aendern.png)  

## Firewall-Regel für Schnittstellen-Benutzer anlegen  

Klicken Sie im Hauptmenü auf **Verwaltung** und dann in der Kachel **Benutzer** auf den Link **Zugangsbeschränkung**.

Tragen Sie in das Feld **Erlaubte IP-Adresse** 162.55.63.150 ein und geben Sie in das Feld **Bezeichnung** eine frei wählbare Bezeichnung ein
(z.B. debevet.de, shopqueue.de, bank2swift.de).

Abschließend klicken Sie auf den Button **Speichern**.  

![](../../static/img/erweiterungen/Collmex-Zugangsbeschraenkung-ueber-IP-Adressen.png)   

Klicken Sie oben auf den Button **Verwaltung** dann auf den Link **Benutzer anzeigen und ändern** in der Kachel **Benutzer**. 
In der Spalte Benutzer der angezeigten Liste klicken Sie nun auf den Namen des Benutzers (hier: apidbv), den Sie 
(soeben) für die Schnittstelle angelegt haben.  

![](../../static/img/erweiterungen/Collmex-Benuzterliste.png)  

Kreuzen Sie die Checkbox **Zugangsbeschränkung** an und klicken Sie abschließend auf **Benutzer speichern**, um die Änderung zu übernehmen.  

![](../../static/img/erweiterungen/Collmex-API-Benuzter-Zugangsbeschraenkung-waehlen.png)  

## Buchhaltungseinstellungen in Collmex  

Nun müssen Sie in Collmex noch einige Einstellungen vornehmen.  

### Kontenrahmen festlegen  

Klicken Sie oben auf **Verwaltung** und in der Kachel **Firma** auf den Link **Firma anzeigen und ändern**.

Klicken Sie auf den Link **Anzeigen** neben Ihrem Firmeneintrag. Wählen Sie aus der Aufklappliste **Kontenrahmen** den passenden 
Eintrag für Ihre Praxis bzw. Ihr Unternehmen und klicken Sie abschließend auf **Speichern**.  

![](../../static/img/erweiterungen/Collmex-Firmeneinstellung.png)   

### Ist- oder Sollbesteuerung festlegen  

Klicken Sie oben auf **Verwaltung** und in der Kachel **Firma** auf **Geschäftsjahr anzeigen, ändern**. In der folgenden Liste
klicken Sie in der Zeile des aktuellen Jahres auf den Link **Anzeigen**.  

![](../../static/img/erweiterungen/Collmex-Geschaeftsjahre-Liste.png)   

Den Eintrag in der Aufklappliste **Umsatzsteuerbefreiung** ändern Sie, sollte bei Ihnen eine Umsatzsteuerbefreiung vorliegen bspw. 
aufgrund der sog. Kleinunternehmer-Regelung.

Andernfalls belassen Sie den Wert und wählen in der Aufklappliste **Art der Besteuerung** aus, ob die Ist- oder Soll-Besteuerung angewendet wird.
Klicken Sie abschließend auf den Button **Speichern**.  

![](../../static/img/erweiterungen/Collmex-USt-Besteuerung.png)  

### Eigene FiBu-Konten erstellen  

Sollten Sie neben den Standardkonten des von Ihnen ausgewählten Kontenplans SKR03 oder SKR04 eigene FiBu-Konten benötigen,
um z.B. Leistungen, Abgabeprodukte und Anwendungsprodukte auf unterschiedliche Erlöskonten als die Standard-Erlöskonten
zu buchen, so müssen Sie solche Konten vor der ersten Buchung manuell anlegen.

Klicken Sie dazu auf den Button **Verwaltung** und in der Kachel **Konto und Kostenstelle** auf den Link **Konto anlegen**. 
Geben Sie die gewünschte Kontonummer in das Feld **Kontonummer** ein und klicken Sie auf den Button **Konto anlegen**.  

![](../../static/img/erweiterungen/Collmex-Fibu-Konten-anlegen.png)  

Überprüfen Sie die Angaben und passen Sie diese unter Umständen an. Es empfiehlt sich z.B. für eigene Konten 
logische eigene Namen in das Feld Bezeichnung einzugeben. Klicken Sie abschließend auf **Speichern**.  

![](../../static/img/erweiterungen/Collmex-Fibu-Konten-aendern.png)  

## debevet mit Collmex verbinden  

Klicken Sie im Hauptmenü auf **Administration** → **Erweiterungen**. Auf der folgenden Liste der Erweiterungen klicken Sie auf 
der Kachel 'Collmex Buchhaltung' auf den Button **Anlegen**, um Ihr debevet mit Collmex zu verbinden. 

![](../../static/img/erweiterungen/buchhaltung_anlegen.png)  


:::danger ACHTUNG!

Wir bitten zu beachten, dass die Erweiterungen der Buchhaltung, die mit einem Sternchen gekenntzeichnet sind (Collmex, lexoffice, debevet)
nicht GLEICHZEITIG betrieben werden können, und zu Konflikten miteinander führen können. Ein Wechsel zwischen den Systemen sollte
kurz mit uns abgesprochen werden, damit wir Ihnen Tipps geben können, worauf Sie achten müssen.

:::  

Im Bereich **Zugangsdaten** geben Sie im Feld Kunden Nr. Ihre Kundennummer bei Collmex ein. In das Feld Benutzername tragen Sie den Namen des Benutzers (API-Benutzer) 
der Collmex-Schnittstelle (lt. Anleitung hier z.B. apidbv) ein und bei Kennwort, das Kennwort, das Sie diesem Benutzer in Collmex gegeben haben.

In das Feld Firma Nr. tragen Sie den Wert '1' ein und kreuzen **Aktiv** an. Speichern Sie Ihre Eingabe abschließend durch 
Klicken auf den Button **Speichern** oben rechts.   

![](../../static/img/erweiterungen/debevet-Collmex-Erweiterung-Zugangsdaten.png)  

### Erlöse nach Typ zusammenfassen  

Wenn Sie Ihre Erlöse je Typ (Leistung, Abgaben, Anwendungsprodukte und Sonstiges) auf verschiedene Erlöskonten buchen 
möchten, so aktiveren Sie dieses Merkmal durch ankreuzen und geben Sie für die Typen die jeweiligen Erlöskonten aus 
der Finanzbuchhaltung für die beiden Umsatzsteuersätze an. Bitte beachten Sie, dass Sie Konten, die nicht im 
Standardkontenplan enthalten sind zuvor auch in Collmex angelegt haben.

Erzielen Sie ebenfalls Erlöse mit 0% Umstatzsteuer (z.B. durch Lieferung ins EU-Ausland), so können Sie
weitere Zeilen hinzufügen für den jeweiligen Typ und bei Erlösart einen Grund für die Umsatzssteuerfreiheit auswählen. 
Wählen Sie dort z.B. den Eintrag 'innergemeinschaftliche Lieferung', so können Sie bei 0% USt. ein entsprechendes Erlöskonto vordefinieren.
Wenn Sie abschließend das Häckchen am Ende der Zeile klicken, wird Ihr Eintrag in die Maske übernommen und eine weitere Zeile für weitere 0%-Regelen erzeugt.

Klicken Sie abschließend auf **Speichern** oben rechts.  

![](../../static/img/erweiterungen/debevet-Collmex-Erweiterung-Erloesarten.png)  

### Zahlungsbedingungen  

Verknüpfen Sie hier Ihre verschiedenen Zahlungsbedingungen mit einer Buchungsregel, damit debevet Ihre Rechnung gemäß
dieser Regeln und der optional eingestellten Erlöskonten buchen kann. Tragen Sie im Feld Nummer, die Nummer ein, 
die eben diese Zahlungsbedingung in Collmex hat.  
Im Feld Konto tragen Sie die Nummer des Kontos aus der Finanzbuchhaltung Collmex ein, auf das Rechnungserlöse
mit dieser Zahlart zugebucht werden.   

Haben Sie in debevet weitere eigene Zahlungsbedingungen angelegt, so können Sie diese auf die jeweiligen Zahlungsbedingungen in Collmex mappen.

Der Status nach Buchung gibt an, ob kundenseitig nach Rechnungsstellung noch eine Zahlung ausgeführt werden muss (**Gebucht**) oder aber die Rechnung in 
debevet direkt als **Erledigt** gekennzeichnet werden kann.

Mit dem Feld **Anzeigen** legen Sie fest, ob Sie das Kontosaldo im Dashboard für die jeweilige Zahlungsart anzeigen lassen wollen, 
sofern Sie dies in der Administration unter Einstellungen für das Dashboard eingestellt haben.

Kreuzen Sie dies z.B. für die Methode 'Barzahlung' an, sehen Sie den Stand des Kassenkontos 1000 bzw. 1200 jeweils live
aus Collmex auf Ihrem Dashoard. 

![](../../static/img/erweiterungen/debevet-collmex-Zahlungsbedingungen.png)  

### Kunden und Lieferanten übertragen

Sollten Sie Collmex in debevet erstmalig aktivieren, nachdem Sie bereits Kunden und Lieferanten in debevet erfasst haben,
so sollten Sie einmal auf den Button **Kunden nach Collmex** und **Lieferanten nach Collmex** klicken. debevet überträgt 
bei aktivierter Schnittstelle dann einmal alle Kunden und Lieferanten nach Collmex als Debitoren bzw. Kreditoren.

:::caution Achtung 

Sollten Sie in Collmex bereits Kunden oder Lieferanten erfasst haben, werden diese bei gleicher Kunden oder Lieferantennummer überschrieben.
Bitte beachten Sie, dass Sie künftig Änderungen an Kunden oder Lieferantendaten ausschließlich in debevet vornehmen,
da debevet die Schreibhoheit über diese Daten hat. Die Schnittstelle ist derart konzipiert, dass alle Änderungen an
Kunden oder Lieferantendaten mit dem Speichern in debevet immer zeitgleich eins zu eins nach Collmex übertragen werden.

:::

![](../../static/img/erweiterungen/debevet-Collmex-Erweiterung-Start-Kunden-Lieferanten (1).png)  

## Zahlungseingänge und Zahlungsausgänge  

### Zahlungseingänge Ihrer Kunden buchen  

Erhalten Sie für eine in debevet erstellte Rechnung von Ihrem Kunden Geld (Teilzahlung, Vollzahlung) zum Beispiel 
über das Bankkonto, so wird dies ausschließlich in Collmex verbucht, z.B. automatisch durch Abruf der Bankumsätze via HBCI.
(Diesen müssen Sie im Collmex einrichten!)

Ist eine Rechnung in Collmex erledigt, erfährt debevet davon voll automatisch über die Schnittstelle und
stellt die jeweilige Rechnung vom Status **Gebucht** auf **Erledigt** oder **Teilgezahlt** um. 

### Zahlungsausgänge an Ihre Lieferanten  

Bezahlen Sie Ihre Lieferanten Rechnungen aus debevet in Collmex z.B. mit dem dort integrierten Onlinebanking, so zeigt
debevet die jeweilige Lieferantenrechnung (wenn Sie diese hochgeladen haben) automatisch als **Erledigt** an.    

### Collmex Mahnungen und offene Posten

Collmex bietet Ihnen zahlreiche Live-Auswertungen z.B. der offenen Posten (Lieferanten, Kunden) als auch über Ihren 
betriebswirtschaftlichen Status (EÜR, Bilanz, Gewinn- und Verlustrechnung, Saldenliste etc.).

Ebenso bietet Ihnen Collmex ein bewährtes Mahnsystem, sollten Ihre Kunden ihre debevet-Rechnungen einmal vergessen zu 
zahlen. Auch hier hilft die Online-Hilfe als auch der Support des Anbieters weiter.   




