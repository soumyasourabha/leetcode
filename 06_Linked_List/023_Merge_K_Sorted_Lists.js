/**
 * 23. Merge k Sorted Lists (Hard)
 * 
 * Problem:
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Strategy: Divide and Conquer (Merge Sort Style)
 * This is more efficient than merging one by one. 
 * We pair up the lists and merge them, reducing the total count by half each time.
 * 
 * Time: O(n log k) where 'n' is total nodes, 'k' is number of lists.
 * Space: O(1) iterative merging logic.
 */

function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;

    while (lists.length > 1) {
        let mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = (i + 1) < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists;
    }
    return lists[0];
}

// Helper: Classic Merge Two Sorted Lists (Easy)
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}

/**
 * Alternative: Min-Heap
 * Put the head of every list into a Min-Heap. Pop the smallest, move to its next node.
 * Time: O(n log k)
 * Space: O(k)
 */
