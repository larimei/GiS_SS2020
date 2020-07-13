namespace Finalabgabe {
    let registrierenButton: HTMLElement = document.getElementById("registrieren") as HTMLButtonElement;

    registrierenButton.addEventListener("click", handleRegistrate);

    async function handleRegistrate(): Promise<void> {
        let userNameValue: string = (<HTMLInputElement>document.getElementById("username")).value;
        let passwordValue: string = (<HTMLInputElement>document.getElementById("password")).value;
    
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose20.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url  + "/registration" + "?" + query.toString());
        let notExisting: string = await response.text();
    
    
        if (registrationValid(userNameValue, passwordValue, notExisting, "error")) {
            localStorage.setItem("Username", userNameValue);
        }   
    }




}