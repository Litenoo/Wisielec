let password = "Ciekawe hasło";
password = password.toUpperCase();
let letterMarks = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ż","Ź"];
let lenghtOfPassword = password.length;
let hidenPassword = "";

for(i = 0; i < lenghtOfPassword; i++){
    if(password.charAt(i) == " ") hidenPassword = hidenPassword + " ";
    else hidenPassword = hidenPassword + "-";
}

function writePassword(){
    document.querySelector("#board").innerHTML = hidenPassword;
}

window.onload = generateAlphabet;
function generateAlphabet(){
    let divContent = "";
    for(i = 0; i <= letterMarks.length - 1; i++){
        let element = "ltr" + i;
        divContent = divContent + '<div class ="letter" onclick ="checkLetter('+i+')" id ="'+ element +'">'+ letterMarks[i] +'</div>'
    }
    document.querySelector("#letters").innerHTML = divContent;
    writePassword();
}

String.prototype.setMark = function(place, mark){
    if(place > this.lenght -1) return this.toString();
    else return this.substring(0,place) + mark + this.substring(place + 1)
}

function checkLetter(id) {
    for(i = 0; i < lenghtOfPassword; i++){
        if(password.charAt(i) == letterMarks[id]){
            hidenPassword = hidenPassword.setMark(i,letterMarks[id]);
        }
    }
}