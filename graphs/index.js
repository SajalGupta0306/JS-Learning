class Graph {
  #nodes;

  constructor() {
    this.#nodes = {};
  }

  addNode(node) {
    this.#nodes[node] = [];
  }

  addEdge(source, dest) {
    if (!this.#nodes[source] || !this.#nodes[dest]) {
      return;
    }

    if (!this.#nodes[source].includes(dest)) {
      this.#nodes[source].push(dest);
    }

    if (!this.#nodes[dest].includes(source)) {
      this.#nodes[dest].push(source);
    }
  }

  showNodes() {
    console.log(this.#nodes);
  }

  bfs(source, dest) {
    const queue = [source];
    const visited = {};
    while (queue.length) {
      const current = queue.shift();
      if (visited[current]) {
        continue;
      }

      if (current === dest) {
        return true;
      }
      visited[current] = true;
      const neighbours = this.#nodes[current];
      for (const val of neighbours) {
        queue.push(val);
      }
    }
    return false;
  }

  dfs(source, dest, visited = {}) {
    if (visited[source]) {
      return false;
    }

    if (source === dest) {
      return true;
    }
    visited[source] = true;

    const neighbours = this.#nodes[source];
    for (const val of neighbours) {
      if (this.dfs(val, dest, visited)) {
        return true;
      }
    }
    return false;
  }
}

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");
graph.addNode("G");

graph.addEdge("B", "A");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("D", "C");
graph.addEdge("D", "E");
graph.addEdge("F", "E");
graph.addEdge("F", "G");

graph.showNodes();
console.log(graph.bfs("G", "E"));
