





const getImage = async () => {


    try{
        const api_key = 'Qmar0HBJRlLnLaX5QQMHEsae5AiucqSG';
        const resp    = await fetch( `http://api.giphy.com/v1/gifs/trending?api_key=${api_key}` );
        const data = await resp.json(  );

        console.log( data.data[15].bitly_gif_url );

    }catch(err){
        console.log( err );
    }
}


getImage();