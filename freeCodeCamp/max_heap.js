var MaxHeap = function() {
  this.heap=[null];
  this.add=(value)=>{
    this.heap.push(value);
    let idx=this.heap.length-1;
    let newValue=this.heap[idx]
    let parentIdx=Math.floor(idx/2);
    let parentValue=this.heap[parentIdx];
    if (!parentValue) return;
    // console.log(this.heap);
    while (newValue>parentValue){
      [this.heap[idx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[idx]];
      idx=parentIdx;
      newValue=this.heap[parentIdx];
      parentIdx=Math.floor(parentIdx/2)
      parentValue=this.heap[parentIdx];
      if (!parentValue) return
    }
    // console.log(this.heap)
  }
  // change code below this line
  // change code above this line
};

let mh=new MaxHeap()
mh.add(56)
mh.add(78)
mh.add(100)
mh.add(120)
mh.add(300)
// console.log(mh.heap)

let k=[1,2,3];
let b=null;
console.log(5>b)