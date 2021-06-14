class BiniaryTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    if(!this.root) {
      this.root = new Node(value);
      return this;
    }

    let iterator = this.root;
    while(iterator!==null){
      if(iterator.value>value){
        
        if(!iterator.left){
          iterator.left = new Node(value);
          return this;
        }
        iterator=iterator.left;
        continue;

      } else if(iterator.value<value){

        if(!iterator.right){
          iterator.right = new Node(value);
          return this;
        }
        iterator=iterator.right;
        continue;
      } else return this;
    }



    return this;
  }
  lookup(value){
    let iterator = this.root;
    while(iterator!==null){
      if(iterator.value===value) return iterator;
      if(iterator.value>value){
        iterator=iterator.left;
        continue;
      }
      if(iterator.value<value){
        iterator=iterator.right;
        continue;
      }
    }
    return null;
  }

  map(node,f){
    // if(node===null) return null;
    f(node.value);
    const tmpNode = {value: node.value};
    tmpNode.left = node.left===null?null:this.map(node.left,f);
    tmpNode.right = node.right===null?null:this.map(node.right,f);
    return tmpNode;
  }

  traverse(node){
    // if(node===null) return null;
    const tmpNode = {value: node.value};
    tmpNode.left = node.left===null?null:this.traverse(node.left);
    tmpNode.right = node.right===null?null:this.traverse(node.right);
    return tmpNode;
  }

  remove(value){
    let {successor,ancessor} = this.findNodeAndHisAncessor(value);
    if(!successor) return null;

    if(ancessor===null || successor.left!==null && successor.right!==null){
      let newSuccessor = this.findSuccessorAndDeleteFromAncessor(successor);
      successor.value = newSuccessor.value;
      return;
    }

    const isLeft = successor.value === ancessor.left.value;

    if(successor.left===null && successor.right===null){
      if(isLeft){
        ancessor.left = null;
      }else{
        ancessor.right = null;
      }
      return;
    }
    if(successor.left===null){
      if(isLeft){
        ancessor.left = successor.right;
      } else {
        ancessor.right = successor.right;
      }
      return;
    }
    if(successor.right===null){
      if(isLeft){
        ancessor.left = successor.left;
      } else {
        ancessor.right = successor.left;
      }
      return;
    }

  }

  findSuccessorAndDeleteFromAncessor(subTreeNode){
    let iterator = subTreeNode;
    let ancestor = null;
    while(iterator.left!==null){
      ancestor = iterator;
      iterator = iterator.left;
    }
    if(ancestor!==null) ancestor.left = null;
    return iterator;
  }

  findNodeAndHisAncessor(value){
    let iterator = this.root;
    let ancessor = null;
    while(iterator!==null){
      if(iterator.value===value)
      // return iterator;
      return {
        successor:iterator,
        ancessor:ancessor
      };
      ancessor = iterator;
      if(iterator.value>value) {
        iterator = iterator.left;
        continue;
      }
      iterator = iterator.right;
    }
    return null;
  }

  findNode(value){
    let iterator = this.root;
    let ancessor = null;
    while(iterator!==null){
      if(iterator.value===value)
      return iterator;
      // return {
      //   successor:iterator,
      //   ancessor:ancessor
      // };
      // ancessor = iterator;
      if(iterator.value>value) {
        iterator = iterator.left;
        continue;
      }
      iterator = iterator.right;
    }
    return null;
  }

  printBiniaryTree(){
    this.map(this.root,console.log);
  }

}

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


module.exports.run = () =>{
  const biniaryTree = new BiniaryTree();
  biniaryTree.insert(10);
  // console.log(biniaryTree)
  biniaryTree.insert(5);
  biniaryTree.insert(15);
  biniaryTree.printBiniaryTree();
  console.log(biniaryTree.lookup(10));
  console.log(biniaryTree.lookup(15));
  console.log(biniaryTree.lookup(20));
  biniaryTree.insert(1);
  biniaryTree.insert(6);
  biniaryTree.insert(11);
  biniaryTree.insert(17);
  console.log(biniaryTree.lookup(15));
  console.log(biniaryTree.lookup(5));
  console.log(biniaryTree.findNodeAndHisAncessor(17));
  // console.log(biniaryTree.findSuccessorAndDeleteFromSuccessor(biniaryTree.findNode(15)));
  biniaryTree.remove(17);
  console.log(biniaryTree.lookup(15));
  biniaryTree.printBiniaryTree();
  biniaryTree.insert(17);
  biniaryTree.insert(18);
  biniaryTree.insert(19);
  biniaryTree.insert(16);
  biniaryTree.insert(14);
  console.log(biniaryTree.lookup(17));
  console.log(biniaryTree.lookup(15));
  biniaryTree.remove(17);
  console.log(biniaryTree.lookup(15));
  biniaryTree.printBiniaryTree();
  biniaryTree.remove(10);
  biniaryTree.printBiniaryTree();
}