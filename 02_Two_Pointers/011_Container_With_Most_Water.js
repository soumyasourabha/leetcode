/**
 * 11. Container With Most Water (Medium)
 * 
 * Problem:
 * You are given an integer array height of length n. There are n vertical lines 
 * drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the 
 * container contains the most water.
 * 
 * Strategy: Two Pointers (Greedy)
 * 1. Initialize l = 0, r = n - 1.
 * 2. Calculate area: (r - l) * min(height[l], height[r]).
 * 3. Goal: Move the pointer that is SHORTER, as that is the bottleneck.
 * 
 * Time: O(n)
 * Space: O(1)
 */

function maxArea(height) {
    let res = 0;
    let l = 0, r = height.length - 1;

    while (l < r) {
        let area = (r - l) * Math.min(height[l], height[r]);
        res = Math.max(res, area);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return res;
}

console.log("Max Area [1,8,6,2,5,4,8,3,7]:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
