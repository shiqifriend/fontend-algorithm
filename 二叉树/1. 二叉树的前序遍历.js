// 描述
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
// 输入：
// {1,#,2,3}
// 复制
// 返回值：
// [1,2,3]

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
 * @return int整型一维数组
 */
function preorderTraversal( root ) {
    const res = []
    preorder(root, res)
    return res
}
function preorder(root, res) {
    if(!root) return
    res.push(root.val)
    preorder(root.left, res)
    preorder(root.right, res)
}
module.exports = {
    preorderTraversal : preorderTraversal
};