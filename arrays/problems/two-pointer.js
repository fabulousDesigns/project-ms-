// Starting with a sorted array of integers, find a pair of numbers that sum to the given target.

// inputArr = [1.3,4,5,8,10,13]
// target = 13

//* Step 1: Initialize pointers at opposite ends of array and sum the two elements together. This represents the first pair we are considering in our search.
/**
 *! left                     right
 *! ↓                         ↓
* ! --- --- --- --- --- ---- ----   
*!  | 1 | 3 | 4 | 6 | 8 | 10 | 13 |     current_sum = array[left] + array[right] = 14
* !--- --- --- --- --- ---- ----   
 */
//* Step 2: Compare current_sum with target. Since current_sum > target, move the right pointer backwards.
// To see why, notice that all other pairs that use 13 are also greater than our current_sum.So by moving the right pointer to 10, we can eliminate those unnecessary pairs from our search.

// left                 right
//  ↓                     ↓
//  --- --- --- --- --- ---- ----
// | 1 | 3 | 4 | 6 | 8 | 10 | 13 |          by moving right pointer back...
//  --- --- --- --- --- ---- ----



// 		   21--------
//                   |         |
//            17-----|-------- |
//           |       |       | |
//  --- --- --- --- --- ---- ----
// | 1 | 3 | 4 | 6 | 8 | 10 | 13 |     we eliminated these pairs from our search
//  --- --- --- --- --- ---- ----
//       |       |       |   | | |
//        16-----|-------|---- | |
//               |       |     | |
//                19-----|------ |
//                       |       |
//                        23------

// Step 3: Compare current_sum with target. Since current_sum < target, move the left pointer forwards. This follows similar reasoning to the step above: all other pairs that use element 1 are less than our target, so we should move our left pointer forward to eliminate those pairs.

/**
 * left                 right
 ↓                     ↓
 --- --- --- --- --- ---- ----
| 1 | 3 | 4 | 6 | 8 | 10 | 13 |                move left pointer forwards
 --- --- --- --- --- ---- ----

============= TO =============

     left            right
      ↓                ↓
 --- --- --- --- --- ---- ----
| 1 | 3 | 4 | 6 | 8 | 10 | 13 |                   current_sum = 13
 --- --- --- --- --- ---- ----
 */

 /**
  * Termination: Repeat process until current_sum == target, like it does here. Or, if the pointers meet at the same index, then a pair was not found.

Time Complexity: O(n). This is done in a single pass. By using the two-pointer technique, we avoid the nested for-loop required by the brute force solution.
  */

/**
 * 🔹 Problem Recap:
Given a sorted array of integers, find a pair of numbers that sum to a given target.
We need an efficient approach (not brute force).
The two-pointer technique works in O(n) time, which is optimal for sorted arrays.
 */
/**
 * 🔹 Step-by-Step Approach (Two-Pointer Technique)
1️⃣ Define Two Pointers
Place the left pointer at index 0 (beginning of array).
Place the right pointer at the last index (arr.length - 1).
2️⃣ Move Pointers Based on the Sum
If arr[left] + arr[right] == target, we found the pair! 🎉
If the sum is too big, move the right pointer left to decrease the sum.
If the sum is too small, move the left pointer right to increase the sum.
Keep repeating until the pointers meet (or we find a pair).
 */

function findPairWithSum(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let currentSum = arr[left] + arr[right]

        if (currentSum === target) {
            return [arr[left], arr[right]]
        } else if (currentSum < target) {
            left++
        } else {
            right--
        }
    }

    return null
}

// Example usage:
// const inputArr = [ -4, -1, 2, 3, 7];
// const target = 6;
// console.log(findPairWithSum(inputArr, target));
// 🔹 Modifying the Code to Find All Pairs
// Currently, your function stops when it finds the first valid pair.
// To return all possible pairs, we need to:
// Store valid pairs in an array instead of returning immediately.
// Continue searching even after finding a valid pair.
function findAllPairsWithSum(arr, target) {
    let left = 0; //left pointer
    let right = arr.length - 1; // right pointer
    let pairs = []; // Store all valid pairs

    while (left < right) {
        let currentSum = arr[left] + arr[right]; // current sum

        if (currentSum === target) {
            pairs.push([arr[left], arr[right]]); // Store the pair
            left++;  // Move left to find other pairs
            right--; // Move right to find other pairs
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return pairs.length > 0 ? pairs : null; // Return null if no pairs found
}

// Example usage:
const inputArr = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 9;
console.log(findAllPairsWithSum(inputArr, target)); 
