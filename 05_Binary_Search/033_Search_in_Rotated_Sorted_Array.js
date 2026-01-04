/**
 * 33. Search in Rotated Sorted Array (Medium)
 * 
 * Problem:
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index.
 * Find the index of the target.
 * 
 * Logic:
 * In a rotated sorted array, at least one half of the current search range is always sorted.
 * 1. Find which half is sorted.
 * 2. Check if the target lies within that sorted half.
 * 3. Search that half, or skip it.
 * 
 * Visual Representation:
 * [4,5,6,7,0,1,2] -> Left half [4,5,6,7] is sorted.
 * target = 0. 0 is NOT in [4..7], so search Right half [0,1,2].
 * 
 * Time: O(log n)
 * Space: O(1)
 */

function searchRotated(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;

        // Left half is sorted
        if (nums[l] <= nums[mid]) {
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1; // Target is in right half
            } else {
                r = mid - 1; // Target is in left half
            }
        }
        // Right half is sorted
        else {
            if (target < nums[mid] || target > nums[r]) {
                r = mid - 1; // Target is in left half
            } else {
                l = mid + 1; // Target is in right half
            }
        }
    }
    return -1;
}

console.log("Search Rotated [4,5,6,7,0,1,2], target 0:", searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
