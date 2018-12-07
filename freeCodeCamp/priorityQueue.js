function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue=(item)=>{
      for (let i=0; i<this.collection.length; i++){
        if (item[1]<this.collection[i][1]){
          return this.collection.splice(i,0,item);
        }
      }
        this.collection.push(item);
    }

    this.dequeue=()=>this.collection.shift()[0];

    this.front=()=>this.collection[0];

    this.size=()=>this.collection.length;

    this.isEmpty=()=>this.collection.length<1 ? true : false;
    // Only change code above this line
}

let pq=new PriorityQueue()
pq.collection=[['kitten', 2], ['dog', 2], ['rabbit', 2]]
pq.enqueue(['jagoff',5])
console.log(pq.dequeue())
