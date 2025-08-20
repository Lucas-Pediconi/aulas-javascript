'use strict';

/*Normalmente, os loops são controlados através de uma variável contadora. Esta variável é comumente chamada de "i", "j", "k" ou qualquer outra letra se necessário */



console.log("Exemplo 1: WHILE (enquanto)");

let i = 1;
while (i <= 5) {
    console.log("Valor do contador: " +i);
    i ++; // incremento
    //i = i + 1;
}
//for(inicialização da variável; condição; atualização)
console.log("\nExemplo 2: FOR (para)");
    for( let j = 1; j <= 10 ; j++){
        console.log("J vale: "+j);
    }

console.log("\n Exemplo 3: loop regressivo")
    for(let k = 10; k >= 1 ; k-- ){
        console.log("O valor de K é: "+k);
    } 

console.log("\n Exemplo 4: loop e array");

    const times = ["Corinthians, Barcelona, Real Madrid, Liverpool, Milan"];

    //Usando loop for tradicional
    for(let i = 0; i < times.length; i++ ){
        console.log( times[i] );
    }

    
    
console.log("\n---------\n")

    //usando loop for/of (exclusivo do JS)
    //usamos uma var/const para acessar cada elemento do array(no caso, times)
    for(const time of times){
        console.log(time);
    }

console.log("\nExemplo 5: loop e ojeto");

const pessoa = {
    nome: "Cleiton do Arrasa",
    idade: 40,
    cidade: "São Paulo",
    estado: "SP"
};

//for/in para objetos (exclusivo do JS)
    for(const prop in pessoa ){
        console.log(pessoa[prop]);
    }

/*Exercício: Loop com array de objetos
Geral Orientações:
 
1. Faça um array chamado "clientes" contendo 3 objetos.
 
Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
 
2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
- Cliente: Dio, id: 1

- Cliente: Ozzy, id: 2

- Cliente: Ian, id: 3
  */
