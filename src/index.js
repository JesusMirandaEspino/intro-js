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