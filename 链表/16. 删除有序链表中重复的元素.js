// 描述
// 给出一个升序排序的链表，删除链表中的所有重复出现的元素，只保留原链表中只出现一次的元素。
// 例如：
// 给出的链表为1 \to 2\to 3\to 3\to 4\to 4\to51→2→3→3→4→4→5, 返回1\to 2\to51→2→5.
// 给出的链表为1\to1 \to 1\to 2 \to 31→1→1→2→3, 返回2\to 32→3.
// 示例1
// 输入：
// {1,2,2}
// 返回值：
// {1}

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
    if(!head || !head.next) return head
    let hash = new Map()
    let p = head
    while(p){
        hash.set(p.val,hash.get(p.val) + 1 || 1)
        p=p.next
    }
    let node = new ListNode()
    node.next=head
    let cur = node
    while(cur.next){
        if(hash.get(cur.next.val)!==1){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return node.next
}
module.exports = {
    deleteDuplicates : deleteDuplicates
};