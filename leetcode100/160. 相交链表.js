/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let l = headA
    let r = headB
    while(l !== r) {
        l = l!=null ? l.next : headB;
        r = r!=null ? r.next : headA;
    }
    return l
};