//EX 2
function changeFirstParagraphText() {
    let el = document.getElementsByTagName("p")[0];
    el.innerHTML = "Hello First Paragraph!";
}

function changeText(id) {
    let el = document.getElementById(id);
    el.innerHTML = "Hello Paragraph with id=" + id;
}

function changeColor(id, color) {
    let el = document.getElementById(id);
    el.style.color = color;
}

//EX 4
function hideElementById (id) {
    document.getElementById(id).style.display = 'none';  
}
function showElementById (id) {
    document.getElementById(id).style.display = 'block';    
}
//EX 7
function getTime() {
    let el = document.getElementById("time");
    setInterval(function(){
        el.innerHTML = new Date().toTimeString().substring(0,8);
    })

}