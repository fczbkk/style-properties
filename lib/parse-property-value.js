'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return re_color.test(value) ? parseColorProperty(value) : parseRegularProperty(value);
};

var re_color = /^rgb\((\d+),\s?(\d+),\s?(\d+)\)$/;
var re_prop = /^(-?\d*\.?\d*)(.*)$/;

// converts number in base 10 to base 16, adds padding zero if needed
function convertColorComponent(input) {
  var result = input.toString(16);
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}

function parseColorProperty(value) {
  var matches = value.match(re_color);
  var result = {};

  result.unit = 'rgb';

  result.value = [parseInt(matches[1], 10), parseInt(matches[2], 10), parseInt(matches[3], 10)];

  result.output = '#' + convertColorComponent(result.value[0]) + convertColorComponent(result.value[1]) + convertColorComponent(result.value[2]);

  return result;
}

function parseRegularProperty(value) {
  var result = {
    unit: '',
    value: null,
    output: 'auto'
  };

  if (value !== 'auto') {
    var matches = value.match(re_prop);
    result.value = parseFloat(matches[1]);
    result.unit = matches[2];
    result.output = result.value + result.unit;
  }

  return result;
}