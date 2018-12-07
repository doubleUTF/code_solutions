function rotLeft(a, d) {
  let tailArray=[];
  for (let i=0;i<d;i++){
    tailArray.push(a.shift())
  }
  return a.concat(tailArray)
}

let a=[1,2,3,4,5];

console.log(rotLeft(a,2));