class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  pop(){
    if(!this.top) return null;
    const result = this.top.value;
    this.top = this.top.next;
    this.length--;
    if (!this.top) this.bottom=null;
    return result;
  }

  push(value){
    let node = new Node(value);
    switch(this.length){
      case 0:
        this.bottom = node;
        // this.top = node;
        break;
      default:
        node.next=this.top;
        // this.top=node;
        break;
    }
    this.top=node;
    this.length++;
  }

  peek(){
    return !this.top? null : this.top.value;
  }

  printStack(){
    let iterator = this.top;
    while(iterator){
      iterator.printElemnt();
      iterator = iterator.next;
    }
    console.log('length: '+this.length);
  }

}

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
  printElemnt(){
    var nodeInfo='';
    nodeInfo+=('value: '+this.value);
    nodeInfo+=(' next: ');
    if(this.next){
      nodeInfo+=(this.next.value);
    }  

    console.log(nodeInfo);
  }
}


module.exports.run = ()=> {
  const myStack = new Stack();
  myStack.push(1);
  console.log(myStack.peek());
  myStack.printStack();
  myStack.push(2);
  console.log(myStack.peek());
  myStack.push(3);
  console.log(myStack.peek());
  myStack.printStack();
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.peek());
  myStack.printStack();
  console.log(myStack.bottom);
}