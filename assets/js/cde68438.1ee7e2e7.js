"use strict";(self.webpackChunkdebevet=self.webpackChunkdebevet||[]).push([[2842],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=o(t),p=i,g=m["".concat(l,".").concat(p)]||m[p]||c[p]||a;return t?r.createElement(g,u(u({ref:n},d),{},{components:t})):r.createElement(g,u({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,u=new Array(a);u[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,u[1]=s;for(var o=2;o<a;o++)u[o]=t[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4089:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),u=["components"],s={},l="SumUp Kartenzahlung",o={unversionedId:"080 Erweiterungen/020 sumUP Kartenzahlung",id:"080 Erweiterungen/020 sumUP Kartenzahlung",title:"SumUp Kartenzahlung",description:"SumUp ist ein Kartenzahlungssystem, welches Ihnen ohne monatliche Grundgeb\xfchren und vollkommen mobil (also unabh\xe4ngig von der Telefonleitung bei Ihnen zu Hause)",source:"@site/docs/080 Erweiterungen/020 sumUP Kartenzahlung.md",sourceDirName:"080 Erweiterungen",slug:"/080 Erweiterungen/020 sumUP Kartenzahlung",permalink:"/docs/080 Erweiterungen/020 sumUP Kartenzahlung",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/080 Erweiterungen/020 sumUP Kartenzahlung.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TIERdirekt Schnittstelle einrichten",permalink:"/docs/080 Erweiterungen/010 TIERdirekt"},next:{title:"Labor einrichten/ Erweiterung Labor",permalink:"/docs/090 Labor/010 Erweiterungen Labor"}},d={},c=[{value:"Ger\xe4t anmelden/hinterlegen",id:"ger\xe4t-anmeldenhinterlegen",level:2},{value:"Rechnung mit sumup Kartenzahlung abrechnen",id:"rechnung-mit-sumup-kartenzahlung-abrechnen",level:2}],m={toc:c};function p(e){var n=e.components,s=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sumup-kartenzahlung"},"SumUp Kartenzahlung"),(0,a.kt)("p",null,"SumUp ist ein Kartenzahlungssystem, welches Ihnen ohne monatliche Grundgeb\xfchren und vollkommen mobil (also unabh\xe4ngig von der Telefonleitung bei Ihnen zu Hause)\ndie M\xf6glichkeit bietet, Ihren Kunden Kartenzahlung anzubieten. Alles, was Sie ben\xf6tigen, ist ein Bluetooth f\xe4higes Mobilger\xe4t (Tablet, Handy)mit einer SIM Karte und Datenvolumen.",(0,a.kt)("br",{parentName:"p"}),"\n","Das Kartenzahlger\xe4t ist \xfcber Bluetooth mit Ihrem Handy (oder Tablet) verbunden. SumUp bietet eine App, die kinderleicht zu bedienen ist und mit debevet perfekt funktioniert."),(0,a.kt)("p",null,"Wir erkl\xe4ren hier, wie Sie die Anbindung und Nutzung im debevet einrichten."),(0,a.kt)("p",null,"Ein Kartenzahlger\xe4t und die Anleitung dessen finden Sie hier:  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://sumup.de/"},"https://sumup.de/"),"  "),(0,a.kt)("h2",{id:"ger\xe4t-anmeldenhinterlegen"},"Ger\xe4t anmelden/hinterlegen"),(0,a.kt)("p",null,"<<<<<<< Updated upstream"),(0,a.kt)("h1",{id:"im-ersten-schritt-m\xfcssen-sie-ein-endger\xe4t-handy-tablet-f\xfcr-ihre-praxis-anlegenregistrierenhinterlegen-klicken-sie-hierzu-auf-administrationzahnradsymbol-und-dann-kundenregistrierung"},"Im ersten Schritt m\xfcssen Sie ein Endger\xe4t (Handy, Tablet) f\xfcr Ihre Praxis anlegen/registrieren/hinterlegen. Klicken Sie hierzu auf ",(0,a.kt)("strong",{parentName:"h1"},"Administration"),"(Zahnradsymbol) und dann ",(0,a.kt)("strong",{parentName:"h1"},"Kundenregistrierung"),"."),(0,a.kt)("p",null,"Im ersten Schritt m\xfcssen Sie ein Endger\xe4t (Handy, Tablet) f\xfcr Ihre Praxis anlegen/registrieren/hinterlegen. Klicken Sie\nhierzu auf ",(0,a.kt)("strong",{parentName:"p"},"Administration"),"(Zahnradsymbol) und dann ",(0,a.kt)("strong",{parentName:"p"},"Kundenregistrierung"),".   "),(0,a.kt)("blockquote",null,(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Stashed changes")))))))),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3979).Z,width:"1912",height:"932"}),"   "),(0,a.kt)("p",null,"Klicken Sie dann auf den Reiter ",(0,a.kt)("strong",{parentName:"p"},"Ger\xe4te"),(0,a.kt)("br",{parentName:"p"}),"\n","Geben Sie einen Namen f\xfcr das Ger\xe4t ein und setzen ein Passwort. Bitte klicken Sie danach unbedingt den Haken an, um beides zu aktivieren.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9160).Z,width:"1914",height:"929"})),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tipp")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Wenn Sie mehrere Ger\xe4te angemeldet haben, z.B. noch ein Tablet zum unterschreiben, geben Sie den Ger\xe4ten eindeutige Namen.  "))),(0,a.kt)("p",null,"Nun k\xf6nnen Sie auf dem Ger\xe4t einen QR Code Scanner (meist vorinstalliert, sonst im App Store suchen) \xf6ffnen und mit diesem den QR Code oben links scannen.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(637).Z,width:"614",height:"542"}),"  "),(0,a.kt)("p",null,"Ihr Ger\xe4t zeigt dann einen Link an, diesen klicken Sie bitte an. Dort m\xfcssen Sie die gesetzen Daten (Passwort) nun eingeben.  "),(0,a.kt)("p",null,"Nun ist Ihr Ger\xe4t angemeldet und kann f\xfcr die Abrechnung mit SumUp genutzt werden.    "),(0,a.kt)("h2",{id:"rechnung-mit-sumup-kartenzahlung-abrechnen"},"Rechnung mit sumup Kartenzahlung abrechnen"),(0,a.kt)("p",null,"Um nun bei einem Kunden die Kartenzahlung zu nutzen, w\xe4hlen Sie beim erstellen einer Rechnung bei ",(0,a.kt)("strong",{parentName:"p"},"Zahlungsart")," statt bisher z.B. Barzahlung aus dem Dropdown\nnun ",(0,a.kt)("strong",{parentName:"p"},"SumUp"),". Klicken Sie anschlie\xdfend auf ",(0,a.kt)("strong",{parentName:"p"},"Speichern"),"  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(327).Z,width:"1821",height:"920"}),"  "),(0,a.kt)("p",null,"W\xe4hlen Sie nun oben rechts beim Dropdown ",(0,a.kt)("strong",{parentName:"p"},"Erweitert")," die Option ",(0,a.kt)("strong",{parentName:"p"},"mit SumUp abrechnen"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8523).Z,width:"1903",height:"415"}),"  "),(0,a.kt)("p",null,"Es \xf6ffnet sich nun ein Fenster, in welchem Sie Ihr Zahlungsger\xe4t ausw\xe4hlen m\xfcssen.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7127).Z,width:"808",height:"315"}),"  "),(0,a.kt)("p",null,"Wenn das Ger\xe4t korrekt \xfcber das Barcode scannen aktiviert und angemeldet ist, wird es mit einem gr\xfcnen Button angezeigt."),(0,a.kt)("p",null,"Wenn Sie das Ger\xe4t nun w\xe4hlen, \xf6ffnet Ihr Ger\xe4t automatisch eine Maske, in der es Ihnen den Patient und die Summe erneut nennt.  "),(0,a.kt)("p",null,"Best\xe4tigen Sie diese Auswahl, stellt es automatisch die Verbindung zu Ihrem Kartenzahlger\xe4t her und die passende Summe erscheint in der SumUP App."),(0,a.kt)("p",null,"Der Kunde muss nun das Kartenzahlger\xe4t bedienen. Die Rechnung ist im debevet direkt automatisch als verbucht hinterlegt. "),(0,a.kt)("p",null,"Sie k\xf6nnen dem Kunden wie gewohnt direkt die Rechnung mailen."))}p.isMDXComponent=!0},3979:function(e,n,t){n.Z=t.p+"assets/images/geraete_registrierung1-434f08f5e9569fc8f46783d792ac3601.png"},9160:function(e,n,t){n.Z=t.p+"assets/images/geraete_registrierung2-5b2e9bc61eabf9c7936b2479298a67e7.png"},637:function(e,n,t){n.Z=t.p+"assets/images/geraete_registrierung3-5afdd1aa79918faba434df3e0c601f8a.png"},327:function(e,n,t){n.Z=t.p+"assets/images/sumup_zahlung1-413df036c50029bd2ef27a2119f7fa41.png"},8523:function(e,n,t){n.Z=t.p+"assets/images/sumup_zahlung2-9cfb2724075fc2dfea68e1b2e8d7a25f.png"},7127:function(e,n,t){n.Z=t.p+"assets/images/sumup_zahlung3-88495f545d3a12809110d890c74f4fb7.png"}}]);