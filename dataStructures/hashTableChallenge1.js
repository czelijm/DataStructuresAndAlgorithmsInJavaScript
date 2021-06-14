module.exports.run = () => {
  const myHashTable = new HashTable(50);
  myHashTable.set('graples',10000);
  myHashTable.get('graples');
  console.log(myHashTable.get('graples'));
  myHashTable.set('graples1',11111);
  console.log(myHashTable.get('graples1'));
  console.log(myHashTable.get('graples'));
  console.log(myHashTable.keys());

}

class HashTable{
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key){
    let hash = 0;
    key.split('').forEach( (value,index)=>{
      hash = (hash + key.charCodeAt(index) * index) % this.data.length; 
    });
    return hash;
  }

  get(key){
    let hash = this._hash(key);
    if (!this.data[hash]){ return undefined;} 
    var result = this.data[hash].find((pair,index)=>{if(pair.key===key) return true;});
    return result.value;
  }

  set(key,value){
    let hash = this._hash(key);
    if (!this.data[hash]){ 
      this.data[hash]=[];
    } 
    this.data[hash].push(
      {
        key:key,
        value:value
      }
    );
  }

  keys(){
    var result = [];
    this.data.forEach(arr=>{
      if(arr){
        arr.forEach(pair=>{
          result.push(pair.key);
        })
      }
    });
    return result;
  }

}