// --- Given a string, return the character that is appears in the string the most. ---

function maxChars(str) {
  const charMap = {};

  for (let ch of str) {
    charMap[ch] = !charMap[ch] ? 1 : charMap[ch] + 1;
  }

  let max = 0;
  let maxChar = "";
  for (let ch in charMap)
    if (charMap[ch] > max) {
      max = charMap[ch];
      maxChar = ch;
    }

  return maxChar;
}
