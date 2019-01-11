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
      if (!this.root) return -1;
      let height=0;
      let nextNodes=[]
      this.root.left? nextNodes.push(this.root.left) : ''
      this.root.right? nextNodes.push(this.root.right) : ''
      
       while (nextNodes.length>0){
         let tempNodes=[]
         height++
          for (let i=0; i<nextNodes.length; i++){
            let nextNode= nextNodes[i];
            if (!nextNode.left && !nextNode.right){
              return height
            }
            nextNode.left? tempNodes.push(nextNode.left) : ''
            nextNode.right? tempNodes.push(nextNode.right) : ''            
          }
          nextNodes=tempNodes;
       }
       return height
    }
    
    this.findMaxHeight=()=>{
      if (!this.root) return -1;
      let height=0;
      let nextNodes=[]
      this.root.left? nextNodes.push(this.root.left) : '';
      this.root.right? nextNodes.push(this.root.right) : '';

      while (nextNodes.length>0){
        height++;
        let tempNodes=[];
        for (let i=0; i<nextNodes.length;i++){
          let curNode=nextNodes[i];
          curNode.left ? tempNodes.push(curNode.left) : '';
          curNode.right ? tempNodes.push(curNode.right) : '';
        }
        nextNodes=tempNodes;
      }
      return height;
    }

    this.isBalanced=()=>{
      let diff = this.findMaxHeight()-this.findMinHeight();
      return  diff <=1 ? true : false;
    }

    this.inorder=()=>{
      // Left to right
      let result=[]
      if (!this.root) return null;
      function recurInorder(node){
        if (node.left) {
          recurInorder(node.left)
        }
        result.push(node.value)
        if (node.right){
          recurInorder(node.right)
        }
      }
      recurInorder(this.root);
      return result;
    }

    this.preorder=()=>{
      // Roots first
      let result=[];
      if (!this.root) return null;
      function recurPreorder(node){
        result.push(node.value);
        if (node.left){
          recurPreorder(node.left)
        }
        if(node.right){
          recurPreorder(node.right)
        }
      }
      recurPreorder(this.root)
      return result;
    }

    this.postorder=()=>{
      // Leaves first
      let result=[];
      if (!this.root) return null;
      function recurPostorder(node){
        if (node.left){
          recurPostorder(node.left)
        }
        if (node.right){
          recurPostorder(node.right)
        }
        result.push(node.value)
      }
      recurPostorder(this.root);
      return result;
    }

    this.levelOrder=()=>{
      if (!this.root) return null;
      let result=[];
      let nextNodes=[];
      result.push(this.root.value);
      this.root.left ? nextNodes.push(this.root.left) : '';
      this.root.right ? nextNodes.push(this.root.right) : '';
      while (nextNodes.length>0){
        let tempNodes=[];
        for (let i =0; i<nextNodes.length; i++){
          let node=nextNodes[i];
          result.push(node.value);
          node.left ? tempNodes.push(node.left) : '';
          node.right ? tempNodes.push(node.right) : ''; 
        }
        nextNodes=tempNodes;        
      }
      return result;
    }

    
    this.reverseLevelOrder=()=>{
      if (!this.root) return null;
      let result=[];
      let nextNodes=[];
      result.push(this.root.value);
      this.root.right ? nextNodes.push(this.root.right) : '';
      this.root.left ? nextNodes.push(this.root.left) : '';
      while (nextNodes.length>0){
        let tempNodes=[];
        for (let i =0; i<nextNodes.length; i++){
          let node=nextNodes[i];
          result.push(node.value);
          node.right ? tempNodes.push(node.right) : ''; 
          node.left ? tempNodes.push(node.left) : '';
        }
        nextNodes=tempNodes;        
      }
      return result;
    }

    this.remove=(num)=>{
      let findResult=this.find(num);
      if (!findResult || !findResult.node) return null;
      let target=findResult.node;
      let parent=findResult.parent;
      
      let targetChildren=(target.left ? 1 : 0) + (target.right ? 1 : 0)
      let direction;
      
      if (!parent) {
        // Only works when root node only has one child
        return this.root=target.left ? target.left : target.right;
      }
      if (parent.left){
        if (parent.left.value==num){
          direction='left';
        } else {
          direction='right';
        }
      } else {
        direction='right';
      }
      console.log('direction',direction)
      console.log('children',children)
        switch (children){
          case 0:
            parent[direction]=null;
            break;
          case 1:
            parent[direction]= target.left ? target.left : target.right;
            break;
          case 2:
            // console.log(this.findMin(findResult.node.right))
            // let minRightTree=this.findMin(findResult.node.right);
            // check if replacement node is direct child of node to be removed
            // if (minRightTree.parent.value==)
            break
        }
    }

    this.find=(int)=>{
      // return object with parent and node itself
      let cur=this.root;
      let temp;
      let previous;
      if (!cur) return null;
      let result=(node,parent)=>{
        return {node,parent}
      }
      if (cur.value==int) return result(cur,null)
      while (cur){
        temp=cur;
        if (cur.value==int) return result(temp,previous);
        if (int>cur.value){
          cur=cur.right
        } else {
          cur=cur.left;
        }
        previous=temp
      }
     return temp==int ? result(temp,previous) : null;
    }

    this.findMin=(node)=>{
      // Returns smallest node and its parent of a tree node
      // Only returns parent when node has children
      let cur =node;
      let parent;
      while (cur.left){
        parent=cur;
        cur=cur.left
      }    
      let result=(node,parent)=>{
        return {node,parent}
      }
      return result(cur,parent);
    }

    
}

let bs=new BinarySearchTree();


// bs.add(5)
// bs.add(10)
// bs.add(7)
// bs.add(8)
// bs.add(15)
// bs.add(20)
// bs.add(13)
// bs.add(11)
// bs.add(12)

bs.add(5)
bs.add(8)
bs.add(10)
bs.add(4)
bs.remove(5)
console.log(bs.root)