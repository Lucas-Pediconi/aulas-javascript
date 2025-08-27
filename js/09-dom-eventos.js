'use strict';

/* Exemplo 01 */

// Procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 = document.querySelector("#exemplo1");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");




/*Para selecionar vários elementos, use querySelectionAll. O resultado é uma esécie de array de elementos (NodeList).*/
const paragrafo = document.querySelectorAll("p");
console.log(paragrafo);

/*Sobre eventos
Um evento é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa/site/aplicação.

o JavaScript suporta centenas de tipos de eventos. Exemplos: clique do mouse, pressionar teclas, tocar na tela , rolagem da página, carregamento da página e etc.*/

//Exemplo Detectando eventos
exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "Vai Corinthians!";
    mensagem01.classList.add("destaque")
});

mensagem01.addEventListener("dblclick",function(){
    mensagem01.textContent = "";
    mensagem01.classList.remove("destaque")
});


//Exercicios
const titulo = document.querySelector("h1");

    titulo.addEventListener("mouseover",function(){
        titulo.textContent = "Praticando Eventos!";
        titulo.classList.add("titulo_h1");
        /*solução 2: usando style inline
        titulo.style.textAlign = center    */
});

const referencia = document.querySelector("#referencia1");

    referencia.addEventListener("click",function(){
        titulo.textContent = "Eventos!";
        titulo.classList.remove("titulo_h1");
    });

// Exemplo 3

const botaoModoNoturno = document.querySelector("#noturno");

    botaoModoNoturno.addEventListener("click", function(){
        pagina.classList.toggle("modo-noturno");
    })

     botaoModoNoturno.addEventListener("click", function(){
        botaoModoNoturno.textContent = "Desativar";
        
       
    })    



