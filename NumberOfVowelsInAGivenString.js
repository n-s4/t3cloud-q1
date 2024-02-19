// hello
// goodbye
// computerize
// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;
//   console.log(countVowels("hello my name is Sherab"))

function gettingOfVowels(someString){
  var counter=0
  for (var i=0; i<someString.length; i++){
      if ("aeiou".includes(someString[i])){
          counter+=1
      }
  }
  return counter
}
console.log(gettingOfVowels("hello my name is sherab"))