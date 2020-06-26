"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let buttonHTML = document.getElementById("buttonHTML");
    let buttonJSON = document.getElementById("buttonJSON");
    buttonHTML.addEventListener("click", handleCommunicateHTML);
    buttonJSON.addEventListener("click", handleCommunicateJSON);
    async function handleCommunicateHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let antwort = await fetch(url + "html" + "?" + query.toString() + "#html");
        let antwortAusgabeURL = await antwort.url;
        let antwortAusgabeText = await antwort.text();
        let response = document.getElementById("Response");
        let p = document.createElement("p");
        p.innerHTML = antwortAusgabeText;
        response.appendChild(p);
        console.log(antwortAusgabeURL);
    }
    async function handleCommunicateJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let antwort = await fetch(url + "json" + "?" + query.toString());
        // let antwortAusgabeURL: string = await antwort.url;
        let antwortAusgabeText = await antwort.text();
        let obj = JSON.parse(antwortAusgabeText);
        console.log(obj);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=client.js.map