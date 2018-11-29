//Skapa ett script som går igenom alla stycken i ett dokument.
//Du ska undersöka om varje stycke avslutas med en punkt. Om inte, lägg till en punkt.

let p = document.getElementsByTagName('p');
// console.log(p);
// for (let i = 0; i < p.length; i++) {
//     let s = p[i].innerHTML;
//     if (s[s.length - 1] !== ".") {
//         s += "."
//     }
//     p[i].innerHTML = s;
// }
function addDotToEndOfString(s) {
    if (s[s.length - 1] !== ".") {
        return s += ".";
    }
    return s;
}

//Se till att alla stycken börjar med stor bokstav
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.substring(1);
}
for (let i = 0; i < p.length; i++) {
    let s = p[i].innerHTML; 
    s = capitalize(s);
    s = addDotToEndOfString(s);
    p[i].innerHTML = s;
}

// Se till att alla meningar börjar med stor bokstav
// Första bokstaven är redan stor från förgående uppgift
for (let i = 0; i < p.length; i++) {
    let s = p[i].innerHTML;
    let meningar = s.split(". ");
    // console.log(meningar[0]);
    let result = "";
    for (let x = 0; x < meningar.length; x++) {

         let värde = capitalize(meningar[x]);
        result += värde;
    }
    p[i].innerHTML = result //.join(". ");
}





console.log("----------------");


for (let i = 0; i < p.length; i++) {
    let phrase = p[i].innerHTML;
    let phrases = phrase.split(". ");
    let result = "";

    if (phrases.length > 1) {
        for (let x = 0; x < phrases.length; x++) {
           result += handlePhrase(phrases[x]);
        }
    } else {
       result = handlePhrase(phrase);
    }
    p[i].innerHTML = result;
}

function handlePhrase(phrase) {
    if (!phrase.endsWith(".")) {
        phrase = phrase + ". ";
    }
    if (phrase.charAt(0) != phrase.toUpperCase()) {
        phrase = phrase.charAt(0).toUpperCase() + phrase.substring(1);
    }  
    return phrase; 
}


