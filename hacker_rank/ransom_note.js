function checkMagazine(magazine,note){
  let magDict={}, noteDict={};
  magazine.forEach((v)=>{
    !magDict[v] ? magDict[v]=1 : magDict[v]+=1
  })

  note.forEach(v=>{
    !noteDict[v] ? noteDict[v]=1 : noteDict[v]+=1
  })

  for (let word in noteDict){
    if (!magDict[word] || magDict[word]<noteDict[word]) return 'No'
  }
  return 'Yes'
}

let mag=[ 'give', 'me', 'one', 'grand', 'today', 'night' ]
let note=[ 'give', 'one', 'grand', 'today' ]

console.log(checkMagazine(mag,note))
