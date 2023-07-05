// 描述
// 删除给出链表中的重复元素（链表中元素从小到大有序），使链表中的所有元素都只出现一次
// 例如：
// 给出的链表为1\to1\to21→1→2,返回1 \to 21→2.
// 给出的链表为1\to1\to 2 \to 3 \to 31→1→2→3→3,返回1\to 2 \to 31→2→3.
// 示例1
// 输入：
// {1,1,2}
// 返回值：
// {1,2}

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @return ListNode类
  */
function deleteDuplicates( head ) {
    if(!head||!head.next)return head
    let cur = head
    while(cur&&cur.next){
        cur.val == cur.next.val ? cur.next = cur.next.next : cur = cur.next 
    }
    return head
}
module.exports = {
    deleteDuplicates : deleteDuplicates
};