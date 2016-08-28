# Style Properties

JavaScript library for working with style properties of an element in unified format.

## Documentation

### StyleProperty

**Parameters**

-   `element`  

**Properties**

-   `unit` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** unit of the property, e.g. px, rgb
-   `value` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))** value of the property
-   `output` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** valid string representation of value and unit

**Examples**

_Simple property._

```javascript
{
  unit: 'px',
  value: 100,
  output: '100px'
}
```

_Color property._

```javascript
{
  unit: 'rgb',
  value: [255, 255, 255],
  output: '#ffffff'
}
```

### fixWebcomponentsElement

Attempts to fix the element when using Webcomponents with ShadowDOMPolyfill. It returns either original element or wrapped element, depending on whether the polyfill replaced the original `getComputedStyle` method or not.
This is madness and no sane person should ever do hacks like this. ShadowDOMPolyfill sucks donkey balls!

**Parameters**

-   `element` **([Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element))** 

Returns **([Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element))** 

### getStyleProperty

Returns information about unit and value of given property for given element.

**Parameters**

-   `element` **[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)** 
-   `property` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the property. You can use either camelCase (e.g. zIndex) or kebab-case (e.g. z-index).

**Examples**

```javascript
var element_width = getStyleProperty(my_element, 'width');
// returns {unit: 'px', value: 100, output: '100px'}
```

Returns **[StyleProperty](#styleproperty)** 

### getStyleProperties

Returns information about multiple properties of given element.

**Parameters**

-   `element` **[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)** 
-   `properties` **\[([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))](default \[])** List of properties. Single property (string) will be converted to an array.

**Examples**

```javascript
var element_size = getStyleProperties(my_element, ['width', 'height']);
// returns
// {
//   width: {unit: 'px', value: 100, output: '100px'},
//   height: {unit: 'px', value: 100, output: '100px'}
// }
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Keys of the returned objects are property names, values are objects containing information about given property.

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/style-properties/issues) or send me an e-mail at <a href="mailto:riki@fczbkk.com">riki@fczbkk.com</a>.

## License

Style Properties is published under the [MIT license](https://github.com/fczbkk/style-properties/blob/master/LICENSE).
