/**
 * 217. Contains Duplicate (Easy)
 * 
 * Problem:
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * 
 * Time Complexity: O(n) - We traverse the array once.
 * Space Complexity: O(n) - In the worst case, we store all elements in the Hash Set.
 */

/**
 * Solution 1: Use a Hash Set (Optimal)
 * We use a Set to track seen numbers. Sets provide O(1) average time complexity for lookups/insertions.
 */
function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

/**
 * Alternative Solution: Sorting
 * Sort the array first, then check adjacent elements.
 * Time Complexity: O(n log n) due to sorting.
 * Space Complexity: O(1) or O(log n) depending on sort implementation.
 */
function containsDuplicateSorting(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}

// Example Execution
console.log("Contains Duplicate [1,2,3,1]:", containsDuplicate([1, 2, 3, 1])); // Expected: true
console.log("Contains Duplicate [1,2,3,4]:", containsDuplicate([1, 2, 3, 4])); // Expected: false
