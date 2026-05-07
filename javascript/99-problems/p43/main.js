// Truth tables for logical expressions (3).
// Generalize problem P42 so that the logical expression may contain any number of logical variables.
// table(variables, f) prints the truth table for the expression f, which receives the variables as arguments.
// Example: tableN(3, (a, b, c) => a && (b || c) === (a && b) || (a && c))
//   => [[true, true, true, true], [true, true, false, true], ...]
function generateCombinations(count) {
  if (count === 0) {
    return [[]];
  }

  const smaller = generateCombinations(count - 1);

  return smaller.flatMap((combination) => [
    [true, ...combination],
    [false, ...combination],
  ]);
}

function tableN(variableCount, f) {
  if (!Number.isInteger(variableCount) || variableCount < 1) {
    throw new Error('variableCount must be a positive integer');
  }

  if (typeof f !== 'function') {
    throw new Error('f must be a function');
  }

  return generateCombinations(variableCount).map((values) => [
    ...values,
    f(...values),
  ]);
}

module.exports = tableN;
