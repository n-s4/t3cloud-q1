var rl = require ('readline-sync');
let ans = Number("")
for (var i=0 ; i<5 ;i++) {
    var number = Number(rl.question("Enter a number:\n"))
    if (isNaN(number)){
        console.log("Enter number")
    }
    const choice =  rl.question("would you like to \n1) Add \n2) subtract \n3) Multiply \n4) Divide \n")
    if (choice ==='1'){
    ans += number}
    else if (choice==='2'){
    ans -= number}
    else if (choice==='3'){
    ans *= number}   
    else if (choice==='4'){
    ans /= number}
    else {console.log('select a valid option')} 
console.log ('Your answer ='+ans)    
    }
