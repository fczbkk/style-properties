import normalizeStyle from './../src/normalize-style';


describe('normalize', function () {

  it('should return empty object on missing input', function () {
    expect(normalizeStyle()).toEqual({});
  });

  it('should return empty object on empty string', function () {
    expect(normalizeStyle('')).toEqual({});
  });

  it('should return empty object on empty object', function () {
    expect(normalizeStyle({})).toEqual({});
  });

  it('should return normalized values of style string', function () {
    const input = 'width: 100px; height: 200px;';
    const expectation = {width: '100px', height: '200px'};
    expect(normalizeStyle(input)).toEqual(expectation);
  });
  
  it('should return normalized values of parsed style objects', function () {
    const expectation = {width: '100px', height: '200px'};
    expect(normalizeStyle(expectation)).toEqual(expectation);
  });

  it('should use camelCase keys for multi-word keys', function () {
    expect(normalizeStyle({zIndex: '1'}).zIndex).toBeDefined();
    expect(normalizeStyle({zIndex: '1'}).zIndex).toBeDefined();
    expect(normalizeStyle('z-index: 1').zIndex).toBeDefined();
  });

});