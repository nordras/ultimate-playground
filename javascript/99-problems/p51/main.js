// Construct height-balanced binary trees.
// In a height-balanced binary tree, the heights of the left and right subtrees of every node
// differ by at most one.
// Generate all height-balanced binary trees with a given height.
// Example: hbalTree(2) => [tree1, tree2, tree3]  (all hbal trees of height 2)
function leaf() {
  return { value: 'x', left: null, right: null };
}

function node(left, right) {
  return { value: 'x', left, right };
}

function hbalTree(height) {
  if (!Number.isInteger(height) || height < 0) {
    throw new Error('height must be a non-negative integer');
  }

  if (height === 0) {
    return [null];
  }

  if (height === 1) {
    return [leaf()];
  }

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

module.exports = hbalTree;
