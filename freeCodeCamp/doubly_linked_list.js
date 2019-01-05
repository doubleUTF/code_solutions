var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add=(ele,prev)=>{
    let node=new Node(ele)
    if (!this.head){
      this.head=node;
      this.tail=node;
    } else {
      let cur=this.head;
      while(cur.next){
        cur=cur.next;
      }
      cur.next=node;
      node.prev=cur;
      this.tail=node;  
      }
    }

  this.remove=(ele)=>{
    let cur=this.head;
    if (!this.head) return null
    while (cur.data != ele && cur.next){
      cur=cur.next;      
    }
    if (cur==this.head){
      if (!cur.next){
        this.head=null;
        this.tail=null;
        return;
      } else {
        this.head=cur.next;
        return
      }
    }
  
    if (cur==this.tail){
      if (cur.prev==this.head){
        this.tail=this.head;
        return;
      } else {
        cur.prev.next=null;
        this.tail=cur.prev
        return
      }
    }
    cur.prev.next=cur.next;
    cur.next.prev=cur.prev;
  }
  // change code above this line
  
  this.reverse=()=>{
    if (!this.head) return null;
    let cur=this.head;
    this.tail=this.head;
    let temp;
    
    while (cur){
      temp=cur.prev;
      cur.prev=cur.next;
      cur.next=temp
      cur=cur.prev;
    }

    if (temp){
      this.head=temp.prev
    }
  }
};

let dl=new DoublyLinkedList();
dl.add('gachi')
dl.add('bass')
dl.add('AHHHHHHHHHHHHHH')
dl.add('ahhhh')
// dl.remove('ahhhh')
dl.reverse();
console.log(dl)