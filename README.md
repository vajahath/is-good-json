# is-good-json

Simple package to validate JSON files.

[![npm](https://img.shields.io/npm/v/is-good-json.svg)](https://www.npmjs.com/package/is-good-json)
[![Build Status](https://travis-ci.org/vajahath/is-good-json.svg?branch=master)](https://travis-ci.org/vajahath/is-good-json)
[![Known Vulnerabilities](https://snyk.io/test/npm/is-good-json/badge.svg)](https://snyk.io/test/npm/is-good-json)
[![npm](https://img.shields.io/npm/dt/is-good-json.svg)](https://www.npmjs.com/package/is-good-json)
[![Greenkeeper badge](https://badges.greenkeeper.io/vajahath/is-good-json.svg)](https://greenkeeper.io/) 

![](https://raw.githubusercontent.com/vajahath/is-good-json/master/media/logo.png)



#### Usage
```javascript
isGoodJSON('{"kity": "Fluffy"}'); // returns parsed object
isGoodJSON('{"kity" "Fluffy"}'); // returns false
```



## Install / Update

```shell
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
| invalid json as `string`               | `false`                       |
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
 - v1.0.4
     + Perf improvements with [#1](https://github.com/vajahath/is-good-json/pull/1), (thanks [@demacdonald](https://github.com/demacdonald))
     + adds Greenkeeper, tavis.
 - v1.0.3
     + Documentation updates.
 - v1.0.2
     + Dependency adjustments.
 - v1.0.1
     + Github integration done right.
 - v1.0.0
     + Initial release

<br>

[![PayPal][badge_paypal_donate]][paypal-donations]


## License
MIT &copy; [Vajahath Ahmed](https://mycolorpad.blogspot.in)


[badge_paypal_donate]: https://cdn.rawgit.com/vajahath/cloud-codes/a01f087f/badges/paypal_donate.svg
[paypal-donations]: https://paypal.me/vajahath