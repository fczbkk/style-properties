import parsePropertyValue from './../src/parse-property-value';

describe('parsePropertyValue', function () {

  it('should parse unit-less value', function () {
    const expectation = {
      unit: '',
      value: 100,
      output: '100',
      original: '100'
    };
    expect(parsePropertyValue('100')).toEqual(expectation);
  });

  it('should return property value with unit', function () {
    const expectation = {
      unit: 'px',
      value: 100,
      output: '100px',
      original: '100px'
    };
    expect(parsePropertyValue('100px')).toEqual(expectation);
  });

  it('should return negative property value', function () {
    const expectation = {
      unit: 'px',
      value: -100,
      output: '-100px',
      original: '-100px'
    };
    expect(parsePropertyValue('-100px')).toEqual(expectation);
  });

  it('should return color property value', function () {
    const expectation = {
      unit: 'rgb',
      value: [0, 0, 0],
      output: '#000000',
      original: 'rgb(0, 0, 0)'
    };
    expect(parsePropertyValue('rgb(0, 0, 0)')).toEqual(expectation);
  });

  it('should return zero-value property', function () {
    const expectation = {
      unit: 'px',
      value: 0,
      output: '0px',
      original: '0px'
    };
    expect(parsePropertyValue('0px')).toEqual(expectation);
  });

  it('should return null on `auto` property', function () {
    const expectation = {
      unit: '',
      value: null,
      output: 'auto',
      original: 'auto'
    };
    expect(parsePropertyValue('auto')).toEqual(expectation);
  });

});