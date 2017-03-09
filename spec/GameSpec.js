'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game("Kat", "Bob");
  });

  it('should be a defined object', function() {
    expect(game instanceof(Game)).toBe(true);
  });

  it('should have a property for the board', function() {
    expect(game.board).toBeDefined();
  });

  it('should have the correct property for the board', function() {
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

});
