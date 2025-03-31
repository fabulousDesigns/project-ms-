// 🔥 Understanding Hashmaps in JavaScript
// A hashmap is a data structure that stores key-value pairs, allowing fast lookups, insertions, and deletions (on average, O(1) time complexity).
// ✅ Ways to Implement a Hashmap in JS
// 1️⃣ Using Objects ({})
let myMap = {}
myMap["name"] = "Bernard"
myMap["age"] = 25
console.log(myMap["name"]);

//2️⃣ Using Map (ES6)
let myMap2 = new Map()
myMap2.set("name", "Bernard")
myMap2.set("age", 25)
console.log(myMap2.get("name"));
/**
 * 3️⃣ Differences Between {} and Map

Feature	{} (Object)	Map
Key Type	Only strings or symbols	Any data type (strings, objects, functions, etc.)
Order	No guarantee	Maintains insertion order
Performance	Slower for large datasets	Optimized for fast lookups

 */
// 🔥 How Hashmaps Solve Two Sum in O(n)
// Instead of using the two-pointer method (O(n log n) if sorting first), we use a hashmap for constant-time lookups.
function twoSumHashMap(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (map.has(complement)) {
            return [map.get(complement), i]; // Indices of the two numbers
        }

        map.set(arr[i], i); // Store the number and its index
    }
    
    return null;
}

// Example:
console.log(twoSumHashMap([2, 7, 11, 15], 9)); // [0, 1]
