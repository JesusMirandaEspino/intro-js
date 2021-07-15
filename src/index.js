import { getHeroeByid, getHeroeByOwner } from './bases/exports';


const promesa = new Promise( ( resolve, reject )=>{
    setTimeout( ()=>{
        const heroes = getHeroeByid(2);
        resolve( heroes );
    }, 2000 );
} );


promesa.then( (heroes) => {
    console.log( heroes );
} )
.catch( err => console.log( err ) );



const getHeroeByidAsync = ( id ) => {

   return  new Promise( ( resolve, reject )=>{
        setTimeout( ()=>{
            const heroes = getHeroeByid( id );
            if(heroes){
                resolve( heroes );             
            }else{
                reject( 'No se encontro el heroe con el id seleccionado' );
            }

        }, 2000 );
    } );


}


getHeroeByidAsync(10).then( (heroe) => {
    console.log( heroe );
} ).catch( err => console.log( err ) );

