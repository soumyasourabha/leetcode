/**
 * Binary Tree Traversals (DFS & BFS)
 * 
 * Logic Overview:
 * 1. DFS (Depth First Search): Explores as far as possible along each branch before backtracking.
 *    - Pre-order: Root -> Left -> Right
 *    - In-order: Left -> Root -> Right (Yields sorted values in a BST)
 *    - Post-order: Left -> Right -> Root
 * 
 * 2. BFS (Breadth First Search): Explores neighbor nodes first, before moving to the next level neighbors.
 *    - Level-order: Root -> Level 1 -> Level 2 ...
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// --- DFS: In-Order ---
// Iteration: Deepest left first, then Parent, then Right.
function inorderTraversal(root) {
    const res = [];
    function traverse(node) {
        if (!node) return;
        traverse(node.left);  // Left
        res.push(node.val);   // Root
        traverse(node.right); // Right
    }
    traverse(root);
    return res;
}

// --- BFS: Level-Order ---
// Iteration: Use a QUEUE. Process current level, add children of current level to queue.
function levelOrder(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(currentLevel);
    }
    return result;
}

/**
 * Visual Representation of Level Order:
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 * Result: [[3], [9, 20], [15, 7]]
 */

// Time Complexity: O(n) for both - Each node visited once.
// Space Complexity: O(h) for DFS (Recursion stack), O(w) for BFS (Queue size).
