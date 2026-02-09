/**
 * 206. Reverse Linked List (Easy)
 * 
 * Problem:
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Logic (Iterative):
 * We use three pointers: prev, curr, and next.
 * Flip the 'next' pointer of 'curr' to point to 'prev'.
 * 
 * Visual Representation:
 * 1 -> 2 -> 3 -> NULL
 * [NULL] <- 1  2 -> 3 -> NULL
 * 
 * Time: O(n)
 * Space: O(1)
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let nextTemp = curr.next; // Store next
        curr.next = prev;         // Reverse
        prev = curr;              // Move prev
        curr = nextTemp;          // Move curr
    }
    return prev;
}

/**
 * Recursive Approach:
 * Logic: Reverse the rest of the list first, then point the current node's next's next to itself.
 * Time: O(n)
 * Space: O(n) due to stack.
 */
function reverseListRecursive(head) {
    if (!head || !head.next) return head;
    let p = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}
