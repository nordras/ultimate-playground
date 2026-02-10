export function demonstrateSpreadOperator() {
  console.log('5. SPREAD OPERATOR (spread syntax):');

  // Array spread
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2];
  console.log('Combined arrays:', combined);

  // Copying arrays
  const original = [10, 20, 30];
  const copy = [...original];
  console.log('Copied array:', copy);

  // Object spread
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const merged = { ...obj1, ...obj2 };
  console.log('Merged objs:', merged);

  // Overriding properties
  const defaults = { theme: 'light', lang: 'en', notifications: true };
  const userPrefs = { theme: 'dark' };
  const config = { ...defaults, ...userPrefs };
  console.log('Config with overrides:', config);
}
