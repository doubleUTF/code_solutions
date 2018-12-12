function twoStrings(s1, s2) {
  let s1Dict={}
  let s1Array=s1.split('')
  let s2Array=s2.split('')

  s1Array.forEach(v=>{
    s1Dict[v]=true;
  })
  console.log(s1Dict)
  let result = s2Array.some(v=>{
    return s1Dict[v]
  })
  return result ? 'YES' : 'NO'
}

console.log(twoStrings('hello','world'))