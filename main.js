let password = "Ciekawe hasło";
let letterMarks = new Array(35);
letterMarks = ["A"]

password = password.toUpperCase();
let lenghtOfPassword = password.length;
let hidenPassword = "";

for(i = 0; i < lenghtOfPassword; i++){
    if(password.charAt(i) == " ") hidenPassword = hidenPassword + " ";
    else hidenPassword = hidenPassword + "-";
}

function writePassword(){
    let board = document.querySelector("#board").innerHTML = hidenPassword;
}

window.onload = generateAlphabet;
function generateAlphabet(){
    let divContent = "";
    for(i = 0; i <= 34; i++){
        divContent = divContent + '<div class="letter">A</div>'
        // <div class="letter"><div> + <div class="letter"><div> = <div class="letter"><div><div class="letter"><div>
    }
    document.querySelector("#letters").innerHTML = divContent;
    writePassword();
}