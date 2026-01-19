/**
 * 208. Implement Trie (Prefix Tree) (Medium)
 * 
 * Problem:
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to 
 * efficiently store and retrieve keys in a dataset of strings.
 * Implement the Trie class with insert, search, and startsWith methods.
 * 
 * Strategy:
 * Use a Nested Object (Hash Map) structure. Each node contains a 'children' 
 * object (char -> TrieNode) and an 'isEndOfWord' boolean.
 * 
 * Time Complexity:
 * - Insert: O(L) where L is length of word.
 * - Search: O(L)
 * - startsWith: O(L)
 */

class TrieNode {
    constructor() {
        this.children = {}; // Map of character to TrieNode
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (let char of word) {
            if (!(char in curr.children)) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }
        curr.isEndOfWord = true;
    }

    search(word) {
        let curr = this.root;
        for (let char of word) {
            if (!(char in curr.children)) return false;
            curr = curr.children[char];
        }
        return curr.isEndOfWord;
    }

    startsWith(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!(char in curr.children)) return false;
            curr = curr.children[char];
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("apple");
console.log("Search 'apple':", trie.search("apple"));   // true
console.log("Search 'app':", trie.search("app"));     // false
console.log("StartsWith 'app':", trie.startsWith("app")); // true
