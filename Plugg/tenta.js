//Skriv ett program som ber användaren mata in sitt födelsedatum i detta format ÅÅÅÅ-MM-DD.  Programmet ska räkna ut personens ålder. Visa på webbsidan hur många år, månader och dagar personen är gammal. Implementera alla nödvändiga felkontroller och visa olika felmeddelanden vid felaktig inmatning!
while (true) {

    let birthDate = prompt("Ange ditt födelsedatum i detta format - ÅÅÅÅ-MM-DD", "1996-01-24");
    if (birthDate === null) break; //Om användaren klickar på avbryt eller ESC
    if (birthDate.length !== 10) {
        alert('Felakigt antal tecken!')
        continue;
    }
    if (birthDate.charAt(4) !== "-") {
        alert("Första - saknas!");
        continue;
    }
    if (birthDate.charAt(7) !== "-") {
        alert("Andra - saknas!");
        continue;
    }
    birthDate = birthDate.split("-");
    console.log(birthDate);

    let year = birthDate[0];
    year = Number(year);
    console.log(year);
    if (isNaN(year)) {
        alert("Felaktigt år!")
    }

    let month = birthDate[1];
    month = Number(month);
    if (month < 1 || month > 12 || isNaN(month)) {
        alert("Felaktig månad!");
        continue;
    }

    let day = birthDate[2];
    day = Number(day);
    if (day < 1 || day > 31 || isNaN(day)) {
        alert("Felaktig dag!");
        continue;
    }
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    let nowDay = now.getDate();

    //OBS! Mina variabler heter year, month, day
    console.log(year, month, day);
    console.log(nowYear, nowMonth, nowDay);

    let years = nowYear - year;
    let months = nowMonth - month;

    if (months < 0) {
        years --;
        months +=12;
    }
    console.log(years, months);
    
    let days = nowDay - day;
    console.log(days);
    
    if (days < 0) {
        months --;
        days +=30;
    }
    let el = document.getElementById('birthDate');
    el.innerHTML = `Du har angett följande födelsedatum: ${birthDate.join("-")}<br>`
    el.innerHTML += `Du är ${years}år, ${months}månader och ${days}dagar gammal.`
    break;
}

// let today = new Date();
// let todayYear = today.getFullYear();
// let todayMonth = today.getMonth();
// let todayDay = today.getDate();
// console.log(today);


let p = document.getElementById(`paragraf`);
findDot = capitalize(p.innerHTML).split(`. `);
console.log(findDot);
p.innerHTML = ``;
let result = ``;

for (let i = 0; i < findDot.length; i++) {
    let s = findDot[i];
    s = capitalize(s);
    s = addDotToEndOfString(s);
    //p.innerHTML += capitalize(s) + addDotToEndOfString(s);
    result += s;
}
p.innerHTML = result;

function addDotToEndOfString(str) {
    if (str[str.length - 1] !== `.`) {
        return str += `. `;
    }
    return str;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}

let a;
function test (){
    a++;
}