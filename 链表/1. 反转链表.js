// 描述
// 给定一个单链表的头结点pHead(该头节点是有值的，比如在下图，它的val是1)，长度为n，反转该链表后，返回新链表的表头。
// 如当输入链表{1,2,3}时，
// 经反转后，原链表变为{3,2,1}，所以对应的输出为{3,2,1}。
// 以上转换过程如下图所示：
// 示例1
// 输入：
// {1,2,3}
// 返回值：
// {3,2,1}

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    let pre=null;
    let cur=pHead
    while(cur){
        //运用es6解构赋值，一一对应，不需要考虑赋值顺序，不需要定义额外next
        [cur.next,pre,cur]=[pre,cur,cur.next]
    }
    return pre
}

// function ReverseList(pHead)
// {
//     if(pHead==null||pHead.next==null)return pHead
//     let p1,p2=null;
//     while(pHead){
//         p1=pHead.next;
//         pHead.next=p2;
//         p2=pHead;
//         pHead=p1;
//     }
//     return p2
// }

module.exports = {
    ReverseList : ReverseList
};