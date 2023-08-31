/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    const ans = []
    let cur = head
    while(cur) {
        ans.push(cur.val)
        cur = cur.next
    }
    ans.sort((a,b)=>a-b)
    cur = head
    for(const item of ans) {
        cur.val = item
        cur=cur.next
    }
    return head
};



// 归并排序
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next) return head
    let slow = head
    let fast = head.next
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let newList = slow.next
    slow.next = null
    
    let left = sortList(head)
    let right = sortList(newList)

    let result = new ListNode(0)
    let pHead = result
    while(left && right) {
        if(left.val < right.val) {
            result.next = left
            left = left.next
        } else {
            result.next = right
            right = right.next
        }
        result = result.next
    }
    result.next = left ? left : right
    return pHead.next
};