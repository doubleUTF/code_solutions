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
      let newNode;
      // Root node
      if (!parent) {
        if (targetChildren<2){
          // Target node is root node and has 1 or less child nodes.
          return this.root=target.left ? target.left : target.right;
        } else {
          // Handle removal of root node with 2 children
            let minNum=this.findMin(target.right);
            let minResult=this.find(minNum);
            // console.log(minResult)
            //  Right min node is direct child of root node +
            if (this.root.value==minResult.parent.value){
              this.root.value=minNum;
              this.root.right=minResult.node.right;
              return
            }
            //  Leaf node
            if (!minResult.node.right){
              // new node inherits root nodes children, parent node of target removes left +
              this.root.value=minNum;
              minResult.parent.left=null;
              return;
            }
            //  Min node of right subtree has a right node +
            else {
              this.root.value=minNum;
              minResult.parent.left=minResult.node.right
            }
            return
        }
        
      }
      // Node is not root node
      else {
        if (parent.left){
          parent.left.value==num ? direction='left' : direction='right'
        } else {
          direction='right';
        }
          // console.log('direction',direction)
          // console.log('children',targetChildren)
          switch (targetChildren){
            case 0:
              parent[direction]=null;
            break;
            case 1:
              parent[direction]= target.left ? target.left : target.right;
            break;
            case 2:
              let minNum=this.findMin(target.right);
              let minResult=this.find(minNum);
              // leaf node
              if (!minResult.node.right){
                target.value=minNum;
                minResult.parent.left=null;
                return
              } else {
                // has right node
                target.value=minNum;
                minResult.parent.left=minResult.node.right;
                return
              }                
          }
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
      // Returns smallest number of a node subtree
      let cur =node;
      while (cur.left){
        cur=cur.left
      }    
      return cur.value;
    }

    this.invert=()=>{
      if (!this.root) return null;
      let cur = this.root;
      let nextNodes=[];
      nextNodes.push(cur);
      while (nextNodes.length>0){
        let tempNodes=[];
        nextNodes.forEach((node)=>{
          node.left ? tempNodes.push(node.left) :'';
          node.right ? tempNodes.push(node.right) : '';
          [node.left,node.right]=[node.right,node.left];
        })
        nextNodes=tempNodes;
      }
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
bs.add(6)
bs.add(7)
bs.add(9)
bs.add(11)
bs.invert()
console.log(bs.root)
// console.log(bs.root.right)
// console.log(bs.find(8))
// console.log(bs.root)