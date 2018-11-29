//uppgift 1
/*Visa aktuellt datum i detta format
YYYY-MM-DD t.ex.2018-10-12
OBS! Använd inte metoden toDateString() */
let now = new Date()
console.log(now);

//Hämta år
let year = now.getFullYear();
console.log(year);

//Hämta månad
let month = now.getMonth() + 1;
console.log(month);
if (month < 10) {
    month = "0" + month;
}

//Hämta dag
let day = now.getDate();
console.log(day);
let today = `${year}-${month}-${day}`
console.log(today);

console.log("--------------------");

//Visa aktuellt datum i detta format YYYY-MM-DD, ANVÄND metoden toDateString();
//Skapa ett datumobjekt
let idag = new Date();
let idagStr = idag.toDateString();
//hämta år 
let y = idagStr.substring(11);
console.log(y);
//Hämta dag
let d = idagStr.substring(8, 10);
console.log(d);

let m = idagStr.substring(4, 7);
console.log(m);
switch (m) {
    case "Jan":
        m = "01";
        break;
    case "Feb":
        m = "02";
        break;
    case "Mar":
        m = "03";
        break;
    case "Apr":
        m = "04";
        break;
    case "May":
        m = "05";
        break;
    case "Jun":
        m = "06";
        break;
    case "Jul":
        m = "07";
        break;
    case "Aug":
        m = "08";
        break;
    case "Sep":
        m = "09";
        break;
    case "Oct":
        m = "10";
        break;
    case "Nov":
        m = "11";
        break;
    case "Dec":
        m = "12";
        break;

    default:
        break;
}
console.log(m);

//Skapa strängen
let result = `${y}-${m}-${d}`;
console.log(result);


console.log(".......................................");

/* Visa aktuellt datum i detta format, YYYY-MM-DD*/
let datumobjekt = new Date();

datumstringobjekt = datumobjekt.toLocaleDateString();
console.log(datumstringobjekt);


console.log(".......................................");

//Uppgift 2
/*Visa klockan i detta formtat: HH:MM:SS */
let datum = new Date();
console.log(datum.toTimeString().substring(0, 8));

console.log(".......................................");
//UPPGIFT 3
datum = new Date();

year = datum.getFullYear();
month = datum.getMonth();
date = datum.getDate();
day = datum.getDay();

let monthArray = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
let dayArray = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

console.log(`${dayArray[day]}en den ${date} ${monthArray[month]} ${year}`);


//ÖVNING 4
let clock = document.getElementById("clock");

function time() {
    let datum = new Date();
    let klockan = datum.toTimeString().substring(0, 8);
    clock.innerHTML = klockan;
}
setInterval(time, 1000);


//
function test1() {
    let x1 = prompt("Ange x1");
    let x2 = prompt("Ange x2");
    let y1 = prompt("Ange y1");
    let y2 = prompt("Ange y2");

    let D = Math.sqrt((Math.pow(x2 - x1), 2) + Math.pow((y2 - y1), 2));
    alert(D.toFixed(4));
}


//alt2

function test2() {
    function distance(x1, x2, y1, y2) {
        return Math.sqrt((Math.pow(x2 - x1), 2) + Math.pow((y2 - y1), 2))
    }

    while (true) {
        let str = prompt("Ange (x1,x2,y1,y2)", "x1,x2,y1,y2");
        if (str === null) break; 
        let arr = str.split(",");
        if (arr.length === 4) {
            let d = distance(arr[0], arr[1], arr[2], arr[3]);
            alert(d.toFixed(4))
            break;
        } else {
            alert("Felaktig inmatning!");
        }
    }
    alert("Hejdå. Välkommen tillbaka!")
}