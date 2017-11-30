'use strict'

function isOneOrZeroEdit(word1,word2){

  const len1 = word1.length,len2 = word2.length
  if(Math.abs(len1-len2)>1){
    return false
  }else if(Math.abs(len1-len2)==1){
    let smallestLen = len1<len2?len1:len2
    let [alph1,alph2] = len1<len2?([word1,word2]):([word2,word1])
    let offset=0;
    for(let i=0;i<smallestLen;i++){
      if(alph1[i] != alph2[i+offset]){
        if(offset==0){
          offset+=1
          i-=1
        }else{
          return false
        }
      }
    }
    return true
  }else{
    let count=0;
    for(let i=0;i<len1;i++){
      if(word1[i] != word2[i]){
        if(count==0){
          count+=1
        }else{
          return false
        }
      }
    }
    return true
  }
}

//console.log(isOneOrZeroEdit('appple','apple'))
module.exports = isOneOrZeroEdit
