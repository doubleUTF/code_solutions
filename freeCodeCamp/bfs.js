function bfs(graph, root) {
  // Distance object returned
  var nodesLen = {};
  graph.forEach((v,i)=>{
    nodesLen[i]=Infinity;
  })
  nodesLen[root]=0;

  let queue=[[graph[root],0]];

  let enqueue=(node,lvl)=>{
    queue.push([node,lvl]);
  }
  
  let dequeue=()=>{
    return queue.shift();
  }
  while(queue.length>0){
    let cur=dequeue();
    cur[0].forEach((edge,idx)=>{
      let level=cur[1];
      if (nodesLen[idx]==Infinity && cur[0][idx]==1){
        enqueue(graph[idx],++level)
        nodesLen[idx]=level++
      }
    })
  }
  return nodesLen;
};


// var exBFSGraph = [
//   [0, 1, 0, 0],
//   [1, 0, 1, 0],
//   [0, 1, 0, 1],
//   [0, 0, 1, 0]
// ];
// console.log(bfs(exBFSGraph, 3));
let k1=[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]
console.log(bfs(k1,1))
