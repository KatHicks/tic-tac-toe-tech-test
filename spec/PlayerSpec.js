'use strict';

describe('Player', function() {

  var player;

  beforeEach(function() {
    player = new Player("Kat");
  });

  it('should be a defined object', function() {
    expect(player instanceof(Player)).toBe(true);
  });

  it('should have a property for the board', function() {
    expect(player.name).toBeDefined();
  });

});
