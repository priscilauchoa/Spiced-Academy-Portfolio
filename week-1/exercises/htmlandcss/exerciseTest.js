function timesTwo(num) {
    return num * 2;
}
var x = 29;
var doubleX;
doubleX = timesTwo(x);
var numbers = [x, doubleX];
var i;

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {};

numbers.y = doubleX;
console.log(numbers);

// STEP 1
// You should be in the folder that you have the repository;
// STEP 2
//git add .
