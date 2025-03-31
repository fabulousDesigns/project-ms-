// 1️⃣ Remove Duplicates from an Array
// Input: [1, 2, 3, 4, 2, 3, 5]
// Expected Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const dupArr = [1, 2, 3, 4, 2, 3, 5];
console.log(removeDuplicates(dupArr));

// 2️⃣ Find First Non-Repeating Character
// Input: "programming"
// Expected Output: "p" (First character that appears only once)

function findFirstNonRepeatingChar(str) {
  const charCount = {}
  //? first pass: count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1
  }
  //? Second pass: find the first character with count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character exists
  return null;
}
const result = findFirstNonRepeatingChar("programming");
console.log(result); // "p"

// 3️⃣ Find All Anagrams of a Word in a List
// Input: ["bat", "tab", "cat", "act", "tac"], target = "cat"
// Expected Output: ["cat", "act", "tac"]

function findAnagrams(wordList, target) {
  const sortChars = word => word.split('').sort().join('')
  const sortedTarget = sortChars(target)
  return wordList.filter(word => sortChars(word) === sortedTarget)
}
const words = ["bat", "tab", "cat", "act", "tac"];
const target = "cat";
console.log(findAnagrams(words, target)); // ["cat", "act", "tac"]
