// 描述
// 给定节点数为 n 的二叉树的前序遍历和中序遍历结果，请重建出该二叉树并返回它的头结点。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建出如下图所示。


// 提示:
// 1.vin.length == pre.length
// 2.pre 和 vin 均无重复元素
// 3.vin出现的元素均出现在 pre里
// 4.只需要返回根结点，系统会自动输出整颗树做答案对比
// 输入：
// [1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]
// 复制
// 返回值：
// {1,2,3,4,#,5,6,#,7,#,#,8}
// 复制
// 说明：
// 返回根节点，系统会输出整颗二叉树对比结果，重建结果如题面图示   

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
 * @param preOrder int整型一维数组 
 * @param vinOrder int整型一维数组 
 * @return TreeNode类
 */

// 在中序遍历列表中找到先序遍历列表中第一个节点，以此为界限可以将二叉树分
// 为左右子树，可以得知左子树和右子树的长度，在先序遍历列表中划分出来。再
// 依次拿出先序遍历列表中的第一个节点构成左/右子树的根节点，直到传入的先序
// 序列或中序序列为空结束遍历，返回根节点。

function reConstructBinaryTree( preOrder ,  vinOrder ) {
    if(!preOrder.length || !vinOrder.length) return null
    const root = new TreeNode(preOrder[0])
    const index = vinOrder.indexOf(root.val)
    root.left = reConstructBinaryTree(preOrder.slice(1,index+1), vinOrder.slice(0, index))
    root.right = reConstructBinaryTree(preOrder.slice(index+1), vinOrder.slice(index+1))
    return root
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};