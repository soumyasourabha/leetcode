/**
 * 269. Alien Dictionary (Hard)
 * 
 * Problem:
 * There is a new alien language that uses the English alphabet. However, the order of 
 * the letters is unknown to you. You are given a list of words from the alien dictionary, 
 * where words are sorted lexicographically by the rules of this new language.
 * Return a string of the unique letters in the new alien language in lexicographical order.
 * 
 * Strategy: Topological Sort (Post-Order DFS)
 * 1. Build an adjacency list by comparing adjacent words.
 *    EXAMPLE: "wrt", "wrf" -> 't' comes before 'f'. 
 * 2. Perform DFS to check for cycles and build the post-order sequence.
 * 3. Reverse the sequence for the final result.
 * 
 * Logic Note: 
 * If a word is a prefix of the previous word (e.g., "abcd", "abc"), it's an INVALID order.
 * 
 * Time: O(Total characters in all words)
 * Space: O(1) - Only 26 characters in alphabet.
 */

function alienOrder(words) {
    const adj = {};
    for (let w of words) {
        for (let char of w) adj[char] = new Set();
    }

    for (let i = 0; i < words.length - 1; i++) {
        let w1 = words[i], w2 = words[i + 1];
        let minLen = Math.min(w1.length, w2.length);

        // Edge Case: Prefix violation
        if (w1.length > w2.length && w1.startsWith(w2)) return "";

        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                adj[w1[j]].add(w2[j]);
                break;
            }
        }
    }

    const visit = {}; // false: visiting, true: visited
    const result = [];

    function dfs(char) {
        if (char in visit) return visit[char];

        visit[char] = false; // Currently visiting
        for (let next of adj[char]) {
            if (!dfs(next)) return false; // Cycle detected
        }
        visit[char] = true; // Visited
        result.push(char);
        return true;
    }

    for (let char in adj) {
        if (!dfs(char)) return ""; // Cycle detected
    }

    return result.reverse().join("");
}

console.log("Alien Order ['wrt','wrf','er','ett','rft']:", alienOrder(["wrt", "wrf", "er", "ett", "rft"]));
// "wertf"
