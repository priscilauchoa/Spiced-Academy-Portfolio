// Write a function that takes any number of numbers as arguments
// and returns the sum of those numbers

function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}

console.log(sum(5, 10)); //15

console.log(sum(5, 10, 15)); //30;

console.log(sum(5, 10, 15, 100, 200)); //330
