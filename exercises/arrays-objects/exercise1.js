// Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.

// If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second.

// If the first parameter is an object, it should loop over the object's properties and call the callback for each one. The property value should be the first parameter passed to the callback and the property name should be the second.

// You can test your function with the example below:

function each(arrayOrObject, callback) {
    if (Array.isArray(arrayOrObject)) {
        // console.log("array");
        for (var i = 0; i < arrayOrObject.length; i++) {
            callback(arrayOrObject[i], i, i * i);
        }
    } else if (typeof arrayOrObject === "object") {
        // console.log("Object!");
        for (var proper in arrayOrObject) {
            callback(arrayOrObject[proper], proper);
        }
    } else {
        console.log("It is not array or Object");
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

// function cb(value1, value2, value3) {
//     console.log(value1, value2, value3);
// }

// each({ numero: 2 }, cb);

// var parametro = each;
// var arraynovo = { numero: 2 };

// console.log(parametro(arraynovo));
