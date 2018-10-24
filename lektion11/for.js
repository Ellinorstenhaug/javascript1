//for-satser
// EX 1
for (let i = 0; i < 10; i++) { //INTE VAR
    // console.log(i);
    //Skriver ut mellan 0-9
}
for (let i = 1; i <= 10; i++) {
    // console.log(i);
    //Skriver ut mellan 1-10
}
//Varannan
for (let i = 1; i <= 20; i = i + 2) {
    console.log(i);
}
console.log("---------------------------------");

//Exempel 3
let str = "";
for (let i = 1; i <= 10; i = i + 2) {
    str += i;
    if (i < 9) {
        str += " , ";
    }
}
console.log(str);
console.log("---------------------------------");
//EX 4
for (let i = 1; i <= 10; i++) {
    let rest = i % 3;
    if (i % 3 === 0)
        console.log(`${i} är delbart med 3`);
}

//Övning 2
console.log("---------------------------------");
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0)
        console.log(`${i} är delbart med 5`);
}

console.log("---------------------------------");
//Iteration över en array
let os = ["Windows", "Macintosh", "Linux"];
for (let i = 0; i < os.length; i++) {
    console.log(os[i]);

}

console.log("---------------------------------");
let data = [{
        name: "Ellinor",
        email: "ellinor.stenhaug@gmail.com"
    },
    {
        name: "Mahmud",
        email: "Mahmud@gmail.com"
    },
    {
        name: "Alexander",
        email: "Alexander@gmail.com"
    },
    {
        name: "Nisse",
        email: "Nisse@gmail.com"
    },
];

for (let i = 0; i < data.length; i++) {
    console.log(data[i].email);
}

console.log("--------------FOR-IN-------------------");
//FOR-IN-SATSEN
for (let i in data) { //in returnerar index
    console.log(`${i}:${data[i].name}`);
}

console.log("--------------FOR-OF-------------------");
for (let obj of data) {
    console.log(obj.name);
}

console.log("--------------FOR-OF-------------------");
let Data = [
    {
        name: "Ellinor",
        email: "ellinor.stenhaug@gmail.com",
        address: {
            street: "Tomtebodavägen 3a",
            county: "Solna",
            zipcode: "111 11",
        },
    },
    {
        name: "Alexander",
        email: "Alexander@gmail.com",
        address: {
            street: "Tomtebodavägen 10",
            county: "Solna",
            zipcode: "111 11",
        },
    },
    {
        name: "Nisse",
        email: "ellinor.jansson@hotmail.com",
        address: {
            street: "Tomtebodavägen 12a",
            county: "Solna",
            zipcode: "111 11",
        },
    }]
    
    for (let obj of Data) {
        console.log(`${obj.name} bor på ${obj.address.street}`);
    }