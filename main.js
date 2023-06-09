let possiblePasswords = ["Miodowe lata", "Ranczo", "Kevin sam w domu","Sponge Bob","Jaś Fasola","Przyjaciele","Park Jurajski","Kot w butach","Jak wytresowac smoka","Chłopaki z baraków","The Office"];
let password = possiblePasswords[Math.floor(Math.random() * 11)];
console.log(password);
password = password.toUpperCase();
let letterMarks = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ż","Ź"];
let lengthOfPassword = password.length;
let hidenPassword = "";
let numberOfWrongs = 0;
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");

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

String.prototype.setMark = function(place, mark){
	if (place > this.length - 1) return this.toString();
	else return this.substring(0, place) + mark + this.substring(place+1);
};

images = [];

for (n = 0; n < 10; n++) {
    image = new Image();
    image.src = 'images/s' + n + '.jpg';
    images[n] = image;
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
        yes.play();
        let complete = document.getElementById(element).style;
        complete.background = "#003300";
        complete.border = "2px solid #006600"
        complete.color = "green"
        complete.boxShadow = "none";
        complete.cursor = "default";
        writePassword();
    }else{
        no.play();
        let wrong = document.getElementById(element).style;
        wrong.background = "#330000";
        wrong.border = "2px solid #660000"
        wrong.color = "#bb2211"
        wrong.cursor = "default";
        wrong.boxShadow = "none";
        document.getElementById(element).setAttribute("onclick",";");

        numberOfWrongs++;
        document.querySelector("#gallows").innerHTML = "";
        document.querySelector("#gallows").appendChild(images[numberOfWrongs]);
    }
    if(password == hidenPassword){
        document.querySelector("#alphabet").innerHTML = '<h2>Wygrałeś</h2> <br> Gratulacje, odgadnąłeś hasło ! <br><br> <span id="again" onclick="location.reload()"> Kliknij, aby zagrać jeszcze raz ! </span>';
        document.querySelector("#alphabet").style.display = "block";
        document.querySelector("#alphabet").style.textAlign = "center";
    }
    if(numberOfWrongs >= 9){
        document.querySelector("#alphabet").innerHTML = '<h2>Przegrałeś</h2> <br> Hasło brzmi:'+ password +' <br><br> <span id="retry" onclick="location.reload()"> Kliknij, aby spróbować jeszcze raz. </span>';
        document.querySelector("#alphabet").style.display = "block";
        document.querySelector("#alphabet").style.textAlign = "center";
    }
}