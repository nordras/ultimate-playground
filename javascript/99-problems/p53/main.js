// Count the leaves of a binary tree.
// A leaf is a node with no successors.
// Example: countLeaves({ value: 'x', left: { value: 'x', left: null, right: null }, right: null }) => 1
// Example: countLeaves(null) => 0
function countLeaves(tree) {
  if (tree === null) {
    return 0;
  }

  if (tree.left === null && tree.right === null) {
    return 1;
  }

  return countLeaves(tree.left) + countLeaves(tree.right);
}

module.exports = countLeaves;
