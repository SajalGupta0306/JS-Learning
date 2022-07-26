import Node from "./Node";

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (data < current.val) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }
}

const tree = new BST();
tree.insert(50);
tree.insert(31);
tree.insert(60);
tree.insert(35);
tree.insert(51);
tree.insert(99);

const result = [];
const visitedNodes = [tree.root];
while (visitedNodes.length) {
  const currentNode = visitedNodes.shift();
  if (!currentNode) {
    result.push("null");
    continue;
  }
  result.push(currentNode.data);
  result.push(currentNode.left);
  result.push(currentNode.right);
}

console.log(result.join(","));
