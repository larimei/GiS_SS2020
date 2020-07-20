namespace Finalabgabe {
    
    let loginButton: HTMLElement = document.getElementById("login") as HTMLButtonElement;

    loginButton.addEventListener("click", handleLogin);

    async function handleLogin(): Promise<void> {
        let userNameValue: string = (<HTMLInputElement>document.getElementById("usernameLogin")).value;
        let passwordValue: string = (<HTMLInputElement>document.getElementById("passwordLogin")).value;
    
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url  + "/login" + "?" + query.toString());
        let notExisting: string = await response.text();
        console.log(notExisting);
    
    
        if (registrationValid(userNameValue, passwordValue, notExisting, "errorLogin")) {
            localStorage.setItem ("Username", userNameValue);
        }
    
    }

    //schaut ob richtige Anmededaten genommen wurde und Textfelder ausgefpüllt sind

    function registrationValid(_userNameValue: string, _passwordValue: string, _notExisting: string, _error: string): boolean {

        if (_userNameValue != "" && _passwordValue != "" && _notExisting != "false") {
            location.href = "chatseite.html"; 
            return true;
        }
        else {
            let errorHTML: HTMLElement = document.getElementById(_error) as HTMLDivElement;
            errorHTML.style.display = "inline-block";
            return false;
        } 

}
}