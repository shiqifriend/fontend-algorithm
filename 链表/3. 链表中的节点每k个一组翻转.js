// 描述
// 将给出的链表中的节点每 k 个一组翻转，返回翻转后的链表
// 如果链表中的节点数不是 k 的倍数，将最后剩下的节点保持原样
// 你不能更改节点中的值，只能更改节点本身。
// 例如：
// 给定的链表是 1\to2\to3\to4\to51→2→3→4→5
// 对于 k = 2k=2 , 你应该返回 2\to 1\to 4\to 3\to 52→1→4→3→5
// 对于 k = 3k=3 , 你应该返回 3\to2 \to1 \to 4\to 53→2→1→4→5
// 示例1
// 输入：
// {1,2,3,4,5},2
// 返回值：
// {2,1,4,3,5}

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param k int整型 
  * @return ListNode类
  */
function reverseKGroup( head ,  k ) {
    if(k === 1 || head === null) return head;
    let tail = head;
    let pre = null;
    let cur = head;
    let root = null;
    // 每次从进入函数的头节点优先遍历链表k次，分出一组
    for (let i = 1; i <= k; i++) {
        if (tail === null) return head; // 不足k不用反转直接返回头
        tail = tail.next;
        
    }
    // 从进入函数的头节点开始，依次反转接下来的一组链表
    for (let i = 1; i <= k; i++) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    // 一组经过反转后，小组的根结点找到了，且原来的头变成了尾，后面接下一组的反转结果
    root = pre;
    head.next = reverseKGroup(tail, k);
    // 每一级要返回的就是翻转后的这一分组的头，以及连接好它后面所有翻转好的分组链表。
    return root;
 }
module.exports = {
    reverseKGroup : reverseKGroup
};