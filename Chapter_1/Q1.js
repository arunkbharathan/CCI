'use strict'

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