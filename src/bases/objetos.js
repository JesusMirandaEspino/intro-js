const nombre = 'Jesus';
const apellido = 'Miranda';


const nombreCompleto =  `${nombre}  ${apellido}`;


const persona = {
    nombre: 'Jesus',
    apellido: 'Miranda',
    edad: 33,
    direccion: {
        ciudad: 'Quebec',
        pais: 'Canada'
    }
};


const getSaludo = () => {

    return `hola`;

} 

console.log( `${getSaludo()}`,  nombreCompleto );

console.log( { persona } );

const persona2 = {...persona};

console.log( { persona2 } );