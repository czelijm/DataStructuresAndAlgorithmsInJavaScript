function factorialRecurention(n){
  if(n===1){return 1;}
  return n* factorialRecurention(n-1);  
}

function factorialItrative(n){
  let result = 1;
  for(let i=n; i>1; i--){
    result*=i;
  }
  return result;
}

function fibonacciRecurentive(n){
  if(n===0) return 0;
  if(n===1 || n===2) return 1;
  return fibonacciRecurentive(n-1) + fibonacciRecurentive(n-2);
}

function fibonacciIterative(n){
  if(n<=0) return 0;
  if(n===1 || n===2) return 1;

  let last = 1;
  let actual = 1;
  let result;

  for(let i=3; i<=n; i++){
    result = actual + last; 
    last=actual;
    actual=result;
  }
  return result;
}

module.exports.run = () => {
  console.log('Iterative factorial: '+factorialItrative(6));
  console.log('Recurention factorial: '+factorialRecurention(6));
  console.log('Iterative fibonacci: '+fibonacciIterative(8));
  console.log('Recurention fibonacci: '+fibonacciRecurentive(8));
}