// --- Check if a string is a palindrome ---

// One-liner solution:
function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

// Using the every() array helper method:
function isPalindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// Using two pointers:
function isPalindrome(str) {
  const characters = str.split("");

  let first = 0;
  let last = characters.length - 1;
  while (first < last)
    if (characters[first] !== characters[last]) return false;
    else {
      first++;
      last--;
    }

  return true;
}
