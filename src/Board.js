(function(exports) {

  function Board() {
    this.grid = [[[],[],[]], [[],[],[]], [[],[],[]]];
  }

  Board.prototype = {
    isAvailable: function(position){
      return this.grid[position[0]][position[1]].length === 0;
    }
  };

  exports.Board = Board;

})(this);
