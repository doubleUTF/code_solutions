function getOnes(n){
  // let binArray=[];
  let maxConsecutives=0;
  let currentConsecutives=0;
  while (n > 0){
    let remainder= n % 2;
    n= Math.floor(n/2)
    if (remainder==1){
      currentConsecutives++;
      if (currentConsecutives>maxConsecutives){
        maxConsecutives=currentConsecutives;
      }
      // binArray.unshift(1)
    } else {
      // binArray.unshift(0)
      currentConsecutives=0;
    }
  }
  console.log(maxConsecutives)
}

getOnes(313212519)



