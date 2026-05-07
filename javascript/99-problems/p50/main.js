// Generate-and-test paradigm.
// Construct all symmetric, completely balanced binary trees with a given number of nodes.
// Example: symCbalTrees(5) => [tree1, tree2]  (two symmetric cbal trees with 5 nodes)
function leaf() {
  return { value: 'x', left: null, right: null };
}

function node(left, right) {
  return { value: 'x', left, right };
}

function cbalTree(n) {
  if (n === 0) {
    return [null];
  }

  if (n === 1) {
    return [leaf()];
  }

  const results = [];
  const leftCount = Math.floor((n - 1) / 2);
  const rightCount = n - 1 - leftCount;

  if (leftCount === rightCount) {
    const subtrees = cbalTree(leftCount);

    for (const left of subtrees) {
      for (const right of subtrees) {
        results.push(node(left, right));
      }
    }
  } else {
    const smaller = cbalTree(leftCount);
    const larger = cbalTree(rightCount);

    for (const left of smaller) {
      for (const right of larger) {
        results.push(node(left, right));
      }
    }

    for (const left of larger) {
      for (const right of smaller) {
        results.push(node(left, right));
      }
    }
  }

  return results;
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

function symCbalTrees(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n must be a non-negative integer');
  }

  return cbalTree(n).filter(symmetric);
}

module.exports = symCbalTrees;
