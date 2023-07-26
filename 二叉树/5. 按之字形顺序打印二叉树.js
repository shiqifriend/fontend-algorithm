// 描述
// 给定一个二叉树，返回该二叉树的之字形层序遍历，（第一层从左向右，下一层从右向左，一直这样交替）

// 数据范围：
// 0
// ≤
// �
// ≤
// 1500
// 0≤n≤1500,树上每个节点的val满足 
// ∣
// �
// �
// �
// ∣
// <
// =
// 1500
// ∣val∣<=1500
// 要求：空间复杂度：
// �
// (
// �
// )
// O(n)，时间复杂度：
// �
// (
// �
// )
// O(n)
// 例如：
// 给定的二叉树是{1,2,3,#,#,4,5}

// 该二叉树之字形层序遍历的结果是
// [
// [1],
// [3,2],
// [4,5]
// ]
// 示例1
// 输入：
// {1,2,3,#,#,4,5}
// 复制
// 返回值：
// [[1],[3,2],[4,5]]
// 复制
// 说明：
// 如题面解释，第一层是根节点，从左到右打印结果，第二层从右到左，第三层从左到右。     

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
 * @param pRoot TreeNode类 
 * @return int整型二维数组
 */

// 只需判断level的奇偶，从而决定使用push方法还是unshift方法

function Print( pRoot ) {
    function preorder(root, level) {
        if(!root) return
        if(level >= res.length) res.push([])
        if(level % 2 ===0) res[level].push(root.val)
        else res[level].unshift(root.val)
        preorder(root.left, level+1)
        preorder(root.right, level+1)
    }
    const res = []
    preorder(pRoot, 0)
    return res
}
module.exports = {
    Print : Print
};