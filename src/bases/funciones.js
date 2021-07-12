const saludar = function(nombre){
    return `Hola: ${nombre}`
}

const saludar2 = (nombre) =>  {
    return `Hola: ${nombre}`
}

const saludar3 = (nombre) =>  `Hola: ${nombre}`;

const getUser = () => {
    return {
        uid: '1235451223431sqew',
        nombre: 'gtdst545'
    }
}

const getUser1 = () => 
    ({
        uid: '1235451223431sqew',
        nombre: 'gtdst545'
    });

const getUsuarioActivo = ( nombre ) => 
    ({
        uid: '1235451223431sqew',
        nombre: nombre
    });

const usuarioActivo = getUsuarioActivo( 'Jesus' );




console.log( usuarioActivo );