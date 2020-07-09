namespace Finalabgabe {

export function registrationValid(_userNameValue: string, _passwordValue: string, _notExisting: string, _error: string): void {

    if (_userNameValue != "" && _passwordValue != "" && _notExisting != "false") {
        location.href = "chatseite.html"; 
    }
    else {
        let errorHTML: HTMLElement = document.getElementById(_error) as HTMLDivElement;
        errorHTML.style.display = "inline-block";
    } 
}
}