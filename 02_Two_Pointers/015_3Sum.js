/**
 * 15. 3Sum (Medium)
 * 
 * Problem:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * The solution set must not contain duplicate triplets.
 * 
 * Strategy: Sort and Two Pointers
 * 1. Sort the array.
 * 2. Fix the first element (nums[i]).
 * 3. Use Two Pointers (L and R) for the rest of the array to find target = -nums[i].
 * 4. Skip duplicate values for 'i', 'L', and 'R' to avoid duplicate triplets.
 * 
 * Time: O(n^2)
 * Space: O(1) or O(n) depending on sort implementation.
 */

function threeSum(nums) {
    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        // Skip duplicate first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                // Skip duplicate second element
                while (l < r && nums[l] === nums[l - 1]) l++;
            }
        }
    }
    return res;
}

console.log("3Sum [-1,0,1,2,-1,-4]:", threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
