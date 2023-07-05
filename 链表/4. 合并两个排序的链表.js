// 描述
// 输入两个递增的链表，单个链表的长度为n，合并这两个链表并使新链表中的节点仍然是递增排序的。
// 如输入{1,3,5},{2,4,6}时，合并后的链表为{1,2,3,4,5,6}，所以对应的输出为{1,2,3,4,5,6}，转换过程如下图所示：


// 或输入{-1,2,4},{1,3,4}时，合并后的链表为{-1,1,2,3,4,4}，所以对应的输出为{-1,1,2,3,4,4}，转换过程如下图所示：

// 示例1
// 输入：
// {1,3,5},{2,4,6}
// 返回值：
// {1,2,3,4,5,6}

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 其中一条链表遍历完后，直接把另一条接上去就行了，省点时间
function Merge(pHead1, pHead2)
{
    let temp = new ListNode(0)
    let head = temp
    while(pHead1 && pHead2){
        if(pHead1.val < pHead2.val){
            temp = temp.next = pHead1
            pHead1 = pHead1.next
        }else{
            temp = temp.next = pHead2
            pHead2 = pHead2.next
        }
    }
    temp.next = pHead1 ? pHead1 : pHead2
    return head.next
}
module.exports = {
    Merge : Merge
};