//övning 1
let target = 10000000;
let salary = 1;
let day = 1;
while (salary <= target) {
    //Måste jobba
    console.log(`Dag: ${day}, Lön: ${salary}`);
    day++;
    salary *= 2; //Eller salary = salary * 2; 
}
//Sluta jobba
console.log(`Du måste jobba ${day} dagar för att tjäna minst 10 miljoner kr.`);

for (let day = 1; salary < target; days++) {
    salary *= 2;
    console.log(salary);
}
console.log("---------------------------------------");
console.log(`Du måste jobba ${day} dagar för att tjäna minst 10 miljoner kr.`);

//Övning 2
let Table = "";
console.log("x\tx^2\tx^3");
for (let row = 1; row <= 12; row++) {
    let kvadrat = Math.pow(row, 2);
    let kubik = Math.pow(row, 3);
    console.log(`${row}\t${kvadrat}\t ${kubik}`);
}

//Övning 3
//Läs in ett tal större än 0 via prompt. Klickar man på avbryt ska programmet skriva ut största och minsta värdet av de inlästa talen
function ovning3() {
    let n;
    let min = Number.MAX_VALUE;
    let max = 0;
    while (true) {
        n = prompt("Ange ett tal större än 0");
        if (n === null)
            break;


        if (n > 0) {
            min = Math.min(n, min);
            max = Math.max(n, max);
        }
        alert(`Största talet är ${max} \noch minsta är ${min}`);
    }
}

function ovning3_2() {
    let n;
    let min = Number.MAX_VALUE;
    let max = 0;
    let arr = []
    while (true) {
        n = prompt("Ange ett tal större än 0");
        if (n === null)
            break;
        arr.push(n);

    }
    min = Math.min(...arr);
    max = Math.max(...arr);
    alert(`Största talet är ${max} \noch minsta är ${min}`);
}

function ovning4() {
    //Läs in heltal n via prompt
    //Kontrollera heltal 
    //Beräkna summan av n, 1+2+3+4+...+n;
    let summa = 0;
    while (true) {
        let n = prompt("Skriv in ett nummer")
        if (n === null) {
            break;
        }
        //Konverterar sträng till number
        n = Number(n)
        if (Number.isInteger(n)) {
            for (let i = 0; i <= n; i++) {
                summa += i; //lägg till
            }
            break;
        } else {
            alert("Felaktig inmatning!\nSkriv ett heltal!");
        }
    }
    alert(`Summan är ${summa}`);
}