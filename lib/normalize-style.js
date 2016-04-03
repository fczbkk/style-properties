'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = function () {
  var style = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  var result = {};
  var element = document.createElement('div');

  if (typeof style !== 'string') {
    style = objectToString(style);
  }

  element.innerHTML = '<div style="' + style + '"></div>';

  getStyleKeys(style).forEach(function (key) {
    result[(0, _changeCase.toCamelCase)(key)] = element.firstChild.style[key];
  });

  return result;
};

var _changeCase = require('./change-case');

function objectToString() {
  var input = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var pairs = [];

  Object.keys(input).forEach(function (key) {
    var item = input[key];
    var value = (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' ? item.output : item.toString();
    pairs.push((0, _changeCase.toKebabCase)(key) + ': ' + value);
  });

  return pairs.join('; ');
}

function getStyleKeys() {
  var style = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  var result = [];
  var pairs = style.split(';');
  var key_re = /^\s*([^:\s]+)/;

  pairs.forEach(function (pair) {
    if (pair !== '') {
      result.push(pair.match(key_re)[1]);
    }
  });

  return result;
}