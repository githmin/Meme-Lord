const img = document.getElementById('img');



document.getElementById('submit').addEventListener('click', UpdateGif2);

// function UpdateGif(){
//     document.getElementById('loading').textContent = "Okay! Hold up here! Shit takes time to load SARGE!";
//     var fetchUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=RsC2e1JpGuiMsdH354XQJWkgw8EXFNrw&s='+  input ;

//     var input = document.getElementById('inputvalue').value;
//     fetch(fetchUrl , {mode: 'cors'}) .then(function(response){
//         return response.json();
//     }).then(function(response){
//         img.src = response.data.images.original.url ;
//     })

// }


async function UpdateGif2(){
    try{
        document.getElementById('loading').textContent = "Okay! Hold up here! Shit takes time to load SARGE!";
        var input = document.getElementById('inputvalue').value;
        var fetchUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=RsC2e1JpGuiMsdH354XQJWkgw8EXFNrw&s='+  input ;

        var response = await fetch(fetchUrl ,  {mode: 'cors'})
        var encoded = await response.json()
        img.src = encoded.data.images.original.url
    } catch( error ){
        console.log(error)
    }
}