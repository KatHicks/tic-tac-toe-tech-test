'use strict';

describe('Board', function() {

  var board;

  beforeEach(function() {
    board = new Board();
  });

  it('should be a defined object', function() {
    expect(board instanceof(Board)).toBe(true);
  });

});
