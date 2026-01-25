/**
 * 49. Group Anagrams (Medium)
 * 
 * Problem:
 * Given an array of strings strs, group the anagrams together. 
 * You can return the answer in any order.
 * 
 * Strategy: Categorize by Sorted String
 * 1. Two strings are anagrams if their sorted versions are identical.
 * 2. Use a Map where key is the 'sorted string' and value is an array of original strings.
 * 
 * Strategy 2 (Optional): Frequency Count
 * Instead of sorting (k log k), count characters (O(k)) for each word.
 * 
 * Time: O(n * k log k) where n is number of strings, k is max string length.
 * Space: O(n * k) for storing strings in the map.
 */

function groupAnagrams(strs) {
    const map = new Map();

    for (let s of strs) {
        // Create key by sorting
        let key = s.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(s);
    }

    return Array.from(map.values());
}

console.log("Group Anagrams ['eat','tea','tan','ate','nat','bat']:");
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]
