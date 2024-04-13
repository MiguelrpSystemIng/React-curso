// Fetch Api

const apiKey = 'E2K39YL66rAiiMheEI4obKJmlHVoZ4Sc'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then( response =>  response.json() )
  .then( ( {data} ) => {
   const  url  = (data.images.original.url)
   console.log(url)

    //creacion de imagen en el html
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);


  })
  .catch( console.warn);
