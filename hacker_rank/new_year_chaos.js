function minimumBribes(q){
  let bribes=0;
  for (let i=0; i<q.length; i++){
    if (q[i]>i+3){
      return console.log('Too chaotic')
    }
    for (let j=Math.max(0,q[i]-2); j<i;j++){
      console.log(q[i],q[j])
      console.log('i',i,'j',j)
      if (q[i]<q[j]){
        console.log('bribed')
        bribes++
      }
    }
  }
  return console.log(bribes)
}

// Max bribes =2
// finalState1 = [2,5,1,3,4]
// answer = 3

// [1,2,3,4,5]
// [2,3,4,5,1] valid
let j= [1,5,2,3,4] // invalid
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
let n=[1,2,3,4,5,6]
minimumBribes(n)
