// filter unique array members
function unique(arr) {
  return [...new Set(arr)]; // Convert Set back to an array
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // ["Hare", "Krishna", ":-O"]

// 🔥 Challenge: Unique Elements but Keep First Occurrence Order 🔥

// Modify your unique function so that it removes duplicates while keeping the order of first occurrences in the original array.

// Example:
// js
// Copy
// Edit
// let values = ["banana", "apple", "banana", "orange", "apple", "mango"];

// console.log(unique(values));
// // Expected Output: ["banana", "apple", "orange", "mango"]
// ⚡ Hint: A Set removes duplicates, but it doesn't guarantee order. Can you solve this without using Set? 🤔

function uniqueFunc(arr) {
  let seen = {};
  let result = [];
  for (const item of arr) {
    if (!seen[item]) {
      seen[item] = true;
      result.push(item);
    }
  }

  return result;
}

let values2 = ["banana", "apple", "banana", "orange", "apple", "mango"];

console.log(uniqueFunc(values2));
