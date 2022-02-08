console.log("hello");

// empty values
// --undefined
// --null

var a = undefined;
var b = null;

console.log(a, b);
//    \n = next line - break line

// Boolean
var c = true;
var d = false;
console.log(c, d);

// numbers
var num = 1;
num;

// BigInt ---- biggestNumber
console.log(Number.MAX_SAFE_INTEGER);

// object
var cohort = {
    name: "Truffle",
    year: 2022,
};

// arrays
var cohorts = ["Truffle", "Onion", "Rue"];
console.log(cohorts, cohort);
// functions
function sum(a, b) {
    return a + b;
}

sum(1, 4);

console.log(typeof sum);

var h = 9n; //type Bigint

console.log(typeof h);
function greets(time) {
    if (time < 12) {
        console.log("Morning");
    } else if (time > 12 && time < 18) {
        console.log("afternoon");
    } else {
        console.log("evening");
    }
}
greets(20);

// ! NOT
// && and
// || or

var g = null;
var o = "Hello";

console.log(g || o); //nesse caso ele imprime o resultado true ou seja "Hello pois null é false por padrão"

// --------
// Short hand if block
var condition = 2 === 2;
function MyFunction() {
    return console.log("entrou na função");
}
// outra opcao de if ---> nesse caso ele verifica de condition é true se for ele chama myFunction
condition && MyFunction();

// switch (time) {
//     case 10:
//         console.log("Morning");
//         break;
//     case 12:
//         console.log("afternoon");
//         break;
//     case 18:
//         console.log("evening");
// }

// ternary operator
// condition ? iftrue : iffalse

// _____________LOOPS_______________
// for
console.log("\nCohorts with for");
for (var i = 0; i < cohorts.length; i++) {
    console.log("---> " + cohorts[i]);
}

// for ... of bom pra array
console.log("\nCohorts with for ... of");
for (var j of cohorts) {
    console.log("---> " + j);
}

// while
var p = 0;
while (p < 10) {
    console.log("-> " + p);
    p++;
}

// for..in  só para object

for (var propertyKey in cohort) {
    console.log(cohort[propertyKey]);
}
