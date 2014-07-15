percent-string
==============

create '%' appended strings for settings CSS properties

## installation

npm:

```
$ npm install percent-string
```

component:

```
$ component install binocarlos/percent-string
```

## usage

Use this module to convert numbers into percent strings

```js
var percent = require('percent-string')

document.querySelector('#thing').style.left = percent(24)
document.querySelector('#thing').style.top = percent('24%')
```

## api

#### `var string = percent(value, max)`

returns a string of the form: [num] + '%' regardless of the input type.

The zero value is '0%'

max indicates the scale so you can do 0.4 = 40%

```js
var st = percent(.4, 1)

// st = '40%'
```

### license

MIT