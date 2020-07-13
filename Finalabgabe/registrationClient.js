"use strict";
var Finalabgabe;
(function (Finalabgabe) {
    let registrierenButton = document.getElementById("registrieren");
    registrierenButton.addEventListener("click", handleRegistrate);
    async function handleRegistrate() {
        let userNameValue = document.getElementById("username").value;
        let passwordValue = document.getElementById("password").value;
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/registration" + "?" + query.toString());
        let notExisting = await response.text();
        if (Finalabgabe.registrationValid(userNameValue, passwordValue, notExisting, "error")) {
            localStorage.setItem("Username", userNameValue);
        }
    }
})(Finalabgabe || (Finalabgabe = {}));
//# sourceMappingURL=registrationClient.js.map