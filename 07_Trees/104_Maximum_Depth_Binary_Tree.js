/**
 * 104. Maximum Depth of Binary Tree (Easy)
 * 
 * Problem:
 * Given the root of a binary tree, return its maximum depth.
 * 
 * Strategy: Post-Order DFS
 * 1. Depth = 1 + max(leftDepth, rightDepth).
 * 
 * Time: O(n)
 * Space: O(h)
 */

function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
