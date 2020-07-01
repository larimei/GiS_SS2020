"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", handleCommunicateHTML);
    async function handleCommunicateHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let antwort = await fetch(url + "html" + "?" + query.toString());
        let antwortAusgabeURL = await antwort.url;
        let antwortAusgabeText = await antwort.text();
        let response = document.getElementById("Response");
        let p = document.createElement("p");
        p.innerHTML = antwortAusgabeText;
        response.appendChild(p);
        console.log(antwortAusgabeURL);
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=client.js.map