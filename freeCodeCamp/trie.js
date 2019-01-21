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
      } 
      cur=cur.keys.get(letter);
    })
    cur.setEnd()
  }

  this.print=()=>{
    let words=[];
    let recurPrint=(node,prefix='')=>{
      if (node.isEnd()){
        words.push(prefix)
      };
      for (let letter of node.keys.keys()){
        recurPrint(node.keys.get(letter),prefix+letter)
      }
    }
    recurPrint(this.root);
    return words
  }

  this.isWord=(word)=>{
    let cur=this.root;
    let letters=word.split('');
    for (let i =0; i<letters.length; i++){
      if (cur.keys.get(letters[i])){
        cur=cur.keys.get(letters[i])
      } else return false
    }
    return cur.isEnd() ? true : false;
  }
  // change code above this line
};

let NT= new Trie();
// NT.add('bullshit')
// NT.add('bullish')
// NT.add('ahahah')
// NT.add('aHHHHHHHHHHHH')
// console.log(NT.print())
// console.log(NT.isWord('aHHHHHHHHHHHH'))
// console.log(NT)
NT.add('jump'); NT.add('jumps'); NT.add('jumped'); NT.add('house'); NT.add('mouse')
console.log(NT.print())
