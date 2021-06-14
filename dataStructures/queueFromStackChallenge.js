class Queue{
  constructor(){
    this.dequeueStack = new Stack();
    this.enqueueStack = new Stack();
    this.length = 0;
  }

  peek(){
    while(this.enqueueStack.length>0){
      this.dequeueStack.push(this.enqueueStack.pop());
    }
    return this.dequeueStack.peek();
  }
  enqueue(value){
    while(this.dequeueStack.length>0){
      this.enqueueStack.push(this.dequeueStack.pop());
    }
    this.enqueueStack.push(value);
  }
  dequeue(){
     while(this.enqueueStack.length>0){
      this.dequeueStack.push(this.enqueueStack.pop());
    }
    return this.dequeueStack.pop();
  }
}


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

module.exports.run = () => {
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.peek());
  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue.dequeue());
  queue.enqueue(3);
  console.log(queue.dequeue());
}