// first loop
//for(var i=0; i<10; i+=1) {
    //console.log (i)
//}

//MY very second Loop 
//var i = 0
//while (i<10){
 //   console.log(i)
 //   i += 1;
//}

//my third loop 
// var rl = require("readline-sync");

// var ShouldLoopRun = true

// while (ShouldLoopRun) {
//     var reply = rl.question("Should  I ask you another Question?")
//     if (reply !== "yes") {
//        ShouldLoopRun = false;
//     } 
// }
var rl = require('readline-sync');

var shouldlooprun = true 

while (shouldlooprun) {
    var reply = rl.question("Would you like to provide feedback?")
    if (reply !== "yes") {
        shouldlooprun = false;
        console.log("Thank you have a great day") 
    }
    
}


