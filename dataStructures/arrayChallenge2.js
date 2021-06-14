module.exports.mergeSortedArrays = mergeSortedArrays;

 function mergeSortedArrays(arr1,arr2){
  if( (!arr1 && !arr2) || (arr1.length<1 && arr2.length<1) ) {return null};

  let i1 = 0, i2=0;

  var result = [];

  while(i1<arr1.length && i2<arr2.length){
    if(arr1[i1]<arr2[i2]){
      result.push(arr1[i1++]);
    } 
    else{
      result.push(arr2[i2++]);
    }
  }

  for (;i1<arr1.length;){
    result.push(arr1[i1++]);
  }
  for (;i2<arr2.length;){
    result.push(arr2[i2++]);
  }

  return result;
}

// mergeSortedArrays([0,3,4,31],[4,6,30]);