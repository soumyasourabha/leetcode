/**
 * 54. Spiral Matrix (Medium)
 * 
 * Problem:
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * 
 * Strategy: Layer Traversal (4 Boundaries)
 * Maintain 4 boundaries: top, bottom, left, right.
 * Shrink the boundaries as you traverse.
 * 
 * Logic:
 * 1. Move Right across TOP. Increment top.
 * 2. Move Down across RIGHT. Decrement right.
 * 3. Move Left across BOTTOM. Decrement bottom.
 * 4. Move Up across LEFT. Increment left.
 * 
 * Time: O(m * n)
 * Space: O(1) (excluding result)
 */

function spiralOrder(matrix) {
    const res = [];
    if (matrix.length === 0) return res;

    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // 1. Traverse Right
        for (let i = left; i <= right; i++) res.push(matrix[top][i]);
        top++;

        // 2. Traverse Down
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
        right--;

        // Check if boundaries still valid after shrinking
        if (!(left <= right && top <= bottom)) break;

        // 3. Traverse Left
        for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
        bottom--;

        // 4. Traverse Up
        for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
        left++;
    }

    return res;
}

console.log("Spiral Order [[1,2,3],[4,5,6],[7,8,9]]:", spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// [1,2,3,6,9,8,7,4,5]
