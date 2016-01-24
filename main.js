var prompt = require("prompt");
var Word = require("./word.js")

prompt.start();

var game = {
  wordBank: "super cool dude",
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function(wrd) {
    var currentWrd = new Word("super cool dude");
    currentWrd.getLets();
    keepPropmtingUser();
  }

  keepPropmtingUser: function() {
    var self = this;
  }
}