'use strict';

//Delcarando um array(vetor)
let jogadores = ["Neymar", "Garro", "Messi", "CR7"];
//acessando um determiado elemento atraves do indice
console.log(jogadores[0]);

//se quisermos visualizar a estrutura do array inteiro:
//console.log(jogadores)



console.log(`O ${jogadores[1]} está jogando muito no Corinthians`);

//Relembrando como criar/usar arrays (vetor)
// No JS, vc pode colocar qualquer coisa em uma array
let seiLa = 6;
const coisas= [10, "Senac", "<h2>Oie</h2>", seiLa, 15.88];
console.log(coisas[1]);
console.log(coisas[4]);


/* Exercícios (FAÇA AQUI MESMO!) */

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas, músicas, livros, comida... sei lá, inventa!)

let animes = ["Naruto", "Jujutsu", "Black Clover", "Blue Lock", "Fire Force", "Kaiju no 8", "Solo Leveling"];

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.
console.log(`Gosto bastante de animes como: ${animes[1]}, ${animes[4]} e ${animes [6]}`)

//Array como Matriz de 2 dimensões
const tecnologias = [
    ["HTML", "CSS", "JS"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express"]
]

//console.log(tecnologias [0])
console.log(tecnologias[0][2]);
console.log(tecnologias[1][0]);
console.log(tecnologias[2][3]);


