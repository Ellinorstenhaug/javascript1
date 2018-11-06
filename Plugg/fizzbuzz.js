// for (let i = 1; i <= 100; i++) {
//     let print = "";
//     if (i % 3 === 0) print += "Fizz";
//     if (i % 5 === 0) print += "Buzz";
//     if (print === "") print = i;
//     console.log(print);
// }
for(let i=1;i<100;i++)
  console.log(( i%3 ? '' : 'fizz' ) + ( i%5 ? '' : 'buzz' ) || i)