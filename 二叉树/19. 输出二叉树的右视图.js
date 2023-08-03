// 如输入[1,2,4,5,3],[4,2,5,1,3]时，通过前序遍历的结果[1,2,4,5,3]和
// 中序遍历的结果[4,2,5,1,3]可重建出以下二叉树：

// 所以对应的输出为[1,3,5]。
// 输入：
// [1,2,4,5,3],[4,2,5,1,3]
// 复制
// 返回值：
// [1,3,5]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 求二叉树的右视图
 * @param preOrder int整型一维数组 先序遍历
 * @param inOrder int整型一维数组 中序遍历
 * @return int整型一维数组
 */
function solve( preOrder ,  inOrder ) {
    function reConstructBinaryTree(preOrder, inOrder) {
        if(!preOrder.length || !inOrder.length) return null
        const root = new TreeNode(preOrder[0])
        const index = inOrder.indexOf(root.val)
        root.left = reConstructBinaryTree(preOrder.slice(1, index+1), inOrder.slice(0, index))
        root.right = reConstructBinaryTree(preOrder.slice(index+1), inOrder.slice(index+1))
        return root
    }

    const root = reConstructBinaryTree(preOrder, inOrder)
    const res = []
    const queue = [root]
    while(queue.length) {
        let len = queue.length
        while(len--) {
            const node = queue.shift()
            if(!len) {
                res.push(node.val)
            }
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return res
}
module.exports = {
    solve : solve
};