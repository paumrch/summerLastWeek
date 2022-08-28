'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los números 
introducidos hasta introducir un número negativo y mostrar ahí el resultado.
*/

var suma = 0;
var contador = 0;

do {

    var numero = parseInt(prompt('Introduce numeros hasta que introduzcas uno negativo', 0));
    
    if(isNaN(numero)){
        numero = 0;
    } else if(numero>0) {
        suma = suma + numero;
        contador++;
    };

    console.log(suma)
    console.log(contador)

} 
while (numero >= 0)

var media = suma / contador;

console.log(
    'La suma da como resultado: ' + suma + '. Y el contador ha dado ' + contador + ' vueltas. La media es ' + (suma / contador) + '.' 
)

alert(
    'La suma da como resultado: ' + suma + '. Y el contador ha dado ' + contador + ' vueltas. La media es ' + media + '.' 
)