

const getImagenPromesa = async() => {
    
        try {
                const apiKey = 'E2K39YL66rAiiMheEI4obKJmlHVoZ4Sc';
                const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
                const {data} = await resp.json();
        
                const {url} = data.images.original; // desestructuración
        
                console.log(url);
        
                const img = document.createElement('img');
                img.src = url;
                document.body.append(img);
        }
        catch (error) {
                // manejo del error
                }

}

getImagenPromesa();