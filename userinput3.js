var rl = require('readline-sync')

var story = ""

story = " is his fav game"

var usergame = rl.question ("what is your fav game?")
story = usergame + story + "."

story = story + " it is a "

var usertype = rl.question (" what kind of game is it?")
story = story + usertype + "."

console.log(story)