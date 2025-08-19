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

console.log("\nExemplo 2");

let aluno = "Lucas";
let idade = 18;

//Condicional COMPOSTA (if/else)

if (idade < 18) {
    console.log("O aluno é menor de idade");
}
else {
    console.log("O aluno é maior de idade");
}


/*1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)
 
2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado".*/

console.log("\n Exercicio 1");

let nota1 = 6;
let nota2 = 10;

let media = (nota1 + nota2) / 2;


console.log("Média: " +media);
if (media >= 7){
    console.log("Aprovado");
} 
else{
    console.log("Reprovado");
}

 console.log("\nExemplo 3");

//Condicional ENCADEADA/SUCESSIVA

/*Verificando o desempenho do aluno conforme a média:
- Média acima de 9? ótimo
- Média acima de 7? bom
- Média acima de 5? ruim
- Média até 5? péssimo*/

if(media > 9){
    console.log("ÓTIMO");
} 
else if(media > 7){
    console.log("BOM");
}
else if (media > 5){
    console.log("RUIM");
}
else{
    console.log("PÉSSIMO");
}


