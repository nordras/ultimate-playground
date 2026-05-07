// Truth tables for logical expressions.
// Define logical operations and2, or2, nand2, nor2, xor2, impl2 and equ2.
// Write a function table that generates the truth table of a given logical expression in two variables.
// Example: table((a, b) => and2(a, or2(a, b))) => [[true, true, true], [true, false, true], [false, true, false], [false, false, false]]
const and2 = (a, b) => a && b;

const or2 = (a, b) => a || b;

const nand2 = (a, b) => !(a && b);

const nor2 = (a, b) => !(a || b);

const xor2 = (a, b) => a !== b;

const impl2 = (a, b) => !a || b;

const equ2 = (a, b) => a === b;

function table(f) {
  if (typeof f !== 'function') {
    throw new Error('f must be a function');
  }

  return [true, false].flatMap((a) =>
    [true, false].map((b) => [a, b, f(a, b)])
  );
}

module.exports = { table, and2, or2, nand2, nor2, xor2, impl2, equ2 };
