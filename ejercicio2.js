'use strict'

/*
Hacer un programa que nos pida dos números y que nos diga: 
cuál es el mayor, el menor y si son iguales.
Si los números no son un número, o son menores o igual a cero,
tiene que volver a pedirlos.
*/

var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

console.log(numero1, numero2);

while( numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ){
    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('Introduce el segundo número', 0));
}

if(numero1 == numero2) {
    alert('Ambos números son iguales')
} else if( numero1 > numero2) {
    alert('El número 1 es mayor.') 
} else {
    alert('El número 2 es mayor.')
}