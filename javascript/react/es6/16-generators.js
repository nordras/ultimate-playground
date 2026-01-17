export function generators() {
  console.log('16. GENERATORS:');
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
  // https://www.geeksforgeeks.org/javascript/javascript-function-generator/
  // A generator function is a special type of function that can pause its execution at any point and resume later.
  // They are defined using the function* syntax and use the yield keyword to pause execution and return a value.

  /**
  How Do Generators Work?
  Generators work by implementing the iterator protocol. When a generator function is called, it does not execute its body immediately. Instead, it returns a special iterator object called a generator object. This object can be used to control the execution of the generator.

  Execution Control: The next() method resumes execution of the generator function until the next yield is encountered. It returns an object with two properties:
  value: The yielded value.
  done: A boolean indicating if the generator has completed execution.
  State Preservation: Each call to next() resumes the function from where it was last paused, retaining the function’s state.
  Termination: When the generator completes execution, the done property of the returned object becomes true.
   */
  function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }

  const gen = numberGenerator();
  console.log('gen.next():', gen.next());
  console.log('gen.next():', gen.next());
  console.log('gen.next():', gen.next());
  console.log('gen.next():', gen.next());

  // Infinite generator
  function* idGenerator() {
    let id = 1;
    while (true) {
      yield id++;
    }
  }

  const ids = idGenerator();
  console.log('ID generator:');
  console.log('  First ID:', ids.next().value);
  console.log('  Second ID:', ids.next().value);
  console.log('  Third ID:', ids.next().value);

  
  // Range generator
  function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  console.log('Range 1-5:', [...range(1, 5)]);
}

// generators()