// Layout a binary tree (1).
// Determine the position of each node using the following rules:
//   x(v) = position of the node in the inorder sequence (1-based)
//   y(v) = depth of the node in the tree (root = 1)
// Returns a new tree where each node is { value, x, y, left, right }.
// Example: layoutBinaryTree1({ value: 'a', left: { value: 'b', left: null, right: null }, right: null })
//   => { value: 'a', x: 2, y: 1, left: { value: 'b', x: 1, y: 2, left: null, right: null }, right: null }
function layout(tree, depth, counter) {
  if (tree === null) {
    return { node: null, counter };
  }

  const leftResult = layout(tree.left, depth + 1, counter);
  const x = leftResult.counter + 1;
  const rightResult = layout(tree.right, depth + 1, leftResult.counter + 1);

  return {
    node: {
      value: tree.value,
      x,
      y: depth,
      left: leftResult.node,
      right: rightResult.node,
    },
    counter: rightResult.counter,
  };
}

function layoutBinaryTree1(tree) {
  if (tree === null) {
    return null;
  }

  return layout(tree, 1, 0).node;
}

module.exports = layoutBinaryTree1;
