'use strict'

/**
 * When rotating a 2D image this function tells where this point goes in a square ring.
 * @constructor
 * @param {Array} point - To 2 element array of x,y array index
 * @param {number} N - The dimension of the square array.
 * @param {number} move - The number of points to move in square ring
 * @returns {Array} The moved x,y index pos of the input points in square ring
 */
function nextPos(point = [0,0],N,move = N-1){
  const [x,y] = point

  const corners = [[0,0],[0,N-1],[N-1,N-1],[N-1,0]]
  if(N==1){
    return [0,0]
  }

  //between (0,0)&(0,N)
  if(x==0 && (0<=y) && y<N-1){
    const ta = y+move
    const t1 = ta/(N-1)
    const t2 = Math.floor(t1)
    if(t2 == 0){
      return [0, ta]
    }else{
      const newPoint = corners[(0+t2)%corners.length]
      const newMove = ta%(N-1)
      return nextPos(newPoint,N,newMove)
    }
  }
  //between (0,N)&(N,N)
  else if((0<=x)&& (x<N-1) && (y==N-1)){
    const ta = (x+move)
    const t1 = ta/(N-1)
    const t2 = Math.floor(t1)
    if(t2 == 0){
      return [ta,(N-1)]
    }else{
      const newPoint = corners[(1+t2)%corners.length]
      const newMove = ta%(N-1)
      return nextPos(newPoint,N,newMove)
    }
  }
  //between (N,N)&(N,0)
  else if((x==N-1) && (0<y) && y<=N-1){
    const ta = (y-move)
    const t1 = Math.abs((ta-(N-1))/(N-1))
    const t2 = Math.floor(t1)
    if(t2 == 0){
      return [N-1, ta]
    }else{
      const newPoint = corners[(2+t2)%corners.length]
      const newMove = Math.abs(ta)%(N-1)
      return nextPos(newPoint,N,newMove)
    }
  }
  //between (N,0)&(0,0)
  else if((0<x) && x<=N-1 && (y==0)){
    const ta = (x-move)
    const t1 = Math.abs((ta-(N-1))/(N-1))
    const t2 = Math.floor(t1)
    if(t2 == 0){
      return [ta,0]
    }else{
      const newPoint = corners[(3+t2)%corners.length]
      const newMove = Math.abs(ta)%(N-1)
      return nextPos(newPoint,N,newMove)
    }
  }else{
    return void 0
  }
}


function getEdges(DIM){
  const edges = []
  for(let i=0;i<1;i++){
    for(let j=0;j<DIM;j++){
      if(i==0){
        edges.push([i,j])
      }
      // else if(j==0 && i!=DIM-1){
      //   edges.push([i,j])
      //   j=DIM-2
      // }else if(j==DIM-1){
      //   edges.push([i,j])
      // }else if(i==DIM-1){
      //   edges.push([i,j])
      // }else{
      //
      // }
    }}
    return edges
}


// let count =0;
// const DIM=3
// for(let i=0;i<DIM;i++){
//   for(let j=0;j<DIM;j++){
//     console.log([i,j],nextPos([i,j],DIM))
//     // if(nextPos([i,j],DIM)){
//     //   count++
//     // }
//   }
// }
// // console.log(count);


//console.log(getEdges(2))

const array1 = [[0,1,2],[3,4,5],[6,7,8]]
const array2 = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]]
const array3 = [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24]]

function rotate90(arr){
  const DIM = arr.length
  let halfDia = Math.floor(DIM/2)
  let count = DIM
  for (let j=DIM;halfDia>0;--halfDia){
    let topEdge = getEdges(j)
    topEdge.pop()
    for(let k of topEdge){
      const [x1,y1] = nextPos(k,j).map(z=>z+DIM-count)
      const [x0,y0] = k.map(z=>z+DIM-count)
      const temp1 = arr[x1][y1]
      arr[x1][y1] = arr[x0][y0]
      const [x2,y2] = nextPos([x1,y1].map(z=>z-DIM+count),j).map(z=>z+DIM-count)
      const temp2 = arr[x2][y2]
      arr[x2][y2] = temp1
      const [x3,y3] = nextPos([x2,y2].map(z=>z-DIM+count),j).map(z=>z+DIM-count)
      arr[x0][y0] = arr[x3][y3]
      arr[x3][y3] = temp2
    }
    j-=2;
    --count;
  }
  return arr
}

let DIM=11
let array = []
let cnt = 0
for(let i=0;i<DIM;i++){
  array[i]=[]
  for(let j=0;j<DIM;j++){
    array[i][j]=cnt++;
  }}
array.forEach(item=>console.log(item))
console.log('\n');
rotate90(array).forEach(item=>console.log(item))
