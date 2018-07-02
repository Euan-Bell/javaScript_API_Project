const RickMorty = require('./models/rick_morty.js');
const RickMortyListView = require('./views/rick_morty_listview.js');

document.addEventListener('DOMContentLoaded', () => {
  // const listContain = document.querySelector('#rickMorty-list');
  console.log("Js Loaded");

  const rickMorty = new RickMorty();
  rickMorty.getData();
  // console.log(rickMorty.getData());
});
