import { heroes } from '../data/heroes';

// Path: src/data/heroes.js

//console.log(heroes);

// el método find() devuelve el primer elemento del
// array que cumple con la condición dada
export const getHeroeById = (id) => {
    return heroes.find( ( heroe ) => 
                            heroe.id === id);
};

//console.log(getHeroeById(2)); // Spiderman

// el método filter() devuelve un nuevo array con todos
// los elementos que cumplan con la condición dada
const getHeroesByOwner = (owner) => {
    return heroes.filter( ( heroe ) => 
                            heroe.owner === owner);
};

//console.log(getHeroesByOwner('DC')); // Batman, Superman, Flash