// Arrays - Basics
// collections of data in contiguous memory locations
// arrays are mutable
// operation                       time complexity                     Explanation
// creation                        O(n)                               need to allocate memory for n elements
// access element by index          O(1)                               direct access to memory location
// insertion at end                 O(1)                               if space is available, otherwise O(n)
// insertion at beginning            O(n)                               need to shift all elements
// insertion at middle             O(n)                               need to shift all elements
// deletion at end                  O(1)                               if space is available, otherwise O(n)
// deletion at beginning             O(n)                               need to shift all elements
// deletion at middle              O(n)                               need to shift all elements
// searching for an element        O(n)                               need to check all elements
// sorting                         O(n log n)                         need to compare all elements
// merging two arrays             O(n)                               need to compare all elements
// splitting an array             O(n)                               need to compare all elements
// reversing an array            O(n)                               need to compare all elements
// finding the maximum element O(n)                               need to compare all elements
// finding the minimum element O(n)                               need to compare all elements
// finding the average element O(n)                               need to compare all elements
// finding the median element O(n)                               need to compare all elements
// finding the mode element O(n)                               need to compare all elements
// ! Array Operations in Depth
//? 1. Creation of an Array
const array1 = new Array(5); // Creates an array with 5 empty slots
const array2 = Array.from({ length: 5 }, (_, i) => i); // Creates an array [0, 1, 2, 3, 4]
const array3 = Array.of(1, 2, 3, 4, 5); // Creates an array [1, 2, 3, 4, 5]
const array4 = [...Array(5).keys()]; // Creates an array [0, 1, 2, 3, 4]
const array5 = Array(5).fill(0); // Creates an array [0, 0, 0, 0, 0]
const array6 = Array.from("Hello"); // Creates an array ['H', 'e', 'l', 'l', 'o']
const array7 = Array.from([1, 2, 3], (x) => x * 2); // Creates an array [2, 4, 6]
const array8 = Array.from({ length: 5 }, (_, i) => i * 2); // Creates an array [0, 2, 4, 6, 8]
const array9 = [1, 2, 3, 4, 5]; // Creates an array [1, 2, 3, 4, 5]
// ? 2 Insertion of an Element
// push() - Adds an element to the end of the array
// unshift() - Adds an element to the beginning of the array
// splice() - Adds an element at a specific index in the array
const arr = [1, 2, 3, 4, 5];
arr.push(6); // Adds 6 to the end of the array, O(1) fast
arr.unshift(0); // Adds 0 to the beginning of the array, O(n) slow
arr.splice(2, 0, 2.5); // Adds 2.5 at index 2, O(n) slow
console.log(arr); // Output: [0, 1, 2.5, 2, 3, 4, 5, 6]
// 💡 Rule of Thumb: Prefer push() over unshift() for better performance.
// ? 3 Deletion of an Element
// At the end pop() -> Fast, O(1)
// At the beginning shift() -> Slow, O(n)
// At a specific index splice() -> Slow, O(n)
arr.pop(); // Removes the last element, O(1) fast
arr.shift(); // Removes the first element, O(n) slow
arr.splice(2,1) // Removes the element at index 2, O(n) slow
console.log(arr); // Output: [1, 2.5, 3, 4, 5]
// 🚀 Performance Tip: Use pop() over shift() for better efficiency.
// ? 4. Searching
// linear search(indexOf, includes) -> O(n)
// binary search -> O(log n) (only for sorted arrays)
const nums = [10, 20, 30, 40, 50];
console.log(nums.indexOf(30)); // Output: 2 (index of 30)
console.log(nums.includes(40)); // Output: true (30 exists in the array)
// // ********************************************************************************
//* Advanced Array Techniques
// // ********************************************************************************
// 1. Two Pointers Technique
// 💡 Used in problems where you compare elements from both ends (e.g., sorted arrays, palindrome checking). Example: Checking if an array is a palindrome
function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
    }
    return true;
} // O(n) time complexity, O(1) space complexity
console.log(isPalindrome([1, 2, 3, 2, 1])); // Output: true
console.log(isPalindrome([1, 2, 3, 4, 5])); // Output: false


