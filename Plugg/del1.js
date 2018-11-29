/*Skapa en array som innehåller en lista över dina favoritböcker.
Skriv ut den första boken, sista, alla i sorterad ordning, antal. */
let books = ["Oryx and Crake", "HTML", "1984", "Hjärnstark"];
console.log(books[0]);
console.log(books[books.length - 1]);
console.log(books.sort());
console.log(books.length);

/*Skapa en funktion som heter hello. Funktionen visar meddelandet ”Hello World” i konsolfönstret.
Anropa funktionen 5 gånger.*/
function hello(params) {
    console.log("Hello World");
}

for (let i = 0; i < 5; i++) {
    hello();
}

/*Skapa en funktion som beräknar summan av tre tal */
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(10, 20, 30));

/*Skapa ett program som läser in ett namn via en prompt. Skicka namnet till en funktion som returnerar följande hälsningsfras. ”Hello namn!”. Visa meddelandet på webbsidan.(ej alert eller console). */

let name = document.getElementById("name");
name.addEventListener("click", u1);

function u1() {
    let na = document.getElementById("input1").value;
    document.getElementById("result").innerHTML = `Hello ${na}`;
}

/*Skapa ett program där man via en prompt anger ett antal minuter (minst 60 minuter).
Programmet omvandlar sedan detta till timmar och minuter. Visa antal timmar och minuter i en dialogruta (alert). */

let hours = document.getElementById("hours");
hours.addEventListener("click", u2);

function u2() {
    let minutes = document.getElementById("input1").value;

    function calculate(minutes) {
        let h = Math.floor(minutes / 60);
        let m = minutes % 60;
        if ((h <= 1) && (m > 1)) {
            return (`${h} timme, ${m} minuter`);
        } else if ((h <= 1) && (m <= 1)) {
            return (`${h} timme, ${m} minut`);
        } else if (m <= 1) {
            return (`${h} timmar, ${m} minut`);
        } else {
            return (`${h} timmar, ${m} minuter`);
        }
    }
    document.getElementById("result").innerHTML = (calculate(minutes));
}

/*Skapa ett program som läser in antalet minuter man i genomsnitt ringer per månad samt kostnaden per minut (via två olika prompt). Som resultat skall programmet visa en dialogruta (alert) där det anges hur stor den beräknade kostnaden per månad blir.*/

let phone = document.getElementById("phone");
phone.addEventListener("click", u3)

function u3() {

    let minutes = document.getElementById("input1").value;
    let cost = document.getElementById("input2").value;

    // +prompt("Hur många minuter ringer du per månad?");
    // let cost = +prompt("Hur mycket kostar en minut?");

    function calculate(minutes, cost) {
        return (`Månadskostnaden beräknas bli ${Math.round(minutes * cost)}kr`);
    }
    document.getElementById("result").innerHTML = (calculate(minutes, cost));
}

/*Moms. Skriv ett program som läser in en varas pris, exkl. moms. Programmet skall också läsa in momssatsen som skall vara ett helt antal procent t.ex. 25. Programmet skall beräkna dels varans pris inkl. moms och dels momsen. De två resultaten skall visas i en dialogruta (alert). Använd \n för att lägga till en radbrytning.*/

let tax = document.getElementById("tax");
tax.addEventListener("click", u4);

function u4() {
    let price = document.getElementById("input1").value;
    let taxRate = document.getElementById("input2").value;
    let tax = (taxRate / 100);

    function calculate(price, tax) {
        let tax2 = tax * price;
        let priceInc = price * (tax + 1);
        return (`Priset inklusive moms är:${Math.round(priceInc)}kr\nMomsen är:${Math.round(tax2)}kr`);
    }
    document.getElementById("result").innerHTML = (calculate(price, tax));
}

/*Skapa en funktion som byter plats mellan två olika variabler som innehåller två heltal. Kalla funktionen swap.*/


let swap = document.getElementById("swap");
swap.addEventListener("click", u5);

function u5() {
    function swap() {
        let a = document.getElementById("input1").value;
        let b = document.getElementById("input2").value;

        c = a;
        a = b;
        b = c;
        return `a = ${a} å b = ${b}`
    }
    document.getElementById("result").innerHTML = swap();
}

// Skapa ett objekt som beskriver din dator. Exempel på egenskaper Tillverkare Processor RAM - Minne Operativsystem
let computer = {
    tillverkare: "Apple",
    modell: "MacBook Air (13-inch, 2017)",
    processor: "1,8 GHz Intel Core i5",
    minne: "8 GB 1600 MHz DDR3",
}

