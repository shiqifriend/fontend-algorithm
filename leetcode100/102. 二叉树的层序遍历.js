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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = []
    function preorder (root, level){
        if(!root) return
        if(level >= res.length) res.push([])
        res[level].push(root.val)
        preorder(root.left, level+1)
        preorder(root.right, level+1)
    }
    preorder(root, 0)
    return res
};