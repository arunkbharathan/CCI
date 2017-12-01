'use strict'

function if0MakeRowCol0(matrix){
  //MxN matrix
  const M = matrix.length
  const N = matrix[0].length
  const row ={}
  const col ={}
  for(let i=0;i<M;i++){
    for(let j=0;j<N;j++){
      if(matrix[i][j]==0){
        [row[i],col[j]] =[1,1]
      }
      if(row[i] || col[j]){
        matrix[i][j] = 0
      }
    }
  }
  for(let i=M-1;i>=0;i--){
    for(let j=N-1;j>=0;j--){
      if(row[i] || col[j]){
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}


const matrix = [[1,1,2,3],[4,5,6,7],[8,9,10,0]]

console.log(if0MakeRowCol0(matrix))
