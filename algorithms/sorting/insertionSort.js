insertionSort = (array) => {
  if(!array) return undefined;
  if(array.length<2) return array;

  // let minIndex;

  for(i=1;i<array.length;i++){
    for(j=0;j<i;j++){
      console.log(i);
      if(array[j]>array[i]){
        const tmp = array[i];
        for(k=i-1;k>=j;k--){
          console.log(k);
          array[k+1]=array[k];
        }
        array[j] = tmp;
        break; 
      }
    }
  }
  return array;
}



module.exports.run = () => {
  console.log(null);
  console.log([]);
  let array = [1]; 
  console.log(insertionSort(array));
  array = [21,9,97,3,5,6]; 
  console.log(insertionSort(array));
  array = [21,9,97,3,5,100,6]; 
  console.log(insertionSort(array));
}