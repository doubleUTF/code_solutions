function processData(input) {
  //Enter your code here
  let ignoreFirstLine=input.replace(/\w+\n/,'');
  let bookArray=(input.match(/\w+\s\d+/g));
  let queryArray=ignoreFirstLine.match(/^\w+$/gm);

  let bookMap={};
  bookArray.forEach(string=>{
    let wordArray=string.split(' ');
    bookMap[wordArray[0]]=wordArray[1]
  })
  queryArray.forEach(query=>{
    if (bookMap[query]){
      console.log(query+'='+bookMap[query])
    } else {
      console.log('Not found')
    }
  })
} 

let k=`3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`

processData(k)