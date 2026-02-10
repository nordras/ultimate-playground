
export function demonstrateForOfLoop() {
  console.log('12. FOR...OF LOOP:');
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  /*
    The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
    Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections),
    as well as the arguments object, generators produced by generator functions, and user-defined iterables.
  */
  const fruits = ['apple', 'banana', 'orange', 'grape'];

  console.log('Iterating fruits:');
  for (const fruit of fruits) {
    console.log(`  - ${fruit}`);
  }

  console.log('Iterating over index:');
  for (const [index, fruit] of fruits.entries()) {
    console.log(`  ${index}: ${fruit}`);
  }

  // Iterating string
  console.log('Iterating string "HELLO":');
  for (const char of 'HELLO') {
    console.log(`  ${char}`);
  }
}
