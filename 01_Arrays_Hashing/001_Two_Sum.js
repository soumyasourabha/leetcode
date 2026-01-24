/**
 * 1. Two Sum (Easy)
 * 
 * Problem:
 * Given an array of integers nums and an integer target, return indices of the two numbers 
 * such that they add up to target.
 * 
 * Logic:
 * As we iterate, we calculate the 'complement' (target - currentNum).
 * If the complement exists in our map, we've found the pair!
 * 
 * Visual Representation:
 * target = 9, nums = [2, 7, 11, 15]
 * 1. num = 2, complement = 7. Map: {2: 0}
 * 2. num = 7, complement = 2. 2 is in Map! Return [Map[2], 1] -> [0, 1]
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * Solution 1: One-pass Hash Map
 */
function twoSum(nums, target) {
    const map = new Map(); // val -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
    return [];
}

/**
 * Alternative Solution: Brute Force
 * Check every pair.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log("Two Sum [2,7,11,15], target=9:", twoSum([2, 7, 11, 15], 9)); // [0, 1]
