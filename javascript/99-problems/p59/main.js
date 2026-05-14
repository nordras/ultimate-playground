// Layout a binary tree (2).
// Alternative layout: on a given level, the horizontal distance between neighbouring nodes is constant.
// The root is placed at x = 1. At each level the separation between nodes doubles.
// x(root) = 1
// x(left child of v at depth d) = x(v) - 2^(maxDepth - d - 1)
// x(right child of v at depth d) = x(v) + 2^(maxDepth - d - 1)
// y(v) = depth (root = 1)
// Returns a new tree where each node is { value, x, y, left, right }.
function treeHeight(tree) {
  if (tree === null) return 0;
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}

function layout(tree, depth, x, maxDepth) {
  if (tree === null) {
    return null;
  }

  const separation = Math.pow(2, maxDepth - depth - 1);

  return {
    value: tree.value,
    x,
    y: depth,
    left: layout(tree.left, depth + 1, x - separation, maxDepth),
    right: layout(tree.right, depth + 1, x + separation, maxDepth),
  };
}

function layoutBinaryTree2(tree) {
  if (tree === null) {
    return null;
  }

  const maxDepth = treeHeight(tree);

  return layout(tree, 1, Math.pow(2, maxDepth - 1), maxDepth);
}

module.exports = layoutBinaryTree2;
