/**
 * 55. Jump Game (Medium)
 * 
 * Problem:
 * You are given an integer array nums. You are initially positioned at the array's 
 * first index, and each element in the array represents your maximum jump length 
 * at that position. Return true if you can reach the last index.
 * 
 * Strategy: Greedy (Backwards)
 * Goal: Can we reach the last index?
 * 1. Set the 'goal' to the last index.
 * 2. Iterate backwards from second-to-last bar.
 * 3. If (current index + jump) >= goal, then this index CAN reach the goal.
 * 4. Move the 'goal' to the current index.
 * 5. If goal hits 0 at the end, return true.
 * 
 * Performance:
 * Time: O(n)
 * Space: O(1)
 */

function canJump(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;
}

console.log("Can Jump [2,3,1,1,4]:", canJump([2, 3, 1, 1, 4])); // true
console.log("Can Jump [3,2,1,0,4]:", canJump([3, 2, 1, 0, 4])); // false
