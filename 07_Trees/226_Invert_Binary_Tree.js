/**
 * 226. Invert Binary Tree (Easy)
 * 
 * Problem:
 * Given the root of a binary tree, invert the tree and return its root.
 * 
 * Strategy: DFS Recursion
 * 1. Base case: if root is null, return null.
 * 2. Swap the left and right children.
 * 3. Recursively call invert on left and right.
 * 
 * Time: O(n)
 * Space: O(h)
 */

function invertTree(root) {
    if (!root) return null;

    // Swap
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
}
