function reverseArray(arr){
  let reversed=[]
  arr.forEach((v,i)=>{
    reversed[i]=arr[arr.length-1-i]
  })
  return console.log(reversed.join(' '));
}

console.log(reverseArray([1,23,4,5]))