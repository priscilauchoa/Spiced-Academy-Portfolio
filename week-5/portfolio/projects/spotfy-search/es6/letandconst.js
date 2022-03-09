var name = "priscila"; // function scopo , local scopo

let nome = "priscila"; // a grande diferença é de escopo,  bloco escopo.
// com let vc nao pode sobreescrever uma variavel ou seja, vc nao pode criar duas vezes a mesma variavel, can not be reinicialise

//this is a block scope
// {

// }
//com let vc nao pode acessar a variavel antes de ser criada

// const nao pode reasign o valor, e tem bloco escopo

// com CONST pode mudar valor dentro do objeto ou Array, só nao pode reassinar a varivel const da const pra um novo array ou objeto
//sempre que inicia a variavel com const vc precisa atribuir o value

//FUNCTION DECLARATION
// var bigName = function (name) {
//     return name.toUpperCase();
// };

// console.log(bigName("priscila"));

//ARROW FUNCTION -
//se vc tem só um argumento pode deletar os parentes como abaixo
// var bigName = name => {

//se vc tem só uma expressao pode deletar o {} e o return como abaixo

var bigName = (name) => name.toUpperCase();

// var bigName = (name) => {
//     return name.toUpperCase();
// };

console.log(bigName("priscila"));

let arr = [1, 2, 3];
let newarray = [...arr];


{
    {
        [
            
        ]
    }
}