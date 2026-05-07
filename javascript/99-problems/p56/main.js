// Collect the nodes at a given level in a list.
// A node is at level N if the path from the root to the node has length N-1.
// The root node is at level 1.
// Example: atLevel({ value: 'a', left: { value: 'b', left: null, right: null }, right: { value: 'c', left: null, right: null } }, 2) => ['b', 'c']
// Example: atLevel(null, 1) => []
function atLevel(tree, level) {
  if (!Number.isInteger(level) || level < 1) {
    throw new Error('level must be a positive integer');
  }

  if (tree === null) {
    return [];
  }

  if (level === 1) {
    return [tree.value];
  }

  return atLevel(tree.left, level - 1).concat(atLevel(tree.right, level - 1));
}

module.exports = atLevel;
