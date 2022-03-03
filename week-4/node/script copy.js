console.log();

// quando vc roda o code no terminal vc starta node process

const handlebars = require("handlebars"); // colocar no topo do documento (boas práticas)

console.log(handlebars);

const tmpl = handlebars.compile("Hello, {{name}}"); // compila handlebars instalados como modulos node.
console.log(tmpl({ name: "Priscila" })); //passando um objeto como parametro.

const url = require("url");
const qs = require("querystring");
console.log(process.env);
