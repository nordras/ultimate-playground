// A string representation of binary trees.
// Nodes contain single letters. The format is: a(b(d,e),c(,f(g,)))
// Empty subtrees are represented by an empty string.
// treeToString converts a tree to its string representation.
// stringToTree parses a string back to a tree.
// Example: treeToString({ value: 'a', left: { value: 'b', left: { value: 'd', left: null, right: null }, right: { value: 'e', left: null, right: null } }, right: { value: 'c', left: null, right: { value: 'f', left: { value: 'g', left: null, right: null }, right: null } } })
//   => 'a(b(d,e),c(,f(g,)))'
function treeToString(tree) {
  if (tree === null) {
    return '';
  }

  if (tree.left === null && tree.right === null) {
    return tree.value;
  }

  return `${tree.value}(${treeToString(tree.left)},${treeToString(tree.right)})`;
}

function parseTree(str, pos) {
  if (pos >= str.length || str[pos] === ',' || str[pos] === ')') {
    return { tree: null, pos };
  }

  const value = str[pos];
  let cur = pos + 1;

  if (cur >= str.length || str[cur] !== '(') {
    return { tree: { value, left: null, right: null }, pos: cur };
  }

  cur += 1; // skip '('
  const leftResult = parseTree(str, cur);
  cur = leftResult.pos;

  cur += 1; // skip ','
  const rightResult = parseTree(str, cur);
  cur = rightResult.pos;

  cur += 1; // skip ')'

  return {
    tree: { value, left: leftResult.tree, right: rightResult.tree },
    pos: cur,
  };
}

function stringToTree(str) {
  if (typeof str !== 'string') {
    throw new Error('str must be a string');
  }

  if (str === '') {
    return null;
  }

  return parseTree(str, 0).tree;
}

module.exports = { treeToString, stringToTree };
