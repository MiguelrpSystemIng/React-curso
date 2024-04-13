// un arreglo es una collecion de informacion dentro de una misma variable

// Array en JavaScript con tamaño fijo
//const arreglo1 = new Array();
// se puede agregar espacio
//arreglo1.push(1);

// Array convencional
const arreglo = [1,2,3,4];

// usando el spread operator podemos copiar el arreglo y agregar un nuevo elemento sin modificar el original
const arreglo2 = [...arreglo,5];

// map es una funcion que recorre el arreglo y devuelve un nuevo arreglo con los elementos modificados
const arreglo3 = arreglo2.map(function(number){ return number * 2; });


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);