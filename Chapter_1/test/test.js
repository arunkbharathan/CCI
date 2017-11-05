const assert = require('assert');
const isAllUnique = require('../Q1');


describe('isAllUnique', function() {

    it('should return true when the char is all unique', function() {
        assert.equal(isAllUnique('qwe'), true);
    });

    it('should return false when the char is not all unique', function() {
        assert.equal(isAllUnique('abcdefghijklmnopqrstuvwxyza'), false);
    });

});