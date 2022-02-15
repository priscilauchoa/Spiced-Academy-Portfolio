// Write a function called invertCase that expects a string as a parameter. This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should become uppercase. Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods that all strings have will come in handy here.

function invertCase(input) {
    var i;
    var output = "";

    for (i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) {
            output = output + input[i].toLowerCase();
        } else {
            output = output + input[i].toUpperCase();
        }
    }

    return output;
}

console.log(invertCase("pRIsCilA fLorEs"));
