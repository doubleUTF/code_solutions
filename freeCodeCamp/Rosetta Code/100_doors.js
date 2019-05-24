function getFinalOpenedDoors (numDoors) {
  // Good luck!
  let array=[];
  // Initialize array to 100 falses;
  for (let i=0; i<numDoors;i++){
    array[i]=false;
  }

  // Start changing state of array
  for (let i=0; i<numDoors; i++){
    let oneIndex=i+1;
    // Get all indices divisible with by oneIndex no remainder
    for (let j=0;j<numDoors;j++){
      (j+1)%oneIndex==0 ? array[j]=!array[j] : ''      
    }
  }

  return array.reduce((pV,cV,i)=>{
    return cV ? pV.concat(i+1) : pV
  },[])
}

console.log(getFinalOpenedDoors(100))
