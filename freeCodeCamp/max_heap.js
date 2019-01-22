var MaxHeap = function() {
  this.heap=[null];
  this.insert=(value)=>{
    this.heap.push(value);
    let idx=this.heap.length-1;
    let newValue=this.heap[idx]
    let parentIdx=Math.floor(idx/2);
    let parentValue=this.heap[parentIdx];
    if (!parentValue) return;
    while (newValue>parentValue){
      [this.heap[idx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[idx]];
      idx=parentIdx;
      newValue=this.heap[parentIdx];
      parentIdx=Math.floor(parentIdx/2)
      parentValue=this.heap[parentIdx];
      if (!parentValue) return
    }
  }

  this.print=()=>{
    return this.heap.slice(1)
  }

  this.remove=()=>{
    let last=this.heap.pop()
    this.heap.splice(1,0,last)
    console.log(this.heap)
  }

  // change code below this line
  // change code above this line
};

let mh=new MaxHeap()
mh.insert(56)
mh.insert(78)
mh.insert(100)
mh.insert(120)
mh.insert(300)
mh.insert(110)
mh.insert(400)
mh.insert(500)
console.log(mh.print())
mh.remove()
// let test=new MaxHeap();
// test.insert(50); test.insert(100); test.insert(700); test.insert(32); test.insert(51)
// console.log(test.print())
