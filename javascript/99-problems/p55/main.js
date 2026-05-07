// Collect the internal nodes of a binary tree in a list.
// An internal node has either one or two non-empty successors.
// Example: internals({ value: 'a', left: { value: 'b', left: null, right: null }, right: { value: 'c', left: null, right: null } }) => ['a']
// Example: internals(null) => []
function internals(tree) {
  if (tree === null) {
    return [];
  }

  if (tree.left === null && tree.right === null) {
    return [];
  }

  return [tree.value].concat(internals(tree.left)).concat(internals(tree.right));
}

module.exports = internals;
