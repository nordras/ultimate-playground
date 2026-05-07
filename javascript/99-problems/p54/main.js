// Collect the leaves of a binary tree in a list.
// A leaf is a node with no successors.
// Example: leaves({ value: 'a', left: { value: 'b', left: null, right: null }, right: null }) => ['b']
// Example: leaves(null) => []
function leaves(tree) {
  if (tree === null) {
    return [];
  }

  if (tree.left === null && tree.right === null) {
    return [tree.value];
  }

  return leaves(tree.left).concat(leaves(tree.right));
}

module.exports = leaves;
