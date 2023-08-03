// 描述
// 求给定二叉树的最大深度，
// 深度是指树的根节点到任一叶子节点路径上节点的数量。
// 最大深度是所有叶子节点的深度的最大值。
// （注：叶子节点是指没有子节点的节点。）
// 输入：
// {1,2}
// 复制
// 返回值：
// 2

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
 * @return int整型
 */
function maxDepth( root ) {
    const depth = computed(root)
    function computed(root) {
        if(!root) return 0
        const left = computed(root.left)
        const right = computed(root.right)
        return Math.max(left+1, right+1)
    }
    return depth
}
module.exports = {
    maxDepth : maxDepth
};