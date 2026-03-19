function isPalindrome(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  for (let index = 0; index < Math.floor(list.length / 2); index += 1) {
    if (list[index] !== list[list.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;