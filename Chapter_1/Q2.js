'use strict'
//Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?
function isAllUnique(word) {
    const flagArr = []
    word = word.split('')
    for (let ch of word) {
        if (flagArr[ch.charCodeAt(0)] == null ){
        	flagArr[ch.charCodeAt(0)] = 1
        }else{
        	flagArr[ch.charCodeAt(0)] += (flagArr[ch.charCodeAt(0)]?-1:1)
        }
    }
   if(word.length%2){

   }else{
   	flagArr.reduce((i,s)=>{
   		if(i != null){
   			return s+i
   		}else{
   			return s
   		}
   	},0)
   }
}

isAllUnique('jalaja')
isAllUnique('malayalam')
module.exports = isAllUnique