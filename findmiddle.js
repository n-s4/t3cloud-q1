//       const name = ("kuzuzangpo")
//     var split = name.split("")
//     var middle = ()
//     if (split.length%2)
//     middle = numbers.findindex((("")/2) +((""/2)+1))
// console. 
    
// const aei = "Hello"
// const slice = aei.slice(2,3)
// console.log(slice)

var str = "nayan"
var iseven = str.length%2===0
if (iseven) {
    var startidx = (str.length/2)-1
    console.log(str.slice(startidx,startidx +2))
} else {
        var startidx = Math.floor(str.length/2)

        console.log(str.slice(startidx,startidx +1))
    }