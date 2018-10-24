//WHILE

let i = 1;
while (i <= 10) {
    console.log(`${i} * 5 = ${i*5}`);
    i++
}
console.log("--------------for------------");
for (let i = 1; i <= 5; i++) {
    console.log(`${i} * 10 = ${i*5}`);
}

//Break-satsen
function Break() {


    alert("Välkommen till spelet!")
    while (true) { //Hit kommer vi med continue
        let name = prompt("Vad heter du?");
        if (name === null) {
            alert("hejdå")
            break;
        }
        if (name === "") {
            alert("Mata in ditt namn tack!")
            continue;
        }
        alert(`Välkommen ${name}`);
        break;
    } //Hit kommer vi när break exekveras
}


//Do while

function DoWhile() {
    let again = true;
    do {
        alert("Välkommen till spelet!");
        //Kör spelet
        again = confirm("Vill du spela igen?");
        console.log(again);
    } while (again);
    alert("Hejdå")
}