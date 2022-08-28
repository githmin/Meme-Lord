const img = document.getElementById('img');


document.getElementById('submit').addEventListener('click', UpdateGif);

function UpdateGif(){
    document.getElementById('loading').textContent = "Okay! Hold up here! Shit takes time to load SARGE!";
    var input = document.getElementById('inputvalue').value;
    var fetchUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=RsC2e1JpGuiMsdH354XQJWkgw8EXFNrw&s='+  input ;

    fetch(fetchUrl , {mode: 'cors'}) .then(function(response){
        return response.json();
    }).then(function(response){
        img.src = response.data.images.original.url ;
    })

}