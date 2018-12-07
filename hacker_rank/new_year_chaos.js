function minimum_bribes(q){
  let initialQueue=[...q].sort((a,b)=>a-b);
  for (let i=0; i<initialQueue.length;i++){
    let value=q[i]
    if (q.indexOf(value)<initialQueue.indexOf(value)-2){
      return 'Too Chaotic'
    }
  }
  return q
}

// Max bribes =2
// finalState1 = [2,5,1,3,4]
// answer = 3

// [1,2,3,4,5]
// [2,3,4,5,1] valid
let j= [1,5,2,3,4] // invalid
// [1,2,3,4,5,6,7,8,9,10]
// [1, 16, 32, 64, 128, 129, 256, 512, 513, 1024]
let k= [16, 1, 32, 129, 128, 64, 512, 256, 1024, 513] // 5 bribes min

console.log(minimum_bribes(k))