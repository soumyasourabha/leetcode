/**
 * 167. Two Sum II - Input Array Is Sorted (Medium)
 * 
 * Problem:
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
 * find two numbers such that they add up to a specific target number.
 * 
 * Strategy: Two Pointers
 * Since the array is SORTED:
 * - If sum > target: We need a smaller sum. Move Right pointer Left (r--).
 * - If sum < target: We need a larger sum. Move Left pointer Right (l++).
 * 
 * Visual Representation:
 * [2, 7, 11, 15], target = 9
 * L=2, R=15 (Sum 17) -> 17 > 9 -> r--
 * L=2, R=11 (Sum 13) -> 13 > 9 -> r--
 * L=2, R=7  (Sum 9)  -> Match!
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function twoSumSorted(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        let currentSum = numbers[l] + numbers[r];

        if (currentSum > target) {
            r--;
        } else if (currentSum < target) {
            l++;
        } else {
            return [l + 1, r + 1]; // 1-indexed as per problem
        }
    }
}

console.log("Two Sum II [2,7,11,15], target 9:", twoSumSorted([2, 7, 11, 15], 9)); // [1, 2]
