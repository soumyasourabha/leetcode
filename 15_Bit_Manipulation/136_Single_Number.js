/**
 * 136. Single Number (Easy)
 * 
 * Problem:
 * Given a non-empty array of integers nums, every element appears twice except for one. 
 * Find that single one.
 * 
 * Strategy: XOR Bit Manipulation
 * Bitwise XOR (^) has unique properties:
 * 1. a ^ a = 0  (Any number XORed with itself is 0)
 * 2. a ^ 0 = a  (Any number XORed with 0 is itself)
 * 3. a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b (Commutative)
 * 
 * Logic:
 * XOR all numbers in the array. The pairs will cancel out to 0, 
 * leaving only the single number.
 * 
 * Time: O(n)
 * Space: O(1)
 */

function singleNumber(nums) {
    let res = 0;
    for (let num of nums) {
        res ^= num;
    }
    return res;
}

console.log("Single Number in [4,1,2,1,2]:", singleNumber([4, 1, 2, 1, 2])); // 4
