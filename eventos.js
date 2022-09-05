'use strict'

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
