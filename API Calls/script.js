// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and used for
//         interacting with APIs to retrieve and send data asynchronously
//         over the web.
//         fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/Butterfree")
//     .then(responce => {
//         if(!responce.ok) throw new Error("Could not fetch data!");
//         else return responce.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));

async function fecthData(){
    const pokemonName = document.getElementById("input").value.toLowerCase();
    const img = document.getElementById("pokemon-image");

    try{
        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!responce.ok) throw new Error("Could not fetch data!");
        const data = await responce.json();
        const imgurl = data.sprites.front_default;
        img.src = imgurl;
        img.style.display = "block";

    }
    catch(error){
        console.error(error);
    }
}