"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let wodka = {
        kategorie: "sprit",
        name: "Wodka",
        bild: "Bilder/wodka.jpg",
        preis: 12.99,
        beschreibung: "Blutgruppe: <br> WODKA positiv"
    };
    let havana = {
        kategorie: "sprit",
        name: "Havana Club",
        bild: "Bilder/havana.jpg",
        preis: 11.99,
        beschreibung: "Wenn das Leben dir Limetten gibt, <br> mach Cuba Libre draus."
    };
    let bacardi = {
        kategorie: "sprit",
        name: "Bacardi",
        bild: "Bilder/bacardi.jpg",
        preis: 12.99,
        beschreibung: "Rucola schmeckt hammer, <br> wenn man das fehlende M einsetzt."
    };
    let asbach = {
        kategorie: "sprit",
        name: "Asbach Uralt",
        bild: "Bilder/asbach.png",
        preis: 11.99,
        beschreibung: "Wenn einem Gutes widerfährt, <br> ist das einen Asbach Uralt wert."
    };
    let cointreau = {
        kategorie: "sprit",
        name: "Cointreau",
        bild: "Bilder/Cointreau.png",
        preis: 20.99,
        beschreibung: "Voules-vous Cointreau <br> avec moi?"
    };
    let gin = {
        kategorie: "sprit",
        name: "Gin",
        bild: "Bilder/gin.png",
        preis: 23.99,
        beschreibung: "GYM? <br> Oh, ich dachte, du meintest GIN."
    };
    let jacky = {
        kategorie: "sprit",
        name: "Jack Daniels",
        bild: "Bilder/jacky.png",
        preis: 13.99,
        beschreibung: "Beziehungsstatus: <br> Ist in einer Bezeihung mit Jack Daniels."
    };
    let jaeger = {
        kategorie: "sprit",
        name: "Jägermeister",
        bild: "Bilder/Jaegermeister.jpg",
        preis: 12.99,
        beschreibung: "Saft hat 12 Vitamine? Naund? <br> Jägermeister hat 56 Kräuter!"
    };
    let baileys = {
        kategorie: "sprit",
        name: "Baileys",
        bild: "Bilder/Baileys.jpg",
        preis: 9.99,
        beschreibung: "Du wirkst fröhlich. Hast du gute Laune? <br> Nein, Baileys im Kaffee."
    };
    let captain = {
        kategorie: "sprit",
        name: "Captain Morgan",
        bild: "Bilder/Captain.jpg",
        preis: 11.99,
        beschreibung: "But... <br> why is the rum gone?"
    };
    let sekt = {
        kategorie: "sprit",
        name: "Sekt",
        bild: "Bilder/sekt.png",
        preis: 4.99,
        beschreibung: "Knallt besser <br> als manche Männer."
    };
    let fuerst = {
        kategorie: "sprit",
        name: "Fürstenberg Pils",
        bild: "Bilder/fürst.jpg",
        preis: 15.49,
        beschreibung: "Man darf die Hopfnung <br> niemals aufgeben."
    };
    let glas = {
        kategorie: "bar",
        name: "Whiskeyglas",
        bild: "Bilder/oldfashioned.jpg",
        preis: 18.99,
        beschreibung: "Realität ist ein Zustand, <br> der durch Mangel an Whiskey ensteht."
    };
    let shot = {
        kategorie: "bar",
        name: "Schnapsglas",
        bild: "Bilder/schnapsglas.jpg",
        preis: 8.99,
        beschreibung: "Unser letzter Wille, <br> immer mehr Promille."
    };
    let spender = {
        kategorie: "bar",
        name: "Getränkespender",
        bild: "Bilder/spender.jpg",
        preis: 24.99,
        beschreibung: "7 Liter. <br> Für eine Person."
    };
    let shaker = {
        kategorie: "bar",
        name: "Cocktailshaker",
        bild: "Bilder/shaker.jpg",
        preis: 28.99,
        beschreibung: "Shakey shakey shake. <br> Glucks."
    };
    let jigger = {
        kategorie: "bar",
        name: "Jigger",
        bild: "Bilder/jigger.jpg",
        preis: 8.99,
        beschreibung: "Motto: <br> Der Klügere kippt nach."
    };
    let loeffel = {
        kategorie: "bar",
        name: "Barlöffel",
        bild: "Bilder/löffel.jpg",
        preis: 6.99,
        beschreibung: "Wenn du denkst, es geht nicht mehr, <br> löffel den Tequila leer."
    };
    let stoessel = {
        kategorie: "bar",
        name: "Barstössel",
        bild: "Bilder/stößel.jpg",
        preis: 5.99,
        beschreibung: "Wer schwankt <br> hat mehr vom Weg."
    };
    let ausgiesser = {
        kategorie: "bar",
        name: "Ausgiesser",
        bild: "Bilder/ausgiesser.jpg",
        preis: 2.49,
        beschreibung: "Wer ständig säuft, <br> führt auch ein geregeltes Leben."
    };
    let roehrle = {
        kategorie: "bar",
        name: "Glastrinkhalme",
        bild: "Bilder/trinkhalme.jpg",
        preis: 6.49,
        beschreibung: "Nüchtern betrachtet <br> war es besoffen besser."
    };
    let sirup = {
        kategorie: "bar",
        name: "Zuckersirup",
        bild: "Bilder/zucker.jpg",
        preis: 3.49,
        beschreibung: "Leg dich nicht mit Zucker an. <br> Er ist raffiniert. Badumtsss."
    };
    let grenadine = {
        kategorie: "bar",
        name: "Grenadine",
        bild: "Bilder/grenadine.jpg",
        preis: 3.49,
        beschreibung: "Kein Alkohol <br> ist auch keine Lösung."
    };
    let kirschen = {
        kategorie: "bar",
        name: "Cocktailkirschen",
        bild: "Bilder/kirschen.jpg",
        preis: 1.99,
        beschreibung: "Mit denen <br> ist nicht gut Kirschen essen."
    };
    const gesArtikel = [wodka, havana, bacardi, asbach, cointreau, gin, jacky, jaeger, baileys, captain, sekt, fuerst,
        glas, shot, spender, shaker, jigger, loeffel, stoessel, ausgiesser, roehrle, sirup, grenadine, kirschen];
    const spritHTML = document.getElementById("Spirituosen");
    const barHTML = document.getElementById("Barzubehör");
    let zaehler = 0;
    let kosten = 0;
    //nur eine Schleife... RIP
    for (let i = 0; i < gesArtikel.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "produkt");
        let newname = document.createElement("p");
        newname.innerHTML = gesArtikel[i].name;
        div.appendChild(newname);
        let img = document.createElement("img");
        img.setAttribute("src", gesArtikel[i].bild);
        img.setAttribute("alt", name);
        div.appendChild(img);
        let price = document.createElement("p");
        price.innerHTML = gesArtikel[i].preis.toString() + "€";
        price.setAttribute("class", "preis");
        div.appendChild(price);
        let description = document.createElement("p");
        description.innerHTML = gesArtikel[i].beschreibung;
        description.setAttribute("class", "beschreibung");
        div.appendChild(description);
        let button = document.createElement("button");
        button.innerHTML = "In den Warenkorb";
        div.appendChild(button);
        button.addEventListener("click", handleKosten);
        button.addEventListener("click", handleZaehlen);
        function handleKosten(_event) {
            kosten = kosten + gesArtikel[i].preis;
            console.log("Gesamtkosten: " + kosten.toFixed(2));
        }
        if (gesArtikel[i].kategorie == "sprit")
            spritHTML.appendChild(div);
        else
            barHTML.appendChild(div);
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
        zaehler++;
        // tslint:disable-next-line: typedef
        let warenkorb = document.getElementById("Waren");
        warenkorb.style.opacity = "1";
        warenkorb.innerText = zaehler.toString();
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=sript.js.map