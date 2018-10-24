// == eller ===
let x = "5";
let y = 5;

if (x == 5) { //true!Farligt!
    console.log(x + 2); //52
}

if (y === 5) { //true
    console.log(y + 2); //7
}

//Else if

let hour = new Date().getHours();

if (hour < 11) {
    greeting = "God morgon!";
} else if (hour < 20) {
    greeting = "God dag!";
} else {
    greeting = "God kväll!"
}
console.log(greeting);


//Ternary operatorn EX1
function getFee(isMember) {
    return (isMember ? "20kr" : "100kr");
}
console.log(getFee(true)); //20kr
console.log(getFee(false)); //100kr

//Ternary operatorn, ex2

function ternary2() {

    let age = prompt("Hur gammal är du?");
    let voteable = (age < 18) ? "Du får inte rösta!" : "Du får rösta";
    alert(voteable);
}

//logiska operatorer exempel
function promptAge() {
    let age = prompt("Hur gammal är du?");
    if (age == null || age == "")
        return;
    let voteable = (age < 18) ? "Du får inte rösta!" : "Ok. Du får rösta";
    alert(voteable)
}

//Truthy & falsy
if (false || 0 || null || undefined || '' || "" || NaN)
    console.log("Vi kommer aldrig hit!");
if ([] || {})
    console.log("En tom array eller ett tomt objekt!");
if ("0" || "false")
    console.log("Strängen 0 eller strängen false");

//Switch
function getDay() {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Söndag";
            break;
        case 1:
            day = "Måndag";
            break;
        case 2:
            day = "Tisdag";
            break;
        case 3:
            day = "Onsdag";
            break;
        case 4:
            day = "Torsdag";
            break;
        case 5:
            day = "Fredag";
            break;
        case 6:
            day = "Lördag";
            break;
    }
    return day;
}
console.log(`Det är ${getDay().toLowerCase()} idag!`);

//Switch ex 2
function switch2() {

    let personnummer = prompt("Personnumer(ååmmdd-xxxx)?");

    switch (personnummer.charAt(9)) {
        case "0":
        case "2":
        case "4":
        case "6":
        case "8":
            alert("Kvinna!");
            break;
        case "1":
        case "3":
        case "5":
        case "7":
        case "9":
            alert("Man!")
            break;
        default:
            alert("Felaktigt personnummer")
    }
}