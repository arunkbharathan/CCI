'use strict'


function compressIt(word){
  let outWord=[]
  for(let i=0;i<word.length;i++){
    if(!outWord.length){
      outWord[0]=word[0]
      outWord[1]=1
    }else{
      if(outWord[outWord.length-2] == word[i]){
        outWord[outWord.length-1]+=1
      }else{
        outWord[outWord.length]=word[i]
        outWord[outWord.length]=1
      }
    }
    if(outWord.length>word.length){
      return word
    }
  }
  return outWord.join('')
}

//console.log(compress('aabbccdd'));
module.exports = compressIt;
