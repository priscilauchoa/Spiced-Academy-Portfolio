// Write a function named waitThenRun that takes another
// function as an argument. It should wait 1.5 seconds and then
// run the function that was passed in.
//

function waitThenRun(funcArg) {
    setTimeout(funcArg, 1500);
}
waitThenRun(function () {
    console.log("Hello!😃");
    waitThenRun(function () {
        console.log("Goodbye! 👋");
    });
});
