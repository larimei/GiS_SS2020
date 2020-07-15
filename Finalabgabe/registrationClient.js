"use strict";
var Finalabgabe;
(function (Finalabgabe) {
    let registrierenButton = document.getElementById("registrieren");
    registrierenButton.addEventListener("click", handleRegistrate);
    async function handleRegistrate() {
        let userNameValue = document.getElementById("username").value;
        let passwordValue = document.getElementById("password").value;
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/registration" + "?" + query.toString());
        let notExisting = await response.text();
        if (registrationValid(userNameValue, passwordValue, notExisting, "error")) {
            localStorage.setItem("Username", userNameValue);
        }
    }
    function registrationValid(_userNameValue, _passwordValue, _notExisting, _error) {
        if (_userNameValue != "" && _passwordValue != "" && _notExisting != "false") {
            location.href = "chatseite.html";
            return true;
        }
        else {
            let errorHTML = document.getElementById(_error);
            errorHTML.style.display = "inline-block";
            return false;
        }
    }
})(Finalabgabe || (Finalabgabe = {}));
//# sourceMappingURL=registrationClient.js.map