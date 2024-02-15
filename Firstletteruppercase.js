const name = ("john james jones")
var split = name.split(" ")
for (var i = 0; i < split.length; i +=1) {
    var letter = split[i].split("") 
    letter[0] = letter[0].toLocaleUpperCase()
    var word = letter.join("")
    split[i] = word
}      
var uppercaseName = split.join(" ")
console.log(uppercaseName)

// var splitIntoWords = result.split(" ")

// for (var i = 0; i < splitIntoWords.length; i += 1) {
// 	var currentWord = splitIntoWords[i]
// 	var lettersOfCurrentWord = currentWord.split("")
// 	var capitalizedLetter = lettersOfCurrentWord[0].toLocaleUpperCase()
// 	lettersOfCurrentWord[0] = capitalizedLetter
// 	var capitalizedWord = lettersOfCurrentWord.join("")
// 	splitIntoWords[i] = capitalizedWord
// }
// const capitalizedName = splitIntoWords.join(" ")
// console.log(capitalizedName)