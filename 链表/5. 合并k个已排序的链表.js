// 描述
// 合并 k 个升序的链表并将结果作为一个升序的链表返回其头节点。
// 示例1
// 输入：
// [{1,2,3},{4,5,6,7}]
// 复制
// 返回值：
// {1,2,3,4,5,6,7}
// 示例2
// 输入：
// [{1,2},{1,4,5},{6}]
// 复制
// 返回值：
// {1,1,2,4,5,6}

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param lists ListNode类一维数组 
 * @return ListNode类
 */
function mergeKLists( lists ) {
    let newHead=null
    for(let i=0;i<lists.length;i++){
        newHead=Merge(newHead,lists[i])
    }

    function Merge(pHead1,pHead2){
        let temp = new ListNode(0)
        let head = temp
        while(pHead1&&pHead2){
            if(pHead1.val<pHead2.val){
                temp=temp.next=pHead1
                pHead1=pHead1.next
            }else{
                temp=temp.next=pHead2
                pHead2=pHead2.next
            }
        }
        temp.next=pHead1?pHead1:pHead2
        return head.next
    }

    return newHead
}
module.exports = {
    mergeKLists : mergeKLists
};