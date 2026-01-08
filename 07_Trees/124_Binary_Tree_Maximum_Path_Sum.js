/**
 * 124. Binary Tree Maximum Path Sum (Hard)
 * 
 * Problem:
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes 
 * has an edge connecting them. Find the maximum path sum of any non-empty path.
 * 
 * Strategy: Post-Order DFS (Recursive)
 * For every node, we want to know:
 * 1. The max path that stays within its subtree (including both children + root).
 * 2. The max "single-branch" path it can return to its parent (root + max(left, right)).
 * 
 * Logic:
 * - maxPath(node) = node.val + max(leftGain, 0) + max(rightGain, 0)
 * - Globally update `maxSum` with this value.
 * - Return `node.val + max(leftGain, rightGain, 0)` to the parent.
 * 
 * Visual Representation:
 *      -10
 *      /  \
 *     9    20
 *         /  \
 *        15   7
 * 1. Process 15: returns 15.
 * 2. Process 7: returns 7.
 * 3. Process 20: Path sum = 20 + 15 + 7 = 42. Global Max = 42. Returns 20 + max(15, 7) = 35.
 * 4. Process -10: Path sum = -10 + 9 + 35 = 34. Global Max remains 42.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) (Recursion stack)
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxPathSum(root) {
    let res = -Infinity;

    function dfs(node) {
        if (!node) return 0;

        // Recursively find max path from left and right subtrees
        // Use Math.max(..., 0) to ignore negative paths
        let leftMax = Math.max(dfs(node.left), 0);
        let rightMax = Math.max(dfs(node.right), 0);

        // Update global maximum with path passing THROUGH current node
        res = Math.max(res, node.val + leftMax + rightMax);

        // Return the max path sum including current node and ONE of its children
        return node.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return res;
}

// Tree structure: [-10, 9, 20, null, null, 15, 7]
const root = new TreeNode(-10,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log("Max Path Sum:", maxPathSum(root)); // 42
