// Preorder and inorder sequences of binary trees.
// Nodes contain single lower-case letters.
// preorder(tree) => string with preorder traversal, e.g. 'abdecfg'
// inorder(tree)  => string with inorder traversal, e.g. 'dbeacgf'
// preInTree(preorderStr, inorderStr) => reconstructs the tree from both sequences.
// Example: preorder(tree) => 'abdecfg'
// Example: inorder(tree)  => 'dbeacgf'
// Example: preInTree('abdecfg', 'dbeacgf') => the original tree
function preorder(tree) {
  if (tree === null) {
    return '';
  }

  return tree.value + preorder(tree.left) + preorder(tree.right);
}

function inorder(tree) {
  if (tree === null) {
    return '';
  }

  return inorder(tree.left) + tree.value + inorder(tree.right);
}

function preInTree(pre, ino) {
  if (pre.length === 0) {
    return null;
  }

  const root = pre[0];
  const inIndex = ino.indexOf(root);

  if (inIndex === -1) {
    throw new Error(`Value '${root}' from preorder not found in inorder`);
  }

  const leftIno = ino.slice(0, inIndex);
  const rightIno = ino.slice(inIndex + 1);
  const leftPre = pre.slice(1, 1 + leftIno.length);
  const rightPre = pre.slice(1 + leftIno.length);

  return {
    value: root,
    left: preInTree(leftPre, leftIno),
    right: preInTree(rightPre, rightIno),
  };
}

module.exports = { preorder, inorder, preInTree };
