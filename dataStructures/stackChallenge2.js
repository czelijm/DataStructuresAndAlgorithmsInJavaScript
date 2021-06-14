class Stack{
  constructor(size){
    this.top = -1;
    this.bottom = 0;
    this.array = new Array(size);
    this.length = size;
  }

  pop(){
    if(!this.array[this.top]) return null;
    let result = this.array[this.top--];
    // if(this.top!==0) this.top--;
    // else {
    //   this.array[this.top]=null;
    // }
    return result;
  }

  push(value){
    if(this.top===(this.size-1)) {console.log('Stack overflow'); return null;}
    this.array[++this.top]=value;
  }

  peek(){
    return !this.array[this.top]? null : this.array[this.top];
  }

  printStack(){
    for(let i=0;i<=this.top;i++)
      console.log('value: '+this.array[i]);

    console.log('length: '+this.length);
  }

}

module.exports.run = ()=> {
  const myStack = new Stack(8);
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