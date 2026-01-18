/**
 * 212. Word Search II (Hard)
 * 
 * Problem:
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent 
 * cells are horizontally or vertically neighboring. 
 * THE SAME LETTER CELL MAY NOT BE USED MORE THAN ONCE IN A WORD.
 * 
 * Strategy: Backtracking + Trie
 * 1. Insert all words into a Trie.
 * 2. Traverse the board and start a DFS from every cell.
 * 3. Use the Trie to prune the search (if common prefix doesn't exist, stop).
 * 
 * Logic Optimization:
 * Instead of searching every word individually (O(N * M * 4^L)), we search the Trie 
 * on the board simultaneously.
 * 
 * Time: O(M * N * 4^L) where L is max word length.
 * Space: O(Words * L) for Trie storage.
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.word = null; // Store full word at the leaf node for easy retrieval
    }
}

function findWords(board, words) {
    const root = new TrieNode();
    for (let w of words) {
        let curr = root;
        for (let char of w) {
            if (!curr.children[char]) curr.children[char] = new TrieNode();
            curr = curr.children[char];
        }
        curr.word = w;
    }

    const res = new Set();
    const rows = board.length, cols = board[0].length;

    function dfs(r, c, node) {
        if (r < 0 || c < 0 || r >= rows || c >= cols ||
            board[r][c] === "#" || !node.children[board[r][c]]) {
            return;
        }

        const char = board[r][c];
        const nextNode = node.children[char];

        if (nextNode.word) {
            res.add(nextNode.word);
            // Optimization: Set word to null so we don't pick it up again
            // nextNode.word = null; 
        }

        board[r][c] = "#"; // Mark as visited

        dfs(r + 1, c, nextNode);
        dfs(r - 1, c, nextNode);
        dfs(r, c + 1, nextNode);
        dfs(r, c - 1, nextNode);

        board[r][c] = char; // Backtrack
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return Array.from(res);
}

const exampleBoard = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
];
const exampleWords = ["oath", "pea", "eat", "rain"];
console.log("Word Search II:", findWords(exampleBoard, exampleWords)); // ["oath", "eat"]
