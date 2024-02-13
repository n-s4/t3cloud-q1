var readline = require('node:readline')

var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

 var story = ""
    
story = story + "his name is " 

 rl.question("what is your name?", username => {
 story = story + username + "."
          
 story = story + "his age is "

 rl.question("what is your age?", userage => {
story = story + userage + "'."

  story = story + "His hobby is "

 rl.question("what is your hobby?", userhobby => {
 story = story + userhobby + "."
console.log(story)
rl.close()
        })                   
     })
 }) 
