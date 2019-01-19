var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // change code below this line
  this.root=new Node();

  this.add=(word)=>{
    let cur=this.root;
    let letters=word.split('');
    letters.forEach((letter)=>{
      if (!cur.keys.get(letter)){
        cur.keys.set(letter, new Node());
        cur=cur.keys.get(letter);
      }
    })
    cur.setEnd()
  }

  this.print=()=>{
    let words=[];
    let recurPrint=(node,prefix='')=>{
      if (node.isEnd()){
        words.push(prefix)
      };
      
    }
    // recurPrint(this.root);
  }
  // change code above this line
};

let NT= new Trie();
NT.add('bullshit')

let map=new Map();
map.set('aa','a')
map.set('bb','b')
console.log(map)
console.log(map.keys())