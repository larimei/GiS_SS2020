namespace Aufgabe05 {
    interface SpritArtikel {
        name: string;
        bild: string;
        preis: number;
        beschreibung: string;
    }

    interface BarArtikel {
      name: string;
      bild: string;
      preis: number;
      beschreibung: string;
  }


    let wodka: SpritArtikel = {
       name: "Wodka",
       bild: "Bilder/wodka.jpg",
       preis: 12.99,
       beschreibung: "Blutgruppe: <br> WODKA positiv"
    };

    let havana: SpritArtikel = {
        name: "Havana Club",
        bild: "Bilder/havana.jpg",
        preis: 11.99,
        beschreibung: "Wenn das Leben dir Limetten gibt, <br> mach Cuba Libre draus."
     };

    let bacardi: SpritArtikel = {
        name: "Bacardi",
        bild: "Bilder/bacardi.jpg",
        preis: 12.99,
        beschreibung: "Rucola schmeckt hammer, <br> wenn man das fehlende M einsetzt."
     };
     
    let asbach: SpritArtikel = {
        name: "Asbach Uralt",
        bild: "Bilder/asbach.png",
        preis: 11.99,
        beschreibung: "Wenn einem Gutes widerfährt, <br> ist das einen Asbach Uralt wert."
     };

    let cointreau: SpritArtikel = {
        name: "Cointreau",
        bild: "Bilder/Cointreau.png",
        preis: 20.99,
        beschreibung: "Voules-vous Cointreau <br> avec moi?"
     };

    let gin: SpritArtikel = {
        name: "Gin",
        bild: "Bilder/gin.png",
        preis: 23.99,
        beschreibung: "GYM? <br> Oh, ich dachte, du meintest GIN."
     }

    let jacky: SpritArtikel = {
        name: "Jack Daniels",
        bild: "Bilder/jacky.png",
        preis: 13.99,
        beschreibung: "Beziehungsstatus: <br> Ist in einer Bezeihung mit Jack Daniels."
     };

    let jaeger: SpritArtikel = {
        name: "Jägermeister",
        bild: "Bilder/Jaegermeister.jpg",
        preis: 12.99,
        beschreibung: "Saft hat 12 Vitamine? Naund? <br> Jägermeister hat 56 Kräuter!"
     };

    let baileys: SpritArtikel = {
        name: "Baileys",
        bild: "Bilder/Baileys.jpg",
        preis: 9.99,
        beschreibung: "Du wirkst fröhlich. Hast du gute Laune? <br> Nein, Baileys im Kaffee."
     };

    let captain: SpritArtikel = {
        name: "Captain Morgan",
        bild: "Bilder/Captain.jpg",
        preis: 11.99,
        beschreibung: "But... <br> why is the rum gone?"
     };
    let sekt: SpritArtikel = {
        name: "Sekt",
        bild: "Bilder/sekt.png",
        preis: 4.99,
        beschreibung: "Knallt besser <br> als manche Männer."
     };
    let fuerst: SpritArtikel = {
        name: "Fürstenberg Pils",
        bild: "Bilder/fürst.jpg",
        preis: 15.49,
        beschreibung: "Man darf die Hopfnung <br> niemals aufgeben."
     };

    let glas: BarArtikel = {
        name: "Whiskeyglas",
        bild: "Bilder/oldfashioned.jpg",
        preis: 18.99,
        beschreibung: "Realität ist ein Zustand, <br> der durch Mangel an Whiskey ensteht."
     };

    let shot: BarArtikel = {
      name: "Schnapsglas",
      bild: "Bilder/schnapsglas.jpg",
      preis: 8.99,
      beschreibung: "Unser letzter Wille, <br> immer mehr Promille."
   };

    let spender: BarArtikel = {
      name: "Getränkespender",
      bild: "Bilder/spender.jpg",
      preis: 24.99,
      beschreibung: "7 Liter. <br> Für eine Person."
   };

    let shaker: BarArtikel = {
      name: "Cocktailshaker",
      bild: "Bilder/shaker.jpg",
      preis: 28.99,
      beschreibung: "Shakey shakey shake. <br> Glucks."
   };

    let jigger: BarArtikel = {
      name: "Jigger",
      bild: "Bilder/jigger.jpg",
      preis: 8.99,
      beschreibung: "Motto: <br> Der Klügere kippt nach."
   };

    let loeffel: BarArtikel = {
      name: "Barlöffel",
      bild: "Bilder/löffel.jpg",
      preis: 6.99,
      beschreibung: "Wenn du denkst, es geht nicht mehr, <br> löffel den Tequila leer."
   };

    let stoessel: BarArtikel = {
      name: "Barstössel",
      bild: "Bilder/stößel.jpg",
      preis: 5.99,
      beschreibung: "Wer schwankt <br> hat mehr vom Weg."
   };

    let ausgiesser: BarArtikel = {
      name: "Ausgiesser",
      bild: "Bilder/ausgiesser.jpg",
      preis: 2.49,
      beschreibung: "Wer ständig säuft, <br> führt auch ein geregeltes Leben."
   };

    let roehrle: BarArtikel = {
      name: "Glastrinkhalme",
      bild: "Bilder/trinkhalme.jpg",
      preis: 6.49,
      beschreibung: "Nüchtern betrachtet <br> war es besoffen besser."
   };

    let sirup: BarArtikel = {
      name: "Zuckersirup",
      bild: "Bilder/zucker.jpg",
      preis: 3.49,
      beschreibung: "Leg dich nicht mit Zucker an. <br> Er ist raffiniert. Badumtsss."
   };

    let grenadine: BarArtikel = {
      name: "Grenadine",
      bild: "Bilder/grenadine.jpg",
      preis:  3.49,
      beschreibung: "Kein Alkohol <br> ist auch keine Lösung."
   };

    let kirschen: BarArtikel = {
      name: "Cocktailkirschen",
      bild: "Bilder/kirschen.jpg",
      preis: 1.99,
      beschreibung: "Mit denen <br> ist nicht gut Kirschen essen."
   };

    const sprit: SpritArtikel[] = [wodka, havana, bacardi, asbach, cointreau, gin, jacky, jaeger, baileys, captain, sekt, fuerst];
    const spritHTML: HTMLElement = document.getElementById("Spirituosen") as HTMLElement;
    const bar: BarArtikel[] = [glas, shot, spender, shaker, jigger, loeffel, stoessel, ausgiesser, roehrle, sirup, grenadine, kirschen];
    const barHTML: HTMLElement = document.getElementById("Barzubehör") as HTMLElement;
    
    for (let i: number = 0; i < sprit.length; i++) {

       let div: HTMLDivElement = document.createElement("div");
       div.setAttribute("class", "produkt");
       spritHTML.appendChild(div);

       let newname: HTMLParagraphElement = document.createElement("p");
       newname.innerHTML = sprit[i].name;
       div.appendChild(newname);

       let img: HTMLImageElement = document.createElement("img");
       img.setAttribute("src", sprit[i].bild);
       img.setAttribute("alt", name);
       div.appendChild(img);

       let price: HTMLParagraphElement = document.createElement("p");
       price.innerHTML = sprit[i].preis.toString() + "€";
       price.setAttribute("class", "preis");
       div.appendChild(price);

       let description: HTMLParagraphElement = document.createElement("p");
       description.innerHTML = sprit[i].beschreibung;
       description.setAttribute("class", "beschreibung");
       div.appendChild(description);

       let button: HTMLButtonElement = document.createElement("button");
       button.innerHTML = "In den Warenkorb";
       div.appendChild(button);
          }

    for (let i: number = 0; i < bar.length; i++) {

       let div: HTMLDivElement = document.createElement("div");
       div.setAttribute("class", "produkt");
       barHTML.appendChild(div);
     
       let newname: HTMLParagraphElement = document.createElement("p");
       newname.innerHTML = bar[i].name;
       div.appendChild(newname);
     
       let img: HTMLImageElement = document.createElement("img");
       img.setAttribute("src", bar[i].bild);
       img.setAttribute("alt", name);
       div.appendChild(img);
     
       let price: HTMLParagraphElement = document.createElement("p");
       price.innerHTML = bar[i].preis.toString() + "€";;
       price.setAttribute("class", "preis");
       div.appendChild(price);
     
       let description: HTMLParagraphElement = document.createElement("p");
       description.innerHTML = bar[i].beschreibung;
       description.setAttribute("class", "beschreibung");
       div.appendChild(description);

       let button: HTMLButtonElement = document.createElement("button");
       button.innerHTML = "In den Warenkorb";
       div.appendChild(button);
    }

}