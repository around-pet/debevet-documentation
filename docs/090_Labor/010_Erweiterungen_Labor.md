# Labor einrichten/ Erweiterung Labor

Um die Labormöglichkeiten in debenvet voll ausnutzen zu können, müssen Sie zunächst die gewünschte Laborschnittstelle aktivieren.
Die Zugangsdaten, die Sie dafür benötigen, bekommen Sie von Ihrem jeweiligen Laboranbieter. Zur Zeit können wir folgende Schnittstellen bieten:

* IDEXX
* LABOKLIN
* scil  
* Zoetis

##  IDEXX anbinden

Für die Einrichtung benötigen Sie Zugriff auf debevet mit einem Benutzer, der Administrator ist.

Klicken Sie in debevet auf **Administration** (Zahnradsymbol) → **Erweiterungen**. Scrollen Sie dann bis zu den Laboranbindungen herunter.

Klicken Sie auf den grauen Button *Anlegen* bzw. *Bearbeiten*
(falls die Erweiterung bereits verwendet wird) auf der Kachel der Erweiterung IDEXX VetConnect Plus.

:::tip Tipp

Im Gegensatz zu den Buchhaltungs-Erweiterungen können Sie auch mehrere Labor-Erweiterungen parallel nutzen, diese behindern sich nicht
gegenseitig.

:::

![](../../static/img/Labor/debevet-erweiterung-idexx-labor.png)

### Zugangsdaten eingeben

Im Bereich Zugangsdaten geben Sie bitte den Benutzernamen als auch das Kennwort für den Webservice VetConnect-Plus von IDEXX ein.
Die Daten erhalten Sie direkt von IDEXX.

![](../../static/img/Labor/idexx-zugangsdaten.png)

### Individuelle Praxis-Einstellungen

Aktivieren Sie anschließend durch Ankreuzen, ob Sie externe (Untersuchungen im externen IDEXX-Labor) und/oder interne
Laboraufträge (Untersuchung an Ihrer VetLab-Staion) in debevet managen möchten (beauftragen, abfragen und in der Kartei managen).

**Zur Behandlung hinzufügen:**   
Legen Sie fest, ob und wann Labortests inkl. Preis in die Behandlungshistorie des Patienten (Kartei) übernommen werden.

**Fehlende Produkte autom. in Produktbestand übernehmen:**

Wenn dieses Feld aktiviert ist, werden Tests automatisch aus dem IDEXX-Katalog in Ihren Produktkatalog in debevet aufgenommen
und aktualisiert.

:::caution Achtung

Bitte beachten Sie, dass Sie beim internen Labor, Ihre Preise für die Labortests (Dienstleistungsprodukte)
eigenverantwortlich erfassen müssen. Sollten Sie einen Preis erfasst haben, ist es ratsam, die Katalogaktualisierung für den jeweiligen
Test zu deaktivieren, damit bei der nächsten Aktualisierung des Tests durch die IDEXX, der Preis nicht wieder auf 0 Euro gesetzt wird.

:::

**Nur Auslagen berechnen:**

Diese Funktion hat nur Auswirkung, wenn Sie im Bestellprozess keine Rechnung an den Tierhalter direkt veranlassen.
Ist dies aktiviert, werden bei externen Tests die Preise für den Test in die Kartei übernommen, welche durch die IDEXX Ihrer Praxis berechnet werden.

**Auslagen-Zuschlag:**

Hier können Sie ein eigenes Auslagenprodukt (Dienstleistung) suchen und festlegen, dass dem Tierhalter für Ihre Auslage
zusätzlich in Rechnung gestellt wird. Aktivieren Sie **Nur Auslagen berechnen** nicht und wählen keinen Auslagen-Zuschlag,
werden die Verkausfspreise der IDEXX (Endkundenpreise) in die Kartei übernommen und können später von dort berechnet werden.

Die weiteren Einstellungen für das interne Labor sind aktuell nicht abweichend einstellbar und werden aus den Einstellungen
für das externe Labor übernommen.

:::tip Tipp

Ob die Rechnung bei externen Laboraufträgen direkt an den Tierhalter erfolgt oder nicht, legen Sie jeweils im Bestellprozess fest.

:::

