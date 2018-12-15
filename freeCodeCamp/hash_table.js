var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
this.add=(k,v)=>{
    let hashed=hash(k)
    if (!this.collection[hashed]){
        this.collection[hashed]={}
    }
    this.collection[hashed][k]=v;
}

  this.remove=(k)=>{
    delete this.collection[hash(k)][k];
  }

  this.lookup=(k)=>{
      let result=this.collection[hash(k)][k]
      return result ? result : null;
      }
  // change code above this line
};
let test=new HashTable()
test.add('key','value');
test.remove('key')

console.log(test.lookup('key'))