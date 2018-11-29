//Övning 1
// document.body.onclick = message;
// function message() {
//     alert("Welcome!");
// }
//Övning 2

let btn = document.getElementsByTagName('button')[0];
btn.onclick = function () {document.body.bgColor = "teal";}

// btn.onclick = changeColor;

// function changeColor() {
//     document.body.bgColor = "red";
// }

