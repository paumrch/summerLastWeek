'use strict'

/*
Calculadora que pida 2 números por pantalla.
Si metemos uno mal, que nos lo vuelva a pedir.
En el cuerpo de la página, en una alerta y en la consola, el resultado de
sumar, restar multiplicar y dividir esas dos cifras.
*/

var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));



while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('Introduce el primer número', 0));
}

var resultado = "La suma de "+numero1+" + "+numero2+" da como resultado = "+(numero1+numero2)+".</br>"+
"La resta de "+numero1+" + "+numero2+" da como resultado = "+(numero1-numero2)+".</br>"+
"La multiplicación de "+numero1+" + "+numero2+" da como resultado = "+(numero1*numero2)+".</br>"+
"La división de "+numero1+" + "+numero2+" da como resultado = "+(numero1/numero2)+".</br>"

document.write(resultado);
console.log(resultado);

// document.write("<h1>Tabla del: "+numero+"</h1>")
// for (var i = 1; i <= 10; i++){
//     document.write(
//         "<p> 5 x " + i +" = "+ (i*numero)+"</p>"
//         )
// }