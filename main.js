let password = "Ciekawe hasło";
password = password.toUpperCase();
let lenghtOfPassword = password.length;
let hidePassword = "";

for(i = 0; i < lenghtOfPassword; i++){
    if(password.charAt(i) == " ") hidePassword = hidePassword + " ";
    else hidePassword = hidePassword + "-";
}

function writePassword(){
    let board = document.querySelector("#board").innerHTML = hidePassword;
}

window.onload = generateAlphabet;
function generateAlphabet(){
    let divContent = "";
    for(i = 0; i <= 34; i++){
        divContent = divContent + "<div class=\"letter\">A<div>"
    }
    document.querySelector("#alphabet").innerHTML = divContent;
    writePassword();
}