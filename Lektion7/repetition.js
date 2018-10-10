function foo() {
    a = a * 2;
    a = a + 3;
}

var a = 10;
foo();

console.log(a);
 
foo();
foo();

console.log(a);

function foo(b) {
    A = A * 2;
    A = A + b;
}
var A = 10;
foo(100);
console.log(A);

