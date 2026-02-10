export function demonstrateDestructuring() {
  console.log('4. DESTRUCTURING (assignment):');

  // Array destructuring
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const [first, second, ...restColors] = colors;
  console.log('First color:', first);
  console.log('Second color:', second);
  console.log('Rest colors:', restColors);

  // Object destructuring
  const user = {
    id: 1,
    username: 'lucas',
    email: 'lucas@example.com',
    age: 25,
    country: 'BR'
  };

  const { username, email, age } = user;
  console.log('Username:', username);
  console.log('Email:', email);

  // Destructuring with aliases
  const { username: aliasUserName, country: userCountry } = user;
  console.log('User name (alias):', aliasUserName);

  // Add Default values
  const { status = 'active' } = user;
  console.log('Status (default):', status);

  // Nested destructuring
  const data = {
    id: 1,
    info: {
      title: 'ES6 Guide',
      author: 'John Doe',
      meta: {
        views: 1000,
        likes: 150
      }
    }
  };

  const { info: { title, author, meta: { views } } } = data;
  console.log('Title:', title, '| Author:', author, '| Views:', views);
}
