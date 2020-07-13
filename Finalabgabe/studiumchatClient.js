"use strict";
var Finalabgabe;
(function (Finalabgabe) {
    if (localStorage.getItem("Username") == undefined) {
        location.href = "login.html";
    }
    let messageArray = [];
    let objDiv = document.getElementById("chatBox");
    objDiv.scrollTop = objDiv.scrollHeight;
    let userName = document.getElementById("studiumUsername");
    userName.value = localStorage.getItem("Username");
    let sendenButton = document.getElementById("studiumSenden");
    sendenButton.addEventListener("click", handleSenden);
    let x = true;
    let parent = document.createElement("div");
    let abmelden = document.getElementById("abmelden");
    abmelden.addEventListener("click", function () {
        localStorage.clear();
    });
    setInterval(communicate, 1000);
    async function handleSenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        await fetch(url + "/studiumSenden" + "?" + query.toString());
        console.log("Daten gesendet");
    }
    async function communicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let antwort = await fetch(url + "/studiumAuslesen" + "?" + query.toString());
        messageArray = await antwort.json();
        retrieveData();
    }
    function retrieveData() {
        let leer = document.createElement("div");
        if (x == true) {
            objDiv.appendChild(parent);
            console.log("true");
        }
        else {
            //objDiv.removeChild(parent);
            parent.remove();
            parent = leer;
            objDiv.appendChild(parent);
            console.log("jep ist in false");
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