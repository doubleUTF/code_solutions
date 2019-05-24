let k=[1,2,3]

function logInterval(array, interval){
  // Logs an item of the array at every set interval
  if (array.length<1){
    return
  }
  
  console.log(array.shift());
  setTimeout(()=>{
    logInterval(array,interval)
  },interval)
  
}

logInterval(k,1000)