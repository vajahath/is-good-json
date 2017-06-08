/* global describe */
'use strict';

// Test
// ====
const expect = require('chai').expect;
const lme = require('lme');
const forEach = require('mocha-each');

// Pull our heroine
let isGoodJSON;

try {
	isGoodJSON = require('./index');
} catch (err) {
	lme.e('index file not found', err);
	throw new Error(err);
}

lme.w('TESTS');
lme.wline();

describe('testing isGoodJSON', () => {
	forEach([
			['should return false if , is missing', '{ha: "hi",	meuo: "ho" cat: "fluff"}', false],
			['should return false if { mismatch is given.', '{"me": "sas", ["as":5}]', false],
			['should return false if , missing (type 2) is given.', '[{"ths":asdf}{"adasd":asdf}]', false],
			['should return false if excess , is given.', '[{"fasd":"adsf"},]', false],
			['should return the parsed object if a good json (type 1) is given.', '{"this": "is","a": "good json"}', 'object'],
			['should return the parsed object if a good array (type 1) is given.', '[{"this": "is","a": "good json"}]', 'array'],
			['should return false if empty array is given.', '[]', false],
			['should return false if empty object is given.', '{}', false],
			['should return false if a number is given.', '123', false],
			['should return false if null is given.', 'null', false],
			['should return false if boolean is given.', 'true', false],
			['should return false if a object is given. (NOT STRING)', {}, false],
			['should return false if a array is given. (NOT STRING)', [], false],
			['should return false if a number is given. (NOT STRING)', 123, false],
			['should return false if null is given. (NOT STRING)', null, false],
			['should return false if boolean is given. (NOT STRING)', true, false]
	])
		.it('%s', (testCaseName, input, expectedOutput) => {
			const result = isGoodJSON(input);

			if (typeof expectedOutput === 'boolean') {
				expect(result).to.equal(expectedOutput);
			} else {
				expect(result).to.be.an(expectedOutput);
			}
		});
});
