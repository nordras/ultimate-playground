// Construct height-balanced binary trees with a given number of nodes.
// Find all height-balanced binary trees with exactly N nodes.
// Helper: minNodes(h) returns the minimum number of nodes in a hbal tree of height h.
// Helper: maxHeight(n) returns the maximum height of a hbal tree with n nodes.
// Example: hbalTreeNodes(15) => [...] (all hbal trees with 15 nodes)
function leaf() {
  return { value: 'x', left: null, right: null };
}

function node(left, right) {
  return { value: 'x', left, right };
}

function minNodes(height) {
  if (height === 0) return 0;
  if (height === 1) return 1;
  return 1 + minNodes(height - 1) + minNodes(height - 2);
}

function maxHeight(n) {
  let height = 0;

  while (minNodes(height + 1) <= n) {
    height += 1;
  }

  return height;
}

function treeHeight(tree) {
  if (tree === null) return 0;
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}

function hbalTree(height) {
  if (height === 0) return [null];
  if (height === 1) return [leaf()];

  const tallTrees = hbalTree(height - 1);
  const shortTrees = hbalTree(height - 2);
  const results = [];

  for (const left of tallTrees) {
    for (const right of tallTrees) {
      results.push(node(left, right));
    }
  }

  for (const tall of tallTrees) {
    for (const short of shortTrees) {
      results.push(node(tall, short));
      results.push(node(short, tall));
    }
  }

  return results;
}

function countNodes(tree) {
  if (tree === null) return 0;
  return 1 + countNodes(tree.left) + countNodes(tree.right);
}

function hbalTreeNodes(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n must be a non-negative integer');
  }

  if (n === 0) {
    return [null];
  }

  const maxH = maxHeight(n);
  const results = [];

  for (let height = 1; height <= maxH; height += 1) {
    for (const tree of hbalTree(height)) {
      if (countNodes(tree) === n) {
        results.push(tree);
      }
    }
  }

  return results;
}

module.exports = hbalTreeNodes;
