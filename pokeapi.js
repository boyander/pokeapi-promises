/* jshint esversion:6 */
$(document).ready( () => {

  /* Pokemon data object */
  class Pokemon{
    constructor(number, name, image){
      this.number = number;
      this.name = name;
      this.image = image;
    }
  }

  /* add pokemon to DOM */
  const $pokemons = $("#pokemons");
  const addPokemon = (pokemon) => {
    const img = $('<img>').attr('src', pokemon.image);
    const name = $('<span>').append(`#${pokemon.number} - ${pokemon.name}`);
    const pokm = $('<div>').addClass('pokemon').append(img).append(name);
    $pokemons.append(pokm);
  };

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

  /* Request 9 pokemons */
  let pokemonPromises = [];
  for(var i = 1; i <= 151; i++){
    console.log(`Getting pokemon ${i}`);
    pokemonPromises.push(requestPokemonPromise(i));
  }
  Promise.all(pokemonPromises).then(pokemons => {
    console.log(pokemons);
    pokemons.forEach( p => p ? addPokemon(p): console.log("Error on pokemon"));
  });

});
