// 描述
// 给一个长度为n链表，若其中包含环，请找出该链表的环的入口结点，否则，返回null。
// 例如，输入{1,2},{3,4,5}时，对应的环形链表如下图所示：

// 可以看到环的入口结点的结点值为3，所以返回结点值为3的结点。
// 输入描述：
// 输入分为2段，第一段是入环前的链表部分，第二段是链表环的部分，后台会根据第二段是否为空将这两段组装成一个无环或者有环单链表
// 返回值描述：
// 返回链表的环的入口结点即可，我们后台程序会打印这个结点对应的结点值；若没有，则返回对应编程语言的空结点即可。
// 示例1
// 输入：
// {1,2},{3,4,5}
// 复制
// 返回值：
// 3
// 复制
// 说明：
// 返回环形链表入口结点，我们后台程序会打印该环形链表入口结点对应的结点值，即3   

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    if(pHead===null || pHead.next===null)return null
    const hash = new Map()
    while(pHead){
        if(hash.has(pHead)) return hash.get(pHead)
        else {
            hash.set(pHead,pHead)
            pHead=pHead.next
        }
    }
}

//快慢指正法  思路见md文档
// function EntryNodeOfLoop(pHead)
// {
//     // write code here
//     let fast = pHead;
//     let slow = pHead;
//     while(slow!=null && fast !== null && fast.next !== null) {
//         fast = fast.next.next
//         slow = slow.next
//         if(fast == slow) {
//             let p = pHead;
//             while(p != slow) {
//                 p = p.next;
//                 slow = slow.next;
//             }
//             return p
//         }
//     }
    
// }


module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};