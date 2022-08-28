'use strict'

/*
Hacer un programa que muestre todos los números impares
entre los introducidos por el usuario.
*/

var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

document.write("<h1>De " + numero1 + " a " + numero2 + " están los siguientes números impares: </h1>")
while (numero1 < numero2){
    numero1++
    if(numero1%2 != 0){
    document.write("<p>El "+numero1+" es impar.</p>")
    }
}