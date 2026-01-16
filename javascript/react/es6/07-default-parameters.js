export function demonstrateDefaultParameters() {
  console.log('7. DEFAULT PARAMETERS:');
  // Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

  function greetUser(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
  }

  console.log(greetUser());
  console.log(greetUser('Alice'));
  console.log(greetUser('Bob', 'Hi'));

  function createUser(name, role = 'user', timestamp = Date.now()) {
    return { name, role, timestamp };
  }

  console.log('User:', createUser('Charlie'));

  console.log('\n');
}
