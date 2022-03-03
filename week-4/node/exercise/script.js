const url = require("url");
const querystring = require("querystring");
const { argv } = process;
const chalk = require("chalk");

let urlTyped = argv[2];

const myURL = new URL(urlTyped);
console.log(chalk.blue("________________________________________"));
console.log("The protocol is", myURL.protocol);
console.log("The host is", myURL.host);
console.log("The hostname is", myURL.hostname);
console.log("The port is", myURL.port);
console.log("The pathname is", myURL.pathname);
console.log("The query is", myURL.search);

// var searchVar = myURL.search;
var querystringObj = querystring.parse(
    myURL.search.split("").splice(1).join("")
);
console.log("The value of the a parameter is", querystringObj.a);
console.log("The value of the b parameter is", querystringObj.b);
console.log(chalk.blue("________________________________________"));

// node index.js "http://127.0.0.1:8080/test?a=100&b=200"

// The protocol is http:
// The host is 127.0.0.1:8080
// The hostname is 127.0.0.1
// The port is 8080
// The pathname is /test
// The query is a=100&b=200
// The value of the a parameter is 100
// The value of the b parameter is 200
