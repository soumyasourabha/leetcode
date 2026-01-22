/**
 * 238. Product of Array Except Self (Medium)
 * 
 * Problem:
 * Given an integer array nums, return an array answer such that answer[i] is equal 
 * to the product of all the elements of nums except nums[i].
 * YOU MUST SOLVE THIS WITHOUT DIVISION AND IN O(n) TIME.
 * 
 * Strategy: Prefix and Suffix Products
 * 1. Create a result array 'res'. 
 * 2. Scan Left to Right: Store the product of everything to the LEFT of index i in res[i].
 * 3. Scan Right to Left: Multiply res[i] by the product of everything to the RIGHT of index i.
 * 
 * Time: O(n) - Two linear passes.
 * Space: O(1) - The output array is not counted as extra space.
 */

function productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    // 1. Prefix pass
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    // 2. Suffix pass
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;
}

console.log("Product Except Self [1,2,3,4]:", productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
