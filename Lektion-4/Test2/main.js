// Arbeta med primitiva typer (datatyper)

//1. String
let firstName = "Ellinor";
let lastName = 'Stenhaug' //notera att både "" och '' funkar
console.log(firstName, lastName);
console.log(`Kämpar på`);

//2. numbers
let age = 22;
const PI = 3.14159;
let price = 5.5;
let quantity = 10;
let total = price * quantity;
console.log(total);

//Boolean, true eller false
let again = false;
if (again) {
    console.log("Detta kommer inte visas")
}
again = true;
if (again) {
    console.log("Inne again i if-satsen!");
}

// 4. Undefined (OBS! detta är en typ i JS)
let name; //Deklarerad variable
console.log(name); //kommer ge undefined

//console.log(mobile); //ok eftersom mobile har deklarerats med var
var mobile;
mobile = "012-2344567";

//console.log(adress); // Ger referenceError
let adress;
adress = "Tomtebodavägen 3";

//5. null
let nothing = "something";
nothing = "";
console.log(nothing);
nothing = null;
console.log(nothing);

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof again);
console.log(typeof firstName);
console.log(typeof nothing);




