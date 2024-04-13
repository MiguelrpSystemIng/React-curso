// Desestructuracion de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras,numeros] = retornaArreglo();   
console.log(numeros);
console.log(letras);

// Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const usestate = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombre, funcion] = usestate('Miguel');

console.log(nombre);
console.log(funcion);
