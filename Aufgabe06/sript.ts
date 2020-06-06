namespace Aufgabe06 {
    interface Artikel {
        kategorie: string;
        name: string;
        bild: string;
        preis: number;
        beschreibung: string;
    }


    let wodka: Artikel = {
       kategorie: "sprit",
       name: "Wodka",
       bild: "Bilder/wodka.jpg",
       preis: 12.99,
       beschreibung: "Blutgruppe: <br> WODKA positiv"
    };

    let havana: Artikel = {
      kategorie: "sprit",
        name: "Havana Club",
        bild: "Bilder/havana.jpg",
        preis: 11.99,
        beschreibung: "Wenn das Leben dir Limetten gibt, <br> mach Cuba Libre draus."
     };

    let bacardi: Artikel = {
      kategorie: "sprit",
        name: "Bacardi",
        bild: "Bilder/bacardi.jpg",
        preis: 12.99,
        beschreibung: "Rucola schmeckt hammer, <br> wenn man das fehlende M einsetzt."
     };
     
    let asbach: Artikel = {
      kategorie: "sprit",
        name: "Asbach Uralt",
        bild: "Bilder/asbach.png",
        preis: 11.99,
        beschreibung: "Wenn einem Gutes widerfährt, <br> ist das einen Asbach Uralt wert."
     };

    let cointreau: Artikel = {
      kategorie: "sprit",
        name: "Cointreau",
        bild: "Bilder/Cointreau.png",
        preis: 20.99,
        beschreibung: "Voules-vous Cointreau <br> avec moi?"
     };

    let gin: Artikel = {
      kategorie: "sprit",
        name: "Gin",
        bild: "Bilder/gin.png",
        preis: 23.99,
        beschreibung: "GYM? <br> Oh, ich dachte, du meintest GIN."
     };

    let jacky: Artikel = {
      kategorie: "sprit",
        name: "Jack Daniels",
        bild: "Bilder/jacky.png",
        preis: 13.99,
        beschreibung: "Beziehungsstatus: <br> Ist in einer Bezeihung mit Jack Daniels."
     };

    let jaeger: Artikel = {
      kategorie: "sprit",
        name: "Jägermeister",
        bild: "Bilder/Jaegermeister.jpg",
        preis: 12.99,
        beschreibung: "Saft hat 12 Vitamine? Naund? <br> Jägermeister hat 56 Kräuter!"
     };

    let baileys: Artikel = {
      kategorie: "sprit",
        name: "Baileys",
        bild: "Bilder/Baileys.jpg",
        preis: 9.99,
        beschreibung: "Du wirkst fröhlich. Hast du gute Laune? <br> Nein, Baileys im Kaffee."
     };

    let captain: Artikel = {
      kategorie: "sprit",
        name: "Captain Morgan",
        bild: "Bilder/Captain.jpg",
        preis: 11.99,
        beschreibung: "But... <br> why is the rum gone?"
     };
    let sekt: Artikel = {
      kategorie: "sprit",
        name: "Sekt",
        bild: "Bilder/sekt.png",
        preis: 4.99,
        beschreibung: "Knallt besser <br> als manche Männer."
     };
    let fuerst: Artikel = {
      kategorie: "sprit",
        name: "Fürstenberg Pils",
        bild: "Bilder/fürst.jpg",
        preis: 15.49,
        beschreibung: "Man darf die Hopfnung <br> niemals aufgeben."
     };

    let glas: Artikel = {
      kategorie: "bar",
        name: "Whiskeyglas",
        bild: "Bilder/oldfashioned.jpg",
        preis: 18.99,
        beschreibung: "Realität ist ein Zustand, <br> der durch Mangel an Whiskey ensteht."
     };

    let shot: Artikel = {
      kategorie: "bar",
      name: "Schnapsglas",
      bild: "Bilder/schnapsglas.jpg",
      preis: 8.99,
      beschreibung: "Unser letzter Wille, <br> immer mehr Promille."
   };

    let spender: Artikel = {
      kategorie: "bar",
      name: "Getränkespender",
      bild: "Bilder/spender.jpg",
      preis: 24.99,
      beschreibung: "7 Liter. <br> Für eine Person."
   };

    let shaker: Artikel = {
      kategorie: "bar",
      name: "Cocktailshaker",
      bild: "Bilder/shaker.jpg",
      preis: 28.99,
      beschreibung: "Shakey shakey shake. <br> Glucks."
   };

    let jigger: Artikel = {
      kategorie: "bar",
      name: "Jigger",
      bild: "Bilder/jigger.jpg",
      preis: 8.99,
      beschreibung: "Motto: <br> Der Klügere kippt nach."
   };

    let loeffel: Artikel = {
      kategorie: "bar",
      name: "Barlöffel",
      bild: "Bilder/löffel.jpg",
      preis: 6.99,
      beschreibung: "Wenn du denkst, es geht nicht mehr, <br> löffel den Tequila leer."
   };

    let stoessel: Artikel = {
      kategorie: "bar",
      name: "Barstössel",
      bild: "Bilder/stößel.jpg",
      preis: 5.99,
      beschreibung: "Wer schwankt <br> hat mehr vom Weg."
   };

    let ausgiesser: Artikel = {
      kategorie: "bar",
      name: "Ausgiesser",
      bild: "Bilder/ausgiesser.jpg",
      preis: 2.49,
      beschreibung: "Wer ständig säuft, <br> führt auch ein geregeltes Leben."
   };

    let roehrle: Artikel = {
      kategorie: "bar",
      name: "Glastrinkhalme",
      bild: "Bilder/trinkhalme.jpg",
      preis: 6.49,
      beschreibung: "Nüchtern betrachtet <br> war es besoffen besser."
   };

    let sirup: Artikel = {
      kategorie: "bar",
      name: "Zuckersirup",
      bild: "Bilder/zucker.jpg",
      preis: 3.49,
      beschreibung: "Leg dich nicht mit Zucker an. <br> Er ist raffiniert. Badumtsss."
   };

    let grenadine: Artikel = {
      kategorie: "bar",
      name: "Grenadine",
      bild: "Bilder/grenadine.jpg",
      preis:  3.49,
      beschreibung: "Kein Alkohol <br> ist auch keine Lösung."
   };

    let kirschen: Artikel = {
      kategorie: "bar",
      name: "Cocktailkirschen",
      bild: "Bilder/kirschen.jpg",
      preis: 1.99,
      beschreibung: "Mit denen <br> ist nicht gut Kirschen essen."
   };

    const gesArtikel: Artikel[] = [wodka, havana, bacardi, asbach, cointreau, gin, jacky, jaeger, baileys, captain, sekt, fuerst,
       glas, shot, spender, shaker, jigger, loeffel, stoessel, ausgiesser, roehrle, sirup, grenadine, kirschen];
    const spritHTML: HTMLElement = document.getElementById("Spirituosen") as HTMLElement;
    const barHTML: HTMLElement = document.getElementById("Barzubehör") as HTMLElement;
    let zaehler: number = 0;
    let kosten: number = 0;
    
    
    //nur eine Schleife... RIP
    for (let i: number = 0; i < gesArtikel.length; i++) { 

       let div: HTMLDivElement = document.createElement("div");
       div.setAttribute("class", "produkt");

       let newname: HTMLParagraphElement = document.createElement("p");
       newname.innerHTML = gesArtikel[i].name;
       div.appendChild(newname);

       let img: HTMLImageElement = document.createElement("img");
       img.setAttribute("src", gesArtikel[i].bild);
       img.setAttribute("alt", name);
       div.appendChild(img);

       let price: HTMLParagraphElement = document.createElement("p");
       price.innerHTML = gesArtikel[i].preis.toString() + "€";
       price.setAttribute("class", "preis");
       div.appendChild(price);

       let description: HTMLParagraphElement = document.createElement("p");
       description.innerHTML = gesArtikel[i].beschreibung;
       description.setAttribute("class", "beschreibung");
       div.appendChild(description);

       let button: HTMLButtonElement = document.createElement("button");
       button.innerHTML = "In den Warenkorb";
       div.appendChild(button);
       button.addEventListener("click", handleKosten);
       button.addEventListener("click", handleZaehlen);
       


       function handleKosten (_event: Event): void {
        kosten = kosten + gesArtikel[i].preis;
        console.log("Gesamtkosten: " + kosten.toFixed(2)); }

       if (gesArtikel[i].kategorie == "sprit") 
         spritHTML.appendChild(div); 
         else
         barHTML.appendChild(div);
          }

    const alleKat: HTMLElement = document.getElementById("alles") as HTMLElement;
    const spritKat: HTMLElement = document.getElementById("sprit") as HTMLElement;
    const barKat: HTMLElement = document.getElementById("bar") as HTMLElement;
    const spritTitel: HTMLElement = document.getElementById("SpritTitel") as HTMLElement;
    const barTitel: HTMLElement = document.getElementById("BarTitel") as HTMLElement;

    barKat.addEventListener("click", handleSpritAusblenden);
    alleKat.addEventListener("click", handleAlleKat);
    spritKat.addEventListener("click", handleBarAusblenden);

    function handleSpritAusblenden(_event: Event): void {
      spritHTML.hidden = true;
      barHTML.hidden = false;
      barTitel.hidden = false;
      spritTitel.hidden = true;
    }

    function handleBarAusblenden (_event: Event): void {
      spritHTML.hidden = false;
      barHTML.hidden = true;
      barTitel.hidden = true;
      spritTitel.hidden = false;
    }

    function handleAlleKat (_event: Event): void {
      spritHTML.hidden = false;
      barHTML.hidden = false;
      barTitel.hidden = false;
      spritTitel.hidden = false;
    }

          
    function handleZaehlen(_event: Event): void {
      zaehler++;
      // tslint:disable-next-line: typedef
      let warenkorb = document.getElementById("Waren") as HTMLElement;
      warenkorb.style.opacity = "1";
      warenkorb.innerText = zaehler.toString();
         }


}
