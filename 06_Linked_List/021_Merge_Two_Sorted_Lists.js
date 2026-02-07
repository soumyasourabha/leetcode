/**
 * 21. Merge Two Sorted Lists (Easy)
 * 
 * Problem:
 * Merge two sorted linked lists and return it as a sorted list.
 * 
 * Strategy: Iterative with Dummy Node
 * 1. Create a 'dummy' node to simplify the head case.
 * 2. Maintain a 'tail' pointer to build the new list.
 * 3. Compare nodes from both lists and attach the smaller one.
 * 
 * Time: O(n + m)
 * Space: O(1)
 */

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    tail.next = list1 || list2;
    return dummy.next;
}
