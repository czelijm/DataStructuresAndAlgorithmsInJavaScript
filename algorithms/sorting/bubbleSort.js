bubbleSort = (array) => {
  if(!array) return undefined;
  if(array.length<2) return array;
  let wasChanged;
  for(i=0;i<array.length-1;i++){
    wasChanged=false;
    for(j=1;j<array.length-i;j++){
      if(array[j-1]>array[j]){
        let tmpVal = array[j];
        array[j]=array[j-1];
        array[j-1]=tmpVal;
        wasChanged=true;
      }
    }
    if(!wasChanged){break;}
  }
  return array;
}


module.exports.run = () => {
  console.log(null);
  console.log([]);
  let array = [1]; 
  console.log(bubbleSort(array));
  array = [21,9,97,3,5,6]; 
  console.log(bubbleSort(array));
  array = [21,9,97,3,5,100,6]; 
  console.log(bubbleSort(array));
}