![](../../static/img/Labor/debevet-erweiterung-idexx-labor-einstellungen.png)


### Aktivieren bzw. Deaktivieren der IDEXX-Erweiterung

Abschließend können Sie oben rechts auf **Aktivieren** bzw. **Deaktivieren** klicken, je nach Zustand der Schnittstelle,
um die IDEXX-Schnittstelle in debevet zu nutzen bzw. die Nutzung auszusetzen. Klicken Sie auf **Löschen** wird die erstellte Konfiguration
für IDEXX aus debevet komplett entfernt und kann später jederzeit neu angelegt werden.

Bitte achten Sie darauf, dass alle Eingaben auf dieser Seite für die IDEXX-Schnittstelle erst nach dem Klicken auf den Button **Speichern** übernommen werden.

![](../../static/img/Labor/debevet-erweiterung-idexx-labor-aktivieren.png)

### Tierarten

Für einige Tests ist die genaue Kenntnis der Tierarten unerlässlich. Damit die Tierarten in debevet, vor allem wenn Sie eigene
Spezies erfasst haben, von IDEXX richtig erkannt werden, können Sie in dieser Liste Ihre Tierart der IDEXX-Tierart zuweisen.

Wenn Sie einen neuen Eintrag am Ende der Liste erfassen, klicken Sie nach der Eingabe auf den Haken am Ende der neuen Zeilen und vergessen Sie nicht am Ende zu speichern.

![](../../static/img/Labor/idexx-zugangsdaten.png)

Nun ist Ihre Schnittstelle nutzbar und Sie können im nächsten Schritt lernen, wie Sie Laboraufträge erstellen und erfassen.
  
## LABOKLIN anbinden  

Für die Einrichtung benötigen Sie Zugriff auf debevet mit einem Benutzer, der Administrator ist.

Klicken Sie in debevet auf **Administration** (Zahnradsymbol) → **Erweiterungen**. Scrollen Sie dann bis zu den Laboranbindungen herunter.

Klicken Sie auf den Button *Anlegen* bzw. *Bearbeiten*
(falls die Erweiterung bereits verwendet wird) auf der Kachel der Erweiterung LABOKLIN.

:::tip Tipp

Im Gegensatz zu den Buchhaltungs-Erweiterungen können Sie auch mehrere Labor-Erweiterungen parallel nutzen, diese behindern sich nicht
gegenseitig.

:::  

![](../../static/img/Labor/laboklin_einirchten1.png)  

### Zugangsdaten eingeben

Im Bereich Zugangsdaten geben Sie bitte den Benutzernamen als auch das Kennwort für den Webservice von LABOKLIN ein.
Die Daten erhalten Sie direkt von LABOKLIN.  

**Zur Behandlung hinzufügen:**   
Legen Sie fest, ob und wann Labortests inkl. Preis in die Behandlungshistorie des Patienten (Kartei) übernommen werden.

**Fehlende Produkte autom. in Produktbestand übernehmen:**

Wenn dieses Feld aktiviert ist, werden Tests automatisch aus dem LABOKLIN-Katalog in Ihren Produktkatalog in debevet aufgenommen
und aktualisiert.

**Nur Auslagen berechnen:**

Diese Funktion hat nur Auswirkung, wenn Sie im Bestellprozess keine Rechnung an den Tierhalter direkt veranlassen.
Ist dies aktiviert, werden bei externen Tests die Preise für den Test in die Kartei übernommen, welche durch die LABOKLIN Ihrer Praxis berechnet werden.

**Auslagen-Zuschlag:**

Hier können Sie ein eigenes Auslagenprodukt (Dienstleistung) suchen und festlegen, dass dem Tierhalter für Ihre Auslage
zusätzlich in Rechnung gestellt wird. Aktivieren Sie **Nur Auslagen berechnen** nicht und wählen keinen Auslagen-Zuschlag,
werden die Verkausfspreise der LABOKLIN (Endkundenpreise) in die Kartei übernommen und können später von dort berechnet werden.

:::tip Tipp

Ob die Rechnung bei externen Laboraufträgen direkt an den Tierhalter erfolgt oder nicht, legen Sie jeweils im Bestellprozess fest.

:::
  
## scil anbinden  

