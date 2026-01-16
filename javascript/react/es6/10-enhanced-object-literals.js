export function demonstrateEnhancedObjectLiterals() {
  console.log('10. ENHANCED OBJECT LITERALS:');
  // https://262.ecma-international.org/6.0/#sec-object-initializer
  /**
   * An object initializer is an expression describing the initialization of an Object, written in a form resembling a literal.
   * It is a list of zero or more pairs of property keys and associated values, enclosed in curly brackets.
   * The values need not be literals; they are evaluated each time the object initializer is evaluated.
   */

  const firstName = 'Rodorfo';
  const lastName = 'Jackson'; // joke reference https://youtu.be/RE5WvXXztlg
  const userAge = 30;

  // Property shorthand
  const userProfile = { firstName, lastName, userAge };
  console.log('User profile:', userProfile);

  // Method shorthand
  const calculator = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    }
  };

  console.log('Calculator add(5, 3):', calculator.add(5, 3));

  // Computed property names
  const propName = 'dynamicProperty';
  const dynamicObj = {
    [propName]: 'This is dynamic',
    ['computed' + 'Property']: 'Computed at runtime',
    [`user_${Date.now()}`]: 'Timestamp property'
  };

  console.log('Dynamic object:', dynamicObj);
}

// Execute the function
demonstrateEnhancedObjectLiterals();
