/**
 * 48. Rotate Image (Medium)
 * 
 * Problem:
 * You are given an n x n 2D matrix representing an image. Rotate the image by 90 
 * degrees (clockwise) IN-PLACE.
 * 
 * Strategy: Transpose then Reflect
 * 1. Transpose: Swap matrix[i][j] with matrix[j][i]. This flips over the diagonal.
 * 2. Reflect: Reverse each row.
 * 
 * Visual Representation:
 * 1 2 3      1 4 7      7 4 1
 * 4 5 6  ->  2 5 8  ->  8 5 2
 * 7 8 9      3 6 9      9 6 3
 * (Input)   (Transpose) (Reflect)
 * 
 * Time: O(n^2)
 * Space: O(1) (In-place)
 */

function rotate(matrix) {
    const n = matrix.length;

    // 1. Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // 2. Reflect (Reverse rows)
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(mat);
console.log("Rotated Image:", mat);
// [[7,4,1],[8,5,2],[9,6,3]]
