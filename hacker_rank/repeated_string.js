function repeatedString(s, n) {
  let num_of_a=0;
  if (n<s.length){
    for (let i=0;i<n;i++){
      if (s[i]=='a'){
        num_of_a++
      }
    }
    return (num_of_a);
  } else {
    let times_repeat=Math.floor(n/s.length);
    let partialLength=n%s.length;
    let remainder_a=0;
    for (let i=0;i<s.length;i++){
      if (s[i]=="a"){
        num_of_a++
      }
    }

    for (let i=0;i<partialLength;i++){
      if (s[i]=="a"){
        remainder_a++
      }      
    }
    return (times_repeat*num_of_a+remainder_a)
  }
}

