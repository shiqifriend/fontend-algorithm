// 描述
// 给定一个链表，删除链表的倒数第 n 个节点并返回链表的头指针
// 例如，
// 给出的链表为: 1\to 2\to 3\to 4\to 51→2→3→4→5, n= 2n=2.
// 删除了链表的倒数第 nn 个节点之后,链表变为1\to 2\to 3\to 51→2→3→5.
// 示例1
// 输入：
// {1,2},2    
// 复制
// 返回值：
// {2} 

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param n int整型 
  * @return ListNode类
  */
function removeNthFromEnd( head ,  n ) {
    let fast = head, slow =head
    let temp = new ListNode(0)
    temp.next=slow
    for(let i=0;i<n;i++){
        if(fast==null)return null
        fast=fast.next
    }
    while(fast){
        fast=fast.next
        slow=slow.next
        temp=temp.next
    }
    if(slow==head){
        return slow.next
    }
    
    else {
        temp.next=slow.next;
        slow.next=null
        return head
    }
}

// 精简版
function removeNthFromEnd( head ,  n ) {
    // write code here
    if(!head) return head
    let slow=head,fast=head
    while(n--){
        fast=fast.next
    }
    if(!fast) return head.next
    while(fast.next){
        fast=fast.next
        slow=slow.next
    }
    slow.next=slow.next.next
    return head
}
module.exports = {
    removeNthFromEnd : removeNthFromEnd
};