/**
 * 242. Valid Anagram (Easy)
 * 
 * Problem:
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * Logic:
 * An anagram has the same count of every character. 
 * We use a Frequency Map (Object) to count characters in 's' and decrement using 't'.
 * 
 * Time Complexity: O(n) - Single pass through both strings.
 * Space Complexity: O(1) - The map will only ever have 26 characters (a-z).
 */

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

/**
 * Alternative: Sorting
 * Logic: Sort both strings and compare.
 * Time: O(n log n)
 * Space: O(1) or O(n) depending on string to array conversion.
 */
function isAnagramSort(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log("Is Anagram 'anagram', 'nagaram':", isAnagram("anagram", "nagaram")); // true
