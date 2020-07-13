"use strict";
var Finalabgabe;
(function (Finalabgabe) {
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
    Finalabgabe.registrationValid = registrationValid;
})(Finalabgabe || (Finalabgabe = {}));
//# sourceMappingURL=client.js.map