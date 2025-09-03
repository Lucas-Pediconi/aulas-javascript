'use strict';

const campoSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");

botaoMostrar.addEventListener("pointerdown", function(){
    campoSenha.type = "text";
});

botaoMostrar.addEventListener("pointerup", function() {
    campoSenha.type = "password";
});

botaoMostrar.addEventListener("pointerout", function() {
    campoSenha.type = "password";
});