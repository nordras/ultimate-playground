// Dotstring representation of binary trees.
// The tree is represented by its preorder sequence where dots (.) mark empty subtrees.
// Example: 'abd..e..c.fg...' represents the tree from P67.
// treeToDotstring(tree) => dotstring
// dotstringToTree(str)  => tree
function treeToDotstring(tree) {
  if (tree === null) {
    return '.';
  }

  return tree.value + treeToDotstring(tree.left) + treeToDotstring(tree.right);
}

function parseDs(str, pos) {
  if (pos >= str.length) {
    throw new Error('Unexpected end of dotstring');
  }

  if (str[pos] === '.') {
    return { tree: null, pos: pos + 1 };
  }

  const value = str[pos];
  const leftResult = parseDs(str, pos + 1);
  const rightResult = parseDs(str, leftResult.pos);

  return {
    tree: { value, left: leftResult.tree, right: rightResult.tree },
    pos: rightResult.pos,
  };
}

function dotstringToTree(str) {
  if (typeof str !== 'string' || str.length === 0) {
    throw new Error('str must be a non-empty string');
  }

  return parseDs(str, 0).tree;
}

module.exports = { treeToDotstring, dotstringToTree };
