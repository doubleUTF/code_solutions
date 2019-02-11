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
    // Removes root of heap;
    if (this.heap.length<2){
      return this.heap=[null];
    }
    let removed=this.heap.splice(1,1);
    let last=this.heap.pop();
    let idx=1;
    this.heap.splice(idx,0,last);


    while ((this.heap[idx] < this.heap[idx+1] || this.heap[idx] < this.heap[idx+2])){
      let greaterIdx;
      if (!this.heap[idx+2]){
        greaterIdx=idx+1
      } else {
        greaterIdx= this.heap[idx+1] > this.heap[idx+2] ? idx+1 : idx+2;
      }
      [this.heap[greaterIdx],this.heap[idx]]=[this.heap[idx],this.heap[greaterIdx]];
      idx=greaterIdx;
    }
    console.log(this.heap)
    return removed[0];
  }

  // change code below this line
  // change code above this line
};

let mh=new MaxHeap()
// mh.insert(56)
// mh.insert(78)
// mh.insert(100)
// mh.insert(120)
// mh.insert(300)
// mh.insert(600)
// mh.insert(110)
// mh.insert(400)
// mh.insert(500)
// console.log(mh.remove())
// console.log(mh.remove())
// console.log(mh.remove())
// console.log(mh.remove())
// console.log(mh.remove())
// console.log(mh.remove())
// console.log(mh.remove())

// console.log(mh.print())
let test=new MaxHeap();
test.insert(30); test.insert(300); test.insert(500); test.insert(10);
let result=[];
result.push(test.remove())
result.push(test.remove())
result.push(test.remove())
result.push(test.remove())
console.log(result)

