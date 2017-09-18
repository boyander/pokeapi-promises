

/* Return a promise to request a pokemon with an ID */
const baseURL = "http://pokeapi.co/api/v2";
function requestPokemonPromise(pokeID){
  return $.ajax({
    url: `${baseURL}/pokemon/${pokeID}/`,
    dataType:'json',
  }).then(data => {
    let p = new Pokemon(pokeID,data.name,data.sprites.front_default);
    console.log(`We have ${pokeID} - ${p.name}`);
    return p;
  }).catch( e  => console.log(e));
}

/* Request N pokemons */
function requestPokemons(N){
  let rootElement = $("#pokemons");
  let pokemonPromises = [];
  for(var i = 1; i <= N; i++){
    console.log(`Getting pokemon ${i}`);
    pokemonPromises.push(requestPokemonPromise(i));
  }
  Promise.all(pokemonPromises).then(pokemons => {
    console.log(pokemons);
    pokemons.forEach( p => p ? p.addToDOM(rootElement): console.log("Error on pokemon"));
  });
}
