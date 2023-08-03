// 描述
// 输入一棵节点数为 n 二叉树，判断该二叉树是否是平衡二叉树。
// 在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
// 平衡二叉树（Balanced Binary Tree），具有以下性质：它是一棵空树或它的左
// 右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
// 输入：
// {1,2,3,4,5,6,7}
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
 * @param pRoot TreeNode类 
 * @return bool布尔型
 */
function IsBalanced_Solution( pRoot ) {
    function findDepth(root) {
        if(!root) return 0
        const left = findDepth(root.left)
        const right = findDepth(root.right)
        return Math.max(left+1, right+1)
    }
    if(!pRoot) return true
    return (Math.abs(findDepth(pRoot.left) - findDepth(pRoot.right))<=1) && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}
module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};