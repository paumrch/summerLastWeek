'use strict'

/*
Hacer un programa que nos pida dos números y que nos diga: 
cuál es el mayor, el menor y si son iguales.
*/

var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

console.log(numero1, numero2);

if(numero1 == numero2) {
    alert('Ambos números son iguales')
} else if( numero1 > numero2) {
    alert('El número 1 es mayor.') 
} else {
    alert('El número 2 es mayor.')
}