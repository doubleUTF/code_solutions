function quickSort(array) {
  // change code below this line
  console.log(array)
  if (array.length<2){
    return array
  }
  let pivot = array[0];
  let greater=[];
  let lesser=[];
  let rest=array.slice(1)
  rest.forEach(x=>{
    x > pivot ? greater.push(x) : lesser.push(x);
  })
  return quickSort(lesser).concat(pivot).concat(quickSort(greater))
  // change code above this line
}

// test array:
let k = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

// console.log(k.slice(1))
let b=[1,2]
let c=[3,4]
// console.log(b+c)
console.log(quickSort(k))