describe('Game', function(){

  var game;

  beforeEach(function(){
    player_one = new Player("Kat", "X");
    player_two = new Player("Bob", "X");
    game = new Game(player_one, player_two);
  });

  it('should be a defined object', function(){
    expect(game instanceof(Game)).toBe(true);
  });

  it('should have a property for the board', function(){
    expect(game.board).toBeDefined();
  });

  it('should have the correct property for the board', function(){
    expect(game.board instanceof(Board)).toBe(true);
  });

  it('should have two properties for the players', function(){
    expect(game.player_one).toBeDefined();
    expect(game.player_two).toBeDefined();
  });

  it('should have a turn property to denote who is the current player', function(){
    expect(game.turn).toBeDefined();
  });

  it('should start with current player being player one', function(){
    expect(game.turn).toEqual(game.player_one);
  });

  describe('#play', function(){

    var game;
    var player_one;
    var player_two;

    beforeEach(function(){
      player_one = new Player("Kat", "X");
      player_two = new Player("Bob", "X");
      game = new Game(player_one, player_two);
    });

    it('should change the turn property', function(){
      game.play([0,1]);
      expect(game.turn).toEqual(game.player_two);
    });

    it('should add a move to the grid', function(){
      game.play([0,1]);
      expect(game.board.grid[0][1]).toContain("X");
    });

    it('should return "won by player 1" if the top row contains three matching symbols', function(){
      playMoves(game, [0,0], [1,0], [0,1], [2,2]);
      expect(function(){game.play([0,2]);}).toThrow("Won by Player 1!");
    });

    it('should return "won by player 1" if the middle row contains three matching symbols', function(){
      playMoves(game, [1,0], [0,1], [1,1], [2,2]);
      expect(function(){game.play([1,2]);}).toThrow("Won by Player 1!");
    });

    it('should return "won by player 1" if the bottom row contains three matching symbols', function(){
      playMoves(game, [2,0], [0,0], [2,1], [1,2]);
      expect(function(){game.play([2,2]);}).toThrow("Won by Player 1!");
    });

    it('should return "won by player 1" if the right column contains three matching symbols', function(){
      playMoves(game, [0,2], [1,0], [1,2], [2,1]);
      expect(function(){game.play([2,2]);}).toThrow("Won by Player 1!");
    });

    it('should return "won by player 1" if the middle column contains three matching symbols', function(){
      playMoves(game, [0,1], [0,2], [1,1], [2,2]);
      expect(function(){game.play([2,1]);}).toThrow("Won by Player 1!");
    });

    it('should return "won by player 1" if the left column contains three matching symbols', function(){
      playMoves(game, [0,2], [0,0], [1,2], [1,1]);
      expect(function(){game.play([2,2]);}).toThrow("Won by Player 1!");
    });

    it('should return "won by player 1" if the diagonal right to left contains three matching symbols', function(){
      playMoves(game, [0,2], [0,0], [1,1], [1,2]);
      expect(function(){game.play([2,0]);}).toThrow("Won by Player 1!");
    });

    it('should return "won by player 1" if the diagonal left to right contains three matching symbols', function(){
      playMoves(game, [0,0], [0,1], [1,1], [1,2]);
      expect(function(){game.play([2,2]);}).toThrow("Won by Player 1!");
    });

  });

});
