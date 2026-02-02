/**
 * 3. Longest Substring Without Repeating Characters (Medium)
 * 
 * Problem:
 * Given a string s, find the length of the longest substring without 
 * repeating characters.
 * 
 * Strategy: Sliding Window + Hash Set
 * 1. Use a Set to store unique characters in the current window.
 * 2. Move 'r' forward. If s[r] is already in the Set, move 'l' forward 
 *    and remove s[l] from the set until s[r] can be added.
 * 
 * Time: O(n) - Each character visited at most twice.
 * Space: O(min(n, m)) where m is charset size.
 */

function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let l = 0;
    let res = 0;

    for (let r = 0; r < s.length; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]);
            l++;
        }
        charSet.add(s[r]);
        res = Math.max(res, r - l + 1);
    }
    return res;
}

console.log("Longest Substring 'abcabcbb':", lengthOfLongestSubstring("abcabcbb")); // 3
