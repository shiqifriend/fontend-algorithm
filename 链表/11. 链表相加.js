// 假设链表中每一个节点的值都在 0 - 9 之间，那么链表整体就可以代表一个整数。
// 给定两个这种链表，请生成代表两个整数相加值的结果链表。

// 输入：
// [9,3,7],[6,3]
// 复制
// 返回值：
// {1,0,0,0}
// 复制
// 说明：
// 如题面解释   


function addInList( head1 ,  head2 ) {
    function reverse(head) {
        let curr = head
        let pre = null
        while(curr) {
            let temp = curr.next
            curr.next = pre
            pre = curr
            curr = temp
        }
        return pre
    }
    if(!head1) return head2
    if(!head2) return head1
    head1 = reverse(head1)
    head2 = reverse(head2)
    let carry = 0
    let temp = new ListNode(-1)
    const start = temp
    while(head1||head2) {
        let sum = carry
        if(head1) {
            sum += head1.val
            head1 = head1.next
        }
        if(head2) {
            sum += head2.val
            head2 = head2.next
        }
        carry = Math.floor(sum/10)
        let val = sum % 10
        temp.next = new ListNode(val)
        temp = temp.next
    }
    if(carry) temp.next = new ListNode(carry)
    return reverse(start.next)
}