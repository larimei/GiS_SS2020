namespace Finalabgabe {
if (localStorage.getItem("Username") == undefined) {
        location.href = "login.html";
    }

let studium: HTMLElement = document.getElementById("stchat") as HTMLElement;
studium.addEventListener("click", handleStChat);
let freizeit: HTMLElement = document.getElementById("fzchat") as HTMLElement;
freizeit.addEventListener("click", handleFzChat);

function handleStChat(): void {
    localStorage.setItem("Chat", "Studiumschat");
    location.href = "studiumschat.html";
}

function handleFzChat(): void {
    localStorage.setItem("Chat", "Freizeitschat");
    location.href = "studiumschat.html";
}

}