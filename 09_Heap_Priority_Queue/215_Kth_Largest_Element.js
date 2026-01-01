/**
 * 215. Kth Largest Element in an Array (Medium)
 * 
 * Problem:
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * 
 * Strategy: Min-Heap
 * We maintain a Min-Heap of size K.
 * If we add a new element and size > K, we remove the minimum.
 * After processing all elements, the top of the Min-Heap is the Kth largest.
 * 
 * Note: JavaScript doesn't have a built-in Priority Queue/Heap. 
 * Below is a simplified implementation or using sorting (Alternative).
 * 
 * Time: O(n log k) with Heap, O(n log n) with Sorting.
 * Space: O(k) with Heap.
 */

function findKthLargest(nums, k) {
    // Quick Solution: Sorting
    // nums.sort((a,b) => b - a);
    // return nums[k-1];

    // Heap Logic (Conceptual using a simple array for demonstration)
    const minHeap = []; // In a real interview, implement a proper Binary Heap
    for (let num of nums) {
        minHeap.push(num);
        minHeap.sort((a, b) => a - b); // Simulate heap behavior
        if (minHeap.length > k) {
            minHeap.shift();
        }
    }
    return minHeap[0];
}

console.log("3rd Largest in [3,2,3,1,2,4,5,5,6]:", findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 3)); // 5
