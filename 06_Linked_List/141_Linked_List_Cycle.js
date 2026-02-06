/**
 * 141. Linked List Cycle (Easy)
 * 
 * Problem:
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * 
 * Strategy: Floyd's Tortoise and Hare
 * 1. Two pointers: 'slow' moves 1 step, 'fast' moves 2 steps.
 * 2. If 'fast' ever hits 'slow', there is a cycle.
 * 3. If 'fast' or 'fast.next' hits null, there is NO cycle.
 * 
 * Time: O(n)
 * Space: O(1)
 */

function hasCycle(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }
    return false;
}
