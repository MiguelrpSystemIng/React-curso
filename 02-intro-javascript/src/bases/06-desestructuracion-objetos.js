// desestructuración de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};

//const { nombre, edad, clave } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

// desestructuración de objetos en argumentos de funciones 
// si no se envía el argumento rango, se asigna un valor por defecto
const usecontext = ({ nombre, edad, clave, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        }

    };
}

const { nombreClave, anios , latlng:{lat,lng} } = usecontext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);