'use strict'

window.addEventListener('load', () => {

// Timers
function intervalo(){
    var tiempo = setInterval(function(){
        console.log("Set interval ejecutado");

        var encabezado = document.querySelector("#encabezado");

        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "45px";
        }else{
            encabezado.style.fontSize = "50px"
        }

    }, 1000);
    return tiempo;
}

var tiempo = intervalo();
   
var stop = document.querySelector("#stop")
stop.addEventListener("click", function(){
    alert("Has parado el tiempo")
    clearInterval(tiempo);
})

var start = document.querySelector("#start")
start.addEventListener("click", function(){
    alert("Has arrancado el tiempo")
    intervalo();
})

}); 

// Final del Load