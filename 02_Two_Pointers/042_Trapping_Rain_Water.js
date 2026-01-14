/**
 * 42. Trapping Rain Water (Hard)
 * 
 * Problem:
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it can trap after raining.
 * 
 * Strategy: Two Pointers (Optimal)
 * We use two pointers (left, right) and keep track of the max height seen so far from both sides.
 * The amount of water at any point is determined by the shorter of the two boundary heights.
 * 
 * Logic:
 * 1. Initialize l = 0, r = n - 1.
 * 2. Keep lMax and rMax.
 * 3. While l < r:
 *    - If lMax < rMax: we move left pointer. Water trapped = lMax - height[l].
 *    - Else: we move right pointer. Water trapped = rMax - height[r].
 * 
 * Visual Representation:
 * [0,1,0,2,1,0,1,3,2,1,2,1]
 *  L ->                <- R
 * If we are at index 2 (height 0), and lMax is 1 and rMax is 2.
 * Water at index 2 = min(1, 2) - 0 = 1 unit.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function trap(height) {
    if (!height || height.length === 0) return 0;

    let l = 0, r = height.length - 1;
    let lMax = height[l], rMax = height[r];
    let res = 0;

    while (l < r) {
        if (lMax < rMax) {
            l++;
            lMax = Math.max(lMax, height[l]);
            res += lMax - height[l];
        } else {
            r--;
            rMax = Math.max(rMax, height[r]);
            res += rMax - height[r];
        }
    }

    return res;
}

/**
 * Alternative Solution: Multi-pass with Arrays
 * Store lMax and rMax for every index in separate arrays.
 * Water[i] = min(lMax[i], rMax[i]) - height[i]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

console.log("Trapping Rain Water [0,1,0,2,1,0,1,3,2,1,2,1]:", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
