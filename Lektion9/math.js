//Arbeta med objektet math

PI = Math.PI;
console.log(PI);

// let π = Math.PI;//Funkar :)))) 
// console.log(π); 

let E = Math.E;
console.log(E);

console.log(Math.abs(-3)); //Absolutvärde
console.log(Math.pow(2,4)); //Power to, upphöjt till
console.log(Math.sqrt(25)); //Roten ur

//Avrunda
console.log(Math.round(1.2314345)); //Avrundar till närmsta heltal, 1

//Avrunda till närmaste heltal
let pris = 10.40;
console.log(Math.round(pris)); // 10
pris = 10.50;
console.log(Math.round(pris)); //11

console.log(Math.ceil(pris)); //11
console.log(Math.floor(pris)); //10

//Max och min
console.log(Math.max(1,2,4,7,8)); // 8
console.log(Math.min(1,2,3,7,8)); //1

//random
console.log(Math.random()); //mellan 0,1
console.log(Math.floor(Math.random() * 10)); //mellan 0-9 (floor)
console.log(Math.floor(Math.random() * 10 + 1)); //mellan 0-10 (floor)

