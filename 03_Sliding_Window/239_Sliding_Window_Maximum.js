/**
 * 239. Sliding Window Maximum (Hard)
 * 
 * Problem:
 * You are given an array of integers nums, there is a sliding window of size k which is 
 * moving from the very left of the array to the very right. You can only see the k numbers 
 * in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 * 
 * Strategy: Monotonic Queue (Deque)
 * We maintain a Deque of indices where the values are in decreasing order.
 * This allows us to find the maximum for the current window in O(1) time.
 * 
 * Logic:
 * 1. If the index at the front of the deque is out of the current window (index <= i - k), remove it.
 * 2. While the current value is greater than the value at the back of the deque, pop the back.
 *    (This maintains the decreasing order).
 * 3. Push current index to the back.
 * 4. The front of the deque is always the maximum for the current window.
 * 
 * Time Complexity: O(n) - Each element is added and removed from the deque at most once.
 * Space Complexity: O(k) - The deque stores at most k indices.
 */

function maxSlidingWindow(nums, k) {
    const res = [];
    const deque = []; // Stores indices

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are out of the window range
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // 2. Remove indices of elements smaller than the current element
        // (Maintaining monotonic decreasing property)
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        // 3. Once we have a full window, the front of the deque is the max
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
}

console.log("Max Sliding Window [1,3,-1,-3,5,3,6,7], k=3:", maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// [3, 3, 5, 5, 6, 7]
