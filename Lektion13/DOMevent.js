//Standard DOM event
let elUser = document.getElementById('username');
let elPass = document.getElementById('password');
let elmsgUser = document.getElementById('feedbackUser')
let elmsgPass = document.getElementById('feedbackPass')

elUser.oninput = checkUsername; //Inga paranteser annars exekveras funktionen
elPass.oninput = checkPassword; //Inga paranteser annars exekveras funktionen

//Ändra style
elmsgUser.style.color = "red";
elmsgPass.style.color = "red";

function checkUsername() {
    let elMsg = document.getElementById("feedbackUser");
    if (elUser.value.length < 5) {
        elMsg.innerHTML = "Username must be 5 characters or more!";
    } else elMsg.innerHTML = "";
    // elMsg.textContent = (elUser.value.length < 5) ? "Username must be 5 characters or more!" : "";
}
function checkPassword() {
    let elMsg = document.getElementById("feedbackPass")
    // if(elPass.value.length < 8) {
    //     elMsg.innerHTML = "Password must contain at least 8 characters" ;
    // }else elMsg.innerHTML="";
    elMsg.innerHTML = (elPass.value.length<8) ? "Password must contain at least 8 characters" : "";
}

//EX 2
//Hämta nödvändiga element
let elPrice1 = document.getElementById('price1');
let elPrice2 = document.getElementById('price2');
let btnPrice = document.getElementById('btnPrice');
//Koppla event till knappen
btnPrice.onclick = getPrice;

//Skapa funktion
function getPrice() {
    elPrice2.innerHTML = `Resultat: ${elPrice1.value * 1.25}kr`;
}

//EX 3
//Hämta en referens till knappen
let btnDate = document.getElementById("btnDate");

//Koppla event med standard DOM event
// btnDate.onclick = displayDate;

//Koppla en eventListener
btnDate.addEventListener('click', displayDate);
btnDate.addEventListener('mouseover', displayDate);
btnDate.addEventListener('mouseover', displayTime);

function displayDate(){
    document.getElementById("date").innerHTML = new Date().toLocaleDateString();
}
function displayTime(){
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
}