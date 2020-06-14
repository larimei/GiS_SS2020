"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    const spritHTML = document.getElementById("Spirituosen");
    const barHTML = document.getElementById("Barzubehör");
    let warenkorb = document.getElementById("Waren");
    let zaehler = 0;
    if (localStorage.getItem("zaehler") != null) {
        zaehler = parseFloat(localStorage.getItem("zaehler"));
        warenkorb.style.opacity = "1";
        warenkorb.innerText = zaehler.toString();
    }
    let kosten = 0;
    Aufgabe07.gesArtikel = [];
    communicate();
    async function communicate() {
        let response = await fetch("artikel.json");
        Aufgabe07.gesArtikel = await response.json();
        artikelErstellen();
    }
    Aufgabe07.communicate = communicate;
    function artikelErstellen() {
        for (let i = 0; i < Aufgabe07.gesArtikel.length; i++) {
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
            button.innerHTML = "In den Warenkorb";
            button.setAttribute("Stelle", i.toString());
            div.appendChild(button);
            button.addEventListener("click", handleZaehlen);
            button.addEventListener("click", handleKaufen);
            function handleKaufen(_event) {
                kosten = kosten + Aufgabe07.gesArtikel[i].preis;
                console.log("Gesamtkosten: " + kosten.toFixed(2));
                localStorage.setItem(i.toString(), kosten.toString());
                localStorage.setItem("preis", kosten.toString());
            }
            if (Aufgabe07.gesArtikel[i].kategorie == "sprit")
                spritHTML.appendChild(div);
            else
                barHTML.appendChild(div);
        }
    }
    const alleKat = document.getElementById("alles");
    const spritKat = document.getElementById("sprit");
    const barKat = document.getElementById("bar");
    const spritTitel = document.getElementById("SpritTitel");
    const barTitel = document.getElementById("BarTitel");
    barKat.addEventListener("click", handleSpritAusblenden);
    alleKat.addEventListener("click", handleAlleKat);
    spritKat.addEventListener("click", handleBarAusblenden);
    function handleSpritAusblenden(_event) {
        spritHTML.hidden = true;
        barHTML.hidden = false;
        barTitel.hidden = false;
        spritTitel.hidden = true;
    }
    function handleBarAusblenden(_event) {
        spritHTML.hidden = false;
        barHTML.hidden = true;
        barTitel.hidden = true;
        spritTitel.hidden = false;
    }
    function handleAlleKat(_event) {
        spritHTML.hidden = false;
        barHTML.hidden = false;
        barTitel.hidden = false;
        spritTitel.hidden = false;
    }
    function handleZaehlen(_event) {
        warenkorb.style.opacity = "1";
        zaehler++;
        localStorage.setItem("zaehler", zaehler.toString());
        warenkorb.innerText = zaehler.toString();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=sript.js.map