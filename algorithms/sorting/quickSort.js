quickSort = (array) => {
  if(!array) return undefined;
  if(array.length<2) return array;

  let pivot = array.length-1;
  let checkPointer = 0;
  let pivotVal = array[pivot];

  for(let i=0;i<array.length;i++){
    if(pivot===checkPointer) break;
    // console.log(array[checkPointer] + " " + array[pivot]);
    if(array[checkPointer]>pivotVal){
      array[pivot] = array[checkPointer];
      array[checkPointer]=array[--pivot];
      // array[pivot] = pivotVal //optimisation?
    } else {
      checkPointer++;
    }
  }
  // array[pivot] = pivotVal //optimisation?

  let left = array.slice(0,pivot);
  let right = array.slice(pivot+1);
  // console.log(left);
  // console.log(right);

  let l = quickSort(left);
  l.push(pivotVal);
  let r = quickSort(right);

  return l.concat(r);
}


module.exports.run = () => {
  console.log(null);
  console.log([]);
  let array = [1]; 
  console.log(quickSort(array));
  array = [21,9,97,3,5,6]; 
  console.log(quickSort(array));
  array = [21,9,97,3,5,100,6]; 
  console.log(quickSort(array));
  console.log(quickSort([1,2,3,19,5]));
  console.log(quickSort([2,33]));
}