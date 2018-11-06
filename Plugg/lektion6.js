//Skapa en funktion som beräknar medelvärdet av två tal
function l6_1a() {
    let a = +prompt("Skriv i första talet.");
    let b = +prompt("Skriv i andra talet.");


    function findAverage1(a, b) {
        let average = (a + b) / 2;
        return average;
    }
    console.log(findAverage1(a, b));
}

//Skapa en funktion som beräknar medelvärdet av tre tal
function l6_1b() {
    let a = +prompt("Skriv i första talet.");
    let b = +prompt("Skriv i andra talet.");
    let c = +prompt("Skriv i tredje talet.");


    function findAverage2(a, b, c) {
        let average = (a + b + c) / 3;
        return average;
    }
    console.log(findAverage2(a, b, c));
}

function l6_1c() {
    let a = prompt("Skriv i talen separerade med ,");
    let part = a.split(",");
    function average(part) {
        let calc;
    }    
}
//Övning 2
function l6_2() {
    let name = prompt("Vad heter du?");
    function greeting(name) {
        return `Hej ${name}`;
    }
    document.getElementById("l6_2").innerHTML = greeting(name);
}

//Övning 3
    function l6_2() {
        let name = prompt("Vad heter du?");
        function greeting(name) {
            return `Hej ${name}`;
        }
        document.getElementById("l6_2").innerHTML = greeting(name);
    }

