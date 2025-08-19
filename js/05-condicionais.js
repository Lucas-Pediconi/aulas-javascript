'use strict';

/*Comandos Condicionais mais comuns:
if      -> SE
else    -> SENÃO
*/

console.log("Exemplo 1");

let numero = 50;

// Condicional SIMPLES (usa apenas if)
if (numero >= 10) {
    console.log("Se você está vendo essa mensagem é porque a condição é VERDADEIRA!");
}

console.log("\nExemplo 2")

let aluno = "Lucas";
let idade = 18;

//Condicional COMPOSTA (if/else)

if (idade < 18) {
    console.log("O aluno é menor de idade");
}
else {
    console.log("O aluno é maior de idade");
}