//Arbeta med objektet number

let PI = 3.14159;
console.log(typeof PI);

//Avrunda
console.log(PI.toFixed(2)); //2 decimaler, 3.14
console.log(PI.toPrecision(2)); //Visar totalt 2 värdesiffror, 3.1

//Visa maxvärdet på ett nummer i js
console.log("----------MAX, MIN-----------");
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(-Number.MIN_VALUE);

console.log(Number.MAX_VALUE*2); //infinity

console.log("----------isNaN()----------");
let x;
console.log(x); //Undefined
x = x + 2; 
console.log(x); //NaN
console.log(Number.isNaN(x)); //true, finns också isInteger
 

