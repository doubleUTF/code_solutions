function makeAnagram(a, b) {
  let deletions=0;

  let s1=a.split('');
  let s2=b.split('');
  let s1Dict={}, s2Dict={};
  s1.forEach(v=>{
    !s1Dict[v] ? s1Dict[v]=1 : s1Dict[v]++
  })

  s2.forEach(v=>{
    !s2Dict[v] ? s2Dict[v]=1 : s2Dict[v]++
  })


  for (let letter in s1Dict){
    if (!s2Dict[letter]){
      deletions+= s1Dict[letter]
    } else if (s1Dict[letter]>s2Dict[letter]){
      deletions+=s1Dict[letter]-s2Dict[letter]
    }
  }

  for (let letter in s2Dict){
    if (!s1Dict[letter]){
      deletions+= s2Dict[letter]
    } else if (s2Dict[letter]>s1Dict[letter]){
      deletions+=s2Dict[letter]-s1Dict[letter]
    }
  }

  return (deletions)
}
makeAnagram('aabcd','abce')