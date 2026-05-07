// Check whether a given term represents a binary tree.
// A binary tree is either null (empty) or an object { value, left, right } where
// left and right are themselves binary trees.
// Example: isBinaryTree({ value: 'a', left: { value: 'b', left: null, right: null }, right: null }) => true
// Example: isBinaryTree({ value: 'a', left: { value: 'b' } }) => false
// Example: isBinaryTree(null) => true
function isBinaryTree(tree) {
  if (tree === null) {
    return true;
  }

  if (typeof tree !== 'object' || Array.isArray(tree)) {
    return false;
  }

  if (!Object.prototype.hasOwnProperty.call(tree, 'value') ||
      !Object.prototype.hasOwnProperty.call(tree, 'left') ||
      !Object.prototype.hasOwnProperty.call(tree, 'right')) {
    return false;
  }

  return isBinaryTree(tree.left) && isBinaryTree(tree.right);
}

module.exports = isBinaryTree;
