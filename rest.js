// 1. What is ...rest in JavaScript?
// The rest operator (...rest) allows a function or an array to collect multiple elements into a single variable.

// ✅ It is used in:

// Function parameters to collect multiple arguments.

// Array destructuring to gather remaining elements.

// Object destructuring to collect remaining properties.

// 2. Using ...rest in Function Parameters
// The rest operator allows a function to accept an indefinite number of arguments.

// 🔥 Example 1: Collecting Arguments into an Array

function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 3, 4, 5, 6, 7));
// 📌 How it works:

// sum(1, 3, 4, 5, 6, 7) passes multiple arguments.

// ...nums collects them into an array: [1, 3, 4, 5, 6, 7].

// .reduce() adds them up.

// 🔥 Example 2: Combining Required and Rest Parameters

function introduce(firstName, lastName, ...titles) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Titles: ${titles.join(", ")}`);
}
introduce(
  "Bernard",
  "Maina",
  "Software Engineer",
  "Scrum Master",
  "MERN Expert"
);

// 3. Using ...rest in Array Destructuring
// The rest operator gathers remaining array elements.

// 🔥 Example 3: Extracting First Elements & Gathering the Rest

const [first, second, ...rest] = [10, 20, 30, 40, 50];

console.log(first);
console.log(second);
console.log(rest);

// 📌 How it works:

// first = 10

// second = 20

// ...rest = [30, 40, 50] (collected into an array)
