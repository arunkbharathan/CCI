'use strict'
//`call issubstring only once and find if 'rwate' is a rotation of 'water'`

function findrotation(word,checkword){
  const initLen = word.length
  for(let i=0;i<initLen;i++){
    word+=word[i]
  }
  return word.includes(checkword)
}


console.log(findrotation('rwate','water'));

module.exports = findrotation;
