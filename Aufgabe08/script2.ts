namespace Aufgabe08 {
let button: HTMLButtonElement = document.getElementById("button") as HTMLButtonElement;
button.addEventListener("click", handleCommunicate);

async function handleCommunicate(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gissose20.herokuapp.com/";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    let antwort: Response = await fetch(url);
    let antwortAusgabeURL: String = await antwort.url;
    let antwortAusgabeText: String = await antwort.text();
    console.log(antwortAusgabeURL + " " + antwortAusgabeText);


}




}