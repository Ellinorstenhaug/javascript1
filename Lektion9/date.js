//Objektet Date

//skapa en instans av objektet date
let today = new Date();
console.log(today);
console.log(today.getFullYear()); //2018
console.log(today.getMonth()); //9 = oktober
console.log(today.getDate()); //17
console.log(today.getDay()); //3 = onsdag, man börjar med söndag

console.log("Klockan");
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(today.toDateString());
console.log(today.toTimeString());


