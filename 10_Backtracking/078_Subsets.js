/**
 * 78. Subsets (Medium)
 * 
 * Problem:
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * 
 * Strategy: Backtracking (DFS)
 * For every element, we have two choices:
 * 1. INCLUDE it in the current subset.
 * 2. EXCLUDE it from the current subset.
 * 
 * Visual Representation (Tree):
 *       []
 *      /  \
 *    [1]   []
 *   / \    / \
 * [1,2] [1] [2] []
 * 
 * Time Complexity: O(n * 2^n) - 2^n subsets, each takes O(n) to copy.
 * Space Complexity: O(n) - Depth of the recursion tree.
 */

function subsets(nums) {
    const res = [];
    const subset = [];

    function dfs(i) {
        // Base case: we've made a decision for every element
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }

        // Decision 1: Include nums[i]
        subset.push(nums[i]);
        dfs(i + 1);

        // Decision 2: Exclude nums[i] (Backtrack)
        subset.pop();
        dfs(i + 1);
    }

    dfs(0);
    return res;
}

console.log("Subsets of [1,2,3]:", subsets([1, 2, 3]));
