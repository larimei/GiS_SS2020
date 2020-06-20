"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let button = document.getElementById("button");
    button.addEventListener("click", handleCommunicate);
    async function handleCommunicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwortAusgabeURL = await antwort.url;
        let antwortAusgabeText = await antwort.text();
        console.log(antwortAusgabeURL + " " + antwortAusgabeText);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script2.js.map