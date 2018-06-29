const RickMorty = require('./models/rick_morty.js');
const RickMortyInputView = require('./views/rick_morty_inputview.js');

document.addEventListener('DOMContentLoaded', () => {
  // const listContain = document.querySelector('#rickMorty-list');
  console.log("Js Loaded");

  const rickMorty = new RickMorty();
  rickMorty.getData();
});
