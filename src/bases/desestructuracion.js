// Desestructuraciones

const persona = {
    nombre: 'Jesus',
    edad: 33,
    clave: '12wrt41gf8r'
}

const { nombre, edad, clave,  } = persona;

const retornarPersona = ( { nombre, clave, edad, rango = 'Junior' } ) => {
    return { 
        nombreNormal: nombre, 
        edadReal: edad, 
        codigo: clave, 
        nivel: rango,
        origen: {
            pais: 'Mexico',
            estado: 'Jalisco'
        }
    }
}


const { nombreNormal, edadReal, origen:{ pais, estado  } } = retornarPersona( persona );

console.log(  pais, estado );
console.log( nombreNormal );


const personajes = [ 'Mutuelo', 'Mutuell', 'Ramo' ];

const [ mutuelo, , ramo  ] = personajes;

console.log( mutuelo, ramo );

const retornaArreglo = () => {
    return [ 'ABC', 123 ];
}


const [ letras, numeros ] = retornaArreglo();

console.log( letras, numeros );


const otro = ( valor ) => {
    return [ valor, ()=>{console.log( 'Hola mundo' );} ];
}


const [ nombre1, setNombre ] = otro('Jesus');


console.log( nombre1 );
setNombre();