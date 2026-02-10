
export function demonstrateSymbol() {
  console.log('15. SYMBOL:');
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
  /**
   * Symbols in JavaScript are a new primitive data type introduced in ES6 (ECMAScript 2015).
   * They are unique and immutable identifiers that is primarily for object property keys to avoid name collisions.
   * These values can be created using Symbol(...) function, and each Symbol value is guaranteed to be unique, even if they have the same key/description.
   * Symbol properties are not enumerable in for...in loops or Object.keys(), making them suitable for creating private/internal object state.
   */

  const sym1 = Symbol('description');
  const sym2 = Symbol('description');
  console.log('sym1 === sym2:', sym1 === sym2); // false (symbols are unique)

  const ID = Symbol('id');
  const userObj = {
    name: 'Charlie',
    [ID]: 12345
  };

  console.log('User name:', userObj.name);
  console.log('User ID (symbol key):', userObj[ID]);
  console.log('Object.keys(userObj):', Object.keys(userObj)); // Symbol keys are not enumerable
  console.log('Object.getOwnPropertySymbols(userObj):', Object.getOwnPropertySymbols(userObj)); // Retrieve symbol keys

  const iterableObj = {
    data: [1, 2, 3],
    [Symbol.iterator]() {
      let index = 0;
      const data = this.data;
      return {
        next() {
          if (index < data.length) {
            return { value: data[index++], done: false };
          }
          return { done: true };
        }
      };
    }
  };

  console.log('Iterating custom iterable:');
  for (const value of iterableObj) {
    console.log(`  ${value}`);
  }
}

// demonstrateSymbol();
