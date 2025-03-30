// 🔥 Basic Level (Warm-up)
// 1️⃣ Find any pair that sums to the target.
// Input: [1, 2, 3, 4, 6], target = 6
// Expected Output: [2, 4]
// 2️⃣ Find all pairs that sum to the target.
// Input: [1, 2, 3, 4, 5, 6], target = 7
// Expected Output: [[1, 6], [2, 5], [3, 4]]
// 3️⃣ What if no pair exists?
// Input: [1, 3, 5, 7], target = 10
// Expected Output: null

function pairsAddingToTarget(arr, target) {
    let leftPointer = 0
    let rightPointer = arr.length - 1

    while (leftPointer < rightPointer) {
        let currentSum = arr[leftPointer] + arr[rightPointer]
        if (currentSum === target) {
            return [arr[leftPointer], arr[rightPointer]]
        } else if (currentSum < target) {
            leftPointer++
        } else {
            rightPointer--
        }
    }

    return null
}

const inputArr = [1, 2, 3, 4, 6]
const target = 6

console.log(pairsAddingToTarget(inputArr, target)); // [2,4]

function allPairsAddingToTarget(arr, target) {
    let leftPointer = 0
    let rightPointer = arr.length - 1
    let allMatches = []

    while (leftPointer < rightPointer) {
        let currentSum = arr[leftPointer] + arr[rightPointer]
        if (currentSum === target) {
            allMatches.push([arr[leftPointer], arr[rightPointer]])
            leftPointer++
            rightPointer--
        } else if (currentSum < target) {
            leftPointer++
        } else {
            rightPointer--
        }
    }
    return allMatches.length > 0 ? allMatches : null
}

const allInputArr = [1, 2, 3, 4, 5, 6]
const target2 = 7

console.log(allPairsAddingToTarget(allInputArr, target2)); // [ [ 1, 6 ], [ 2, 5 ], [ 3, 4 ] ]

// 4️⃣ What if all numbers in the array are the same?
// Input: [5, 5, 5, 5], target = 10
// Expected Output: [[5, 5], [5, 5]]
const sameInput = [5, 5, 5, 5]
const target3 = 10
console.log(allPairsAddingToTarget(sameInput, target3)); // [ [ 5, 5 ], [ 5, 5 ] ]

// 5️⃣ What if the array contains negative numbers?
// Input: [-3, -2, 0, 2, 3, 5], target = 0
// Expected Output: [[-3, 3], [-2, 2]]

const negativeIntegers = [-3, -2, 0, 2, 3, 5]
const target4 = 0
console.log(allPairsAddingToTarget(negativeIntegers, target4)); // [ [ -3, 3 ], [ -2, 2 ] ]

// 6️⃣ What if the array has duplicates?
// Input: [1, 1, 2, 2, 3, 3, 4, 4], target = 5
// Expected Output: [[1, 4], [1, 4], [2, 3], [2, 3]]

const dupArrays = [1, 1, 2, 2, 3, 3, 4, 4]
const target5 = 5
console.log(allPairsAddingToTarget(dupArrays, target5)); //[ [ 1, 4 ], [ 1, 4 ], [ 2, 3 ], [ 2, 3 ] ]

// 7️⃣ What if the array is not sorted? Can your solution still work?
// Input: [3, 1, 5, 7, 2], target = 8
// Expected Output: [1, 7] (or another valid pair)
// ❗ Trick: Your current two-pointer method requires a sorted array. What will you do for an unsorted array? 🤔

const unsortedArray = [3, 1, 5, 7, 2]
const target6 = 8
console.log(allPairsAddingToTarget(unsortedArray, target6)); //* null -> I need your assistance

// 8️⃣ What if you are given a very large sorted array (e.g., millions of elements)?

// What is the most efficient way to find a pair without using extra space?
//* I need your assistance
// If you have a MASSIVE array (e.g., millions of elements), you want to:
// ✔️ Avoid sorting (if not already sorted).
// ✔️ Avoid using extra space (hashmap uses extra space).
// Best Approach:
// Stick with two-pointer technique (O(n) time, O(1) space).
// Edge case: Use binary search if the second number might be missing.
// 💡 Microsoft could ask you to handle a billion numbers efficiently!

// 9️⃣ Can you modify your function to return indices instead of values?
// Input: [2, 7, 11, 15], target = 9
// Expected Output: [0, 1] (indices of 2 and 7)
//* I need your assistance

// 🔟 Can you modify your function to work with floating point numbers?
// Input: [1.5, 3.2, 4.1, 6.7], target = 5.6
// Expected Output: [1.5, 4.1]
//* I need your assistance

// 🔥 Super Tricky: Edge Cases (Microsoft Loves These)
// 1️⃣1️⃣ What happens if the array is empty?
// Input: [], target = 5
// Expected Output: null

const emptyArr = []
const target7 = 5
console.log(allPairsAddingToTarget(emptyArr, target7)); // null

// 1️⃣2️⃣ What if the array has only one element?
// Input: [4], target = 4
// Expected Output: null

const oneElement = [4]
const target8 = 4
console.log(allPairsAddingToTarget(oneElement, target8)); // null

// 1️⃣3️⃣ What if the target is a very large number and no pairs exist?
// Input: [1, 2, 3, 4], target = 1000
// Expected Output: null

const aVeryLargeInteger = [1, 3, 3, 4, 5]
const target9 = 1000
console.log(allPairsAddingToTarget(aVeryLargeInteger, target9)); // null

// 1️⃣4️⃣ What happens if there are multiple pairs, but the same number is used twice?
// Input: [1, 3, 3, 4, 5], target = 6
// Expected Output: [[1, 5], [3, 3]]

const multiplePairsButSameNumberUsedTwice = [1, 3, 3, 4, 5]
const target10 = 6
console.log(allPairsAddingToTarget(multiplePairsButSameNumberUsedTwice, target10)); // [ [ 1, 5 ], [ 3, 3 ] ]


