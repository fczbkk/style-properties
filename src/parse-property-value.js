const re_color = /^rgb\((\d+),\s?(\d+),\s?(\d+)\)$/;
const re_prop = /^(-?\d*\.?\d*)(.*)$/;


// converts number in base 10 to base 16, adds padding zero if needed
function convertColorComponent (input) {
  let result = input.toString(16);
  if (result.length < 2) {
    result = '0' + result
  }
  return result;
}


function parseColorProperty (value) {
  const matches = value.match(re_color);
  const result = {};

  result.unit = 'rgb';

  result.value = [
    parseInt(matches[1], 10),
    parseInt(matches[2], 10),
    parseInt(matches[3], 10)
  ];

  result.output = '#'
    + convertColorComponent(result.value[0])
    + convertColorComponent(result.value[1])
    + convertColorComponent(result.value[2]);

  return result;
}


function parseRegularProperty (value) {
  const result = {
    unit: '',
    value: null,
    output: 'auto'
  };

  if (value !== 'auto') {
    const matches = value.match(re_prop);
    result.value = parseFloat(matches[1]);
    result.unit = matches[2];
    result.output = result.value + result.unit;
  }

  return result;
}


export default function (value) {
  const result = re_color.test(value)
    ? parseColorProperty(value)
    : parseRegularProperty(value);
  result.original = value;
  return result;
}


