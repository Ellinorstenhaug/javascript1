// Arbeta med arrayer

//skapa en tom array
let cars1 = [];

// Skapa en array som innehåller data
let cars2 = ["Volvo", "Saab", "BMW"];
// Detta är en array-literal

//Skapa en array med en constructor
let cars3 = new Array(1, 2, 3);
let cars4 = new Array(); //en tom array

// Att komma åt data
console.log(cars2[0]);
console.log(cars2);
console.log(cars2[3]);

//Hämta ett element och spara i ny variabel
let bil1 = cars2[0];
console.log(bil1);
//Ändra ett element
cars2[0] = "Mazda";

//En array i JS kan innehålla olika typer
let person = ["Ellinor", "Stenhaug", 22, true];

//Du kan skapa 4 olika variabler istället för en array
let firstName = "Ellinor";
let lastName = "Stenhaug";
let age = 22;
let gift = false;

//hitta antal element
let antal = person.length;
console.log(antal);

//Sortera en array
console.log(cars2);
cars2.sort();
console.log(cars2);


//Övning 1
let kurser = ["Introkurs", "Javascript 1", "Grafiska Verktyg", "HTML & CSS", "Javascript 2"];
kurser.sort();
console.log(kurser);
console.log(kurser.length);

//Övning 2
let customers = ["Först", "Mitten", "Sist"];
console.log(customers.length-1); // skriver ut sista indexet
console.log(customers[customers.length-1]); //skriver ut sista elementet

let antalet = customers.length; //Ett till sätt
let lastIndex = antalet-1;
let sista=customers[lastIndex];
console.log(sista);

customers.reverse(); //tredje sätt
console.log(customers[0]);

//Arbeta med Stack
let stack = []; //Skapar en tom array
stack.push("Javascript 1"); //lägg till sist i arrayen
console.log(stack);
stack.push("HTML & CSS");
console.log(stack);
stack.push("Javascript 2");
console.log(stack);
stack.push();

let currentLength = stack.push("Bla bla bla");
console.log(currentLength);

stack.push();
stack.push();
stack.push();
console.log(stack.length); 

//Ta bort ett element
stack.pop() //Ta bort sista elementet
console.log(stack);

let kurs = stack.pop(); // Spara sista elementet innan borttagning
console.log(stack);
console.log(kurs);
stack.pop();
stack.pop();
stack.pop();
stack.pop(); //INTE tömma array på detta sätt


