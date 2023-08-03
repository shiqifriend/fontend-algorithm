// 描述
// 给定一棵二叉树(保证非空)以及这棵树上的两个节点对应的val值 o1 和
//  o2，请找到 o1 和 o2 的最近公共祖先节点。
//  注：本题保证二叉树中每个节点的val值均不相同。
//  输入：
// {3,5,1,6,2,0,8,#,#,7,4},5,1
// 复制
// 返回值：
// 3

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 
 * @param o1 int整型 
 * @param o2 int整型 
 * @return int整型
 */
/**
 * 
 * 我们想想最近公共祖先节点满足什么要求？？
o1和o2分别位于这个节点的两个子树里
也就说，如果存在一个节点，从左子树出发能找到o1或o2，从右子树出发也能找到，那就说明这个节点就是最近公共祖先节点
但是注意特殊情况，因为有可能全部在左子树，或者右子树，那最近公共祖先点就是他们本身（离根更近的那个）
 */
function lowestCommonAncestor( root ,  o1 ,  o2 ) {
    //遇到叶子节点返回null
    if(root === null) {
        return null;
    }
    //如果p或q为根节点，则p或q为最近公共祖先
    if(root.val === o1 || root.val === o2) {
        return root.val;
    }
    // 在左子树寻找p和q的最近公共祖先
    let left = lowestCommonAncestor( root.left ,  o1 ,  o2 );
    // 在右子树寻找q和q的最近公共祖先
    let right = lowestCommonAncestor( root.right ,  o1 ,  o2 );
    // 如果p和q分属两侧，则根节点为最近公共祖先
    if(left !== null && right !== null) {
        return root.val;
    }
    // 如果左子树有值，则最近公共祖先在左子树，否则，在右子树
    return left !== null ? left : right;
}
module.exports = {
    lowestCommonAncestor : lowestCommonAncestor
};