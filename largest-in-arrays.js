// var numbers = [12, 44, 9.8473, 30, -12, 57382, 1, 0.3422];
// var largest = numbers[0];
// for (var i = 0; i < numbers.length; i++) 
// {
// if (numbers[i] > largest) {
//     largest = numbers[i];
// }
// }
// console.log(largest)

var numbers = [40, 100, 1, 5, 25, 10];
var largest = numbers [0];
var lowest = numbers [0];
for (var i = 0; i < numbers.length; i++ )
{
    if (numbers [i] > largest) {
        largest = numbers[i];
    }     
    if (numbers [i] < lowest) {
        lowest = numbers[i];
    }
}
console.log("largest number is " + largest)
console.log("lowest number is " + lowest)

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return a - b;
});
console.log(points)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits)


// shortcut console.log(Math.max(...numbers))
// shortcut console.log(Math.min(...numbers))