function hourglassSum(arr) {
  let maxSum=Number.NEGATIVE_INFINITY;
  let center=[0,0];
  // Find allowed center positions
  let dimensions=arr.length;
  const minRow=1, minCol=1; // Center cannot be on edge rows or cols
  const maxRow=dimensions-1, maxCol=dimensions-1;
  const hourGlassCoords=[[-1,-1],[-1,0],[-1,1],[0,0],[1,-1],[1,0],[1,1]]
  for (let i=minRow;i<maxRow;i++){
    for (let j=minCol; j<maxCol; j++){
      let sum=0;
      hourGlassCoords.forEach(v=>{
        let value=arr[i+v[0]][j+v[1]];
        sum+=value;        
      })
      if (sum>maxSum){
        maxSum=sum
      }
    }
  }
  return maxSum;
}

let sampleArray=[
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
]
// -9 -9 -9 1 1 1
// 0 -9 0 4 3 2
// -9 -9 -9 1 2 3
// 0 0 8 6 6 0
// 0 0 0 -2 0 0
// 0 0 1 2 4 0
let sampleArray2=[
  [-9,-9,-9,1,1,1],
  [0,-9,0,4,3,2],
  [-9,-9,-9,1,2,3],
  [0,0,8,6,6,0],
  [0,0,0,-2,0,0],
  [0,0,1,2,4,0]
]
console.log(hourglassSum(sampleArray2))