describe('Board', function() {

  var board;
  var grid;

  beforeEach(function() {
    board = new Board();
    grid = [[[],[],[]], [[],[],[]], [[],[],[]]];
  });

  it('should be a defined object', function() {
    expect(board instanceof(Board)).toBe(true);
  });

  it('should have a property for grid', function() {
    expect(board.grid).toBeDefined();
  });

  it('should have the correct property for grid', function() {
    expect(board.grid).toEqual(grid);
  });

});
