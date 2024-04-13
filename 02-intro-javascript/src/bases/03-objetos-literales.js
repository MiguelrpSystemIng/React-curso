

const persona = {
    nombre: 'Miguel',
    apellido: 'Rojas',
    edad: 25

};

 
console.log(persona);

//console.table(persona);
// se hace una copia del objeto persona sin apuntar al mismo espacio de memoria con el spread operator
const persona2 = {...persona};
persona2.nombre = 'Peter';