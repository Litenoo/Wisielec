let password = "Ciekawe hasło";
let letterMarks = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I",
"J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś",
"T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];

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
        divContent = divContent + '<div class="letter">'+ letterMarks[i] +'</div>'
        // <div class="letter"><div> + <div class="letter"><div> = <div class="letter"><div><div class="letter"><div>
    }
    document.querySelector("#letters").innerHTML = divContent;
    writePassword();
}