var MaxHeap = function() {
  this.heap=[null];
  this.add=(value)=>{
    this.heap.push(value);
    let idx=this.heap.length-1;
    let newValue=this.heap[idx]
    let parentIdx=idx/2;
    let parentValue=this.heap[parentIdx];
    console.log('parent value',parentValue)
    if (!parentValue) return;
    console.log(newValue,parentValue)
    while (newValue>parentValue){
      [newValue,parentValue]=[parentValue,newValue];
      idx=parentIdx;
      parentIdx=idx/2;
    }
  }
  // change code below this line
  // change code above this line
};

let mh=new MaxHeap()
mh.add(56)
mh.add(78)
mh.add(100)
console.log(mh.heap)

let k=[1,2,3];
