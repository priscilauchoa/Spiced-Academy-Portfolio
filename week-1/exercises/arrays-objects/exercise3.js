// Write a function called getLessThanZero that expects an array of
//  numbers to be passed to it and returns a new array containing only those numbers
//  from the array that was passed in that are less than zero.

function getLessThanZero(arrayNumbers) {
    Array.isArray(arrayNumbers);
    return arrayNumbers.filter(function (num) {
        return num < 0;
    });
}
console.log(getLessThanZero([1, 2, -1, -90, 10]));
