/**
 * 84. Largest Rectangle in Histogram (Hard)
 * 
 * Problem:
 * Given an array of integers heights representing the histogram's bar height where the width 
 * of each bar is 1, return the area of the largest rectangle in the histogram.
 * 
 * Strategy: Monotonic Stack
 * We maintain a stack of [index, height] pairs where heights are in increasing order.
 * When we see a height smaller than the top of the stack, we know the rectangle 
 * ending at that top cannot be extended further.
 * 
 * Logic:
 * 1. For each bar:
 *    - Start at current index.
 *    - While stack is NOT empty and current height < stack.top's height:
 *      - Pop stack.
 *      - Calculate area: height * (current_index - popped_index).
 *      - Maximize area.
 *      - Update start index to the popped index (since the current bar can extend back).
 * 2. Push [startIndex, currentHeight].
 * 3. After the loop, process any remaining bars in the stack until the end of the histogram.
 * 
 * Time Complexity: O(n) - Each element pushed and popped once.
 * Space Complexity: O(n) - Stack storage.
 */

function largestRectangleArea(heights) {
    let maxArea = 0;
    let stack = []; // Pair: [index, height]

    for (let i = 0; i < heights.length; i++) {
        let start = i;
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            let [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index));
            start = index; // Current bar can extend back to the popped index
        }
        stack.push([start, heights[i]]);
    }

    // Remaining elements in stack extend to the end of the histogram
    for (let [index, height] of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }

    return maxArea;
}

console.log("Largest Rectangle Area [2,1,5,6,2,3]:", largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
