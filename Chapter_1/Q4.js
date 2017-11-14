'use strict'
/**
 * Algorithm to check if a permutation of the given string can be palindrome
 * @constructor
 * @param {string} word - The string to check.
 * @returns {boolean} - 'true' if the permutation of string can be palindrome.
 */
function isPalindromeMakeable(word) {
    const flagArr = []
    word = word.split('')
    for (let ch of word) {
        if (flagArr[ch.charCodeAt(0)] == null ){
        	flagArr[ch.charCodeAt(0)] = 1
        }else{
        	flagArr[ch.charCodeAt(0)] += (flagArr[ch.charCodeAt(0)]?-1:1)
        }
    }
    let total = flagArr.reduce(sum,0)
   if(word.length%2){
     return total==1
   }else{
     //even
   	return total==0
   }
}

//isPalindromeMakeable('jalaja')
//isPalindromeMakeable('malayalam')
module.exports = isPalindromeMakeable


function  sum(s,i){
  if(i){
    return s+i
  }else{
    return s
  }
}
