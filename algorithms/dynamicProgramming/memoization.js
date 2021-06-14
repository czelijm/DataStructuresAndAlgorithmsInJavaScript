let count = 0;

function fibonacci(n) {
  count++;
  console.log("count : "+count);
  if(n<2) return n;
  return fibonacci(n-1) + fibonacci(n-2); 
}

//more readable
// function fibonacciMemoized(n) {
//   let cache = {}
//   if(n in cache) return cache[n];
//   cache[n] = fibonacci(n);
//   return cache[n];
// }

function fibonacciMemoized() {
  let cache = {}
  let count = 0;
  return function(n){ 
    if(!(n in cache)) {
      cache[n] = fibonacci(n);
    }
    return cache[n];
  }
}

function fibonacciMemoizedOptimised() {
  let cache = {}
  let count = 0;
  function memo(n){ 
    if(!(n in cache)) {
      console.log("count : "+count++);
      if(n<2) cache[n] = n;
      else {
        cache[n] = memo(n-1) + memo(n-2);
      }
    }
    return cache[n];
  }

  return memo;
}


module.exports.run = () => {
  const memoized = fibonacciMemoized();
  const memoizedOptimized = fibonacciMemoizedOptimised();
  console.log('Recurention fibonacci: '+ fibonacci(8));
  console.log('Memoized Recurention fibonacci: '+ memoized(8));
  console.log('Memoized Recurention fibonacci: '+ memoized(5));
  console.log('Memoized Recurention fibonacci: '+ memoizedOptimized(8));
  console.log('Memoized Recurention fibonacci: '+ memoizedOptimized(5));
}