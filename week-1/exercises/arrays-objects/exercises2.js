// Write a function that takes an array as a
// parameter and returns a new array
// containing all of the items that are in
// the array that was passed in but in reverse
// order. Unlike the reverse method that all
// arrays have, this function
// should leave the original array unchanged.
// If you wrote a valid reverse() function, you should get the following output:

function getArray(originalArray) {
    // var firstArray = originalArray;
    var newArraySliced = originalArray.slice(0, originalArray.length);
    console.log(newArraySliced);
    return newArraySliced.reverse();
}

var originalArray = [1, 2, 3];

console.log(getArray(originalArray)); // [1, 2, 3]
// console.log(reversedArray); // [3, 2, 1]
