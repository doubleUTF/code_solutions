function processData(input) {
  //Enter your code here
  let removeFirstLine=input.replace(/\w+\n/,'')
  if (typeof(input) != 'string') return
  
  let m= removeFirstLine.split('\n')
  m.forEach(line=>{
    let even='';
    let odd='';
    line.split('').forEach((v,i)=>{
      i % 2 ==0 ? even+=v : odd+=v
    })
    console.log(even + ' ' + odd)

  })

} 
let k=`2
Hacker
Rank`
processData(k)