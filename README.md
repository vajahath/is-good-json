
![](https://raw.githubusercontent.com/vajahath/is-good-json/master/media/logo.png)

##### Simple package to validate JSON files.


```javascript
isGoodJSON('{"kity": "Fluffy"}'); // returns true
```



## Install / Update

```bash
npm install --save is-good-json
```

## Usage

### Syntax

`isGoodJSON(<argument>);`

### Example
```javascript
// load package
const isGoodJSON = require('is-good-json');

// use it
isGoodJSON('{"this": "is","a": "good json"}') // -> returns parsed object: {"this": "is","a": "good json"}
isGoodJSON({"this": "is","a": "good json"}) // -> returns same object

isGoodJSON('{ha: "hi" meuo: "ho"}') // -> returns false
isGoodJSON('[{"ths":asdf}{"adasd":asdf}]') // -> returns false

// empty arrays and objects
isGoodJSON('[]') // -> returns false
isGoodJSON('{}') // -> returns false
isGoodJSON([]) // -> returns false
isGoodJSON({}) // -> returns false
```

### Usage

**Syntax :** `b = isGoodJSON(a);`

where `a` and `b` are as follows,

| value of `a`                           | value of `b`                  |
| -------------------------------------- | ----------------------------- |
| `null`                                 | `false`                       |
| `true` or `false`                      | `false`                       | 
| any number                             | `false`                       | 
| valid json as `string`                 | parsed json object            |
| valid json as `object`                 | same json object              |
| invalid json as `object`               | `false`                       |
| invalid json as `object`               | `false`                       |
| valid, but empty json                  | `false`                       |
| valid non-empty `object`               | same object                   |
| valid non-empty `array`                | same array                    |
| valid, but empty `object`              | `false`                       |
| valid, but empty `array`               | `false`                       |


<br>

### one more example

```javascript
isGoodJSON('{"name": "Kitty", "friends":["tom", "jerry"]}');
/* returns the following parsed object:
    {
        name: "kitty",
        friends: ["tom", "jerry"]
    }
 */
```


If you wish to file any feature/bugs, mention it on [issues](https://github.com/vajahath/is-good-json/issues).

<br>

Enjoy.

## Change log

 - v1.0.0
     + Initial release
 - v1.0.1
     + Github integration done right.

## License
MIT &copy; [Vajahath Ahmed](https://mycolorpad.blogspot.in)