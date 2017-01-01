'use strict';

// test
// ====
var expect = require('chai').expect;
var lme = require('lme');
var _ = require('lodash');
var forEach = require('mocha-each');

// pull our heroine
var isGoodJSON = require('./index');

lme.w("TESTS");
lme.wline();

describe("testing isGoodJSON", function() {
  forEach([
    ['should return false if , is missing', '{ha: "hi",	meuo: "ho" cat: "fluff"}', false],
    ['should return false if { mismatch is given.', '{"me": "sas", ["as":5}]', false],
    ['should return false if , missing (type 2) is given.', '[{"ths":asdf}{"adasd":asdf}]', false],
    ['should return false if excess , is given.','[{"fasd":"adsf"},]', false],
    ['should return the parsed object if a good json (type 1) is given.', '{"this": "is","a": "good json"}', 'object'],
    ['should return the parsed object if a good array (type 1) is given.', '[{"this": "is","a": "good json"}]', 'array'],
    ['should return false if empty array is given.', '[]', false],
    ['should return false if empty object is given.', '{}', false],
    ['should return false if a number is given.', '123', false],
    ['should return false if a object is given. (NOT STRING)', {}, false],
    ['should return false if a array is given. (NOT STRING)', [], false],
    ['should return false if a number is given. (NOT STRING)', 123, false]
  ])
	.it("%s", (testCaseName, input, expectedOutput) => {
    var result = isGoodJSON(input);

    if (typeof expectedOutput === 'boolean') {
      expect(result).to.equal(expectedOutput);
    } else {
      expect(result).to.be.an(expectedOutput);
    }
	});
});
