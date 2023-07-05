// 描述
// 给定一个链表，请判断该链表是否为回文结构。
// 回文是指该字符串正序逆序完全一致。
// 示例1
// 输入：
// {1}
// 返回值：
// true
// 示例2
// 输入：
// {2,1}
// 返回值：
// false
// 说明：
// 2->1    

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 the head
 * @return bool布尔型
 */
function isPail( head ) {
    let temp=head
    const arr=[]
    while(temp){
        arr.push(temp.val)
        temp=temp.next
    }
    return arr.join('')==arr.reverse().join('')
}
module.exports = {
    isPail : isPail
};