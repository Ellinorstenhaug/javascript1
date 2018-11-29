//Uppgift 1
//Hur mycket pengar får man på ett bankkonto under ett visst antal år

//TODO: 
//Gör whileloop, deklarera nödvändiga variabler
// konstant räntesats är på 3,5% per år.
//1. Fråga efter beloppet och hur många år pengarna ska stå inne
//Gör en whileloop för andra prompten
//Felkontroller - måste vara number, större än 0.
//2. Gör uträkning
//3. Visa en tabell där man kan se hur mycket kapitalet har växt efter varje år, FOR
//Svara i en tabell med två decimaler.Skriv ut på hemsidan också? 
//Formel = y(x) = c*a^x

let u1 = document.getElementById("uppgift1");
u1.addEventListener("click", uppgift1);

function uppgift1() {
    //Deklarera/initiera variabler
    let tax = 0.035;
    let sum;
    let output = "";
    while (true) {
        let amount = prompt("Hur mycket pengar vill du sätta in?", "1000");
        if (amount < 0 || isNaN(amount)) { //Felkontroll!
            alert("Ogiltigt format!");
            continue; //kommer börja om från början igen
        }
        if (amount === null) break; //Om man klickar på avbryt
        else { //Om format på pengarna är ok fortsätter programmet 
            while (true) {
                let years = prompt("Hur många år?", "10");
                if (years === null) break; //Om man vill avbryta här
                if (years < 0 || isNaN(years)) { //Felkontroll
                    alert("Ogiltigt format!");
                    continue; //kommer fråga om "hur många år" igen
                } else { 
                    tax += 1; //Förändringsfaktor!
                    //Formeln är y=c*a^x där c är konstanten, dvs pengarna man sätter in, a = förändringsfaktor och x är år.
                    //Y i formeln är variabeln sum 
                    for (let i = 1; i <= years; i++) { //Börjar efter första året
                        sum = amount * Math.pow(tax, i);
                        output += `${i}\t\t${sum.toFixed(2)} \n`; //får ut året och summan(med två decimaler)
                    }
                    alert(`Startbelopp: ${amount}kr\nÅr\t   Belopp\n${output}`);
                    document.getElementById("result").innerHTML = `Startbelopp: ${amount}kr<br><PRE>År\t\tBelopp<br>${output}`
                    break;
                }
            }
            break;
        }
    }
}

//Uppgift 2 Lösenordsgenerator!

//Visa med knapp på en webbsida, efter knapptryck visa det genererade lösenordet under knappen 
//Lösenordet ska blanda stora och små bokstäver, symboler och siffor, vara mellan 10-12 tecken långt

//TODO
//1. Sätt upp en variabel med en tom sträng (blir lösenordet)
//2. Gör en sträng med samtliga stora bokstäver, små, siffror och specialtecken. 
//3. Gör en funktion som genererar en random siffra mellan 10-12. 
//4. Gör en funktion som randomiserat väljer ett index i strängen
//Via en forloop, plussa på varje tecken som kommer ur funktionen tills längden är den randomiserade längden.
//Skriv ut resultat på hemsidan  i h3-taggen med id="password"

//Hämta element från DOMträdet och spara in i variabel
let u2 = document.getElementById("uppgift2");
u2.addEventListener("click", uppgift2); //Gör en eventlyssnare på elementet, där funktionen uppgift2 triggas vid klick på knapp med id="uppgift2"

function uppgift2() {
    //Variabler
    let password = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVXYZÅÄÖabcdefghijklmnopqrstuvxyzåäö1234567890!#€%&/()=?*";

    function numberOfChars() {
        return Math.floor(Math.random() * 3 + 10) //För att generera ett tal mellan 10-12, (intervallet är 3,+10 för att börja på 10) 
    }
    let number = numberOfChars() //sparar in längden på lösenordet i en variabel
    console.log(number); //för att kontrollera antal nummer lösenordet skall vara 

    function generate() {
        for (let i = 0; i < number; i++) {
            let x = Math.floor(Math.random() * (chars.length) + 1); //Genererar ett randomiserat index från teckensträngen chars 
            password += chars.charAt(x) //Plussar på det tecken som finns på indexet x på password
        }
        return password;
    }
    document.getElementById("password").innerHTML = generate();
}

//Felhantering: För att kolla om lösenordet innehåller en viss sträng kan man använda RegEx, och strings match() metod. 
//Fanns dock inte tid till att göra detta! Dock är oddsen på att man inte får med en stor och liten bokstav, siffra och symbol väldigt liten.

//Värt att nämna: Math.random är INTE säker att använda för att generera lösenord då den är förutsägbar.