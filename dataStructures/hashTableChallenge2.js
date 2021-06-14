module.exports.run = () => {
  console.log(
  firstRepeatedElementInArray([2,1,2,3,4,2])
    + "," +
  firstRepeatedElementInArray([2,1,3,4])
    + "," +
  firstRepeatedElementInArray([2,1,3,4,1])
  );
}

function firstRepeatedElementInArray(arr){
  const hashMap = new Map();
  for(let i = 0; i<arr.length;i++){
    let value = arr[i];
    // if(!hashMap.get(value)!==undefined){
    if(hashMap.get(value)){
      return value;
    }else{
      hashMap.set(value,true);
    }
  }
  return undefined;
}

  //this type of loop will not work in case of returning it faster before last element has apear
  // arr.forEach(value=>{
  //   console.log(hashMap.get(value)!=undefined);
  //   if(hashMap.get(value)!=undefined){
  //     console.log(value);
  //     return value;
  //   }else{
  //     hashMap.set(value,true);
  //   }
  // });
