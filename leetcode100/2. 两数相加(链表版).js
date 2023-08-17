/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let crr = 0;
  let sum = new ListNode(0);
  let head = sum;
  while (crr || l1 || l2) {
    let v1 = l1 === null ? 0 : l1.val;
    let v2 = l2 === null ? 0 : l2.val;
    let value = v1 + v2 + crr;
    crr = Math.floor(value / 10);
    sum.next = new ListNode(value % 10);
    sum = sum.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return head.next;
};
