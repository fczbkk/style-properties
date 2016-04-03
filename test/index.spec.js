import {
  getStyleProperty,
  getStyleProperties
} from './../src/index';


describe('Style Properties', function () {

  let elm;

  beforeEach(function () {
    elm = document.body.appendChild(document.createElement('div'));
  });

  afterEach(function () {
    elm.parentNode.removeChild(elm);
  });


  describe('getStyleProperties', function () {

    it('should get single property value', function () {
      elm.style.width = '100px';
      expect(getStyleProperties(elm, 'width')).toEqual({
        width: {
          value: 100,
          unit: 'px',
          output: '100px'
        }
      });
    });

    it('should get values of list of properties', function () {
      elm.style.width = '100px';
      elm.style.height = '200px';
      expect(getStyleProperties(elm, ['width', 'height'])).toEqual({
        width: {
          value: 100,
          unit: 'px',
          output: '100px'
        },
        height: {
          value: 200,
          unit: 'px',
          output: '200px'
        }
      });
    });

  });


  describe('getStyleProperty', function () {

    it('should get opacity', function () {
      elm.style.opacity = '0.5';
      expect(getStyleProperty(elm, 'opacity')).toEqual({
        value: 0.5,
        unit: '',
        output: '0.5'
      });
    });

    it('should get size', function () {
      elm.style.fontSize = '10px';
      expect(getStyleProperty(elm, 'fontSize')).toEqual({
        value: 10,
        unit: 'px',
        output: '10px'
      });
    });

    it('should get negative value', function () {
      elm.style.position = 'absolute';
      elm.style.left = '-100px';
      expect(getStyleProperty(elm, 'left')).toEqual({
        value: -100,
        unit: 'px',
        output: '-100px'
      });
    });

    it('should get zero value', function () {
      elm.style.width = '0px';
      expect(getStyleProperty(elm, 'width')).toEqual({
        value: 0,
        unit: 'px',
        output: '0px'
      });
    });

    it('should get auto value', function () {
      expect(getStyleProperty(elm, 'left')).toEqual({
        value: null,
        unit: '',
        output: 'auto'
      });
    });

    it('should get color', function () {
      elm.style.color = '#999';
      expect(getStyleProperty(elm, 'color')).toEqual({
        value: [153, 153, 153],
        unit: 'rgb',
        output: '#999999'
      });
    });

  });

});
