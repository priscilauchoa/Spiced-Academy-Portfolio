(function () {
    function translateNumberToGerman() {
        function askForNumber() {
            var num = prompt("Please enter a number between 1 and 10");
            try {
                if (num >= 1 && num <= 10 && num == parseInt(num)) {
                    return num;
                }
                throw new Error("Bad number");
            } catch (err) {
                console.log(err.message);
            }
            translateNumberToGerman();
        }

        var askForNumberFn = askForNumber();

        if (askForNumberFn == 1) {
            return alert("eins");
        } else if (askForNumberFn == 2) {
            return alert("zwei");
        } else if (askForNumberFn == 3) {
            return alert("drei");
        } else if (askForNumberFn == 4) {
            return alert("vier");
        } else if (askForNumberFn == 5) {
            return alert("fünf");
        } else if (askForNumberFn == 6) {
            return alert("sechs");
        } else if (askForNumberFn == 7) {
            return alert("sieben");
        } else if (askForNumberFn == 8) {
            return alert("acht");
        } else if (askForNumberFn == 9) {
            return alert("neun");
        } else if (askForNumberFn == 10) {
            return alert("zehn");
        }
    }
    translateNumberToGerman();
    // console.log(askForNumberFn);
    // // translateNumberToGerman();

    // translateNumberToGerman(askForNumber());
    //2  Write a function called translateNumberToGerman that tries to get a number between 1 and 10 by calling another function called askForNumber. Here is the askForNumber function you should use:
})();
