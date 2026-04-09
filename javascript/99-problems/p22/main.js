function range(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end) || start > end) {
    throw new Error('start and end must be integers where start is less than or equal to end');
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

module.exports = range;