namespace Aufgabe11 {
let buttonSenden: HTMLButtonElement = document.getElementById("buttonSenden") as HTMLButtonElement;
let buttonAuslesen: HTMLButtonElement = document.getElementById("buttonAuslesen") as HTMLButtonElement;

buttonSenden.addEventListener("click", handleCommunicateSenden);
buttonAuslesen.addEventListener("click", handleCommunicateAuslesen);

async function handleCommunicateSenden(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gissose20.herokuapp.com";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    await fetch(url + "/senden" + "?" + query.toString());

    console.log("Daten gesendet");
}

async function handleCommunicateAuslesen(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gissose20.herokuapp.com";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let antwort: Response = await fetch(url + "/auslesen" + "?" + query.toString());

    let antwortAusgabeText: string = await antwort.text();
    let antwortUrl: string = await antwort.url;

    let response: HTMLElement = document.getElementById("response") as HTMLDivElement;
    let p: HTMLElement = document.createElement("p");
    p.innerHTML = antwortAusgabeText;
    response.appendChild(p);

    console.log(antwortAusgabeText);
    console.log(antwortUrl);
}


}