let password = "Miodowe lata";
password = password.toUpperCase();
let letterMarks = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ż","Ź"];
let lengthOfPassword = password.length;
let hidenPassword = "";
let numberOfWrongs = 0;

for(i = 0; i < lengthOfPassword; i++){
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
        divContent = divContent + '<div class ="letter" onclick ="checkLetter('+ i +')" id ="'+ element +'">'+ letterMarks[i] +'</div>'
    }
    document.querySelector("#letters").innerHTML = divContent;
    writePassword();
}

String.prototype.setMark = function(place, mark)
{
	if (place > this.length - 1) return this.toString();
	else return this.substr(0, place) + mark + this.substr(place+1);
}

function checkLetter(id) {
    let element = "ltr" + id;
    let guessed = false;
    for(i = 0; i < lengthOfPassword; i++){
        if(password.charAt(i) == letterMarks[id]){
            hidenPassword = hidenPassword.setMark(i,letterMarks[id])
            guessed = true;
        }
    }
    if(guessed == true){
        let complete = document.getElementById(element).style;
        complete.background = "#003300";
        complete.border = "2px solid #006600"
        complete.color = "green"
        complete.boxShadow = "none";
        writePassword();  
    }else{
        let wrong = document.getElementById(element).style;
        wrong.background = "#330000";
        wrong.border = "2px solid #660000"
        wrong.color = "#bb2211"
        wrong.boxShadow = "none";
        numberOfWrongs++;
        document.querySelector("#gallows").innerHTML = '<img src="images/s' + numberOfWrongs + '.jpg">';
    }
}