'use strict'
/**
 * check if word1 is permutation of word2
 * @constructor
 * @param {string} word - The string1 to check.
 * @param {string} word - The string2 to check.
 * @returns {boolean} - 'true' if they are permutation
 */
function isPermutation(word1,word2) {
  const len1 = word1.length,len2=word2.length
  let charCountWord1 = [],charCountWord2 = []//Array.from(Array(26)).map(x=>0)
  if(len1!=len2) return false
  for(let i=0;i<len1;i++){
    charCountWord1[word1.charCodeAt(i)] = charCountWord1[word1.charCodeAt(i)] +1 || 1
    charCountWord2[word2.charCodeAt(i)] = charCountWord2[word2.charCodeAt(i)] +1 || 1
  }

  for (let i=0;i<150;i++){
    if(charCountWord1[i] !== charCountWord2[i]) return false
  }
  return true
}


//console.log(isPermutation('wdroo','worod'))

module.exports = isPermutation
