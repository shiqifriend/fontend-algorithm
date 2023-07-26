// 描述
// 给定一个二叉树，返回该二叉树层序遍历的结果，（从左到右，一层一层地遍历）
// 例如：
// 给定的二叉树是{3,9,20,#,#,15,7},

// 该二叉树层序遍历的结果是
// [
// [3],
// [9,20],
// [15,7]

// ]


// 提示:
// 0 <= 二叉树的结点数 <= 1500


// 示例1
// 输入：
// {1,2}
// 复制
// 返回值：
// [[1],[2]]

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
 * @return int整型二维数组
 */
function levelOrder( root ) {
    function preorder(root, level) {
        if(!root) return
        if(level >= res.length) res.push([])
        res[level].push(root.val)
        preorder(root.left, level+1)
        preorder(root.right, level+1)
    }
    const res =[]
    preorder(root, 0)
    return res
}
module.exports = {
    levelOrder : levelOrder
};