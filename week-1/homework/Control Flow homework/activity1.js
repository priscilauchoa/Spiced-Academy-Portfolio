function logType(whichTypeIs) {
    var typeOfVarible = typeof whichTypeIs;

    if (typeOfVarible === "undefined") {
        console.log("undefined!");
    } else if (Array.isArray(whichTypeIs)) {
        console.log("array!!");
    } else if (whichTypeIs === null) {
        console.log("null!");
    } else if (typeOfVarible === "function") {
        console.log("function!");
    } else if (isNaN(whichTypeIs)) {
        console.log("not a number!");
    } else if (typeOfVarible === "number") {
        console.log("number!");
    } else if (typeOfVarible === "string") {
        console.log("string!");
    } else if (typeOfVarible === "boolean") {
        console.log("boolean!");
    } else if (typeOfVarible === "bigint") {
        console.log("bigint!");
    } else if (typeOfVarible === "object") {
        console.log("object!");
    } else {
        console.log("I have no Idea!");
    }
}
// Test
logType(2);
logType("string");
logType("");
logType([]);
logType({});
logType(function () {});
logType(false);
logType(true);
logType(NaN);
logType(null);

// ______Data Types______

// "undefined!"
// "null!"
// "number!"
// "not a number!"
// "string!"
// "boolean!"
// "bigint!"
// "function!"
// "object!"
// "array!"
// "I have no idea!"
