// complexity:

// 1. inserion: log n
// 2. deletion: log n
// 3. search: log n

// inorder traversal
const inOrder = (root) => {
  if (!root) {
    return [];
  }
  const result = [];
  if (root.left) {
    result.push(...inOrder(root.left));
  }
  result.push(root.val);
  if (root.right) {
    result.push(...inOrder(root.right));
  }
  return result;
};

// postOrder traversal
const postOrder = (root) => {
  if (!root) {
    return [];
  }
  const result = [];
  if (root.left) {
    result.push(...postOrder(root.left));
  }
  if (root.right) {
    result.push(...postOrder(root.right));
  }
  result.push(root.val);

  return result;
};

// preOrder traversal
const preOrder = (root) => {
  if (!root) {
    return [];
  }
  const result = [];
  result.push(root.val);
  if (root.left) {
    result.push(...preOrder(root.left));
  }
  if (root.right) {
    result.push(...preOrder(root.right));
  }
  return result;
};
