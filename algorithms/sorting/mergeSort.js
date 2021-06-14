mergeSort = (array) => {
  if(!array) return undefined;
  if(array.length<2) return array;

  const splittingPoint=array.length/2;
  const elementsInFirstSlice = array.length/2;

  let left = array.slice(0,elementsInFirstSlice);
  let right = array.slice(splittingPoint);

  return merge(mergeSort(left),mergeSort(right));
}

const merge = (left,right) =>{
  if(!left || left.length<1) return right;
  if(!right || right.length<1) return left;
  let merged = [];
  while(left.length>0 && right.length>0){
    if(left[0]<right[0]){
      merged.push(left.shift());
    } else{
      merged.push(right.shift());
    }
    // console.log(left+" "+right);
  }
  for(i=0;i<left.length;i++) merged.push(left[i]);
  for(i=0;i<right.length;i++) merged.push(right[i]);
  // left.forEach(e=>merged.push(e));
  // right.forEach(e=>merged.push(e));
  return merged;
}


module.exports.run = () => {
  console.log(null);
  console.log([]);
  let array = [1]; 
  console.log(mergeSort(array));
  array = [21,9,97,3,5,6]; 
  console.log(mergeSort(array));
  array = [21,9,97,3,5,100,6]; 
  console.log(mergeSort(array));
  console.log(mergeSort([1,2,3,19,5]));
}