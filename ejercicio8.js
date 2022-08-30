'use strict'

/*
1. Pida 6 números por pantalla y los meta en un array.
2. Tiene que mostrar el Array entero, todos sus elementos en el cuerpo de la página y en la consola.
3. Tenemos que sacar el Array ordenado.
4. Invertir su orden y mostrarlo.
5. Mostrar cuántos elementos tiene el array.
*/


// 1. Opción con new Array
// var numeros = new Array(6);

// 1. Opción con método Push
var numeros = []

for(var i = 0; i < 6; i++){
    // numeros[i] = parseInt(prompt("Introduce un número", 0));
    numeros.push(parseInt(prompt("Introduce un número", 0)));
}

// 2.
document.write("<h2>"+numeros+"</h2>")
console.log(numeros);

document.write("________________")
console.log("________________")

// 3. y 4.

var deMenorAMayor = numeros.sort();
console.log(deMenorAMayor)
var deMayorAMenor = numeros.reverse();
console.log(deMayorAMenor)

// 5.
console.log(numeros.length)



