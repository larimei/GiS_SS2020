"use strict";
var Finalabgabe;
(function (Finalabgabe) {
    let loginButton = document.getElementById("login");
    loginButton.addEventListener("click", handleLogin);
    async function handleLogin() {
        let userNameValue = document.getElementById("usernameLogin").value;
        let passwordValue = document.getElementById("passwordLogin").value;
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/login" + "?" + query.toString());
        let notExisting = await response.text();
        console.log(notExisting);
        if (Finalabgabe.registrationValid(userNameValue, passwordValue, notExisting, "errorLogin")) {
            localStorage.setItem("Username", userNameValue);
        }
    }
})(Finalabgabe || (Finalabgabe = {}));
//# sourceMappingURL=loginClient.js.map