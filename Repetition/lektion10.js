//uppgift 3
//inmatning från prompt
let poang = 50;
//Beräkna//Arbeta med problemet
let betyg = "";

//visa betyget
if (poang >= 45) {
    betyg = "A";
} else if (poang >= 40) {
    betyg = "B";
} else if (poang >= 35) {
    betyg = "C";
} else if (poang >= 30) {
    betyg = "D";
} else if (poang >= 25) {
    betyg = "E";
} else {
    betyg = "F";
}

console.log(betyg);

switch (true) {
    case (poang >=45):betyg = "A"; break;
    case (poang >=40):betyg = "B"; break;
    case (poang >=35):betyg = "C"; break;
    case (poang >=30):betyg = "D"; break;
    case (poang >=25):betyg = "E"; break;
    case (poang < 25):betyg = "F"; break;
}

console.log(betyg);