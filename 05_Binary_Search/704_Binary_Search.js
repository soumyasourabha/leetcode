/**
 * 704. Binary Search (Easy)
 * 
 * Problem:
 * Given an array of integers nums which is sorted in ascending order, and an integer target, 
 * write a function to search target in nums. If target exists, then return its index. 
 * Otherwise, return -1.
 * 
 * Logic:
 * Use two pointers: left and right. Find the midpoint. 
 * 1. If mid === target, return mid.
 * 2. If target > mid, move left to mid + 1.
 * 3. If target < mid, move right to mid - 1.
 * 
 * Time: O(log n)
 * Space: O(1)
 */

function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        // Prevent overflow: l + Math.floor((r - l) / 2)
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

console.log("Binary Search [-1,0,3,5,9,12], target 9:", search([-1, 0, 3, 5, 9, 12], 9)); // 4
