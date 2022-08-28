'use strict'

/*
Tabla de multiplicar de un número introducido por pantalla.
*/

var numero = parseInt(prompt('¿De qué número quieres la tabla?', 0));

document.write("<h1>Tabla del: "+numero+"</h1>")
for (var i = 1; i <= 10; i++){
    document.write(
        "<p> 5 x " + i +" = "+ (i*numero)+"</p>"
        )
}