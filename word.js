var Letter = require("./letter.js");

function Word (wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;

  this.getLets = function () {
    for(var i = 0; i < this.word.length; i++) {
      this.lets[i] = new Letter(this.word[i]);
    }
  }

  this.checkIfLetterFound = function (guessLetter) {
    var whatToReturn = 0;
    for (var i = 0; i < this.lets.length; i++) {
      if (this.lets[i].charac === guessLetter) {
        this.lets[i].appear = true;
        whatToReturn++;
      }
    }
    return whatToReturn;
  }

  this.didWeFindTheWord = function () {
    if (this.lets.every( (curLet, index) => {
      return this.lets[index].appear === true;
    }) === true) {
      this.found = true;
      return this.found;
    }
  }

  this.wordRender = function() {
    var str = "";
    for (var i = 0; i < this.lets.length; i++) {
      str += this.lets[i].letterRender();
    }
    return str;
  }
}

module.exports = Word;