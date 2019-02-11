function dfs(graph, root) {
  let queue=[graph[root]];
  let nodesVisited=[root];

  let enqueue=(node)=>{
    queue.push(node);
  }
  
  let dequeue=()=>{
    return queue.pop();
  }

  while(queue.length>0){
    let cur = dequeue();
    cur.forEach((v,i)=>{
      if (v==1 && !nodesVisited.includes(i)){
        enqueue(graph[i]);
        nodesVisited.push(i)
      }
    })
  }
  return nodesVisited;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));