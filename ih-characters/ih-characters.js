/* jshint esversion:6 */
$(document).ready( () => {

  /* Return a promise to request a pokemon with an ID */
  const baseURL = " https://ih-api.herokuapp.com";

  // Edita un character pasando el id y los nuevos datos
  window.editCharacter = function(characterID, obj_edit){
    return $.ajax({
      url: `${baseURL}/characters/${characterID}/`,
      data: obj_edit,
      method: "PATCH",
      dataType:'json',
    }).then(e => {
      console.log(e);
      return e;
    }).catch( e  => console.log(e));
  };

  window.readCharacter = function(characterID){
    return $.ajax({
      url: `${baseURL}/characters/${characterID}/`,
      dataType:'json',
    }).then(e => {
      console.log(e);
      return e;
    }).catch( e  => console.log(e));
  };

});
