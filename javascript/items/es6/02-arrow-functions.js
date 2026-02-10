export function demonstrateArrowFunctions() {
  console.log('2. ARROW FUNCTIONS:');

  // Traditional function
  // const addTraditional = function(a, b) {
  //   return a + b;
  // };

  // Arrow function
  const add = (a, b) => a + b;
  const square = x => x * x;
  const greet = () => 'Hello World!';

  console.log('add(5, 3):', add(5, 3));
  console.log('square(4):', square(4));
  console.log('greet():', greet());

  // Arrow functions with 'this' context
  const person = {
    name: 'Dayane',
    hobbies: ['voleibol', 'travel', 'play with children'],
    showHobbies() {
      this.hobbies.forEach(hobby => {
        console.log(`${this.name} likes ${hobby}`);
      });
    }
  };
  person.showHobbies();
}
