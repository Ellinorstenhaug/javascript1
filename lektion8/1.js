//Lektion 8
//UPPGIFT 1
// Skapa en array som innehåller information om dina kurser.
// • Arrayen ska alltså innehålla ett antal objekt.
// • Varje objekt presenterar en kurs. 
// • Varje kurs ska ha följande egenskaper 
// • Kursnamn (string) 
// • Lärare (string) 
// • Antal poäng (number)
// • Betyg (string eller null)
// • Avklarad (boolean)
function Course(kursnamn, lärare, poäng, betyg, avklarad){
    this.kursnamn = kursnamn;
    this.lärare = lärare;
    this.poäng = poäng;
    this.betyg = betyg;
    this.avklarad = avklarad;
}

let javascript1 = new Course ("Javascript 1", "Mahmud Al Hakim", 50, null, false);
let grafiskaVerktyg = new Course ("Grafiska Verktyg", "Okänd", 50, null, false);
let introKurs = new Course("Introduktionskurs", "Per Söderberg", 20, "VG", true);

let course = [javascript1, grafiskaVerktyg, introKurs];
console.log(course);
console.log("-----------------------------");


//UPPGIFT 2
//Skapa en array som innehåller info om dina favoritrecept (minst 2 recept)
//• Varje recept är ett objekt som har följande egenskaper. 
//• Titel (string) 
//• Gör så här (string) 
//• Ingredienser (array)
//• OBS! Egenskapen Ingredienser är alltså en array som innehåller en lista över alla ingredienser. 


   

    var defaults = {

        recipe: {
            backgroundcolor: '#000',
            color: '#fff',
            weekdays: ['sun','mon','tue','wed','thu','fri','sat']
        },
        recipe:{
            backgroundcolor: '#000',
            color: '#fff',
            weekdays: ['sun','mon','tue','wed','thu','fri','sat']
        },
        recipe: {
            backgroundcolor: '#000',
            color: '#fff',
            weekdays: ['sun','mon','tue','wed','thu','fri','sat']
        },

       };
       let val = undefined;
       for (var property1 in defaults) {
         val  += defaults[property1];
      }
      console.log(val);
 


function pushIngredient(ingredient) {
    ingredients.push(ingredient);
}


function Recept (titel, howTo, ingredients) {
    this.titel = titel,
    this.howTo = howTo,
    pushIngredient("mask")
}


//UPPGIFT3 
function sleep() {
    alert("Anmäl dig till vårt nyhetsbrev och få 10% rabatt idag!")
}
setTimeout(sleep, 5000);
