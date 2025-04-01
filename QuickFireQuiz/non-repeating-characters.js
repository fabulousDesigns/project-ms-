/**
 * Problem 2: Find First Non-Repeating Character
 *
 * @param {string} str - Input string
 * @return {string} - First non-repeating character or empty string if none exists
 *
 * Time Complexity: O(n) - We iterate through the string twice
 * Space Complexity: O(k) - Where k is the size of the character set (max 26 for lowercase English)
 */
/**
 * Thought Process:
 * This is a frequency counting problem - we need to track how many times each character appears, then find the first one with a count of 1.
 * Two-Pass Approach:
 * Count frequencies in a hashmap
 * Iterate through the original string to maintain order and find the first character with frequency 1
 */
// //! First pass: count frequency
// for (const char of str) {
//   charMap[char] = (charMap[char] || 0) + 1;
// }
// //! Second pass: find first char with frequency 1
// for (const char of str) {
//   if (charMap[char] === 1) return char;
// }
const findFirstNonRepeatingChar = (str) =>{
    let charCount = {}
    // first pass
    for (const char of str) {
        charCount[char] = (charCount[char] || 0 )+ 1
    }
    // second pass
    for (const char of str) {
        if (charCount[char] === 1) {
           return char
       }
    }

    return null
}

const findFirstNonRepeatingCharMap = (str) => {
    let charCount = new Map();
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    return null;
};
