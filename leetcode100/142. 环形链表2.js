/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = slow = head
    let temp = null
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) {
            temp = head
            while(temp !== slow) {
                slow = slow.next
                temp = temp.next
            }
            return temp
        }
    }
    return null
};