'use strict';

describe('Player', function() {

  var player;

  beforeEach(function() {
    player = new Player("Kat", "X");
  });

  it('should be a defined object', function() {
    expect(player instanceof(Player)).toBe(true);
  });

  it('should have a property for name', function() {
    expect(player.name).toBeDefined();
  });

  it('should have the correct property for name', function() {
    expect(player.name).toBe("Kat");
  });

  it('should have a property for maker', function() {
    expect(player.marker).toBeDefined();
  });

  it('should have the correct property for maker', function() {
    expect(player.marker).toBe("X");
  });

});
