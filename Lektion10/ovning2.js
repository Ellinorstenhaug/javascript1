//på ett gym kan man antingen köpa ett årskort eller köpa en biljett vid varje besök. 
//Skapa ett program som läser in (prompt) priset för ett årskort, priset för en biljett samt 
//antalet gånger man planerar att besöka gymmet under ett år. 
//Därefter ska programmet visa (alert) om det lönar sig att köpa årskort eller inte.


function ovning2() {
    let year = prompt("Vad kostar ett årskort?");
    let each = prompt("Vad kostar ett besök?");
    let times = prompt("Hur många gånger planerar du att besöka gymmet under ett år?")
    let sum = each * times;

    if (sum > year) {
        alert(`Det är mer värt att köpa ett årskort!\nAnnars blir kostnaden ${sum}kr`);
    } else {
        alert("Det är inte värt att köpa årskort!");
    }
}

function ovning2_1() {
    let arskort = prompt("Priset för ett årskort");
    let biljett = prompt("Priset för ett biljett");
    let antal = prompt("Antal besök per år");
    if (arskort < biljett * antal) {
        alert("Köp ett årskort!");
    } else {
        alert("Det är inte värt att köpa årskort!");
    }

}

function ovning2_2() {
    let svar = prompt("Ange priset för ett årskort\noch priset för en biljett\n och antal besök per år.\n Mata in i detta format: \nÅRSKORT,BILJETTPRIS,ANTAL");
    //Vi får tillbaka en sträng, svar = "4000,100,20"
    //Omvandla sträng till array
    let svarArray = svar.split(","); //konverterar till array
    //["4000", "100", "20"]
    if (svarArray.length < 3) {
        alert("Felaktig inmatning");
    }



    console.log(svarArray);

    let arskort = svarArray[0];
    let biljett = svarArray[1]
    let antal = svarArray[2]

    if (arskort < biljett * antal) {
        alert("Köp ett årskort!");
    } else {
        alert("Det är inte värt att köpa årskort!");
    }

}