//Arbeta med objekt i JS

//Objektliteral (object literal)
//Skapa objekt med hjälp av {}

let car = {};
let kalle = {};

console.log(car); // loggar {}

let ellinor = {
    //Egenskaper
    //nyckel:värde,
    name: "Ellinor Stenhaug", //egenskap
    age: 22,
    length: 1.70,
    isMarried: false,
    children: [], //Notera! ARRAY
    //Metoder:
    printInfo: function () {
        console.log(this.name + " är " + this.age + " år gammal.");
    },
    returnInfo: function () {
        return (this.name + ' är trött');
    }
};

console.log(ellinor); //Skriver ut hela objektet
console.log(ellinor.name); //Skriver ut Ellinor Stenhaug
console.log(ellinor.age, ellinor.length);
ellinor.printInfo(); //Skriver ut STRÄNGEN Ellinor Stenhaug är 22 år gammal. 
console.log(ellinor.returnInfo()); //använder return, returnerar en sträng



let Alexander = {
    name: "Alexander", //egenskap
    age: 27,
    length: 1.72,
    isMarried: false,
    children: [] //Notera! ARRAY
};

console.log("----------------------------");

//Ändra objetkets egenskaper/metoder
let elli = {
    name: "Ellinor",
    age: 22,
}
console.log(elli.name, elli.age);

elli.name = "Elli"; //Ändrar namn
elli.age++; //Plussar på ett år på age
elli.age += 1; //plussar på ett
elli.age = elli.age + 1;

elli.age--; //minska med ett
elli.age = elli.age - 1;

console.log(elli.name, elli.age);

//Ta bort en egenskap/metod
delete elli.age;
console.log(elli.age); //Ger undefined

//Lägg till en egenskap/metod
elli.singel = false;
elli.age = 22;
elli.height=170;
console.log(elli.singel, elli.age); //Ger false
console.log(elli.valueOf()); //Få ut listan


let x1 = 2;
let x2 = x1;

console.log("--------HUR MAN KOPIERAR----------");
//Kopiera ett objekt(svårt)
let stenhaug = elli;  //FEEEEEL
stenhaug.name="Kajsa Anka";
console.log(elli.name); // GER SAMMA SOM NEDAN
console.log(stenhaug.name); //Alltså helt fel
//Elli och Stenhaug pekar på samma objekt
//Objekt är en referenstyp (som lagras i heap)
//Hur kopierar man objekt då?? 
let elli2 = {}
elli2.name = elli.name;
elli2.age = elli.age;
elli2.height = elli.height;
console.log(elli2.name);


console.log(".................. Kopiera array......");
//Arrayer är också objekt
let arr1 = [1,2,3];
let arr2 = arr1; //Är detta en kopia? 

arr1[0]=100;
arr2[1] = 200;
console.log(arr2); 
console.log(arr1);
//REFERENS TILL SAMMA ARRAY

//Ta bort ett objekt
elli = null;
console.log(elli); //null




//Kopiera objekt
//Metoden assign() 