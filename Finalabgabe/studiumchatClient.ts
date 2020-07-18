namespace Finalabgabe {

    if (localStorage.getItem("Username") == undefined) {   //schaut ob man angemeldet ist
        location.href = "login.html";
    }

    interface WholeMessage {
          username: string;
          date: string;
          message: string;
    }

    let messageArray: WholeMessage[] = [];

    let objDiv: HTMLElement = document.getElementById("chatBox") as HTMLDivElement;

    let sendenButton: HTMLButtonElement = document.getElementById("studiumSenden") as HTMLButtonElement;
    sendenButton.addEventListener("click", handleSenden);

    let chat: string = "";
    let auslesen: string = "";

    if (localStorage.getItem("Chat") == "Studiumschat") {        //zeigt in welchem Chat die Daten gespeichert werden
       chat = "/studiumSenden";
       auslesen = "/studiumAuslesen"; 
    }
       else {
       chat = "/freizeitSenden";
       auslesen = "/freizeitAuslesen";
       }

    let userName: HTMLInputElement = document.getElementById("studiumUsername") as HTMLInputElement;
    let name: string = <string>localStorage.getItem("Username");

    let dateInput: HTMLInputElement = document.getElementById("date") as HTMLInputElement;

    let x: boolean = true;

    let parent: HTMLElement = document.createElement("div");

    let abmelden: HTMLElement = document.getElementById("abmelden") as HTMLElement;
    abmelden.addEventListener("click", function(): void {
        localStorage.clear();
        location.href = "login.html";
        });

    let fzChatDropDown: HTMLElement = document.getElementById("fzChatDropDown") as HTMLElement;
    fzChatDropDown.addEventListener("click", handleFzChat);
        
    let stChatDropDOwn: HTMLElement = document.getElementById("stChatDropDown") as HTMLElement;
    stChatDropDOwn.addEventListener("click", handleStChat);

    document.getElementById("smile")?.addEventListener("click", handleEmoji);    //Emojis
    document.getElementById("laugh")?.addEventListener("click", handleEmoji);
    document.getElementById("angel")?.addEventListener("click", handleEmoji);
    document.getElementById("blink")?.addEventListener("click", handleEmoji);
    document.getElementById("heart")?.addEventListener("click", handleEmoji);
    document.getElementById("sweet")?.addEventListener("click", handleEmoji);
    document.getElementById("kiss")?.addEventListener("click", handleEmoji);
    document.getElementById("funny")?.addEventListener("click", handleEmoji);
    document.getElementById("party")?.addEventListener("click", handleEmoji);
    document.getElementById("beer")?.addEventListener("click", handleEmoji);

    let text: HTMLInputElement = document.getElementById("studiumText") as HTMLInputElement;

    function handleEmoji(_event: Event): void {
        let emoji: HTMLElement = (<HTMLElement>_event.target);
        text.value += emoji.innerText;
   }

    function handleStChat(): void {
        localStorage.setItem("Chat", "Studiumschat");
        location.href = "studiumschat.html";
    }
    
    function handleFzChat(): void {
        localStorage.setItem("Chat", "Freizeitschat");
        location.href = "studiumschat.html";
    }

    
    setInterval(communicate, 1000);       //wird jede Sekunde aufgerufen -> dass neue Naxchrichten schnell geladen werden

    setTimeout(function(): void { 
        objDiv.scrollTop = 999999;
   }, 
               1100);

    async function handleSenden(): Promise<void> {
        userName.value = name;
        dateInput.value = new Date().toLocaleString();
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch(url + chat + "?" + query.toString());
    
        console.log("Daten gesendet");
        setTimeout(function(): void {
            objDiv.scrollTop = 999999;
       }, 
                   1010);
    }

    async function communicate(): Promise<void> {
        if (localStorage.getItem("Username") == undefined) {   //schaut ob man angemeldet ist
            location.href = "login.html";
        }    
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let antwort: Response = await fetch(url + auslesen + "?" + query.toString());
        messageArray = await antwort.json();

        retrieveData();
    }

    function retrieveData(): void {

        let leer: HTMLDivElement = document.createElement("div");

        if (x == true) { 
            objDiv.appendChild(parent);
            }
        else {
                parent.remove();                      //neue Interfaces können nun geladen werden
                parent = leer;
                objDiv.appendChild(parent);
                
            }

        for (let i: number = 0; i < messageArray.length; i++) {
            let div: HTMLDivElement = document.createElement("div");

            let pDate: HTMLParagraphElement = document.createElement("p");
            pDate.innerHTML = messageArray[i].date;

            if (messageArray[i].username == <string>localStorage.getItem("Username")) {           //findet raus, wer die angemeldete Person ist
            div.setAttribute("class", "eigenNachricht");
            pDate.setAttribute("class", "eigenDate");
         }
            else {
            div.setAttribute("class", "fremdNachricht");
            pDate.setAttribute("class", "fremdDate");
            }

            let pUsername: HTMLParagraphElement = document.createElement("p");
            pUsername.innerHTML = messageArray[i].username;
            pUsername.setAttribute("class", "bothName");
            div.appendChild(pUsername);

            div.appendChild(pDate);

            let pMessage: HTMLParagraphElement = document.createElement("p");
            pMessage.innerHTML = messageArray[i].message;
            pMessage.setAttribute("class", "bothMessage");
            div.appendChild(pMessage);


            parent.appendChild(div);
        }

        x = false;
    }
}