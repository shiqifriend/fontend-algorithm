// 描述
// 给定一个二叉树root和一个值 sum ，判断是否有从根节点到叶子节点的节点值之和等于 sum 的路径。
// 1.该题路径定义为从树的根结点开始往下一直到叶子结点所经过的结点
// 2.叶子节点是指没有子节点的节点
// 3.路径只能从父节点到子节点，不能从子节点到父节点
// 4.总节点数目为n

// 例如：
// 给出如下的二叉树，
 
// �
// �
// �
// =
// 22
//  sum=22，

// 返回true，因为存在一条路径 
// 5
// →
// 4
// →
// 11
// →
// 2
// 5→4→11→2的节点值之和为 22

// 输入：
// {5,4,8,1,11,#,9,#,#,2,7},22
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
 * @param sum int整型 
 * @return bool布尔型
 */

// 解题思路
// 临界条件：叶子节点（左右子树为空）
// 满足条件：路径之和为sum
// 解题步骤
// 左右子树同时递归查找，找到一个满足条件，即为找到，故左右子树的递归查找用“或”连接
// 递归查找时，抛去根节点的值，左右子树继续向下查找
// 当叶子节点且节点值等于sum找到
// 注意
// 临界条件
// 注意审题，二叉树中的值可以为负值，故sum可以为 0或者负值


function hasPathSum( root ,  sum ) {
    // write code here
    // 先处理特殊情况，空树
    if(!root)
        return false;
    // 定义递归函数
    function findSum(proot,sum){
        // 特殊情况，空树
        if(!proot)
            return false;
        // 叶子节点，且节点值符合要求，找到了！！！
        if(!proot.left && !proot.right && proot.val==sum)
            return true;
        // 没找到，继续向下递归查找，左子树或右子树找到一条便返回true
        return findSum(proot.left,sum-proot.val)||findSum(proot.right,sum-proot.val);
    }
    // 调用递归函数
    return findSum(root,sum);
}
module.exports = {
    hasPathSum : hasPathSum
};