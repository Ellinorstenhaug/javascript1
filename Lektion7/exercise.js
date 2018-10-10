//Skapa följande objekt: 
//Object - bil
//Properties car.name = fiat        metod: car.start()
//           car.model=500                  car.drive()
//           car.weight=850kg               car.brake()
//           car.color = white              car.stop()

let car = {
    //Egenskaper, properties
    name:"fiat",
    model:"500",
    weight:"850kg", 
    color:"white",
    //Metoder
    start: function(){console.log("Start..."); return "i will start..";},
    drive: function(){console.log("Drive...");},
    brake: function(){console.log("Brake...");},
    stop: function(){console.log("Stop...");}

};
console.log(car.name);
console.log(car.start());

let person = {};
let cars = [];
console.log(typeof person); // Object
console.log(typeof cars); // Object

// Skapa ett objekt som innehåller info om denna kurs.
let course = {
    courseName : "Javascript1",
    teacher: "Mahmud", 
    school: "Nackademin", 
    period: "first",
    weeks: 7,
}

//Skapa tre objekt som innehåller info om olika bilar

let car1 = {
    licenseNumber:  "CLO745",
    fabrikat:       "Saab",
    modell:         "95",
    modellår:       1998,
    växellåda:      "Manuell", 
    miltal:         19248,
    tillverkningsår:1999,
    bränsle:        "Bensin"
};

let car2 = {
    licenseNumber:  "OUE342",
    fabrikat:       "Skoda",
    modell:         "Fabia",
    modellår:       2008,
    växellåda:      "Manuell", 
    miltal:         11008,
    tillverkningsår:2008,
    bränsle:        "Diesel"
};

let car3 = {
    licenseNumber:  "WHZ234",
    fabrikat:       "Volvo",
    modell:         "v50",
    modellår:       2014,
    växellåda:      "Manuell", 
    miltal:         12308,
    tillverkningsår:2015,
    bränsle:        "Bensin",
};

// Skapa en funktion som byter plats mellan två olika variabler
let x = 1;
let y = 2;

function swap() {
    y = [x, x = y][0];
}

console.log(x, y);
swap()
console.log(x, y)