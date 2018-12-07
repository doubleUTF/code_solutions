function countingValleys(n, s) {
  let currentLevel=0;
  let index=0;
  let valleys=0;

  while (index<n){
    switch (s.charAt(index)){
      case 'D':
        if (currentLevel==0){
          valleys++;
        }
        currentLevel--
        break;
      case 'U':
        currentLevel++
        break;
    }
    index++
  }

  return valleys;
}