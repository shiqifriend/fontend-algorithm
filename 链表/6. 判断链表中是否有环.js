// 描述
// 判断给定的链表中是否有环。如果有环则返回true，否则返回false。
// 输入分为两部分，第一部分为链表，第二部分代表是否有环，然后将组成的head头结点传入到函数里面。-1代表无环，其它的数字代表有环，这些参数解释仅仅是为了方便读者自测调试。实际在编程时读入的是链表的头节点。

// 例如输入{3,2,0,-4},1时，对应的链表结构如下图所示：

// 可以看出环的入口结点为从头结点开始的第1个结点（注：头结点为第0个结点），所以输出true。
// 示例1
// 输入：
// {3,2,0,-4},1
// 复制
// 返回值：
// true
// 复制
// 说明：
// 第一部分{3,2,0,-4}代表一个链表，第二部分的1表示，-4到位置1（注：头结点为位置0），即-4->2存在一个链接，组成传入的head为一个带环的链表，返回true    


/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
function hasCycle( head ) {
    let hash = new Map()
    while(head){
        hash.set(head,true)
        if(hash.has(head.next))return true
        head=head.next
    }
    return false
}
module.exports = {
    hasCycle : hasCycle
};