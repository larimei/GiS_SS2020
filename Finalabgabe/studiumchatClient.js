"use strict";
var Finalabgabe;
(function (Finalabgabe) {
    if (localStorage.getItem("Username") == undefined) {
        location.href = "login.html";
    }
    let messageArray = [];
    let objDiv = document.getElementById("chatBox");
    let sendenButton = document.getElementById("studiumSenden");
    sendenButton.addEventListener("click", handleSenden);
    let chat = "";
    let auslesen = "";
    if (localStorage.getItem("Chat") == "Studiumschat") {
        chat = "/studiumSenden";
        auslesen = "/studiumAuslesen";
    }
    else {
        chat = "/freizeitSenden";
        auslesen = "/freizeitAuslesen";
    }
    console.log(localStorage.getItem("Chat"));
    let userName = document.getElementById("studiumUsername");
    let name = localStorage.getItem("Username");
    let x = true;
    let parent = document.createElement("div");
    let abmelden = document.getElementById("abmelden");
    abmelden.addEventListener("click", function () {
        localStorage.clear();
        location.href = "login.html";
    });
    let fzChatDropDown = document.getElementById("fzChatDropDown");
    fzChatDropDown.addEventListener("click", handleFzChat);
    let stChatDropDOwn = document.getElementById("stChatDropDown");
    stChatDropDOwn.addEventListener("click", handleStChat);
    document.getElementById("smile")?.addEventListener("click", handleEmoji);
    document.getElementById("laugh")?.addEventListener("click", handleEmoji);
    document.getElementById("angel")?.addEventListener("click", handleEmoji);
    document.getElementById("blink")?.addEventListener("click", handleEmoji);
    document.getElementById("heart")?.addEventListener("click", handleEmoji);
    document.getElementById("sweet")?.addEventListener("click", handleEmoji);
    document.getElementById("kiss")?.addEventListener("click", handleEmoji);
    document.getElementById("funny")?.addEventListener("click", handleEmoji);
    document.getElementById("party")?.addEventListener("click", handleEmoji);
    document.getElementById("beer")?.addEventListener("click", handleEmoji);
    let text = document.getElementById("studiumText");
    function handleEmoji(_event) {
        let emoji = _event.target;
        text.value += emoji.innerText;
    }
    function handleStChat() {
        localStorage.setItem("Chat", "Studiumschat");
        location.href = "studiumschat.html";
    }
    function handleFzChat() {
        localStorage.setItem("Chat", "Freizeitschat");
        location.href = "studiumschat.html";
    }
    setInterval(communicate, 1000);
    async function handleSenden() {
        userName.value = name;
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        await fetch(url + chat + "?" + query.toString());
        console.log("Daten gesendet");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    async function communicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let antwort = await fetch(url + auslesen + "?" + query.toString());
        messageArray = await antwort.json();
        retrieveData();
    }
    function retrieveData() {
        let leer = document.createElement("div");
        if (x == true) {
            objDiv.appendChild(parent);
        }
        else {
            parent.remove();
            parent = leer;
            objDiv.appendChild(parent);
        }
        console.log(messageArray);
        for (let i = 0; i < messageArray.length; i++) {
            let div = document.createElement("div");
            if (messageArray[i].username == localStorage.getItem("Username"))
                div.setAttribute("class", "eigenNachricht");
            else
                div.setAttribute("class", "fremdNachricht");
            let pUsername = document.createElement("p");
            pUsername.innerHTML = messageArray[i].username;
            pUsername.setAttribute("class", "bothName");
            div.appendChild(pUsername);
            let pMessage = document.createElement("p");
            pMessage.innerHTML = messageArray[i].message;
            pMessage.setAttribute("class", "bothMessage");
            div.appendChild(pMessage);
            parent.appendChild(div);
        }
        x = false;
    }
})(Finalabgabe || (Finalabgabe = {}));
//# sourceMappingURL=studiumchatClient.js.map