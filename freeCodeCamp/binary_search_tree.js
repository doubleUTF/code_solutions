var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line

    this.add=(int)=>{
      let cur = this.root;
      let temp;
      if (!cur){
        this.root=new Node(int);
        return;
      }
      while (cur){
        temp=cur;
        if (cur.value==int) return null;
        if (int>cur.value){
          cur=cur.right
        } else if (int<cur.value){
          cur=cur.left;
        }        
      } 
      let newNode= new Node(int);
      if (int>temp.value){
        temp.right=newNode;
      } else {
        temp.left=newNode;
      }
    }
    // change code above this line

    this.isPresent=(int)=>{
      let cur=this.root;
      let temp;
      if (!cur) return false;
      while (cur){
        temp=cur;
        if (cur.value==int) return true;
        if (int>cur.value){
          cur=cur.right
        } else {
          cur=cur.left;
        }
      }
     return temp==int;
    }

    this.findMinHeight=()=>{
      let cur=this.root;
      if (!cur) return -1;
      let temp;
      while (cur){
        
      }

    }
    
    this.findMaxHeight=()=>{
      
    }

    this.isBalanced=()=>{
      
    }
}

let bs=new BinarySearchTree();
bs.add(5)
bs.add(7)
bs.add(6)
console.log(bs.findMinHeight())