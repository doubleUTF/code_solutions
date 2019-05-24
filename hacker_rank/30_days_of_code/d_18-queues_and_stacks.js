function Solution(){
  this.stack=[];
  this.queue=[];
  this.pushCharacter = (char)=>{
    this.stack.push(char)
  }

  this.popCharacter= ()=>{
    return this.stack.pop()
  }

  this.enqueueCharacter=(char)=>{
    this.queue.push(char)
  }

  this.dequeueCharacter=()=>{
    return this.queue.unshift()
  }
}

let k=new Solution()
k.pushCharacter('h')
console.log(k.stack)