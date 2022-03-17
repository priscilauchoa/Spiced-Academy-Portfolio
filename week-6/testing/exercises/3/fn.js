module.exports = function fn(strings) {
    // If a string as first argument
    if (typeof strings == "string") {
        return strings.split("").reverse().join("");
    }
    // If a array as first argument
    else if (Array.isArray(strings)) {
        const newStrings = [];
        for (let i = 0; i < strings.length; i++) {
            if (typeof strings[i] == "string") {
                newStrings.push(strings[i].split("").reverse().join(""));
            } else {
                newStrings.push(null);
            }
        }
        return newStrings;
    }
    // neither a string nor an array
    else {
        return null;
    }
};
