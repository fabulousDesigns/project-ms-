// array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// Parameters:
// callback: Function to execute on each element
// accumulator: The accumulated result from previous iterations
// currentValue: The current element being processed
// index: (Optional) The index of the current element
// array: (Optional) The array reduce() was called upon
// initialValue: (Optional) Value to use as the first accumulator value
// If not provided, the first element of the array will be used as the initial accumulator value
// If the array is empty and no initialValue is provided, TypeError will be thrown
// Return Value:
// The single value that results from the reduction
// 1. Sum of all numbers in an array
// 2. Concatenation of strings in an array
// 3. Flattening a nested array
// 4. Counting occurrences of elements in an array
// 5. Finding the maximum or minimum value in an array
// 6. Grouping objects by a property
// 7. Creating a frequency map of elements in an array
// 8. Merging multiple arrays into a single array
// 9. Removing duplicates from an array
// 10. Creating a lookup table from an array of objects
// 11. Transforming an array of objects into a single object
// 12. Creating a cumulative sum array
// 13. Creating a nested object structure from an array of objects
// 14. Creating a tree structure from a flat array of objects
// 15. Creating a histogram from an array of numbers
// 16. Creating a data structure for quick lookups
// 17. Creating a data structure for efficient searching
// 18. Creating a data structure for efficient sorting
// 19. Creating a data structure for efficient filtering
// 20. Creating a data structure for efficient mapping
// 21. Creating a data structure for efficient reducing
// 22. Creating a data structure for efficient transforming
// 23. Creating a data structure for efficient aggregating
// 24. Creating a data structure for efficient grouping
// 25. Creating a data structure for efficient counting
// 26. Creating a data structure for efficient summing
// 27. Creating a data structure for efficient averaging
// 28. Creating a data structure for efficient finding

//  1. Sum of all numbers in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all numbers:", sum); // Output: 15
// console.log(typeof Infinity);
// ? finding the max value
const integerNumbers = [5, 20, 100, 60, 1];
const max = integerNumbers.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log("Max Value:", max); // 100
// ? finding the min value
const minValue = integerNumbers.reduce((acc, curr) => Math.min(acc, curr), Infinity);
console.log("Min value:", minValue); // Output: 5
// ? convert and array to an object
const people = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 47, occupation: "programmer" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Bernard", age: 30, occupation: "teacher" },
]

const peopleObject = people.reduce((acc, curr) => {
  acc[curr.name] = curr;
  return acc;
}, {});
console.log(peopleObject);
console.log(typeof peopleObject);
// ? Grouping items by a property
console.log("=========================================");
console.log("Grouping items by a property");
console.log("=========================================");

const inventory = [
  { name: 'apples', quantity: 2, type: 'fruit' },
  { name: 'bananas', quantity: 5, type: 'fruit' },
  { name: 'carrots', quantity: 3, type: 'vegetable' },
  { name: 'broccoli', quantity: 1, type: 'vegetable' },
  { name: 'grapes', quantity: 4, type: 'fruit' },
  { name: 'potatoes', quantity: 6, type: 'vegetable' },
]

const groupedInventory = inventory.reduce((acc, curr) => {
  if (!acc[curr.type]) {
    acc[curr.type] = [];
  }
  acc[curr.type].push(curr);
  return acc;
}, {});
console.log(`you have ${groupedInventory.fruit.length} fruits`, groupedInventory.fruit);
console.log(`you have ${groupedInventory.vegetable.length} vegetables`, groupedInventory.vegetable);

console.log("=========================================");
// 2. Concatenation of strings in an array
const strings = ["Hello", " ", "World", "!"];
const concatenatedString = strings.reduce((acc, curr) => acc + curr, "");
console.log("Concatenated String:", concatenatedString); // Output: "Hello World!"

// 3. Flattening a nested array
const nestedArray = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened Array:", flattenedArray); // Output: [1, 2, 3, 4, 5]
// 4. Counting occurrences of elements in an array
const items = ["apple", "banana", "orange", "apple", "banana", "apple"];
const itemCount = items.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log("Item Count:", itemCount); // Output: { apple: 3, banana: 2, orange: 1 }

// 5. Finding the maximum or minimum value in an array
const numbersArray = [5, 20, 100, 60, 1];
const maxNumber = numbersArray.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log("Max Number:", maxNumber); // Output: 100
const minNumber = numbersArray.reduce((acc, curr) => Math.min(acc, curr), Infinity);
console.log("Min Number:", minNumber); // Output: 1
// 6. Removing duplicates from an array
const duplicateArray = [1, 2, 3, 1, 2, 4, 5];
const uniqueArray = duplicateArray.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);





