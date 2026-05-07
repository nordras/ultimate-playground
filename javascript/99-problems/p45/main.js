// Huffman code.
// Given a set of symbols with their frequencies, construct the Huffman code table.
// Input: list of [symbol, frequency] pairs.
// Output: list of [symbol, code] pairs.
// Example: huffman([['a', 45], ['b', 13], ['c', 12], ['d', 16], ['e', 9], ['f', 5]])
//   => [['a', '0'], ['b', '101'], ['c', '100'], ['d', '111'], ['e', '1101'], ['f', '1100']]
function buildTree(frequencies) {
  const nodes = frequencies.map(([symbol, freq]) => ({ symbol, freq, left: null, right: null }));

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);

    const left = nodes.shift();
    const right = nodes.shift();

    nodes.push({
      symbol: null,
      freq: left.freq + right.freq,
      left,
      right,
    });
  }

  return nodes[0];
}

function buildCodes(node, prefix, codes) {
  if (node.left === null && node.right === null) {
    codes.push([node.symbol, prefix || '0']);
    return;
  }

  buildCodes(node.left, prefix + '0', codes);
  buildCodes(node.right, prefix + '1', codes);
}

function huffman(frequencies) {
  if (!Array.isArray(frequencies) || frequencies.length === 0) {
    throw new Error('frequencies must be a non-empty array');
  }

  if (!frequencies.every((entry) => Array.isArray(entry) && entry.length === 2 && typeof entry[1] === 'number' && entry[1] > 0)) {
    throw new Error('each entry must be a [symbol, positiveFrequency] pair');
  }

  const tree = buildTree(frequencies);
  const codes = [];

  buildCodes(tree, '', codes);

  return codes;
}

module.exports = huffman;
