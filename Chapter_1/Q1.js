'use strict'
/**
 * Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?
 * @constructor
 * @param {string} word - The string to check.
 * @returns {boolean} - 'true' if all characters of word is unique
 */
function isAllUnique(word) {
    const flagArr = []
    word = word.split('')
    for (let ch of word) {
        if (!flagArr[ch.charCodeAt(0)]){
        	flagArr[ch.charCodeAt(0)] = 1
        }else{
        	return false
        }
    }
    return true
}



module.exports = isAllUnique
