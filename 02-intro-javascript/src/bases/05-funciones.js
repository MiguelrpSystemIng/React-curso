// funciones en Js

// Funcion normal
function Saludar(nombre) {
    return `Hola ${nombre}`;
}

// Funcion flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

// Funcion flecha simplificada
const saludar3 = (nombre) => `Hola ${nombre}`;

// Funcion flecha simplificada sin parametros
const saludar4 = () => `Hola Mundo`;

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const getUserActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});



console.log(Saludar('Juan'));
console.log(saludar2('Juan'));
console.log(saludar3('Juan'));
console.log(saludar4());
console.log(getUser());
console.log(getUserActivo('Juan'));
