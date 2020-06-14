namespace Aufgabe07 {

    const warenHTML: HTMLElement = document.getElementById("MeineWaren") as HTMLElement;
    let warenchild: HTMLElement = document.createElement("div");
    warenHTML.appendChild(warenchild);
    const preisHTML: HTMLElement = document.getElementById("Gesamt") as HTMLDivElement;
    let preisText: HTMLElement = document.createElement("p") as HTMLParagraphElement;
    let allEntfernen: HTMLElement = document.createElement("button") as HTMLButtonElement;
    let gesamtPreis: number = parseFloat(<string>localStorage.getItem("preis"));

    gesamtPreisSetzen();
    communicate();

    async function communicate(): Promise<void> {

        let response: Response = await fetch("artikel.json"); 
        gesArtikel = await response.json();
        warenkorbFuellen(); }

    function warenkorbFuellen(): void {

        for (let i: number = 0; i < gesArtikel.length; i++) {
          if (localStorage.getItem(i.toString()) != null) {
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
            button.innerHTML = "Entfernen";
            button.addEventListener("click", entfernen);
            div.appendChild(button);

            function entfernen(_event: Event): void {
              let zaehler: number = parseFloat(<string>localStorage.getItem("zaehler"));
              zaehler = zaehler - 1;
              localStorage.setItem("zaehler", zaehler.toString());
              let neuPreis: number = gesamtPreis - gesArtikel[i].preis;
              neuPreis.toFixed(2);
              localStorage.setItem("preis", neuPreis.toString());
              gesamtPreis = parseFloat(<string>localStorage.getItem("preis"));
              gesamtPreis.toFixed(2);
              gesamtPreisSetzen();
              warenHTML.removeChild(warenchild);
              let leer: HTMLElement = document.createElement("div") as HTMLDivElement;
              warenchild = leer;
              warenHTML.appendChild(warenchild);
              localStorage.removeItem(i.toString());
              warenkorbFuellen();
                      }
  
            warenchild.appendChild(div); }
          }
        }

    function gesamtPreisSetzen(): void {
    if (localStorage.getItem("preis") != null) {
      preisText.innerText = "Ihre Waren kosten " + gesamtPreis + " €";
      preisText.setAttribute("id", "preistext");
      preisHTML.appendChild(preisText);
      allEntfernen.innerHTML = "Alles Löschen";
      preisHTML.appendChild(allEntfernen);
      allEntfernen.addEventListener("click", allesEntfernen); }
    else {
       preisHTML.removeChild(allEntfernen);
       preisHTML.innerText = "Ihr Warenkorb ist leer";
   }
  }


    function allesEntfernen(): void {
        localStorage.clear();
        warenHTML.removeChild(warenchild);
        gesamtPreisSetzen();

          }

  




}