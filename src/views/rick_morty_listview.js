const PubSub = require('../helpers/pub_sub.js');
const RickMorty = require('../models/rick_morty.js');


const RickMortyListView = function() {
  this.container = container;
};


RickMortyListView.prototype.bindEvents = function () {
  PubSub.subscribe('rick_morty:data-ready', (event) => {
    this.renderRickMortyListView(event.detail);
    console.log(event);
  });

RickMortyListView.prototype.renderRickMortyListView = function (Characters) {
  forEach((Character) => {
    const characterItem = this.createCharacterListItem(Character);
    this.container.appendChild(characterItem);
  });
};

RickMortyListView.prototype.createCharacterListItem = function (character) {
  const RickMortyListView = new rickMortyDetailView();
  const rickMortyDetail = rickMortyDetailView.createrickMortyDetail(character);
  return characterDetail;
};

};
module.exports = RickMortyListView;
