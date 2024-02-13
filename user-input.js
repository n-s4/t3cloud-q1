var readline = require('node:readline')

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

var story =""

story = story + "once upon a time, there lived a person named "

rl.question("what's your name?", userName => {
story =story + userName + "."
    story = story + "They came from the beautiful village of "
    rl.question("what's your village name?", villageName => {
    story =story + villageName + "." 
        story = story + "he became the worlds greatest "
        rl.question("what is your profession?",
        profession=> {
        story =story +profession + "."
        console.log(story)
rl.close()
        })
    })
})    