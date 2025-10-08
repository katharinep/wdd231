const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
const html = `<ul id="outputList"></ul>`;
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
    const output = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    output.innerHTML = html;
    console.log("first: ", results);
}
function doStuffList(data) {
    console.log(data);
    const output = document.querySelector("#output");
    const pokeList = data.results;
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;

        output.innerHTML += html;
    });
    const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    output.innerHTML = html;
    console.log("first: ", results);
}
async function getPokemonList(urlList) {
    const response = await fetch(urlList);
    if (response.ok) {
    const data = await response.json();
    doStuffList(data);
    }
}
getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);