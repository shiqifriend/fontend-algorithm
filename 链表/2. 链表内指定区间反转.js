// 描述
// 将一个节点数为 size 链表 m 位置到 n 位置之间的区间反转，要求时间复杂度 O(n)O(n)，空间复杂度 O(1)O(1)。
// 例如：
// 给出的链表为 1\to 2 \to 3 \to 4 \to 5 \to NULL1→2→3→4→5→NULL, m=2,n=4m=2,n=4,
// 返回 1\to 4\to 3\to 2\to 5\to NULL1→4→3→2→5→NULL.
// 示例1
// 输入：
// {1,2,3,4,5},2,4
// 返回值：
// {1,4,3,2,5}

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param m int整型 
  * @param n int整型 
  * @return ListNode类
  */
// 最重要的还是理清在翻转过程中赋值的顺序
function reverseBetween(head, m, n) {
    // 区间长度为1，无需翻转，直接返回head
    if (m == n) {
      return head;
    }
    // 定义一个用于翻转指定开始节点和长度区间内节点的函数
    function ReverseList(pHead,step){
    let pre=pHead;
    let cur=pHead.next
    while(step--){
        //运用es6解构赋值，一一对应，不需要考虑赋值顺序，不需要定义额外next
        [cur.next,pre,cur]=[pre,cur,cur.next]
    }
    // 与直接反转不同的是，这个头结点最后不是指向null，而是区间链表后一个节点
    pHead.next=cur
    return pre
}
    let start = head;
    let step = n - m;
    // 先找到需要转换的区间的前一个节点，用start标记
    while (m - 1 > 1) {
      start = start.next;
      m--;
    }
    // 存在两种情况
    // m == 1 也就是翻转区间的起始节点就是head节点
    if (m == 1) {
      return ReverseList(head, step);
    } 
    // 翻转区间的起始节点在中间，需要在翻转过后拼接到start的后面
    else {
      start.next = ReverseList(start.next, step);
      return head;
    }
  }
module.exports = {
    reverseBetween : reverseBetween
};