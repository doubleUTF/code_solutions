function countSwaps(a) {
  let swaps=0;
  let first;
  let last;
  for (let i=0;i<a.length;i++){
    for (let j=0;j<a.length-1;j++){
      if (a[j]>a[j+1]){
        [a[j],a[j+1]]=[a[j+1],a[j]];
        swaps++;
        console.log(a)
      }
    }
  }
  first=a[0], last=a[a.length-1];
  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${first}`)
  console.log(`Last Element: ${last}`)
}

countSwaps([4,3,2,1])