'use strict'
const assert = require('assert');
const isAllUnique = require('../Q1');
const isPalindromeMakeable = require('../Q4');


describe('isAllUnique', function() {
    it('should return true when the char is all unique', function() {
        assert.equal(isAllUnique('qwe'), true);
    });
    it('should return false when the char is not all unique', function() {
        assert.equal(isAllUnique('abcdefghijklmnopqrstuvwxyza'), false);
    });
});

describe('isPalindromeMakeable', function() {
    it('should return true when the string permutation can be a palindrome', function() {
        assert.equal(isPalindromeMakeable('jalajal'), true);
    });
    it('should return false when the string permutation cannot be a palindrome', function() {
        assert.equal(isPalindromeMakeable('amlaaylama'), false);
    });
});
