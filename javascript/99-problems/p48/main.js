// Symmetric binary trees.
// A binary tree is symmetric if you can draw a vertical line through the root node
// and the right subtree is the mirror image of the left subtree.
// Only the structure matters, not the node values.
// Example: symmetric({ value: 'x', left: { value: 'x', left: null, right: null }, right: { value: 'x', left: null, right: null } }) => true
// Example: symmetric({ value: 'x', left: null, right: { value: 'x', left: null, right: null } }) => false
function mirror(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true;
  }

  if (tree1 === null || tree2 === null) {
    return false;
  }

  return mirror(tree1.left, tree2.right) && mirror(tree1.right, tree2.left);
}

function symmetric(tree) {
  if (tree === null) {
    return true;
  }

  return mirror(tree.left, tree.right);
}

module.exports = symmetric;
