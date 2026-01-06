/**
 * 198. House Robber (Medium)
 * 
 * Problem:
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed. The only constraint 
 * is that you cannot rob adjacent houses.
 * 
 * Strategy: Dynamic Programming (Optimal Space)
 * 1. For each house, you have two choices:
 *    - Rob current house: total = currentVal + max(everything up to i-2).
 *    - Skip current house: total = max(everything up to i-1).
 * 
 * Logic:
 * rob = max(nums[i] + rob_i_minus_2, rob_i_minus_1)
 * 
 * Time: O(n)
 * Space: O(1)
 */

function rob(nums) {
    let rob1 = 0, rob2 = 0;

    // [rob1, rob2, n, n+1, ...]
    for (let n of nums) {
        let temp = Math.max(n + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}

console.log("House Robber [1,2,3,1]:", rob([1, 2, 3, 1])); // 4
