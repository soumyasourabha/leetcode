/**
 * 53. Maximum Subarray (Medium)
 * 
 * Problem:
 * Given an integer array nums, find the subarray with the largest sum and return its sum.
 * 
 * Strategy: Greedy (Kadane's Algorithm)
 * 1. Iterate through the array.
 * 2. If 'currentSum' becomes negative, reset it to 0 (since it won't help future sums).
 * 3. Add current number to 'currentSum'.
 * 4. Update 'maxSum'.
 * 
 * Time: O(n)
 * Space: O(1)
 */

function maxSubArray(nums) {
    let maxSub = nums[0];
    let curSum = 0;

    for (let n of nums) {
        if (curSum < 0) curSum = 0;
        curSum += n;
        maxSub = Math.max(maxSub, curSum);
    }
    return maxSub;
}

console.log("Max Subarray [-2,1,-3,4,-1,2,1,-5,4]:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
