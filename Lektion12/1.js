let H = document.getElementById("one");
console.log(H); //OBS CASE SENSITIVE!
//Vi får en referens till hela elementet

H = document.getElementById("FEL");
console.log(H); //Om elementet saknas (felaktigt id) returneras null

if (H == null) {
    console.log("Elementet saknas");
} else {
    console.log("Det finns ett element med id='FEL'");
}

//ändra innehåll
let p = document.getElementById("demo");
p.innerText = "Hello DOM"; // Uppdaterar texten
//Ändra html
p.innerHTML = "<b>Lite fet text</b>";

//ÖVning 1 
let h = document.getElementById("h");
// let text = h.innerHTML; //STRING ÄR IMMUTABLE!! 
// text = text.toUpperCase();
// h.innerHTML = text;
h.innerHTML = h.innerHTML.toUpperCase();

//Övning 2 ändra CSS med DOM
let ett = document.getElementById("ett");
ett.style.color = "teal";
ett.style.fontSize = "4em";
ett.style.textTransform = "uppercase";
// ett.style.display = "none";

//Ändra CSS med egenskapen body
document.body.style.backgroundColor = "#e6e6e6";
//Vad är body? 
console.log(document.body); //Ger hela body-elementet

//ÖVNING 4
//Hämta alla p element
let P = document.getElementsByTagName("p");
console.log(P);

//Skriv ut innehållet av alla p i console
for (let i = 0; i < P.length; i++) {
    console.log(P[i].innerHTML);
    // P[i].style.color = "teal"; //SÄMSTA SÄTTET 
    P[i].className = "cool";
}

//Övning 5 lägg till class på första rubriken
document.getElementsByTagName("h1")[0].className = "nice";

//Lägg till class på sista rubriken
let allH1 = document.getElementsByTagName("h1");
allH1[allH1.length - 1].className = "nice";

//ÖVNING 6
let h1 = document.querySelector("#first"); //Notera #!!! 
h1.style.color = "red";

let allh1 = document.querySelectorAll("h1");
console.log(allh1); //ger nodelist 

//vi får iterera över en nodelist
for (let i = 0; i < allh1.length; i++) {
    console.log(allh1[i]);    
}


function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.substring(1);
}



