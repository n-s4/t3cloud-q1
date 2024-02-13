var rl = require ('readline-sync');
function getNumberFromUser (){ 
var reply = rl.question("give me a number:")
var NumberOrNot=Number(reply)
if (isNaN(NumberOrNot)){
    throw'Input must be a valid number.'
}else {
    return NumberOrNot
    }
} 
try {
var a = getNumberFromUser ()
var b = getNumberFromUser ()
} catch (err) {
console.error (err)    
}
console.log (a+b)

