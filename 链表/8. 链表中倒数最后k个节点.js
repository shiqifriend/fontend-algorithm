// 描述
// 输入一个长度为 n 的链表，设链表中的元素的值为 ai ，返回该链表中倒数第k个节点。
// 如果该链表长度小于k，请返回一个长度为 0 的链表。
// 例如输入{1,2,3,4,5},2时，对应的链表结构如下图所示：

// 其中蓝色部分为该链表的最后2个结点，所以返回倒数第2个结点（也即结点值为4的结点）即可，系统会打印后面所有的节点来比较。
// 示例1
// 输入：
// {1,2,3,4,5},2
// 返回值：
// {4,5}
// 说明：
// 返回倒数第2个节点4，系统会打印后面所有的节点来比较。

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
function FindKthToTail( pHead ,  k ) {
    let fast = pHead, slow = pHead
    for(let i=0;i<k;i++){
        if(fast==null) return null
        fast=fast.next
    }
    while(fast){
        fast=fast.next
        slow=slow.next
    }
    return slow
}
module.exports = {
    FindKthToTail : FindKthToTail
};