//LEKTION 9
//Arbeta med inbyggda globala JS-Objekt

//OBJETKET STRING

let firstName = "Ellinor";
console.log(typeof firstName); //Typen är string
let antal = firstName.length;

console.log(antal); // 7


//Konvertera till gemener
console.log("-----toUpperCase-------");
firstName.toLowerCase(); //OBS! Ger inget nytt resultat, man mste lagra resutatet.  
firstName = firstName.toLowerCase();
console.log(firstName); //Ger ellinor


//Konkatenering
console.log("-----Konkatenering-------");
let lastName = "Stenhaug";
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName); //Funkar men är jobbig med mellanslag
let fullName = firstName.concat(' ', lastName);
console.log(fullName);

//Substring
console.log("-----Substring-------");

console.log(fullName.substring(0, 6));
// console.log(fullName.substring(8));
let space = fullName.indexOf(' ');
console.log(space);
console.log(fullName.substring(space + 1));

//substr
console.log("-----substr-------");

console.log(fullName.substr(8, 2)); //St 


console.log("-----Som arrayer-------");

//Strängar i JS indexeras som samma sätt som arrayer
console.log(fullName[0]); //e
//Skriv ut sista tecknet
console.log(fullName[fullName.length - 1]); //g 

let arrTest = [1, 2, 3];
console.log(arrTest.length);
console.log(arrTest[arrTest.length - 1]);

//Skriv ut index på första mellanslaget
console.log("-----IndexOf-------");

console.log(fullName.lastIndexOf(' '));

let newName = "Kalle Anka ";
console.log(newName.indexOf(' ')); //5
console.log(newName.lastIndexOf(' ')); //10 (längst bak) Varför? Räknar bakifrån framåt


//CharAt()
console.log("-----charAt-------");
console.log(fullName.charAt(1)); //A

//split
console.log("-----split-------");
let nameArray = fullName.split();
console.log(nameArray); //Ger ['ellinor stenaug']
nameArray = fullName.split(''); //Obs en tom sträng
console.log(nameArray); //Får ut en array där varje tecken blir ett element i arrayen
nameArray = fullName.split(' '); //OBS! Mellanslag
console.log(nameArray); //Ger ['ellinor', 'Stenhaug']
fullName = "Ellinor;Stenhaug";
nameArray = fullName.split(";"); //['ellinor', 'stenhaug']

console.log("-----trim-------");
fullName = "    Ellinor    Stenhaug     ";
fullName = fullName.trim();
nameArray = fullName.split(' ');
//Chaining
nameArray = fullName.trim().split(' '); //Ger ['Ellinor', '', '', '', 'Stenhaug' ]
console.log(nameArray); 

//Rensa alla mellanslag men behåll ett
console.log("-------Replace------");
nameArray = fullName.trim()
nameArray = fullName.replace(/ +/g , ' '); //RegExp
console.log(nameArray);

//Byt ut ; mot mellanslag
fullName = "Ellinor;Stenhaug";
fullName= fullName.replace(/;+/g, ' ');
console.log(fullName);

//Escape-tecken
console.log("--------EscapeTecken----------");
// \n new line
console.log("Hej\nVälkommen till JS.\nIdag har vi jobbat med string");
//\"" För att visa ""
console.log("Hej \"Ellinor\"");
//Webbläsare struntar i tab och mellanslag
console.log("Ellinor \t Ellinor");
console.log("Alexander \t Alexander");

let msg = '';
msg += "The character \\ is called backslash";
msg += "\n" //New line
msg += "We are the so-called \"Vikings\" from the north.";
msg += '\n';
msg += 'It\'s alright.';
console.log(msg);