// 描述
// 给定一个节点数为n的无序单链表，对其按升序排序。
// 示例1
// 输入：
// [1,3,2,4,5]
// 返回值：
// {1,2,3,4,5}
// 示例2
// 输入：
// [-1,0,-2]
// 返回值：
// {-2,-1,0}

//暴力解法
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

function sortInList( head ) {
    // write code here
    let arr = []
    let cur = head
    while(cur){
        arr.push(cur.val)
        cur = cur.next
    }
    arr.sort((a,b) => a - b)
    cur = head
    for(let i = 0;i < arr.length;i++){
        cur.val = arr[i]
        cur = cur.next
    }
    return head
}
    module.exports = {
        sortInList : sortInList
    };
    
    //归并排序
    /*
     * function ListNode(x){
     *   this.val = x;
     *   this.next = null;
     * }
     */
    
    /**
     * 
     * @param head ListNode类 the head node
     * @return ListNode类
     */
    function sortInList( head ) {
        //当链表为空或只有一个元素时直接返回
        if(head==null||head.next==null){
            return head
        }
        //声明两个指针
        let low = head
        let fast = head.next
        while(fast!==null&&fast.next!==null){
        //快指针会到达中点位置
            low = low.next
            fast = fast.next.next
        }
        let newList = low.next
        low.next = null
        //递归
        let left = sortInList(head)
        let right = sortInList(newList)
        let result = new ListNode()
        let cur = result
        //使用cur存储result，因为下面result会变动
        while(left!==null&&right!==null){
            if(left.val<right.val){
                result.next = left
                left = left.next
            }else{
                result.next = right
                right = right.next
            }
            result = result.next
        }
        result.next = left!=null?left:right;
        return cur.next
        }
    module.exports = {
        sortInList : sortInList
    };