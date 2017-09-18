/* Pokemon data object */
class Pokemon{
  constructor(number, name, image){
    this.number = number;
    this.name = name;
    this.image = image;
  }

  addToDOM($parent){
      const img = $('<img>').attr('src', this.image);
      const name = $('<span>').append(`#${this.number} - ${this.name}`);
      const pokm = $('<div>').addClass('pokemon').append(img).append(name);
      $parent.append(pokm);
  }
}
