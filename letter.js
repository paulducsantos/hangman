var Letter = function (let) {
  this.charac = let;
  this.appear = false;
  this.letterRender = function () {
    if (!appear) {
      return "_";
    } else {
      return charac;
    }
  }
}

module.exports = Letter;