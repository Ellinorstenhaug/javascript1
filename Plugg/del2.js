//kaffekoppen
let kafe = document.getElementById("kafe");
kafe.addEventListener("click", kaffeKopp);

function kaffeKopp() {
    let antal = +prompt("Hur många kaffekoppar köper du per dag?");
    let price = 12;
    let rabatt = 0.10;
    // let manad = new Date(year, month, 0).getMonth().  
    let manadskostnad = antal * price * 30;

    if (manadskostnad >= 1000) {
        alert(`Du köper för totalt ${manadskostnad}kr\nDu får 10% rabatt!\nDet är ${manadskostnad*rabatt}kr`);
    } else {
        kopparKvar = Math.ceil((1000 - manadskostnad) / 12);
        alert(`Du köper för ${manadskostnad}kr per månad, och får alltså ingen rabatt.\nDu behöver köpa ${kopparKvar} koppar till per månad (dvs ${Math.ceil(kopparKvar/30)} per dag) för att få rabatt!`)
    }
}
//Simhallen
let simhallen = document.getElementById("simhall");
simhallen.addEventListener("click", simhall);

function simhall() {
    let input = prompt("Skriv i kostnad för ett årskort, en biljett samt antal gånger du planerar att simma, enligt följande format: årskort, engångsbiljett, antal gånger", "årskort, engångsbiljett, antal gånger");
    let arrInput = input.split(", ");
    console.log(arrInput);

    let ticket = arrInput[1] * arrInput[2];

    if (ticket > arrInput[0]) {
        alert(`Det lönar sig att köpa årskort! \nKostnaden av engångsbiljett blir annars ${ticket}kr`);
    } else {
        alert("Köp engångsbiljetter");
    }
}

//programeringsprovet
/*På programmeringsprovet kan man få högst 50 poäng. Gränsen för betyget G är 50% och för betygen VG är 70%. Skriv ett program som läser in (via en prompt) poängen för en student och som visar vilket betyg hon eller han fått på provet.*/


// function betyg() {
/*while (true) {
    let score = +prompt(`Ange antal poäng:`)
    if (score === null)
        break;
    if (score > 50 || score < 0 || isNaN(score)) {
        alert(`Felaktig inmatning`);
        continue;
    }
}*/

// while (true) {
//     if (score === null) break;
//     if (score > 50 || score < 0 || isNaN(score)) {
//         alert("Felaktig inmatning");
//         break;
//     }
// }

let betygen = document.getElementById("betyg");
betygen.addEventListener("click", betyg);

function betyg() {
    let score = +prompt("Vad fick du för poäng?");
    let max = 50;
    let betyg;
    switch (true) {
        case (score > max):
            alert("Sluta ljug");
            break;
        case (score >= max * 0.7):
            betyg = "VG";
            break;
        case (score >= max * 0.5):
            betyg = "G";
            break;
        case (score < max * 0.5):
            betyg = "IG";
            break;
    }
    if (score <= max) alert(`Du fick ${betyg}!`);
}

/* Skapa en for-sats som skriver ut alla udda tal mellan 1 och 30 på en enda rad. Lägg till ; mellan varje al*/
let tal = "";
for (let i = 1; i < 30; i += 2) {
    (i < 28) ? tal += `${i};`: tal += `${i}`;
}
console.log(tal);

// Skapa en while-sats som skriver ut alla tal mellan 1 och 100, men enbart tal som är jämnt delbart med 7

let t = "";
let i = 0;
while (i < 100) {
    if (i % 7 === 0) {
        t += `${i} `;
    }
    i++;
}
console.log(t);

/*Skapa en array över dina favoriträtter. Programmet ska slumpmässigt välja en maträtt (som jag kallar X är nedan) Visa på sidan (ej alert) meddelandet. ”Dagens maträtt är X”. På fredagar ska programmet alltid visa följande meddelande. ”Du ska äta ute idag!”*/

let mat = document.getElementById("mat");
mat.addEventListener("click", hittaMat);

function hittaMat() {
    let favorit = ["tonfiskpasta", "kött och potatis", "tacos", "lasange", "kycklingsallad", "torsk med äggsås"];
    let fre = "Du ska äta ute idag!";
    let day = new Date().getDay();
    let dagensMat = Math.floor(Math.random() * favorit.length);
    if (day === 5) {
        document.getElementById("result").innerHTML = fre;
    } else {
        document.getElementById("result").innerHTML = `Dagens maträtt är: ${favorit[dagensMat]}`;
    }
}

//Multiplikationstabell

let multiplikationstabell = document.getElementById("multiplikationstabell");
multiplikationstabell.addEventListener("click", multiplicera);

function multiplicera() {
    let n = +prompt("Skriv in ett tal");
    let tabell = "";
    for (let i = 1; i <= 10; i++) {
        tabell += `${n*i} <br>`;
    }
    document.getElementById("result").innerHTML = `${n}ans multiplikationstabell är: <br>${tabell}`;
}


// Skriv ett program som läser in ett godtyckligt antal tal (även negativa) via prompt. När användaren klickar på knappen Avbryt så skall programmet skriva ut det största och det minsta av de inlästa talen.

let maxMin = document.getElementById("maxMin");
maxMin.addEventListener("click", minMax)

function minMax() {
    let arr = [];
    let max, min;
    while (true) {
        let number = prompt("Skriv in ett nummer!");
        if (isNaN(number)) {
            alert("Du måste skriva in ett nummer!");
            continue;
        }
        if (number === null) {
            max = Math.max(...arr);
            min = Math.min(...arr);
            break;
        } else {
            arr.push(+number);
            console.log(arr);;
            continue;
        }
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(sum += arr[i])
    }
    let average = Math.round((sum / arr.length));
    console.log(average);
    let output = `Du skrev in talen: ${arr}.<br>Största talet är:${max}<br>Minsta talet är:${min}`;
    output += `<br>Medelvärdet på talen är: ${average}`
    document.getElementById("result").innerHTML = output;
}

//FÅÅÅR
// Varje månad kommer fåren att multipliceras med 4.

let sheep = document.getElementById("sheep");
sheep.addEventListener("click", sheeps);

function sheeps() {
    let sheep = 2;
    sheep = (Math.pow(4, 12) * 2);
    document.getElementById("result").innerHTML = `Efter ett år har jag ${sheep} stycken får`;
}


//ARRAY
// Skapa en funktion som tar emot en 2D-Array som parameter • Kalla funktionen arraySum2D() • Funktionen ska summera alla ta i arrayen och returnerar summan. • Exempel arr2d = [[1, 2, 3], [4, 5, 6]] console.log(arraySum2D(arr2d));

let arr2d = [ 
    [1, 2, 3],
    [4, 5, 6]
];

function arraySum2d(arr2d) {
    let sum = 0;
    for (let i = 0; i < arr2d.length; i++) {
        for (let x = 0; x < arr2d[i].length; x++) {
            sum += arr2d[i][x];
        }
    }
    console.log(sum);
}
(arraySum2d(arr2d));
