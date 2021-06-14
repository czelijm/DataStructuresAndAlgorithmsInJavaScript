class Graph{
  constructor(){
    this.numberOfNodes = 0;
    this.adjacentList={};
  }

  addVertex(value){
    if(!this.adjacentList[value]){
      this.adjacentList[value] = [];
      this.numberOfNodes++;
    } else{
      console.log("vertex exist");
    } 
  }
  addEdge(n1,n2){
    if(!this.adjacentList[n1] || !this.adjacentList[n2]) {
      console.log("vertex doesn't exist");
      return null;
    }

    if(this.adjacentList[n1].includes(n2) && this.adjacentList[n2].includes(n1)) {
      console.log("Edge exist");
      return null;
    }

    if(!this.adjacentList[n1].includes(n2)) this.adjacentList[n1].push(n2);
    if(!this.adjacentList[n2].includes(n1)) this.adjacentList[n2].push(n1);
    
    return this;

  }
  showConnections(){
    for (const [key, value] of Object.entries(this.adjacentList)) {
      console.log(`${key} ---> ${value}`);
    }
  }
}

class Vertex{
  constructor(value){
    // this.id = null;
    this.value = value;
  }
}


module.exports.run = () => {
  const graph = new Graph();
  graph.addVertex(5);
  graph.addVertex(7);
  graph.addVertex(6);
  graph.addVertex(8);
  graph.addVertex(2);
  graph.addEdge(5,7);
  graph.addEdge(5,7);
  graph.addEdge(5,6);
  graph.addEdge(5,2);
  graph.addEdge(5,8);
  graph.addEdge(8,7);
  console.log(graph.adjacentList);
  graph.showConnections();
}