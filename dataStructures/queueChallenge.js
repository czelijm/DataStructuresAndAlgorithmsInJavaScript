class Queue{
  constructor(){
    this.last = null;
    this.first = null;
    this.length = 0;
  }

  peek(){
    return this.first? this.first.value : null;
  }

  enqueue(value){
    let node = new Node(value);
    if(this.last){
      this.last.next = node;
      this.last = this.last.next;
    } else{
      this.last = node;
      this.first = this.last;
    }
    this.length++;
  }

  dequeue(){
    if(!this.first) return null;
    let result = this.first.value;
    this.first = this.first.next;
    this.length--;
    if(!this.first) this.last = null;
    return result; 
  }

  printQueue(){
    let iterator = this.first;
    while(iterator){
      iterator.printElemnt();
      iterator = iterator.next;
    }
    console.log('length '+this.length);
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
  queue.printQueue();
  console.log(queue.peek());
  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue.dequeue());
  queue.enqueue(3);
  queue.printQueue();
}
