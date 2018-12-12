function maximumToys(prices, k) {
  let toys=0;
  let sorted=prices.sort((a,b)=>a-b);
  for (let i=0;i<prices.length;i++){
    if (k>sorted[i]){
      toys++;
      k-=sorted[i]
    } return toys
  }
  return toys;
}
