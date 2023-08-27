/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res= []
    function travsrese(root) {
        if(!root) return null
        travsrese(root.left)
        res.push(root.val)
        travsrese(root.right)
    }
    travsrese(root)
    return res
};