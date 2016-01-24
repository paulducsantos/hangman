var Letter = require("./letter.js");

function Word (wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;

  this.getLets = function () {
    for(var i = 0; i < word.length; i++) {
      var newLetter = Letter(word[i]);
    }
  }

  this.checkIfLetterFound = function (guessLetter) {
    var whatToReturn = 0;
    for (var i = 0; i < lets.length; i++) {
      if (lets[i].charac === guessLetter) {
        lets[i].appear = true;
        whatToReturn++;
        return whatToReturn;
      }
    }
  }

  this.didWeFindTheWord = function () {
    if (lets.every(function (curLet){
      return lets.appear === true;
    }) {
      this.found = true;
      return this.found;
    }
    
  }

  this.wordRender = function() {
    var str = "";
    for (var i = 0; i < lets.length; i++) {
      str.push(lets[i].letterRender);
      return str;
    }
  }
}

module.exports = Word;