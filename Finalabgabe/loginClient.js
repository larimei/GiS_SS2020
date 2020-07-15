"use strict";
var Finalabgabe;
(function (Finalabgabe) {
    let loginButton = document.getElementById("login");
    loginButton.addEventListener("click", handleLogin);
    async function handleLogin() {
        let userNameValue = document.getElementById("usernameLogin").value;
        let passwordValue = document.getElementById("passwordLogin").value;
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/login" + "?" + query.toString());
        let notExisting = await response.text();
        console.log(notExisting);
        if (registrationValid(userNameValue, passwordValue, notExisting, "errorLogin")) {
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
//# sourceMappingURL=loginClient.js.map