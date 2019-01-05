function firstBag(bags){
  let bagDict={};
  let maxNum=0;
  let maxBags=[];
  bags.forEach(bag=>{
    bagDict[bag] ? bagDict[bag]++ : bagDict[bag]=1
  })

  for (let bag in bagDict){
    if (bagDict[bag]>maxNum){
      maxNum=bagDict[bag];
      maxBags=[bag]
    } else if (bagDict[bag]==maxNum){
      maxBags.push(bag)
    }
  }
  maxBags.sort((a,b)=>{
    // Descending alphabetical sort
    let j=a.toLowerCase();
    let k=b.toLowerCase();
    if (j<k) return 1;
    if (j>k) return -1
    return 0;
    });
  return maxBags[0];
}


let k=['bagD','bagD','bagB','bagB','bagC','bagA','bagA',] // bagB

console.log(firstBag(k))