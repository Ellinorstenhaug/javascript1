//lektion6/functions.js
//Deklarera en funktion

//hej(); GÅR BRA

function hej() {
    alert("Hej från filen functions.js")
}

//hej2(); Får inte anropa anonyma funktioner före funktionsuttrycket! (Variabel ännu inte deklarerad!)
//Anonym funktion
let hej2 = function () { //OBS! Vi måste ha paranteser!
    alert("Hej från en anonym funktion");
}
//Detta kallas att skapa ett uttryck med hjälp av en funktion
//Function Expression

function meddelande() {
    console.log("Jag har anropats");
}
for (x = 0; x < 3; x++) {
    meddelande();
}

//EX 6

//En funktion med en parameter
function hello(message) {
    console.log(message);
}
//Anropa funktionen, data som skickas kallas argument, ("argument")
hello("YAS");
hello("Nummer 2");
hello(12345);
hello(true);
hello();
//Undefined löser vi med hjälp av en förvald parameter(default parameter)

console.log("---------------------");

//Skapa en funktion som beräknar summan av två tal
//Samma regler i parametrar som variabler, dvs inga siffror, -, . osv. 
function sum(x = 0, y = 0) {
    console.log(x + y);
}

let Ellinor = "test";
sum(7, 9);
sum(Ellinor);
sum(123, 456, 789);
sum(123); //Blir bara 123 eftersom y=0 i enlighet med definition ovan

console.log("---------------------");

//Skapa en funktion med två parametrar, förnamn och efternamn
//Funktionen visar meddelandet "Hej förnamn efternamn!" i console
function hello2(firstName, lastName) {
    console.log("hej " + firstName + " " + lastName + "!");
}
hello2("Ellinor", "Stenhaug");

console.log("----------------------")

//SKapa en funktion som multiplicerar två tal
function multiply(a, b) {
    console.log("******* Multiply *******");
    console.log(a * b);

}

multiply(10, 5); //50
multiply(); //NaN
multiply(10, "i"); //NaN
multiply(100); //NaN
//Hur undviker vi NaN? 
function multiply2(a = 0, b = 0) {
    console.log("******* Multiply2 *******");
    console.log(a * b);
}

multiply2(100); //0

function log(text) {
    console.log("******************");
    console.log(text);
}
log("Hej Ellinor");

function hello3(msg) {
    log(msg);
}

hello3("lite info och annat...");

//Funktion med tre parametrar
function age(firstName, lastName, age) {
    console.log(firstName + " är " + age + " år gammal!");
    log(`${firstName} är ${age} år gammal`)
}
age("Ellinor", "Stenhaug", 22);

//En funktion med ett godtyckligt antal parametrar
function manyThings(...things) { //skapar en array
    console.log("-*-*-*-*-*-*-*-*-*-*-");
    console.log(things);
}

manyThings(1);
manyThings(1, 2);
manyThings(1, 2, 3);
manyThings("Ellinor", "Kalle", "Erik");
manyThings("Ellinor", "Stenhaug", 22)

console.clear();

//Funktioner med return
function fullName_v1(firstName, lastName) {
    //Obs! Funktionen returnerar en sträng!
    //Enklare att förstå
    let name;
    name = firstName + " " + lastName;
    return name;
}

function fullName_v2(firstName, lastName) {
    //Snabbare men svårare att förstå
    return firstName + " " + lastName;
}

let name1 = fullName_v1("Ellinor", "Stenhaug");
console.log(name1)
console.log(fullName_v1("Kalle", "Anka")); //Samma som ovan men på en rad
let name2 = fullName_v2("Ellinor", "Stenhaug");

//IIFE - självanropande funktioner
(function () {
    console.log("Jag är en IIFE");
})();

var result = (function () {
    return "Ellinor";
})();
console.log(result); //Ellinor

(function msg() {
    console.log("jag är en IIFE2");
})();
 //denna returnerar stringen


let result2 = function () {
    return "Jag är en IIFE ---3";
}; //Denna returnerar hela funktionen

console.log(result2);


//Övning 1 - skapa en funktion som beräknar medeltalet av två tal
function findAverage1(x, y) {
    let average = (x + y) / 2;
    return(average);
}
console.log(findAverage1(10,20));

//Skapa en funktion som beräknar medelvärdet av tre tal.
function findAverage2(x, y, z) {
    let average = (x + y + z) / 3;
    return(average);
}
console.log(findAverage2(10, 20, 30));

// Skapa ett program som läser in ett namn via en prompt

// function readName() {
//     let name = prompt("Hej, vad heter du?", "here");
//     document.write = `Hej ${name}. Välkommen till vår webbshop!`;
// }
// readName();

//Alternativ
let name = prompt("Hallo, vad heter du?");
function tja(name) {
    let meddelande = '<h1>Välkommen till min sida, ' + name + '</h1>';
    return meddelande;
}
document.write(tja(name));

//Övning 3
let antalMinuter = prompt("Hur många minuter du ringer i genomsnitt per månad?");
let minutKostnad = prompt("Hur mycket kostar en minut i ditt abonnemang?");   
function kostnad() {
    return `Din uppskattade månadskostnad är ${antalMinuter * minutKostnad} kr`; 
}
alert(kostnad(antalMinuter, minutKostnad));

//Övning 4 - skriv ett program som läser in en varas pris, inkl. moms.
//Programmet ska också läsa in momssatsen som ska vara ett helt antal procent.
//Programmet ska beräkna dels varans pris exkl. moms och dels momsen.
//Resultaten ska visas i en dialogruta (alert). Tips! \n för radbrytning


//Alternativ:
function calculatePrice2() {
    let priceIn2 = prompt(`Hej! Vad kostar varan?`, ".. kr");
    let tax= prompt(`Vad är momsen i procent?`);
    let taxPercent = tax/100;
    let taxResult = priceIn2*taxPercent;
    let priceEx=priceIn2-taxResult;
    alert(`Varans pris är ${priceIn2}kr. \nVarans pris exklusive moms är:${priceEx}kr \nMomsen på varan är:${taxResult}kr`);
}
calculatePrice2();


