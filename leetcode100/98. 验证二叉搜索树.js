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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function travsrese(root, lower, upper) {
        if(!root) return true
        if(root.val <= lower || root.val >= upper) return false
        return travsrese(root.left, lower, root.val) && travsrese(root.right, root.val, upper)
    }
    return travsrese(root, -Infinity, Infinity)
};