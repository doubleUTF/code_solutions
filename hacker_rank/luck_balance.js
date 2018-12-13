function luckBalance(k, contests) {
  let maxLuck=0;
  let important=[];
  let unimportant=[];

  contests.forEach(v=>{
    v[1]==1 ? important.push(v) : unimportant.push(v)
  })
  important.sort((a,b)=>{
    return b[0]-a[0]
  })

  // k loses
  for (let i=0; i<Math.min(important.length,k);i++){
    maxLuck+=important[i][0];
  }

  // important.length-k wins
  for (let i=important.length-1; i>=Math.min(important.length,k);i--){
    maxLuck-=important[i][0]
  }

  // Unimportant loses
  unimportant.forEach(v=>{
    maxLuck+=v[0];
  })

  return maxLuck;
}


let test=[ [ 5, 0 ], [ 2, 0 ], [ 1, 0 ], [ 8, 0 ], [ 10, 0 ], [ 5, 0 ] ];

console.log(luckBalance(99,test));