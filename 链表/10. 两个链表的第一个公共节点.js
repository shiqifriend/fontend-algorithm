// 描述
// 输入两个无环的单向链表，找出它们的第一个公共结点，如果没有公共节点则返回空。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）
// 例如，输入{1,2,3},{4,5},{6,7}时，两个无环的单向链表的结构如下图所示：

// 可以看到它们的第一个公共结点的结点值为6，所以返回结点值为6的结点。
// 输入描述：
// 输入分为是3段，第一段是第一个链表的非公共部分，第二段是第二个链表的非公共部分，第三段是第一个链表和第二个链表的公共部分。 后台会将这3个参数组装为两个链表，并将这两个链表对应的头节点传入到函数FindFirstCommonNode里面，用户得到的输入只有pHead1和pHead2。
// 返回值描述：
// 返回传入的pHead1和pHead2的第一个公共结点，后台会打印以该节点为头节点的链表。
// 示例1
// 输入：
// {1,2,3},{4,5},{6,7}
// 返回值：
// {6,7}
// 说明：
// 第一个参数{1,2,3}代表是第一个链表非公共部分，第二个参数{4,5}代表是第二个链表非公共部分，最后的{6,7}表示的是2个链表的公共部分
// 这3个参数最后在后台会组装成为2个两个无环的单链表，且是有公共节点的   

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    const hash = new Map()
    while(pHead1){
        hash.set(pHead1,true)
        pHead1=pHead1.next
    }
    while(pHead2){
        if(hash.has(pHead2)) return pHead2
        pHead2=pHead2.next
    }
    return null
}

// 双指针 见md题解
function FindFirstCommonNode(pHead1, pHead2)
{
  let l1 = pHead1,
      l2 = pHead2;
  while(l1!=l2){
    l1 = l1!=null ? l1.next : pHead2;
    l2 = l2!=null ? l2.next : pHead1;
  }
  return l1;
}


module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};