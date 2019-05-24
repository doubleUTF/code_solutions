function Node(data){
  this.data=data;
  this.next=null;
}

function Solution(){
  this.insert=function(head,data){
    if (!head){
      return new Node(data)
    } else if (!head.next){
      head.next=new Node(data)
    } else {
      this.insert(head.next,data)
    }
    return head
  }
} 