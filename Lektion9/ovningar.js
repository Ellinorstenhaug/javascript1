console.log("------------ÖVNING 1-------------------------------------");
//Skapa en funktion som har en parameter. 
//Funktionsnamnet: capitalize
//Funktionen ska ta en sträng och ändra den första bokstaven till versal.
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.substring(1);
}
console.log(capitalize("hej"));

//Alternativ
function capitalize2(input) {
    let firstChar = input[0];
    let resten = input.slice(1); //Eller substring
    return firstChar.toUpperCase() + resten;
}
console.log(capitalize2("hej"));

console.log("------------ÖVNING 2------------------------------------");
//Övning 2 
//Skapa en funktion med en parameter, namnet är maxArray. 
//Funktionen ska ta en array av ett godtyckligt antal tal. 
//Funktionen ska returnera det största talet i arrayen. 

let arrayen = [4, 6, 78, 9, 6, 32];

function maxArray(arrayen) {
    return Math.max(...arrayen);
}
console.log(maxArray(arrayen)); //78

console.log("------------ÖVNING 3------------------------------------");
//Övning 3
//Visa aktuellt datum i detta format YYYY-MM-DD t.ex.2018-10-12

let today = new Date;
console.log(`${today.getFullYear()}-${today.getMonth() +1}-${today.getDate()}`);

console.log("------------ÖVNING 4------------------------------------");
//ÖVNING 4
//Visa klockan i detta format HH:MM:SS t.ex. 14:05:10
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);

console.log("------------ÖVNING 5------------------------------------");
//Visa datum i detta format Dag den xx månad år t.ex. Onsdag den 17 oktober 2018 
//Tips: Använd arrayer för att lagra veckodagar och månader.

let D = new Date;
let months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
let days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

let månad = months[D.getMonth()];
let dag = days[D.getDay()];
console.log(`${dag}en den ${D.getDate()} ${månad} ${D.getFullYear()}`)

console.log("------------ÖVNING 6------------------------------------");
//Skapa en live digital klocka och visa den i webbläsaren!

console.log("Funkar endast i läsare");
// function update(time) {
//     let t = new Date();
//     return `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
// }
// setInterval(update, 1000);
// document.getElementById('clock').innerHTML = update();



console.log("------------ÖVNING 7------------------------------------");
//• Avståndsformeln kan användas för att beräkna avståndet mellan två punkter i ett koordinatsystem.
//• Skriv ett program som läser in två punkter och beräknar avståndet mellan punkterna

let p1 = [4, 20];
let p2 = [8, 23];

function distanceFormula(p1, p2) {
    let distance = Math.sqrt(Math.pow((p2[0] - p1[0]), 2) + Math.pow((p2[1] - p1[1]), 2));
    return distance.toFixed(2);
}
console.log(distanceFormula(p1, p2));

