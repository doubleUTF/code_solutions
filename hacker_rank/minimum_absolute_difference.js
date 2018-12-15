function minimumAbsoluteDifference(arr) {
  let minAbsDiff= Number.POSITIVE_INFINITY;
  let sorted=arr.sort((a,b)=>a-b)
  for (let i=0;i<arr.length-1;i++){
    let absDiff=Math.abs(arr[i]-arr[i+1])
    if (absDiff==0) return 0
    absDiff < minAbsDiff ? minAbsDiff = absDiff : ''
  }
  return minAbsDiff;
}

console.log(minimumAbsoluteDifference([-5,-22,-1,0,24,3,99]))