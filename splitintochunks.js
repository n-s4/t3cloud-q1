// var longnu = "11010111011101110001101010110100"
// // var split = longnu.split()
// for (var i=0; i < longnu.length; i+=4) {
//     var chunk =  longnu[i].split("") 
//     console.log (chunk)} 
// // function chunks(size, binary){
// //     binary = "" + binary

// // }

function chunks(chunkSize,binary){
    binary=""+binary
    var myarray=[];
    for (var i=0; i<binary.length; i+=chunkSize){
            myarray.push(binary.slice(i,i+chunkSize))
    }
    return myarray
}
console.log(chunks(4, 11010101010100010101))