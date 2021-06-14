class LinkedList{
  constructor(value){
    this.head = new Node(value);
    this.length=1;
    this.tail=this.head;
    
  }
  
  append(value){
    const newTail= new Node(value);
    this.tail.next=newTail;
    newTail.pervious = this.tail;
    this.tail=newTail;
    this.length++;
    return this;
  }

  prepend(value){
    const node = new Node(value);
    this.head.pervious = node; 
    node.next=this.head;
    this.head=node;
    this.length++;
    return this;
  }

  insert(index,value){
    if( index >= this.length) return this.append(value);
    switch (index) {
      case 0:
        this.prepend(value);
        break;
      default:
        const newNode = new Node(value);
        let iterator = this.head;
        for(let i=0;i<index-1;i++){ 
          iterator = iterator.next;
        }
        newNode.pervious = iterator;
        iterator.next.pervious=newNode;
        newNode.next = iterator.next;
        iterator.next = newNode;
        this.length++; 
        break;
    }
    return this;
  }

  remove(index){
    if(index===0) {
      this.head = this.head.next;
      this.head.pervious=null;
      this.length--;
      return this;  
    }
    if( (index-1) > this.length) return null; 

    let iterator = this.head;
    for(let i=0;i<index-1;i++){ 
      iterator = iterator.next;
    }
    iterator.next = iterator.next.next;
    iterator.next.pervious=iterator;
    this.length--;
  }

  traverse(fun){
    let iterator = this.head;
    while(iterator){
      fun(iterator);
      iterator=iterator.next;
    }
  }

  print(){
    this.traverse(console.log);
    console.log(this.length);
  }

  printElements(){
    let iterator = this.head;
    while(iterator){
      iterator.printElemnt();
      iterator=iterator.next;
    }
  }

}

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
    this.pervious=null;
  }

  printElemnt(){
    var nodeInfo='';
    nodeInfo+=('pervious: ');
    if(this.pervious){
      nodeInfo+=(this.pervious.value);
    }
    nodeInfo+=(' value: '+this.value);
    nodeInfo+=(' next: ');
    if(this.next){
      nodeInfo+=(this.next.value);
    }  

    console.log(nodeInfo);
  }

}

module.exports.run = ()=> {
  const linkedList = new LinkedList(10);
  console.log(linkedList);
  console.log(linkedList.append(64));
  linkedList.append(5);
  linkedList.prepend(3);
  console.log(linkedList.prepend(2));
  // console.log(linkedList);

  // let iterator = linkedList.head;
  // while(iterator){
  //   console.log(iterator);
  //   iterator=iterator.next;
  // }
  // linkedList.traverse(console.log);
  linkedList.insert(5,11);
  linkedList.insert(5,111);
  // linkedList.print();
  linkedList.remove(5);
  // linkedList.print();
  linkedList.printElements();
}