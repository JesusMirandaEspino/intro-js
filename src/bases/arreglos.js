//TODO .. const arreglo = new array();

const arreglo = [1,2,3,4,5,6];

//arreglo.push( 1 );
//arreglo.push( 2 );
//arreglo.push( 3 );
//arreglo.push( 4 );

console.log( arreglo );

let arreglo2 = [ ...arreglo, 7, 8 ];

let arreglo3 = arreglo2.map( (numero) => {
    return numero * 2;
} );

console.log( '=====================' );
console.log( arreglo2 );
console.log( '=====================' );
console.log( arreglo3 );