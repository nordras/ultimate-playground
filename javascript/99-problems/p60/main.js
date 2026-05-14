// Layout a binary tree (3).
// Compact layout: pack subtrees as close together as possible while keeping symmetry
// around each node and maintaining a minimum horizontal distance of 1 between any two nodes.
// The algorithm computes, for each subtree, left and right contour offsets relative to its root,
// then merges them with the minimum separation needed.
// Returns a new tree where each node is { value, x, y, left, right }.

// Returns { node, leftContour, rightContour } where contours are arrays indexed by depth offset.
function layoutHelper(tree, depth) {
  if (tree === null) {
    return { node: null, leftContour: [], rightContour: [] };
  }

  if (tree.left === null && tree.right === null) {
    const node = { value: tree.value, x: 0, y: depth, left: null, right: null };
    return { node, leftContour: [0], rightContour: [0] };
  }

  const left = layoutHelper(tree.left, depth + 1);
  const right = layoutHelper(tree.right, depth + 1);

  // Find minimum shift so that right subtree doesn't overlap left subtree.
  // Right contour of left subtree vs left contour of right subtree must differ by >= 1.
  const overlap = Math.min(left.rightContour.length, right.leftContour.length);
  let maxConflict = 0;

  for (let i = 0; i < overlap; i += 1) {
    const conflict = left.rightContour[i] - right.leftContour[i] + 1;

    if (conflict > maxConflict) {
      maxConflict = conflict;
    }
  }

  const leftShift = -Math.ceil(maxConflict / 2);
  const rightShift = Math.floor(maxConflict / 2) + (maxConflict % 2 === 0 && maxConflict > 0 ? 0 : 0);
  const totalShift = Math.ceil(maxConflict / 2);
  const leftOffset = -(totalShift);
  const rightOffset = totalShift;

  // Shift nodes
  function shiftTree(node, dx) {
    if (node === null) return null;
    return { ...node, x: node.x + dx, left: shiftTree(node.left, dx), right: shiftTree(node.right, dx) };
  }

  const shiftedLeft = left.node ? shiftTree(left.node, leftOffset) : null;
  const shiftedRight = right.node ? shiftTree(right.node, rightOffset) : null;

  // Merge contours
  const newLeftContour = [0];
  const newRightContour = [0];

  const shiftedLeftLeft = left.leftContour.map((v) => v + leftOffset);
  const shiftedLeftRight = left.rightContour.map((v) => v + leftOffset);
  const shiftedRightLeft = right.leftContour.map((v) => v + rightOffset);
  const shiftedRightRight = right.rightContour.map((v) => v + rightOffset);

  const maxDepth = Math.max(shiftedLeftLeft.length, shiftedRightRight.length);

  for (let i = 0; i < maxDepth; i += 1) {
    if (i < shiftedLeftLeft.length) {
      newLeftContour.push(shiftedLeftLeft[i]);
    } else {
      newLeftContour.push(shiftedRightLeft[i]);
    }

    if (i < shiftedRightRight.length) {
      newRightContour.push(shiftedRightRight[i]);
    } else {
      newRightContour.push(shiftedLeftRight[i]);
    }
  }

  const node = {
    value: tree.value,
    x: 0,
    y: depth,
    left: shiftedLeft,
    right: shiftedRight,
  };

  return { node, leftContour: newLeftContour, rightContour: newRightContour };
}

function normalizeX(tree, minX) {
  if (tree === null) return null;
  return {
    ...tree,
    x: tree.x - minX + 1,
    left: normalizeX(tree.left, minX),
    right: normalizeX(tree.right, minX),
  };
}

function findMinX(tree) {
  if (tree === null) return Infinity;
  return Math.min(tree.x, findMinX(tree.left), findMinX(tree.right));
}

function layoutBinaryTree3(tree) {
  if (tree === null) {
    return null;
  }

  const { node } = layoutHelper(tree, 1);
  const minX = findMinX(node);

  return normalizeX(node, minX);
}

module.exports = layoutBinaryTree3;
