// --- Given a string, return a new string with the reversed order of characters. ---

// Implementation with Array.from() and Array.prototype.reverse()
function reverseString(str) {
  return Array.from(str).reverse().join("").toString();
}

// Implementation with split() and join()
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Implementation with a traditional for loop:
function reverseString(str) {
  const chars = Array.from(str);
  const reversed = [];
  for (let i = chars.length - 1; i >= 0; i--) {
    reversed.push(chars[i]);
  }

  return reversed.join("").toString();
}

// Implementation with ES6 loop syntax:
function reverseString(str) {
  let reversed = "";
  for (let ch of str) {
    reversed = ch + reversed;
  }

  return reversed;
}

// Implementation with reduce():
function reverseString(str) {
  return str.split("").reduce((rev, ch) => ch + rev, "");
}
