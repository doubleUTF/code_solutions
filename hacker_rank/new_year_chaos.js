function minimumBribes(q){
  let minBribes=0;
  let initialQueue=[...q].sort((a,b)=>a-b);
  for (let i=0; i<initialQueue.length;i++){
    let value=q[i]
    let newIndex=q.indexOf(value)
    let originalIndex=initialQueue.indexOf(value)
    if (newIndex<originalIndex-2){
      return console.log('Too chaotic')
    } 
    
    let delta=originalIndex-newIndex;
    if (delta>0){
      minBribes+=delta
    }
  }
  return console.log(minBribes)
}

// Max bribes =2
// finalState1 = [2,5,1,3,4]
// answer = 3

// [1,2,3,4,5]
// [2,3,4,5,1] valid
let j= [1,5,2,3,4] // invalid
// [1,2,3,4,5,6,7,8,9,10]
// [1, 16, 32, 64, 128, 129, 256, 512, 513, 1024]
// let k= [16, 1, 32, 129, 128, 64, 512, 256, 1024, 513] // 5 bribes min
let m=[1, 2, 5, 3, 7, 8, 6, 4] // should be 7 min
// [1,2,3,4,5,6,7,8]
// [1,2,3,5,4,6,7,8]
// [1,2,5,3,4,6,7,8]
// [1,2,5,3,4,7,6,8]
// [1,2,5,3,7,4,6,8]
// [1,2,5,3,7,6,4,8]
// [1,2,5,3,7,6,8,4]
// [1,2,5,3,7,8,6,4] 7 bribes
minimumBribes(m)