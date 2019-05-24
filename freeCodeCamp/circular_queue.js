class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
       this.queue.push(null);
       size--;
    }

  }

  print() {
    return this.queue;
  }


  enqueue(item) {
   // Only change code below this line
    if (this.queue[this.write]!=null) return null
    if (this.write > this.max){
      this.write=0
      return null
    }
    this.queue[this.write]=item;
    this.write < this.max ? this.write++ : this.write=0;
    return item;
   // Only change code above this line
  }

  dequeue() {
   // Only change code below this line
    if (this.queue[this.read]==null) return null;
    let item = this.queue[this.read];
    this.queue[this.read]=null;
    this.read < this.max ? this.read++: this.read=0;
    return item;
   // Only change code above this line
  }
}

// text: Trying to dequeue past the write pointer returns <code>null</code> and does not advance the write pointer.
let test= new CircularQueue(3); 
test.enqueue(17); 
test.enqueue(32); 
test.enqueue(591); 
console.log(test.dequeue() === 17 )
console.log(test.dequeue() === 32 )
console.log(test.dequeue() === 591 )
console.log(test.dequeue() === null )
console.log(test.dequeue() === null)
console.log(test.dequeue() === null )
console.log(test.dequeue() === null)
console.log(test.enqueue(100) === 100)
console.log(test.dequeue() === 100);