'use strict'

const campoBusca = document.querySelector("#busca");
const times = document.querySelectorAll("#times li");

campoBusca.addEventListener("input", function(){
    const termoDigitado = campoBusca.value.toLowerCase();
    

    for(const time of times ){
        //se o nome do time incluir algum caractere digitado
        if(time.textContent.toLocaleLowerCase().includes(termoDigitado)){
            time.style.display = "list-item";
        } else{
            time.style.display = "none";
        }
    }
});