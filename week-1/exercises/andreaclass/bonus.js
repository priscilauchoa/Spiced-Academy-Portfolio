// Write a function that returns a function that can
//  be called repeatedly and passed a number each time. Each time it is
//  called it should return the sum of the number that is passed in
//  and all other numbers that were passed in previous calls. That is,
//  it should return the sum of all the numbers that were ever passed to it.

function getTotaler() {
    var currentNum = 0;
    function sumTotaler(addNum) {
        currentNum = addNum + currentNum;
        return currentNum;
    }
    return sumTotaler;
}
var totaler = getTotaler();
console.log(totaler(1));
console.log(totaler(2));
console.log(totaler(3));
