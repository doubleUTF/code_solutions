function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    var currentNode=head;
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      currentNode = head;
        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  }; 
    // Only change code above this line

    this.remove = function(element){
      // Only change code below this line
      if (!head) throw new Error('No head');
      if (head.element==element){
        head=head.next
        length--
        return;
      }
      let cur=head;
      let prev=null;

      while(cur != null && cur.element!=element){
        prev=cur;
        cur=cur.next
      }

      if (!cur) throw new Error('cannot delete')

      prev.next=cur.next
    }

    this.isEmpty=()=> length ==0 ? true : false;

    this.indexOf=(ele)=>{
      let index=0;
      let cur=head;
      while (cur.element != ele && cur.next){
        index++
        cur=cur.next
      }
      if (cur.element!=ele) return -1
      return index
    }

    this.elementAt=(num)=>{
      let index=0;
      let cur=head;
      while (num>index){
        cur=cur.next;
        if (!cur) return undefined;
        index++
      }
      return cur.element
    }

    this.removeAt=(num)=>{
      let index=0;
      let cur=head;
      if (num > this.size()-1 || num <0) return null
      while (num-1>index){
        cur=cur.next;
        if (!cur) return null;
        index++
      }
      let removed=cur.next;
      if (cur.next){
        cur.next=cur.next.next;
      }
      length--
      return removed.element
    }

    this.addAt=(idx,ele)=>{
      let index=0;
      let cur=head;

      if (idx < 0 || idx > this.size()-1) return false;
      while (index<idx-1){
        index++;
        cur=cur.next;
      }
      let addedNode=new Node(ele);
      addedNode.next=cur.next;
      cur.next=addedNode;
      length++;
    }
  };

  let linked=new LinkedList();
  linked.add('gachi')
  linked.add('bass')
  linked.add('stupid')
  linked.add('ahaha')
  linked.add('whatt')
  linked.add('ahasha')

  console.log(linked.removeAt(6))
