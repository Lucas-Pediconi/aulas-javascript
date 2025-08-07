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


//Ecercicios

/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro

2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */


const aluno = {
    nome_completo: "Lucas Pediconi",
    data_nascimento: "13/02/2005",
    lista_telefones: [
        "11 98752-3536",
        "11 94214-0909"
    ],
    endereço: {
        rua:"R Epaminondas",
        numero:122,
        bairro:"JD Roberto",
    }
}

console.log(`Eu me chamo ${aluno.nome_completo} nasci no dia ${aluno.data_nascimento}, meu telefone é ${aluno.lista_telefones[1]} e moro na ${aluno.endereço.rua} número ${aluno.endereço.numero} bairro ${aluno.endereço.bairro}`)




