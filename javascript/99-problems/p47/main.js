// Construct completely balanced binary trees.
// In a completely balanced binary tree, the number of nodes in its left subtree and
// the number of nodes in its right subtree are almost equal (differ by at most one).
// Generate all completely balanced binary trees with N nodes.
// Example: cbalTree(4) => [
//   { value: 'x', left: { value: 'x', left: null, right: null }, right: { value: 'x', left: null, right: { value: 'x', left: null, right: null } } },
//   ...
// ]
function leaf() {
  return { value: 'x', left: null, right: null };
}

function node(left, right) {
  return { value: 'x', left, right };
}

function cbalTree(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n must be a non-negative integer');
  }

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

module.exports = cbalTree;
