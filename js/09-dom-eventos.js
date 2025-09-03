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

  botaoModoNoturno.addEventListener("click", function() {
    pagina.classList.toggle("modo-noturno");
//----------------------------------------------------------------------

    pagina.style.transition ="2s";


    if (pagina.classList.contains("modo-noturno")) {
        botaoModoNoturno.textContent = "Desativar";
    } else {
        botaoModoNoturno.textContent = "Ativar";
    }
});
//-----------------------------------------------------------------------
//Exemplo 02
const janelaModal = document.querySelector("#janela");

/*Esta função lida com o evento monitorado pelo listener do document.

Se a posição Y do mouse for abaixo de zero, ou seja, acima do topo do doxumento, fazemos a janelinha ser exibida (showMedal) e desativamos o listener e a propria função, garantindo que essa rotina funcione somente uma vez*/ 
function gerenciarJanela(event){
    if(event.clientY < 0){
        janelaModal.showModal();
        document.removeEventListener("mouseout", gerenciarJanela);
    }

    
}
//Monitorando o evento mouseout no documento inteiro
document.addEventListener("mouseout", gerenciarJanela );

/*Selecionamos o botão existente DENTRO da janelaModal (já selecionada anteriomente)*/ 
const botaoFechar = janelaModal.querySelector("button");

//Quando acontecer o acionamento/clique no botão Fechar, fazemos a janelaModal fechar(close)
botaoFechar.addEventListener("click", function(){
    janelaModal.close();
});
        



