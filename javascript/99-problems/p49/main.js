// Binary search trees (dictionaries).
// Construct a binary search tree from a list of integer numbers.
// Example: construct([3, 2, 5, 7, 1])
//   => { value: 3, left: { value: 2, left: { value: 1, ... }, right: null }, right: { value: 5, ... } }
// Use the resulting tree to test symmetry with p48.
// Example: testSymmetric([5, 3, 18, 1, 4, 12, 21]) => true
// Example: testSymmetric([3, 2, 5, 7, 4]) => false
function add(tree, value) {
  if (tree === null) {
    return { value, left: null, right: null };
  }

  if (value < tree.value) {
    return { value: tree.value, left: add(tree.left, value), right: tree.right };
  }

  if (value > tree.value) {
    return { value: tree.value, left: tree.left, right: add(tree.right, value) };
  }

  return tree;
}

function construct(list) {
  if (!Array.isArray(list)) {
    throw new Error('list must be an array');
  }

  return list.reduce((tree, value) => add(tree, value), null);
}

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

function testSymmetric(list) {
  return symmetric(construct(list));
}

module.exports = { construct, testSymmetric };
