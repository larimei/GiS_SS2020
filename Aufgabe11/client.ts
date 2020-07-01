namespace Aufgabe11 {
let buttonHTML: HTMLButtonElement = document.getElementById("buttonHTML") as HTMLButtonElement;

buttonHTML.addEventListener("click", handleCommunicateHTML);

async function handleCommunicateHTML(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gissose20.herokuapp.com/";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let antwort: Response = await fetch(url + "html" + "?" + query.toString());

    let antwortAusgabeURL: string = await antwort.url;
    let antwortAusgabeText: string = await antwort.text();

    let response: HTMLElement = document.getElementById("Response") as HTMLDivElement;
    let p: HTMLElement = document.createElement("p");
    p.innerHTML = antwortAusgabeText;
    response.appendChild(p);
    console.log(antwortAusgabeURL);
}


}