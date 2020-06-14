"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    const warenHTML = document.getElementById("MeineWaren");
    let warenchild = document.createElement("div");
    warenHTML.appendChild(warenchild);
    const preisHTML = document.getElementById("Gesamt");
    let preisText = document.createElement("p");
    let allEntfernen = document.createElement("button");
    let gesamtPreis = parseFloat(localStorage.getItem("preis"));
    gesamtPreisSetzen();
    communicate();
    async function communicate() {
        let response = await fetch("artikel.json");
        Aufgabe07.gesArtikel = await response.json();
        warenkorbFuellen();
    }
    function warenkorbFuellen() {
        for (let i = 0; i < Aufgabe07.gesArtikel.length; i++) {
            if (localStorage.getItem(i.toString()) != null) {
                let div = document.createElement("div");
                div.setAttribute("class", "produkt");
                let newname = document.createElement("p");
                newname.innerHTML = Aufgabe07.gesArtikel[i].name;
                div.appendChild(newname);
                let img = document.createElement("img");
                img.setAttribute("src", Aufgabe07.gesArtikel[i].bild);
                img.setAttribute("alt", name);
                div.appendChild(img);
                let price = document.createElement("p");
                price.innerHTML = Aufgabe07.gesArtikel[i].preis.toString() + "€";
                price.setAttribute("class", "preis");
                div.appendChild(price);
                let description = document.createElement("p");
                description.innerHTML = Aufgabe07.gesArtikel[i].beschreibung;
                description.setAttribute("class", "beschreibung");
                div.appendChild(description);
                let button = document.createElement("button");
                button.innerHTML = "Entfernen";
                button.addEventListener("click", entfernen);
                div.appendChild(button);
                function entfernen(_event) {
                    let zaehler = parseFloat(localStorage.getItem("zaehler"));
                    zaehler = zaehler - 1;
                    localStorage.setItem("zaehler", zaehler.toString());
                    let neuPreis = gesamtPreis - Aufgabe07.gesArtikel[i].preis;
                    neuPreis.toFixed(2);
                    localStorage.setItem("preis", neuPreis.toString());
                    gesamtPreis = parseFloat(localStorage.getItem("preis"));
                    gesamtPreis.toFixed(2);
                    gesamtPreisSetzen();
                    warenHTML.removeChild(warenchild);
                    let leer = document.createElement("div");
                    warenchild = leer;
                    warenHTML.appendChild(warenchild);
                    localStorage.removeItem(i.toString());
                    warenkorbFuellen();
                }
                warenchild.appendChild(div);
            }
        }
    }
    function gesamtPreisSetzen() {
        if (localStorage.getItem("preis") != null) {
            preisText.innerText = "Ihre Waren kosten " + gesamtPreis + " €";
            preisText.setAttribute("id", "preistext");
            preisHTML.appendChild(preisText);
            allEntfernen.innerHTML = "Alles Löschen";
            preisHTML.appendChild(allEntfernen);
            allEntfernen.addEventListener("click", allesEntfernen);
        }
        else {
            preisHTML.removeChild(allEntfernen);
            preisHTML.innerText = "Ihr Warenkorb ist leer";
        }
    }
    function allesEntfernen() {
        localStorage.clear();
        warenHTML.removeChild(warenchild);
        gesamtPreisSetzen();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map