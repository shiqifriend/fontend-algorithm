// 描述
// 给定一个单链表，请设定一个函数，将链表的奇数位节点和偶数位节点分别放在一起，重排后输出。
// 注意是节点的编号而非节点的数值。
// 示例1
// 输入：
// {1,2,3,4,5,6}
// 返回值：
// {1,3,5,2,4,6}
// 说明：
// 1->2->3->4->5->6->NULL
// 重排后为
// 1->3->5->2->4->6->NULL
// 示例2
// 输入：
// {1,4,6,3,7}
// 返回值：
// {1,6,7,4,3}
// 说明：
// 1->4->6->3->7->NULL
// 重排后为
// 1->6->7->4->3->NULL
// 奇数位节点有1,6,7，偶数位节点有4,3。重排后为1,6,7,4,3

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
 * @param head ListNode类 
 * @return ListNode类
 */
function oddEvenList( head ) {
    // write code here
   if(!head) return head
   let odd = head
   let even = head.next
   let cur = even
   
 //   记录 curr 绕过偶数只记录奇数
 //   next 只记录偶数
   while(even&&even.next){
       odd.next=even.next
       odd=even.next
       even.next=odd.next
       even=even.next
   }
   odd.next=cur
   return head
}
module.exports = {
   oddEvenList : oddEvenList
};