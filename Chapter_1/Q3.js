
function URLify(word){
  let urlified='';
  for(let i=0;i<word.length;i++){
    if(word[i] == ' '){
      urlified+='%20'
    }else{
      urlified+=word[i]
    }
  }
  return urlified
}

console.log(URLify(' Arun K Bharathan '));
