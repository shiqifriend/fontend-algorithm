// 已知两颗二叉树，将它们合并成一颗二叉树。合并规则是：都存在的结点，就将结点值加起来，否则空的位置就由另一个树的结点来代替。例如：
// 两颗二叉树是:
// 输入：
// {1,3,2,5},{2,1,3,#,4,#,7}
// 复制
// 返回值：
// {3,4,5,5,4,#,7}
// 复制
// 说明：
// 如题面图 


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
 * @param t1 TreeNode类 
 * @param t2 TreeNode类 
 * @return TreeNode类
 */

// 你一开始要想到数这种数据结构，怎么返回头节点，答案毋庸置疑递归 递归的思想一般是从后往前，这
// 个题目又要每两个值相加，还存在左右子树一个有一个没有的情况，所以递归的返回值一定是有的
// 那个，你大概知道return t1 || t2,如果两个都有就递归相加。
function mergeTrees( t1 ,  t2 ) {
    if(t1 && t2) {
        t1.val += t2.val
        t1.left = mergeTrees(t1.left, t2.left)
        t1.right = mergeTrees(t1.right, t2.right)
    }
    return t1 || t2
}
module.exports = {
    mergeTrees : mergeTrees
};