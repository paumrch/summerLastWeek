'use strict'

window.addEventListener('load', () => {


// Eventos del ratón

function cambiarColor(){

    console.log("Me has dado click")

    var bg = boton.style.background;

    if(bg == "green"){
        boton.style.background = "red";
    } else{
        boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return ;
}

// Click

var boton = document.querySelector("#boton")

boton.addEventListener('click', function(){
    cambiarColor()
})

// Mouse Over

boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
})


// Mouse Out

boton.addEventListener('mouseout', function(){
    boton.style.background = "blue";
})

// Focus
var input = document.querySelector('#campo_nombre')
input.addEventListener('focus', function(){
    console.log("Estás dentro del input")
})

// Blur
input.addEventListener('blur', function(){
    console.log("Estás fuera del input")
})

// Keydown
input.addEventListener('keydown', function(event){
    console.log("[keydown]Estás presionando la tecla:", String.fromCharCode(event.keyCode))
})

// Keypress
input.addEventListener('keypress', function(event){
    console.log("[keypress]Has presionado la tecla:", String.fromCharCode(event.keyCode))
})

}); 

// Final del Load