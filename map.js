// What is map()?
// The map() method creates a new array by applying a function to each element of the original array. Unlike reduce(), which transforms an array into a single value, map() transforms each element individually while maintaining the array structure.
// The basic syntax is:
// array.map(callback(currentValue, index, array))
// Parameters:

// callback: Function to execute on each element

// currentValue: The current element being processed
// index: (Optional) The index of the current element
// array: (Optional) The array map() was called upon

// Simple Examples
// 1. Doubling all numbers in an array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubled); // Output: [2, 4, 6, 8, 10]
//2. convert an array of objects to an array of strings
const people = [
  { name: "John", age: 25 },
  { name: "Lenny", age: 51 },
  { name: "Andrew", age: 43 },
  { name: "Peter", age: 81 },
  { name: "Anna", age: 47 },
];
const names = people.map((person) => person.name);
console.log("Names:", names); // Output: ["John", "Lenny", "Andrew", "Peter", "Anna"]
// 3. Converting an array of strings to uppercase
const fruits = ["apple", "banana", "cherry"];
const uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercased fruits:", uppercasedFruits); // Output: ["APPLE", "BANANA", "CHERRY"]
// 4. Extracting specific properties from an array of objects
const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 47, occupation: "programmer" },
];
const occupations = users.map((user) => user.occupation);
console.log("Occupations:", occupations); // Output: ["gardener", "programmer", "teacher", "teacher", "programmer"]
// 5. Transforming objects while preserving structure
const processedUsers = users.map((user) => {
  return {
    ...user,
    isAdult: user.age >= 18,
  };
});
console.log("Processed Users:", processedUsers); // Output: Array of users with isAdult property added

const userAges = users.map(({ age }) => age);
console.log("User Ages:", userAges); // Output: [25, 51, 43, 81, 47]
