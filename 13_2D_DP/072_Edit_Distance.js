/**
 * 72. Edit Distance (Hard)
 * 
 * Problem:
 * Given two strings word1 and word2, return the minimum number of operations 
 * required to convert word1 to word2.
 * You have the following operations: Insert, Delete, Replace.
 * 
 * Strategy: 2D Dynamic Programming (Bottom-Up)
 * We create a (M+1) x (N+1) grid where dp[i][j] is the distance between word1[0...i] 
 * and word2[0...j].
 * 
 * DP Transitions:
 * - If char matched: dp[i][j] = dp[i-1][j-1]
 * - If char mismatch: 1 + min(
 *      dp[i-1][j],   // Delete
 *      dp[i][j-1],   // Insert
 *      dp[i-1][j-1]  // Replace
 *   )
 * 
 * Visual Representation:
 * word1 = "horse", word2 = "ros"
 *     ""  r  o  s
 * ""  0   1  2  3
 * h   1   1  2  3
 * o   2   2  1  2  (Match!)
 * r   3   2  2  2
 * ...
 * 
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Initialize 2D DP array with base cases (empty string matches)
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i; // Column for empty word2
    for (let j = 0; j <= n; j++) dp[0][j] = j; // Row for empty word1

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // No op needed
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],    // Delete from word1
                    dp[i][j - 1],    // Insert into word1
                    dp[i - 1][j - 1] // Replace in word1
                );
            }
        }
    }

    return dp[m][n];
}

console.log("Edit Distance 'horse' -> 'ros':", minDistance("horse", "ros")); // 3
