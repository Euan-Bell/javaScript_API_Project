const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');



const RickMorty = function() {
  this.rickMorty = [];
}


RickMorty.prototype.getData = function () {
  const request = new Request('https://rickandmortyapi.com/api/');
  request.get((data) => {
    PubSub.publish('rick_morty:data-ready', data);
    console.log('javaScript-Loaded');
  });

};

module.exports = RickMorty;
