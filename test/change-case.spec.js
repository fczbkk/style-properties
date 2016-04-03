import {toCamelCase, toKebabCase} from './../src/change-case';


describe('change case', function () {

  describe('toCamelCase', function () {

    it('should keep simple string unchanged', function () {
      const input = 'aaa';
      const expectation = 'aaa';
      expect(toCamelCase(input)).toEqual(expectation);
    });

    it('should convert spaces', function () {
      const input = 'aaa bbb';
      const expectation = 'aaaBbb';
      expect(toCamelCase(input)).toEqual(expectation);
    });

    it('should convert dashes', function () {
      const input = 'aaa-bbb';
      const expectation = 'aaaBbb';
      expect(toCamelCase(input)).toEqual(expectation);
    });

    it('should convert underscores', function () {
      const input = 'aaa_bbb';
      const expectation = 'aaaBbb';
      expect(toCamelCase(input)).toEqual(expectation);
    });

    it('should convert correctly if delimiter is at end of input', function () {
      const input = 'aaa ';
      const expectation = 'aaa';
      expect(toCamelCase(input)).toEqual(expectation);
    });

  });

  describe('toKebabCase', function () {

    it('should keep simple string unchanged', function () {
      const input = 'aaa';
      const expectation = 'aaa';
      expect(toKebabCase(input)).toEqual(expectation);
    });

    it('should convert spaces', function () {
      const input = 'aaa bbb';
      const expectation = 'aaa-bbb';
      expect(toKebabCase(input)).toEqual(expectation);
    });

    it('should convert uppercase', function () {
      const input = 'aaaBbb';
      const expectation = 'aaa-bbb';
      expect(toKebabCase(input)).toEqual(expectation);
    });

    it('should convert underscores', function () {
      const input = 'aaa_bbb';
      const expectation = 'aaa-bbb';
      expect(toKebabCase(input)).toEqual(expectation);
    });

  });

});

