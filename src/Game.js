(function(exports) {

  function Game(player_one, player_two, board = new Board()) {
    this.player_one = player_one;
    this.player_two = player_two;
    this.board = board;
    this.turn  = this.player_one;
  }

  exports.Game = Game;

})(this);
