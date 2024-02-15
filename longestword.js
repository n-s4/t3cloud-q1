var sentence = "hello how are you today"

function longWord(sentence){
    var split = sentence.split(" ")
    var longestword = ""
    for (i=0; i<split.length; i ++){
        if (split[i].length>longestword.length){
            longestword = split[i]
        } else if (split[i].length===longestword.length){
            var otherlongword = split[i]
            }
    }console.log(longestword + " "+ otherlongword )
    
}

longWord("my mname is sherab")



    