//Skapa en multiplikationstabell i JS
let table ="";
for (let row = 1; row <=10; row++) {
    for (let col = 1; col < 10; col++){
        table += col * row + "\t";
    }
    table += "\n";
}
console.log(table);

