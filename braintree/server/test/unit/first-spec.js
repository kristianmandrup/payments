var chai = require('chai');
var should = chai.should;
var expect = chai.expect;
var assert = require('power-assert');
var sinon = require('sinon');

// should();

describe('Module test', function () {
	beforeEach(function (done) {
		//setup

		done();
	});
	afterEach(function (done) {
		//teardown

		done();
	});
	describe('#function to test', function() {
		it('should fail', function(done) {
			expect(1 + 2).to.eql(3);
			done();
		});
	});
});

module.exports = this;
