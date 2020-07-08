"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonSenden = document.getElementById("buttonSenden");
    let buttonAuslesen = document.getElementById("buttonAuslesen");
    buttonSenden.addEventListener("click", handleCommunicateSenden);
    buttonAuslesen.addEventListener("click", handleCommunicateAuslesen);
    async function handleCommunicateSenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        await fetch(url + "/senden" + "?" + query.toString());
        console.log("Daten gesendet");
    }
    async function handleCommunicateAuslesen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let antwort = await fetch(url + "/auslesen" + "?" + query.toString());
        let antwortAusgabeText = await antwort.text();
        let antwortUrl = await antwort.url;
        let response = document.getElementById("response");
        let p = document.createElement("p");
        p.innerHTML = antwortAusgabeText;
        response.appendChild(p);
        console.log(antwortAusgabeText);
        console.log(antwortUrl);
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=client.js.map