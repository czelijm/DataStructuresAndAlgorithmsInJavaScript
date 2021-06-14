module.exports.stringReverse = str => [...str].reverse().join('');


function stringReverse0(str){

  if(!str || typeof(str)!='string' || str.length<2 ) return str;
  
  var result = []; 

  for (let i = str.length-1;i>-1;i--){
    result.push(str[i]);
  }
  return result.join('');
}

function stringReverse1(str){

  if(!str || typeof(str)!='string' || str.length<2 ) return str;

  var result = []; 

  str.split('').reverse().forEach(
      (s)=>result.push(s)
    );
  return result.join('');
}

function stringReverse2(str){
  if(!str || typeof(str)!='string' || str.length<2 ) return str;
  return str.split('').reverse().join('');
}

const stringReverse3 = str => str.split('').reverse().join('');

//...spread operator
const stringReverse4 = str => [...str].reverse().join('');