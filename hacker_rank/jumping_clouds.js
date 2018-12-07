function jumpingOnClouds(c) {
  let index=0;
  let jumps=0;
  while(index<c.length-1){
    console.log('jumps -',jumps, 'index -',index)
    if (c[index+2]==0){
      index+=2;
    } else {
      index++
    }
    jumps++;
  }
  return jumps;
}

let l=[0,0,0,1,0,0]
console.log(jumpingOnClouds(l))