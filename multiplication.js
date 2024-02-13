const readline = require("readline-sync");
let num = Number( readline.question("Enter a number to generate its multiplication table till 12: " ));
let i = 1;
while (i <= 12) {
  console.log(num + " x " + i + " = " + num * i);
  i++;
}