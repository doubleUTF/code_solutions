class Calculator {
  power(n,p){
    try{
      if ( n <0 || p < 0 ){
        throw Error('error')
      }
      return n**p
    } catch(error){
      return ('n and p should be non-negative')
    }
  }
}

let calc=new Calculator;
console.log(calc.power(2,2))