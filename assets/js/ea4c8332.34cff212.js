"use strict";(self.webpackChunkdebevet=self.webpackChunkdebevet||[]).push([[8523],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},o=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),o=u(t),c=r,h=o["".concat(l,".").concat(c)]||o[c]||p[c]||a;return t?i.createElement(h,d(d({ref:n},m),{},{components:t})):i.createElement(h,d({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,d=new Array(a);d[0]=o;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,d[1]=s;for(var u=2;u<a;u++)d[u]=t[u];return i.createElement.apply(null,d)}return i.createElement.apply(null,t)}o.displayName="MDXCreateElement"},45500:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),d=["components"],s={},l="Online Termine vergeben",u={unversionedId:"Administration/Onlinetermine",id:"Administration/Onlinetermine",title:"Online Termine vergeben",description:"Aktuell k\xf6nnen Terminanfragen durch Ihre Kunden nur via App (hierzu nutzen wir die around.pet App erfolgen. Die k\xf6nnen diese",source:"@site/docs/060_Administration/060_Onlinetermine.md",sourceDirName:"060_Administration",slug:"/Administration/Onlinetermine",permalink:"/docs/Administration/Onlinetermine",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/060_Administration/060_Onlinetermine.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tablet / Handy nutzen",permalink:"/docs/Administration/Tablet"},next:{title:"Kalender nutzen",permalink:"/docs/Administration/Kalendernutzung"}},m={},p=[{value:"around.pet Schnittstelle aktivieren",id:"aroundpet-schnittstelle-aktivieren",level:2},{value:"Zeiten f\xfcr Termine vorgeben",id:"zeiten-f\xfcr-termine-vorgeben",level:2},{value:"Tierbesitzer zur App einladen",id:"tierbesitzer-zur-app-einladen",level:2},{value:"Neukunden \xfcber die App",id:"neukunden-\xfcber-die-app",level:2},{value:"Terminanzeige f\xfcr Kunden in der App",id:"terminanzeige-f\xfcr-kunden-in-der-app",level:2},{value:"Terminanfragen vom Kunden annehmen",id:"terminanfragen-vom-kunden-annehmen",level:2},{value:"Termin absagen oder Anfrage ablehnen",id:"termin-absagen-oder-anfrage-ablehnen",level:2},{value:"Terminabsage durch Kunden",id:"terminabsage-durch-kunden",level:2},{value:"Termin \xe4ndern",id:"termin-\xe4ndern",level:2},{value:"Dokumenten Service",id:"dokumenten-service",level:2}],o={toc:p};function c(e){var n=e.components,s=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,i.Z)({},o,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"online-termine-vergeben"},"Online Termine vergeben"),(0,a.kt)("p",null,"Aktuell k\xf6nnen Terminanfragen durch Ihre Kunden nur via App (hierzu nutzen wir die around.pet App erfolgen. Die k\xf6nnen diese\nAnfragen dann annehmen oder ablehnen."),(0,a.kt)("p",null,"Ein Webservice ist in Arbeit!"),(0,a.kt)("h2",{id:"aroundpet-schnittstelle-aktivieren"},"around.pet Schnittstelle aktivieren"),(0,a.kt)("p",null,"Zun\xe4chst m\xfcssen Sie in der debevet Software die around.pet Verbindung einmalig einrichten. Klicken Sie dazu auf ",(0,a.kt)("strong",{parentName:"p"},"Administration")," und dann\n",(0,a.kt)("strong",{parentName:"p"},"API"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(53404).Z,width:"1192",height:"840"})),(0,a.kt)("p",null,'Gehen Sie auf den Button aktivieren und setzen Sie den Haken bei "Ich akzeptiere die Nutzungsbedingungen des Anbieters".\nAnschlie\xdfend k\xf6nnen Sie die Schnittstelle aktivieren.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(38130).Z,width:"1618",height:"1068"}),"   "),(0,a.kt)("h2",{id:"zeiten-f\xfcr-termine-vorgeben"},"Zeiten f\xfcr Termine vorgeben"),(0,a.kt)("p",null,"Nat\xfcrlich k\xf6nnen Sie die Zeiten, in denen Termine buchbar sein sollen, frei vergeben. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Gehen Sie auf Administration (drei Zahnr\xe4dchen-Symbol) \u2192 Einstellungen (ein Zahnrad-Symbol) \u2192 Reiter \u201eAPI\u201c.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"W\xe4hlen Sie im Bereich Kalender aus der Auswahlliste ggf. around.pet aus.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Hinterlegen Sie bei den entsprechenden Wochentagen Ihre \xd6ffnungszeiten (z.B 10:00-12:00, 14:00-18:00). Wenn Sie einen Wochentag komplett leer lassen, ist an diesem Tag keine Online-Terminbuchung m\xf6glich.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Unter "Vorlaufzeit" k\xf6nnen Sie die Vorlaufzeit in Stunden einstellen. Diese Vorlaufzeit bezieht sich auf die Zeit, wie kurzfristig Ihre Kunden einen Termin bei Ihnen buchen k\xf6nnen.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Unter "Max. buchbar bis (in Tagen)" k\xf6nnen Sie die Anzahl an Tagen hinterlegen, bis wann in die Zukunft Kunden bei Ihnen Termine buchen k\xf6nnen.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Unter "Betriebsurlaub" k\xf6nnen Sie Ihren n\xe4chsten Urlaub hinterlegen. In diesem Zeitraum k\xf6nnen Ihre Kunden dann keine Termine buchen.'))),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(90864).Z,width:"2870",height:"1516"}),"  "),(0,a.kt)("h2",{id:"tierbesitzer-zur-app-einladen"},"Tierbesitzer zur App einladen"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Hinweis: ")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Hinweis: Es ist wichtig, dass sich der Kunde mit der E-Mail zu der Sie die Einladung schicken bei der around.pet App\nregistriert. Nur dann kann die richtige Zuordnung stattfinden.  "))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Gehen Sie auf das Profil des Kunden.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Gehen auf den Reiter "Allgemein".')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Gehen Sie im Bereich Einladungsmail auf den Button \u201earound.pet\u201c. Dadurch wird an die hinterlegte E-Mail-Adresse des Kunden eine Einladungsmail versendet.  "))),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8105).Z,width:"2296",height:"1458"}),"  "),(0,a.kt)("h2",{id:"neukunden-\xfcber-die-app"},"Neukunden \xfcber die App"),(0,a.kt)("p",null,"Kunden, die die App nutzen, bekommen in der Liste der Tier\xe4rzte Ihre Praxis angezeigt und k\xf6nnen sich \xfcber die App mit Ihnen verbinden.  "),(0,a.kt)("p",null,"Wenn die Kunden alle Daten angeben, werden Sie als Kunden bei Ihnen angelegt, das spart Ihnen den Aufwand des Anlegens/Registrierens vor Ort!  "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tipp:  ")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Wenn Sie unter ",(0,a.kt)("strong",{parentName:"p"},"Administration")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"Textbausteine")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"Datenschutzerkl\xe4rung")," einen entsprechenden\nText hinterlegt haben, kann der Kunde diesen lesen und stimmt mit seiner Verbindung mit Ihnen der Datenschutzerkl\xe4rung zu.\nDiese wird bei Ihrem debevet unter Dokumente des Kunden dann mit entsprechendem Datum als Nachweis f\xfcr Sie gespeichert.  "))),(0,a.kt)("h2",{id:"terminanzeige-f\xfcr-kunden-in-der-app"},"Terminanzeige f\xfcr Kunden in der App"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tipp:  ")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Der Kunde erh\xe4lt 25h und 1h bevor der Termin stattfindet eine Push-Nachricht durch die App.\nDeshalb ist es wichtig, dass der Kunde die Benachrichtigungen f\xfcr die around.pet App auf seinem Smartphone aktiviert.  "))),(0,a.kt)("p",null,"Erstellen Sie wie gewohnt einen Termin f\xfcr einen Kunden und seinen Patienten. ",(0,a.kt)("strong",{parentName:"p"},"Der Kunde sieht bei sich den Inhalt im Feld\nBeschreibung des Kalendereintrages als Grund des Termines. Das Feld des Titels eines Kalendereintrages sehen nur Sie.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"W\xe4hlen Sie den Kunden der die around.pet App nutzt und dessen Tier.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"W\xe4hlen Sie bei Kalender around.pet und speichern Sie den Kalendereintrag.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Der Kunde erh\xe4lt sofort eine Benachrichtigung auf sein Handy mit den Details zu seinem n\xe4chsten Termin, wenn er mit Ihnen verbunden ist.  "))),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(13366).Z,width:"1948",height:"1044"}),"  "),(0,a.kt)("h2",{id:"terminanfragen-vom-kunden-annehmen"},"Terminanfragen vom Kunden annehmen"),(0,a.kt)("p",null,"Auf Ihrem Dashboard gibt es ein Fenster f\xfcr ",(0,a.kt)("strong",{parentName:"p"},"Aktualisierte Termine"),". Dort sehen Sie alle Terminanfragen von Kunden, die \xfcber die\naround.pet App hereinkommen.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(85977).Z,width:"2726",height:"1524"}),"  "),(0,a.kt)("p",null,"Klicken Sie auf den Patienten- oder Kundennamen und klicken dann oben rechts ",(0,a.kt)("strong",{parentName:"p"},"Erweitert"),". "),(0,a.kt)("p",null,"Nun k\xf6nnen Sie die ",(0,a.kt)("strong",{parentName:"p"},"Terminanfrage annehmen"),".    "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(44800).Z,width:"2872",height:"1524"}),"  "),(0,a.kt)("p",null,"Der Eintrag ist dann aus dem Dashboard Feld ",(0,a.kt)("strong",{parentName:"p"},"Aktualisierte Termine")," verschwunden. "),(0,a.kt)("h2",{id:"termin-absagen-oder-anfrage-ablehnen"},"Termin absagen oder Anfrage ablehnen"),(0,a.kt)("p",null,"In der Detailansicht eines Termines k\xf6nnen Sie \xfcber ",(0,a.kt)("strong",{parentName:"p"},"Erweitert")," eine Terminanfrage bzw. einen Termin durch\nKlick auf ",(0,a.kt)("strong",{parentName:"p"},"Abbrechen")," absagen. Der Patientenbesitzer erh\xe4lt sofort eine Benachrichtigung.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5559).Z,width:"2868",height:"1512"}),"  "),(0,a.kt)("h2",{id:"terminabsage-durch-kunden"},"Terminabsage durch Kunden"),(0,a.kt)("p",null,"Wenn Kunden durch die App einen Termin abgsagen, erscheint dieser in ",(0,a.kt)("strong",{parentName:"p"},"Rot")," auf der Liste ",(0,a.kt)("strong",{parentName:"p"},"Aktualisierte Termine")," auf\nIhrem Dashboard.  "),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Hinweis:   ")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Ihr Kunde hat diese M\xf6glichkeit nur, wenn der Termin mit Ihnen mehr als 24h in der Zukunft liegt.\nWenn der Termin in weniger als 24h stattfindet, bekommt er den Hinweis, dass er sich per Telefon bei Ihnen melden muss.  "))),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(20086).Z,width:"2866",height:"1524"}),"  "),(0,a.kt)("h2",{id:"termin-\xe4ndern"},"Termin \xe4ndern"),(0,a.kt)("p",null,"Wenn Sie wie gewohnt im Kalender den Eintrag (z.B. Datum, Uhrzeit) \xe4ndern, bekommt Ihr Kunde dieses direkt via Push Nachricht angezeigt!"),(0,a.kt)("h2",{id:"dokumenten-service"},"Dokumenten Service"),(0,a.kt)("p",null,"Sie k\xf6nnen alle Dokumente wie z. B. R\xf6ntgen, Laborergebnisse, Untersuchungsprofile usw. direkt f\xfcr Ihren Kunden freigeben.\nDiese werden dann direkt in der App f\xfcr den Kunden verf\xfcgbar und k\xf6nnen nicht wie als Email evtl. gel\xf6scht werden und sind dann f\xfcr den\nKunden nicht mehr verf\xfcgbar.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(82426).Z,width:"2802",height:"1358"})))}c.isMDXComponent=!0},53404:function(e,n,t){n.Z=t.p+"assets/images/aroundpet1-3e95c714887259e76739152f051c9ddd.png"},38130:function(e,n,t){n.Z=t.p+"assets/images/aroundpet2-aad80c3264fab85c23765dbdad41226d.png"},90864:function(e,n,t){n.Z=t.p+"assets/images/aroundpet3-23c4a03795dd64731680bd9460a9307a.png"},8105:function(e,n,t){n.Z=t.p+"assets/images/aroundpet_einladung-e7655cb2499f30b82e7d6b04b71f9969.png"},82426:function(e,n,t){n.Z=t.p+"assets/images/doku_freigabe-ee710103338e8a946e3f43e6ccc3ddda.png"},13366:function(e,n,t){n.Z=t.p+"assets/images/kundentermin_aroundpet-0e3b3e38a8ebfe6dcf8b4f3ce9f93003.png"},85977:function(e,n,t){n.Z=t.p+"assets/images/terminanfrage1-91a32d4e0df3ab5c8b57f704cd2058dc.png"},44800:function(e,n,t){n.Z=t.p+"assets/images/terminanfrage2-885b9df945324fc000b16ad31263b53c.png"},5559:function(e,n,t){n.Z=t.p+"assets/images/terminanfrage_ablehnen-342a7485b596c9a08cf9a0d4af3f5dfc.png"},20086:function(e,n,t){n.Z=t.p+"assets/images/termine_abgesagt-083b54f4c304cad91382b9fdcf19a3e2.png"}}]);