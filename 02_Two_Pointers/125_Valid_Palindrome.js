/**
 * 125. Valid Palindrome (Easy)
 * 
 * Problem:
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * 
 * Two Pointer Logic:
 * Initialize 'left' at start, 'right' at end.
 * Compare characters. If valid alphanumeric and they match, move pointers inward.
 * 
 * Visual Representation:
 * "A man, a plan, a canal: Panama"
 * L ->                     <- R
 * Match 'a' and 'a', move. Skip whitespace/commas.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        // Skip non-alphanumeric characters for left pointer
        while (l < r && !isAlphaNumeric(s[l])) {
            l++;
        }
        // Skip non-alphanumeric characters for right pointer
        while (r > l && !isAlphaNumeric(s[r])) {
            r--;
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

// Helper to check alphanumeric
function isAlphaNumeric(char) {
    return (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9');
}

console.log("Is Palindrome 'race a car':", isPalindrome("race a car")); // false
console.log("Is Palindrome 'aba':", isPalindrome("aba")); // true
