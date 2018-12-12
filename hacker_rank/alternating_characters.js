function alternatingCharacters(s) {
  let deletions=0;
  let sArray=s.split('');
  let i=0;
  let length=s.length;
  while(i<length-1){
    if (sArray[i]==sArray[i+1]){
      deletions++;
    } 
    i++;
  }

  return deletions;
}

console.log(alternatingCharacters('AAABBB'))
