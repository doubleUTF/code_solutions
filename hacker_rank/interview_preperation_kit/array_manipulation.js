function arrayManipulation(n, queries) {
  let curArray = new Array(n);
  for (let i=0; i<n; i++){
    curArray[i]=0
  }
  queries.forEach(query=>{
    let start=query[0]-1;
    let end=query[1];
    let summand=query[2];
    
    curArray[start]+=summand
    if (end<n){
      curArray[end]-=summand;
    }
    console.log(curArray)
  })
  
  for (let j=1;j<n;j++){
    curArray[j]+=curArray[j-1]
  }
  
  let max=0;
  for (let k=0;k<n;k++){
    max=Math.max(max,curArray[k])  
  }

  return max
}

// let q=[
//   [2, 6, 8],
//     [3, 5, 7],
//     [1, 8, 1],
//     [5, 9, 15]
// ]
let q = [
  [1,5,3],
[4,8,7],
[6,9,1]]

console.log(arrayManipulation(10,q))