Die Einrichtung der Schnittstelle für scil Laborgeräte funktioniert ein wenig anders, als die beiden zuvor genannten.

### G-Drive einrichten  

debevet nutzt zur Anbindung von scil vIP den kostenlosen Online-Speicher "G-Drive" von Google und deren G-Drive Desktop Anwendung. 
Registrieren Sie sich ein kostenloses Google Konto oder nutzen Sie ein vorhandenes.  

[Kostenloses Googlekonto anlegen](https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1)  

![](../../static/img/Labor/drive_acc.png)  

### G-Drive für Desktop herunterladen  

Laden Sie G-Drive Desktop herunter und installieren Sie es. Dies kann bereits durch Techniker bei der Einrichtung Ihrer
scil vIP vorgenommen wurden. In diesem Fall springen Sie direkt zur Einrichtung in debevet.  

[G-Drive Desktop installieren](https://support.google.com/drive/answer/7329379#zippy=%2Cgoogle-drive-f%C3%BCr-den-desktop-herunterladen-und-installieren)   

### G-Drive für Desktop installieren  

Öffnen Sie die G-Drive Anwendung an Ihrem Rechner, nachdem Sie diese heruntergeladen haben. Hier finden Sie eine Ansicht, wo Sie am Apple die Anwendung sehen und öffnen.  
(oben in der Funktionsleiste das kleine dreieckige Symbol)

![](../../static/img/Labor/g_drive_setup1.png) 

Klicken Sie dort nun rechts auf das Zahnradsymbol und wählen dann "Einstellungen".  

![](../../static/img/Labor/g-drive_setup2.png)  

Nun können Sie den passenden Ordner wählen, in dem Sie auf "Ordner hinzufügen" klicken. Wählen Sie von Ihrem Rechner den Ordner **scil vIP data**.

Nach Abschluss setzen Sie die Auswahl "mit Google Drive synchronisieren".  

### scil aktivieren

Nun können Sie die scil Erweiterung aktivieren. Klicken Sie auf **Administration** (Zahnradsymbol) und dann **Erweiterungen**. 

Wählen Sie dann die scil Erweiterung und klicken den grauen Button **Anlegen**.

![](../../static/img/Labor/scilext_1.png)  

### scil G-Drive Verbindung verknüpfen

Die Anbindung von scil vIP erfolgt über Google Drive. Klicken Sie nun auf “Authentifizieren”, um Ihr Google Konto mit debevet zu verknüpfen. Sie zu Google weitergeleitet. 
Geben Sie hier Ihr Google Konto ein oder wählen Sie ein bereits angemeldet aus und bestätigen in dem Sie auf “Zulassen” drücken.

Es öffnet sich wieder debevet. Bei erfolgreicher Anmeldung sind Felder “Zugriffstoken”, “Aktualisierungstoken” und “Gültig bis” ausgefüllt.  

![](../../static/img/Labor/scilext_3.png)  

![](../../static/img/Labor/scilext_4.png)  

![](../../static/img/Labor/scilext_5.png)  

![](../../static/img/Labor/scilext_6.png)  

### scil Laborgeräte auswählen 

Bereits nachdem Sie die scil Erweiterung aktiviert haben, können Sie Ihre Laborgeräte auswählen. Aktivierte Laborgeräte werden als erstes gelistet,
danach folgen alle zur Verfügung stehenden Laborgeräte.

Farbig hervorgehobene Laborgeräte werden nach dem Speichern Ihrer scil Erweiterung hinzugefügt oder bleiben bestehen. Ausgegraute werden entsprechend entfernt.  

![](../../static/img/Labor/scilext_7.png)  

## Zoetis anbinden  

Sie erhalten von Zoetis eine Client ID. Diese müssen Sie an der Erweiterung hinterlegen.  

Klicken Sie **Administration** und dann **Erweiterungen** und wählen an der Kachel **Zoetis** dann **Anlegen**.

![](../../static/img/Labor/zoetis_schnittstelle.png)  

Auch hier können Sie am **Dropdown-Pfeil** wählen, wann die Untersuchungen der Behandlung hinzugefügt werden sollen.  

Klicken Sie abschließend oben rechts auf **Speichern** und auf **Aktivieren**.













