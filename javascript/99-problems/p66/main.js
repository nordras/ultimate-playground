// Tree construction from a node string (multiway tree).
// In the depth-first traversal of the tree, a '^' is inserted whenever the traversal
// backtracks to the previous level. Nodes contain single characters.
// Example string for t(a,[t(f,[t(g,[])]),t(c,[]),t(b,[t(d,[]),t(e,[])])]) is 'afg^^c^bd^e^^^'
// treeToString(tree) => string
// stringToTree(str)  => multiway tree { value, children }
function treeToString(tree) {
  const childrenStr = tree.children.map((child) => treeToString(child) + '^').join('');
  return tree.value + childrenStr;
}

function parseTree(str, pos) {
  if (pos >= str.length || str[pos] === '^') {
    throw new Error('Expected a node character');
  }

  const value = str[pos];
  let cur = pos + 1;
  const children = [];

  while (cur < str.length && str[cur] !== '^') {
    const result = parseTree(str, cur);
    children.push(result.tree);
    cur = result.pos;

    if (cur < str.length && str[cur] === '^') {
      cur += 1; // consume '^' after each child
    }
  }

  return { tree: { value, children }, pos: cur };
}

function stringToTree(str) {
  if (typeof str !== 'string' || str.length === 0) {
    throw new Error('str must be a non-empty string');
  }

  return parseTree(str, 0).tree;
}

module.exports = { treeToString, stringToTree };
