/**
 * Problem 1: Remove Duplicates from an Array
 *
 * @param {number[]} nums - Array with potential duplicates
 * @return {number[]} - Array with duplicates removed
 *
 * Time Complexity: O(n) - We iterate through the array once
 * Space Complexity: O(n) - We store unique elements in a Set
 */

const removeDuplicates = (arr) => {
    return [...new Set(arr)]
}

const testArr1 = [1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 8, 9, 10]
console.log(removeDuplicates(testArr1));
