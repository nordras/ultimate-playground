// Count the nodes of a multiway tree.
// A multiway tree is represented as { value, children }.
// Example: nnodes({ value: 'a', children: [{ value: 'f', children: [] }] }) => 2
function nnodes(tree) {
  if (tree === null || typeof tree !== 'object') {
    throw new Error('tree must be a multiway tree object');
  }

  return 1 + tree.children.reduce((sum, child) => sum + nnodes(child), 0);
}

module.exports = nnodes;
