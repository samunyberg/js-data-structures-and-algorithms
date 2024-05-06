// --- Given an integer, return a new integer with the numbers in reversed order. If the input has trailing zeroes,
//     the reversed integer should NOT have leading zeroes. ---

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-90));
