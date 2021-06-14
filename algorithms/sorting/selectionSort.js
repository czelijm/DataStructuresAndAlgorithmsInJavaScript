selectionSort = (array) => {
  if(!array) return undefined;
  if(array.length<2) return array;

  let minIndex;

  for(i=0;i<array.length-1;i++){
    minIndex=i;
    for(j=i+1;j<array.length;j++){
      console.log(j)
      if(array[j]<array[minIndex]) minIndex=j;
    }
    if(minIndex!==i){
        let tmpVal = array[minIndex];
        array[minIndex]=array[i];
        array[i]=tmpVal;
    }
  }
  return array;
}


module.exports.run = () => {
  console.log(null);
  console.log([]);
  let array = [1]; 
  console.log(selectionSort(array));
  array = [21,9,97,3,5,6]; 
  console.log(selectionSort(array));
  array = [21,9,97,3,5,100,6]; 
  console.log(selectionSort(array));
}