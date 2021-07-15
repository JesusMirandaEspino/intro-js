const api_key = 'Qmar0HBJRlLnLaX5QQMHEsae5AiucqSG';

const peticion = fetch( `http://api.giphy.com/v1/gifs/trending?api_key=${api_key}` );


peticion.then( resp =>  resp.json()   )
    .then(  ( { data } )=> { 
        const dataArray =  data 
    
        dataArray.forEach( item  => {
            let img = document.createElement( 'img' );
            let imgGif = item.bitly_gif_url; 
            img.src = imgGif;
            document.appendChild( img );
        }  )
    
    } )
    .catch( console.warn );