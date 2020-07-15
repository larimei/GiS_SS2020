"use strict";
var Finalabgabe;
(function (Finalabgabe) {
    if (localStorage.getItem("Username") == undefined) {
        location.href = "login.html";
    }
    let studium = document.getElementById("stchat");
    studium.addEventListener("click", handleStChat);
    let freizeit = document.getElementById("fzchat");
    freizeit.addEventListener("click", handleFzChat);
    function handleStChat() {
        localStorage.setItem("Chat", "Studiumschat");
        location.href = "studiumschat.html";
    }
    function handleFzChat() {
        localStorage.setItem("Chat", "Freizeitschat");
        location.href = "studiumschat.html";
    }
})(Finalabgabe || (Finalabgabe = {}));
//# sourceMappingURL=client.js.map