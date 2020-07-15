namespace Finalabgabe {
if (localStorage.getItem("Username") == undefined) {
        location.href = "login.html";
    }

let abmelden: HTMLElement = document.getElementById("abmelden") as HTMLElement;
abmelden.addEventListener("click", function(): void {
        localStorage.clear();
        location.href = "login.html";
        });
    
let fzChatDropDown: HTMLElement = document.getElementById("fzChatDropDown") as HTMLElement;
fzChatDropDown.addEventListener("click", handleFzChat);

let stChatDropDOwn: HTMLElement = document.getElementById("stChatDropDown") as HTMLElement;
stChatDropDOwn.addEventListener("click", handleStChat);

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