// Check whether a given term represents a multiway tree.
// A multiway tree is represented as { value, children } where children is an array
// of multiway trees (possibly empty). A multiway tree is never null/empty.
// Example: isMultiwayTree({ value: 'a', children: [{ value: 'f', children: [{ value: 'g', children: [] }] }, { value: 'c', children: [] }] }) => true
// Example: isMultiwayTree({ value: 'a' }) => false
// Example: isMultiwayTree(null) => false
function isMultiwayTree(tree) {
  if (tree === null || typeof tree !== 'object' || Array.isArray(tree)) {
    return false;
  }

  if (!Object.prototype.hasOwnProperty.call(tree, 'value') ||
      !Object.prototype.hasOwnProperty.call(tree, 'children') ||
      !Array.isArray(tree.children)) {
    return false;
  }

  return tree.children.every(isMultiwayTree);
}

module.exports = isMultiwayTree;