/*Skapa ett objekt med en bil */
let car = {
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    drive: function () {
        console.log("driving");
    },
    brake: function () {
        console.log("stopping");
    },
    start: function () {
        console.log("starting");
    },
    stopping: function () {
        console.log("Stopping");
    },
}

function Pokemon(name, type, health) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.attack = function () {
        return "attacking";
    }
    this.dodge = function () {
        return "dodgeing";
    }
    this.evolve = function () {
        return "evolving";
    }
}
let pikachu = new Pokemon("Pikachu", "Electric", 70);
console.log(pikachu.dodge());

// Skapa en konstruktor som beskriver en bil. Kalla konstruktorn Car.Ange följande egenskaper: Registreringsnummer, Fabrikat, Växellåda, Miltal, Tillverkningsår, Bränsle Skapa två objekt som innehåller info om olika bilar
function Car(registreringsnummer, fabrikat, växellåda, miltal, tillverkningsår) {
    this.registreringsnummer = registreringsnummer;
    this.fabrikat = fabrikat;
    this.växellåda = växellåda;
    this.miltal = miltal;
    this.tillverkningsår = tillverkningsår;
}

let saab = new Car("CLO745", "Vet ej", "Manuell", "12000", 1998);
console.log(saab);

function Dog(breed, size, age, color) {
    this.breed = breed;
    this.size = size;
    this.age = age;
    this.color = color;
    this.eat = function () {
        return ("eating");
    };
    this.sleep = function () {
        return ("sleeping");
    };
    this.sit = function () {
        return ("sitting");
    };
    this.run = function () {
        return ("running");
    };
}
let pussel = new Dog("papilion", "liten", "3", "Svart");
console.log(pussel.eat());

// Skapa en funktion som har en parameter. Ange funktionsnamnet capitalize Funktionen ska ta en sträng och ändra den första bokstaven till versal. Exempel på anropet av funktionen

let capitalize = document.getElementById("capitalize");
capitalize.addEventListener("click", u6)

function u6() {
    let a = document.getElementById("input1").value;
    let c = a.charAt(0).toUpperCase();
    document.getElementById("result").innerHTML = (c + a.substring(1));
}

// Skapa en funktion som har en parameter.Ange funktionsnamnet maxArray. Funktionen ska ta en array av ett godtyckligt antal tal. Funktionen ska returnera det största talet i arrayen. 


let array = document.getElementById("array")
array.addEventListener("click", u7)

function u7() {
    let input = document.getElementById("input1").value;
    input = input.split(",");
    document.getElementById("result").innerHTML = (`Största numnret är: ${Math.max(...input)}<br>Minsta numret är: ${Math.min(...input)}`);
}

/* Avståndsformeln kan användas för att beräkna avståndet mellan tvåpunkter i ett koordinatsystem*/
let distance = document.getElementById("distance");
distance.addEventListener("click", u8);

function u8() {
    let a = document.getElementById("input1").value;
    a = a.split(",");
    let b = document.getElementById("input2").value;
    b = b.split(",");
    let a1 = a[0];
    let a2 = a[1];
    let b1 = b[0];
    let b2 = b[1];

    let sum = Math.sqrt(Math.pow((a2 - a1), 2) + Math.pow((b2 - b1), 2));
    document.getElementById("result").innerHTML = `Avståndet är ${Math.round(sum)}`;
}
/*Visa aktuellt datum i detta format YYMMDD t.ex. 181026*/
let date = document.getElementById("date");
date.addEventListener("click", u9);

function u9() {
    let D = new Date();
    let y = D.getFullYear().toString().substring(2);
    let m = D.getMonth() + 1;
    let d = D.toString().substring(8, 10);
    document.getElementById("result").innerHTML = `${y}${m}${d}`;
}
//Visa klockan i detta format HH:MM:SS
let time = document.getElementById("time");
time.addEventListener("click", u10);

function u10() {
    let tid = new Date();
    tid = tid.toTimeString().substring(0, 9)
    document.getElementById("result").innerHTML = tid;
}
let D = new Date;
let months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
let days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

let månad = months[D.getMonth()];
let dag = days[D.getDay()];
console.log(`${dag}en den ${D.getDate()} ${månad} ${D.getFullYear()}`)

