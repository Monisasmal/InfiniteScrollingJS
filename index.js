let apiKey = "L-3I4d5ctSIVguesfh323yAcZsRJiC-wOgRvGKoUixI";
let apiUrl =  `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`;

async function getPhotos(){
    try{
    let response = await fetch(apiUrl);
    let result = await response.json();


  let scrollSec = document.querySelector(".box");
    result.forEach((photo) =>{
        let img = document.createElement('img');
        img.classList.add("imgs");
        img.src = photo.urls.regular;
        // img.style.height = "500px";
        // img.style.width = "400px";
        scrollSec.appendChild(img);
    })
}catch(error){
    console.log(error);
}
}

getPhotos();


// for repeating the images

window.addEventListener("scroll", function(){
    if(Math.ceil(window.scrollY + window.innerHeight) >= document.body.offsetHeight){
        getPhotos();
    }
})