namespace Finalabgabe {

export function registrationValid(_userNameValue: string, _passwordValue: string, _notExisting: string, _error: string): boolean {

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