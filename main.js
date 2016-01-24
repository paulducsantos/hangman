var prompt = require("prompt");
var Word = require("./word.js")

prompt.start();

var game = {
  wordBank: "super cool dude",
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function(wrd) {
    this.currentWrd = new Word("super cool dude");
    this.currentWrd.getLets();
    this.keepPropmtingUser();
  },

  keepPropmtingUser: function() {
    var self = this;
    prompt.get(["guessLetter"], function(err, result) {
      console.log("The Letter or space you guessed is " + result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
      if (findHowManyOfUserGuess === 0) {
        console.log("You gusses wrong~!");
        self.guessesRemaining--;
      } else {
        console.log("You guessed right!");
        if(self.currentWrd.didWeFindTheWord()) {
          console.log("You won!!!");
          return 1;
        }
      }

      console.log("Guesses remaining: " + self.guessesRemaining);
      console.log(self.currentWrd.wordRender());

      if(self.guessesRemaining > 0 && self.currentWrd.found === false) {
        self.keepPropmtingUser();
      } else if(self.guessesRemaining === 0) {
        console.log("Game over bro");
      } else {
        console.log(self.currentWrd.wordRender());
      }
    });
  }
}

game.startGame();