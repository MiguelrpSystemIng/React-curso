import {getHeroeById} from './bases/08-importaciones-exportaciones'


// promesas

// las promesas tiene resolve y reject
// resolve: se ejecuta cuando la promesa se cumple
// reject: se ejecuta cuando la promesa no se cumple

const getHeroeByIdAsync = (id) => {

return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        
        const heroe = getHeroeById(id);
        if(heroe){
            
            resolve(heroe);
        }
        else{
            reject('No se pudo encontrar el héroe');
        }
                }, 2000)
})

}

getHeroeByIdAsync(1)
        .then(console.log)
        .catch(err => console.warn(err));   

        