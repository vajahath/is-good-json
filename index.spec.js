// test
// ====
var expect = require('chai').expect;
var lme = require('lme');
var _ = require('lodash');

// pull our heroine
var isGoodJSON = require('./index');

lme.w("TESTS");
lme.wline();

describe("testing isGoodJSON", function() {
	it("should return false if , is missing", function(done) {
		let j = '{ha: "hi",	meuo: "ho" cat: "fluff"}';
		expect(isGoodJSON(j)).to.be.false;
		done();
	});
	it("should return false if { mismatch is given.", function(done) {
		expect(isGoodJSON('{"me": "sas", ["as":5}]')).to.be.false;
		done();
	});
	it("should return false if , missing (type 2) is given.", function(done) {
		expect(isGoodJSON('[{"ths":asdf}{"adasd":asdf}]')).to.be.false;
		done();
	});
	it("should return false if excess , is given.", function(done) {
		expect(isGoodJSON('[{"fasd":"adsf"},]')).to.be.false;
		done();
	});
	it("should return the parsed object if a good json (type 1) is given.", function(done) {
		let j = '{"this": "is","a": "good json"}';
		expect(isGoodJSON(j)).to.be.an('object');
		done();
	});
	it("should return the parsed object if a good array (type 1) is given.", function(done) {
		let j = '[{"this": "is","a": "good json"}]';
		expect(isGoodJSON(j)).to.be.an('array');
		done();
	});
	it("should return false if empty array is given.", function(done) {
		let j = '[]';
		expect(isGoodJSON(j)).to.be.false;
		done();
	});
	it("should return false if empty object is given.", function(done) {
		let j = '{}';
		expect(isGoodJSON(j)).to.be.false;
		done();
	});
	it("should return false if a object is given. (NOT STRING)", function(done) {
		let j = {};
		expect(isGoodJSON(j)).to.be.false;
		done();
	});
	it("should return false if a array is given. (NOT STRING)", function(done) {
		let j = [];
		expect(isGoodJSON(j)).to.be.false;
		done();
	});
});
