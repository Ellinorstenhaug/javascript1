//Scope (räckvidd)

console.log("-------- Lokala varialber ----------");

//lokala varialber
{
    let x = 10;
    console.log(x);
}
// console.log(x); GER REFERENCEERROR

{
    var x = 10;
    console.log(x);
}
console.log(x);

console.log("...............................");


//Variabler inne i funtkioner är alltid lokala
function demo() {
    var local_1 = 1;
    var local_2 = 2;
    console.log(local_1);
    console.log(local_2);
}
demo();

//Att skriva ut lokala variabler utanför funktionen => ERROR
// console.log(local_1); //ReferenceError: local_1 is not defined
// console.log(local_2); //ReferenceError: local_2 is not defined

//Globala variabler (The global scope)
console.clear();
console.log("-------- Globala varialber ----------");

var global_1 = 10;
let global_2 = 20;
console.log(global_1);
console.log(global_2);

console.log("-------- Global och lokal varialber ----------");
let z = 1; //En global variabel
function demo() {
    let z = 2; //OBS! en ny lokal variabel
    console.log(z); //Skriver ut den lokala variabeln, 2
}
demo();
console.log(z); //Skriver ut global variabel, 1

var global_3 = "En global variabel";
function demo2() {
    let local_3 = "En lokal variabel";
    local_4
    console.log(local_3);
} 
demo2();
// console.log(local_3); //referenceError
console.log(local_4); //OBS! om du glömt skriva var eller let blir det automatiskt en global variabel



