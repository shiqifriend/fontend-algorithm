// 描述
// 给定一个二叉树，确定他是否是一个完全二叉树。

// 完全二叉树的定义：若二叉树的深度为 h，除第 h 层外，其它各层的结点数都达
// 到最大个数，第 h 层所有的叶子结点都连续集中在最左边，这就是完全二叉树。
// （第 h 层可能包含 [1~2h] 个节点）
// 输入：
// {1,2,3,4,5,6}
// 复制
// 返回值：
// true
/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param root TreeNode类 
 * @return bool布尔型
 */

// 思路：借助层序遍历
// 只有x,x,x,#,#,#这样的才是完全二叉树
// 如果出现x,#,y,#,#,#或者x,#,#,x,#,#,#证明不是完全二叉树
// 碰到第一个#的时侯令flag=true
// 如果再次碰到非#结点，且flag=true时候，说明不是完全二叉树

function isCompleteTree( root ) {
    if(!root) return true
    const queue = []
    queue.push(root)
    let end = false
    while(queue.length) {
        const node = queue.shift()
        if(!node) end = true
        else {
            if(queue.length && end) return false
            queue.push(node.left)
            queue.push(node.right)
        }
    }
    return true
}
module.exports = {
    isCompleteTree : isCompleteTree
};