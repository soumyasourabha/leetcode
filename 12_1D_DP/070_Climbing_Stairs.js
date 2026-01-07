/**
 * 70. Climbing Stairs (Easy)
 * 
 * Problem:
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways 
 * can you climb to the top?
 */

/**
 * Approach 1: Brute Force Recursion
 * Logic: To reach step 'n', you could have come from 'n-1' or 'n-2'.
 * Result = (ways to reach n-1) + (ways to reach n-2)
 * 
 * Performance: O(2^n) - Very slow! Many repeated calculations.
 */
function climbStairsRecursion(n) {
    if (n <= 2) return n;
    return climbStairsRecursion(n - 1) + climbStairsRecursion(n - 2);
}

/**
 * Approach 2: recursion + Memoization (Top-Down)
 * Logic: Store results of subproblems in an array/object.
 * 
 * Performance: O(n) Time, O(n) Space.
 */
function climbStairsMemo(n, memo = {}) {
    if (n <= 2) return n;
    if (n in memo) return memo[n]; // Return stored value

    memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
    return memo[n];
}

/**
 * Approach 3: Iterative DP (Bottom-Up)
 * Logic: Build the table from bottom to top.
 * 
 * Pictorial Representation:
 * n=4
 * dp[1] = 1
 * dp[2] = 2
 * dp[3] = dp[1] + dp[2] = 3
 * dp[4] = dp[2] + dp[3] = 5
 * 
 * Performance: O(n) Time, O(n) Space.
 */
function climbStairsDP(n) {
    if (n <= 2) return n;
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

/**
 * Approach 4: Optimal Space DP
 * Since we only need the last two values, we don't need a whole array.
 * Performance: O(n) Time, O(1) Space.
 */
function climbStairsOptimal(n) {
    if (n <= 2) return n;
    let one = 1;
    let two = 2;
    for (let i = 3; i <= n; i++) {
        let temp = one + two;
        one = two;
        two = temp;
    }
    return two;
}

console.log("Climbing Stairs (n=5):", climbStairsOptimal(5)); // 8
