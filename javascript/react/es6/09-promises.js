export function demonstratePromises() {
  console.log('9. PROMISES:');
  // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

  //   A Promise is in one of these states:
  //   pending: initial state, neither fulfilled nor rejected.
  //   fulfilled: meaning that the operation was completed successfully.
  //   rejected: meaning that the operation failed.

  function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId > 0) {
          resolve({ id: userId, name: 'Asdrubal', email: 'asdrubal@example.com' });
        } else {
          reject('Invalid user ID');
        }
      }, 1000);
    });
  }

  console.log('Fetching user data...');
  fetchUserData(1)
    .then(user => {
      console.log('User fetched:', user);
      return user.id;
    })
    .then(id => {
      console.log('User ID:', id);
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      console.log('Promise operation completed');
    });

  // Promise.all
  const promise1 = Promise.resolve(3);
  const promise2 = Promise.resolve(42);
  const promise3 = new Promise(resolve => setTimeout(() => resolve('foo'), 500));

  Promise.all([promise1, promise2, promise3])
    .then(values => {
      console.log('Promise.all results:', values);
    });
}
