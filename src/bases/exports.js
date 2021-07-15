import { heroes } from '../data/heroes';

//console.log( heroes );

/*
const getHeroeByid = (id) => {
    return heroes.find( (heroe) => {
        if(heroe.id === id){
            return true;
        }
        return false;
    } );
}
*/

const getHeroeByid = (id) => heroes.find( (heroe) => heroe.id === id );

const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );



export { 
    getHeroeByid,
    getHeroeByOwner
}