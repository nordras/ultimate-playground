// Truth tables for logical expressions (2).
// Continue problem P41 by allowing logical expressions to be written using JavaScript's
// native boolean operators (!, &&, ||) directly in the expression function.
// Define operator precedence as usual: ! > && > ||
// Example: tableOp((a, b) => a && (a || !b)) => [[true, true, true], [true, false, true], [false, true, false], [false, false, false]]
function tableOp(f) {
  if (typeof f !== 'function') {
    throw new Error('f must be a function');
  }

  return [true, false].flatMap((a) =>
    [true, false].map((b) => [a, b, f(a, b)])
  );
}

module.exports = tableOp;
