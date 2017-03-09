'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be a defined object', function() {
    expect(game instanceof(Game)).toBe(true);
  });

  it('should have a property for the board', function() {
    expect(game.board).toBeDefined();
  });

});
