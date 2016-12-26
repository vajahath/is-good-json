// test
// ====
var expect = require('chai').expect;
var lme = require('lme');
var _ = require('lodash');

// pull our heroine
var isValidJSON = require('./index');

lme.w("TESTS");
lme.wline();

describe("testing isValidJSON", function() {
	it("should return false if , is missing", function(done) {
		let j = '{ha: "hi",	meuo: "ho" cat: "fluff"}';
		expect(isValidJSON(j)).to.be.false;
		done();
	});
	it("should return false if { mismatch is given.", function(done) {
		expect(isValidJSON('{"me": "sas", ["as":5}]')).to.be.false;
		done();
	});
	it("should return false if , missing (type 2) is given.", function(done) {
		expect(isValidJSON('[{"ths":asdf}{"adasd":asdf}]')).to.be.false;
		done();
	});
	it("should return false if excess , is given.", function(done) {
		expect(isValidJSON('[{"fasd":"adsf"},]')).to.be.false;
		done();
	});
	it("should return the parsed object if a good json (type 1) is given.", function(done) {
		let j = '{"this": "is","a": "good json"}';
		expect(isValidJSON(j)).to.be.an('object');
		done();
	});
	it("should return the parsed object if a good array (type 1) is given.", function(done) {
		let j = '[{"this": "is","a": "good json"}]';
		expect(isValidJSON(j)).to.be.an('array');
		done();
	});
	it("should return false if empty array is given.", function(done) {
		let j = '[]';
		expect(isValidJSON(j)).to.be.false;
		done();
	});
	it("should return false if empty object is given.", function(done) {
		let j = '{}';
		expect(isValidJSON(j)).to.be.false;
		done();
	});
	it("should return false if a object is given. (NOT STRING)", function(done) {
		let j = {};
		expect(isValidJSON(j)).to.be.false;
		done();
	});
	it("should return false if a array is given. (NOT STRING)", function(done) {
		let j = [];
		expect(isValidJSON(j)).to.be.false;
		done();
	});
});
