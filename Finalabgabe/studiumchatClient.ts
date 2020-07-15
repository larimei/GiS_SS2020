namespace Finalabgabe {

    if (localStorage.getItem("Username") == undefined) {
        location.href = "login.html";
    }

    interface WholeMessage {
          username: string;
          message: string;
    }

    let messageArray: WholeMessage[] = [];

    let objDiv: HTMLElement = document.getElementById("chatBox") as HTMLDivElement;

    let sendenButton: HTMLButtonElement = document.getElementById("studiumSenden") as HTMLButtonElement;
    sendenButton.addEventListener("click", handleSenden);

    let chat: string = "";
    let auslesen: string = "";

    if (localStorage.getItem("Chat") == "Studiumschat") {
       chat = "/studiumSenden";
       auslesen = "/studiumAuslesen"; 
    }
       else {
       chat = "/freizeitSenden";
       auslesen = "/freizeitAuslesen";
       }

    console.log(localStorage.getItem("Chat"));

    let userName: HTMLInputElement = document.getElementById("studiumUsername") as HTMLInputElement;
    let name: string = <string>localStorage.getItem("Username");

    let x: boolean = true;

    let parent: HTMLElement = document.createElement("div");

    let abmelden: HTMLElement = document.getElementById("abmelden") as HTMLElement;
    abmelden.addEventListener("click", function(): void {
        localStorage.clear();
        });

    
    setInterval(communicate, 1000);

    async function handleSenden(): Promise<void> {
        userName.value = name;
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch(url + chat + "?" + query.toString());
    
        console.log("Daten gesendet");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    async function communicate(): Promise<void> {
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
                parent.remove();
                parent = leer;
                objDiv.appendChild(parent);
                
            }

        console.log(messageArray);

        for (let i: number = 0; i < messageArray.length; i++) {
            let div: HTMLDivElement = document.createElement("div");

            if (messageArray[i].username == <string>localStorage.getItem("Username"))
            div.setAttribute("class", "eigenNachricht");
            else
            div.setAttribute("class", "fremdNachricht");

            let pUsername: HTMLParagraphElement = document.createElement("p");
            pUsername.innerHTML = messageArray[i].username;
            pUsername.setAttribute("class", "bothName");
            div.appendChild(pUsername);

            let pMessage: HTMLParagraphElement = document.createElement("p");
            pMessage.innerHTML = messageArray[i].message;
            pMessage.setAttribute("class", "bothMessage");
            div.appendChild(pMessage);

            parent.appendChild(div);
        }

        x = false;
    }
}