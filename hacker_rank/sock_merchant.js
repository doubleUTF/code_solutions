function sockMerchant(n, ar) {
  let sorted=ar.sort();
  let index=0;
  let pairs=0;
  
  while(index<n){
    if (sorted[index]==sorted[index+1]){
      pairs++, index+=2;
    } else index++
  }

  return pairs
}

let k =[1,2,1,2,1,3,2]

console.log(sockMerchant(k.length,k))