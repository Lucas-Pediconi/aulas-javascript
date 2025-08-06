'use strict';


//exemplo 1: objeto com dados de uma pessoa
const pessoa = {
// propriedade: valor
    nome: "Chaves",
    idade: 8,
    cidade: "São Paulo",
    estado: "SP"
};

console.log("Exemplo 1")
console.log(pessoa);

console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade} ${pessoa.estado}.`)

const livro = {
    titulo: "Percy Jackson",
    autor: "Rick Riordan",
    volumes: [
        "O ladrão de Raios",
        "O mar de monstros",
        "A maldição dos Titã"
    ]
};

console.log("Exemplo 2")
console.log(livro);
/*Para acessar algum dos volumes, primeiro passamos pela propriedade (volumes) usando 'ponto' e, chegando nela, usamos os 'colchetes' com índice pois se trata de um array*/ 
console.log(livro.titulo);
console.log(`Meu livro favorito é ${livro.volumes[0]}`)

console.log("Exemplo 3")
const livros =  [ 
    {
        titulo: "O Assassinato no Expresso do Oriente",
        autor: "Agatha Christie"
    },

    {
        titulo:"Crepúsculo",
        autor: "Stephanie Myers"
    },
    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry"
    }
];
console.log(livros);

console.log(livros[2].titulo);
