'use strict'
const assert = require('assert');
const equals = require('array-equal')
const isAllUnique = require('../Q1');
const isPermutation = require('../Q2');
const isPalindromeMakeable = require('../Q4');
const isOneOrZeroEdit = require('../Q5');
const compressIt = require('../Q6');
//const rotate90 = require('../Q7')


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

describe('isPermutation', function() {
    it('should return true ', function() {
        assert.equal(isPermutation('jalajal','jallaja'), true);
    });
    it('should return false', function() {
        assert.equal(isPermutation('amlaaylama','amlayamald'), false);
    });
});

describe('isOneOrZeroEdit', function() {
    it('should return true ', function() {
        assert.equal(isOneOrZeroEdit('pale','ple'), true);
    });
    it('should return true', function() {
        assert.equal(isOneOrZeroEdit('pales','pale'), true);
    });
    it('should return true ', function() {
        assert.equal(isOneOrZeroEdit('pale','bale'), true);
    });
    it('should return false', function() {
        assert.equal(isOneOrZeroEdit('pale','bake'), false);
    });
    it('should return true', function() {
        assert.equal(isOneOrZeroEdit('apple','aple'), true);
    });
});

describe('isAllUnique', function() {
    it('should return arun', function() {
        assert.equal(compressIt('arun'), 'arun');
    });
    it('should return a2b1c5a3', function() {
        assert.equal(compressIt('aabcccccaaa'), 'a2b1c5a3');
    });
});
