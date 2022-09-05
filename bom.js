'use strict'

// Browser Object Model

function getBoom(){
console.log(screen.width);
console.log(screen.height);
console.log(window.location.href)
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url);
}

getBoom()






