const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
const output = document.querySelector("#output");
const outputList = document.querySelector("#outputList");
const urlList = "https://pokeapi.co/api/v2/pokemon";
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    results = data;
    const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    output.innerHTML = html;
    console.log("first: ", results);
}
function doStuffList(data) {
    console.log(data);
    const pokeList = data.results;
    const outputList = document.querySelector("#outputList");
    outputList.innerHTML = "";
    pokeList.forEach((currentItem) => {
        outputList.innerHTML += `<li>${currentItem.name}</li>`;
    });
    console.log("first: ", pokeList);
}
async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
    const data = await response.json();
    doStuffList(data);
    }
}
getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);