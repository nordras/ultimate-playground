export function demonstrateClasses() {
  console.log('8. CLASSES:');
  /* Classes are a template for creating objects. They encapsulate data with code to work on that data.
     Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
  */
  class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      return `${this.name} makes a sound`;
    }

    static info() {
      return 'Animals are living organisms';
    }
  }

  class Dog extends Animal {
    constructor(name, breed) {
      super(name, 'Dog');
      this.breed = breed;
    }

    makeSound() {
      return `${this.name} barks: Woof! Woof!`;
    }

    fetch() {
      return `${this.name} is fetching the ball`;
    }
  }

  const myDog = new Dog('Rex', 'German Shepherd');
  console.log(myDog.makeSound());
  console.log(myDog.fetch());
  console.log('Breed:', myDog.breed);
  console.log('Static method:', Animal.info());
}
