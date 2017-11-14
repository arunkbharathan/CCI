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
  let outX,outY;

  const corners = [[0,0],[0,N-1],[N-1,N-1],[N-1,0]]

  //between (0,0)&(0,N)
  if(x==0 && (0<=y) && y<N-1){
    const ta = y+move
    const t1 = ta/(N-1)
    const t2 = Math.floor(t1)
    if(t2 == 0){
      return [0, ta]
    }else{
      const newPoint = corners[t2%corners.length]
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
      const newPoint = corners[t2%corners.length]
      const newMove = ta%(N-1)
      return nextPos(newPoint,N,newMove)
    }
  }
  //between (N,N)&(N,0)
  else if((x==N-1) && (0<y) && y<=N-1){
    const ta = (y-move)
    const t1 = Math.abs((ta-3)/(N-1))
    const t2 = Math.floor(t1)
    if(t2 == 0){
      return [N-1, ta]
    }else{
      const newPoint = corners[t2%corners.length]
      const newMove = Math.abs(ta)%(N-1)
      return nextPos(newPoint,N,newMove)
    }
  }
  //between (N,0)&(0,0)
  else if((0<x) && x<=N-1 && (y==0)){
    const ta = (x-move)
    const t1 = Math.abs((ta-3)/(N-1))
    const t2 = Math.floor(t1)
    if(t2 == 0){
      return [ta,0]
    }else{
      const newPoint = corners[t2%corners.length]
      const newMove = Math.abs(ta)%(N-1)
      return nextPos(newPoint,N,newMove)
    }
  }
}

console.log(nextPos([0,0],3,8))
