namespace Aufgabe07 {
    export interface Artikel {
        kategorie: string;
        name: string;
        bild: string;
        preis: number;
        beschreibung: string;
    }


    const spritHTML: HTMLElement = document.getElementById("Spirituosen") as HTMLElement;
    const barHTML: HTMLElement = document.getElementById("Barzubehör") as HTMLElement;
    let warenkorb: HTMLElement = document.getElementById("Waren") as HTMLElement;
    let zaehler: number = 0;
    if (localStorage.getItem("zaehler") != null) {
      zaehler = parseFloat(<string>localStorage.getItem("zaehler"));
      warenkorb.style.opacity = "1"; 
      warenkorb.innerText = zaehler.toString(); }
    
    let kosten: number = 0;
    export let gesArtikel: Artikel[] = [];

    communicate();
    
    
    export async function communicate(): Promise<void> {

      let response: Response = await fetch("artikel.json"); 
      gesArtikel = await response.json();
      artikelErstellen(); }

    function artikelErstellen(): void {

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
       button.setAttribute("Stelle", i.toString());
       div.appendChild(button);
       button.addEventListener("click", handleZaehlen);
       button.addEventListener("click", handleKaufen);
       


       function handleKaufen (_event: Event): void {
        kosten = kosten + gesArtikel[i].preis;
        console.log("Gesamtkosten: " + kosten.toFixed(2));
        localStorage.setItem(i.toString(), kosten.toString());
        localStorage.setItem("preis", kosten.toString());
     }

       if (gesArtikel[i].kategorie == "sprit") 
         spritHTML.appendChild(div); 
         else
         barHTML.appendChild(div);
          }
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
      warenkorb.style.opacity = "1";
      zaehler++;
      localStorage.setItem("zaehler", zaehler.toString());
      warenkorb.innerText = zaehler.toString();
         }


      }
      
  


