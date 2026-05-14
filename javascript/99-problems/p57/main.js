// Construct a complete binary tree with N nodes.
// A complete binary tree of height H has levels 1..H-1 full and level H left-adjusted.
// Nodes are addressed in level-order starting at 1; the left child of node A has address 2*A
// and the right child has address 2*A+1.
// Example: completeBinaryTree(4)
//   => { value: 'x', left: { value: 'x', left: { value: 'x', ... }, right: null }, right: { value: 'x', ... } }
function completeBinaryTree(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n must be a non-negative integer');
  }

  function build(address) {
    if (address > n) {
      return null;
    }

    return {
      value: 'x',
      left: build(2 * address),
      right: build(2 * address + 1),
    };
  }

  return build(1);
}

module.exports = completeBinaryTree;
