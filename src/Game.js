====(function(exports) {

  function Game(player_one, player_two, board = new Board()) {
    this.player_one = player_one;
    this.player_two = player_two;
    this.board = board;
    this.turn  = this.player_one;
  }

  Game.prototype = {
    play: function(position){
      if (this.board.isAvailable(position)) {
        this.board.grid[position[0]][position[1]].push(this.turn.marker);
      }
      else {
        throw "Square already taken!";
      }
      this.checkWin();
      this.switchPlayer();
    },
    switchPlayer: function(){
      if (this.turn == this.player_one) {
        this.turn = this.player_two;
      }
      else {
        this.turn = this.player_one;
      }
    },
    checkWin: function(){
      for (i = 0; i < 3; i++) {
        if (this.board.winningRow(i)) {
          this.rowWinner(i);
        }
        else if (this.board.winningCol(i)) {
          this.colWinner(i);
        }
        else if (this.board.winningDiag()) {
          this.diagWinner();
        }
      }
    },
    rowWinner: function(i){
      if (this.board.grid[i][0][0] === this.player_one.marker) {
        throw 'Won by Player 1!';
      }
      else {
        throw 'Won by Player 2!';
      }
    },
    colWinner: function(i){
      if (this.board.grid[0][i][0] === this.player_one.marker) {
        throw 'Won by Player 1!';
      }
      else {
        throw 'Won by Player 2!';
      }
    },
    diagWinner: function(){
      if (this.board.grid[1][1][0] == this.player_one.marker) {
        throw 'Won by Player 1!';
      }
      else {
        throw 'Won by Player 2!';
      }
    }
  };

  exports.Game = Game;

})(this);
