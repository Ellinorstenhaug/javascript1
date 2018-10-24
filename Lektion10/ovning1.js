//Skapa ett program som läser in (via två prompt) antalet minuter
//man i genomsnitt ringer per månad, samt kostnaden per minut.
//Om man ringer för minst 1000kr per månad så har man rätt till 
//10% rabatt. 
//Som resultat ska programmet visa en dialogruta (alert) där det
//anges hur stor den beräknade kostnaden per månad blir samt
//hur mycket rabatt man får. 

function ovning1() {
    let minutes = prompt("Hur många mintuer ringer du i genomsnitt per månad?");
    let cost = prompt("Hur mycket kostar en minut?");

    let sum = minutes * cost;
    if (sum > 1000) {
        alert("Yay! du får 10% rabatt!");
        let discount = sum * 0.1;
        alert(`Månadskostnaden blir ${sum.toFixed(2) - discount.toFixed(2)}kr \nRabatten är ${discount.toFixed(2)}kr`);
    } else {
        alert(`Månadskostnaden blir ${sum.toFixed(2)}kr`);
    }
}