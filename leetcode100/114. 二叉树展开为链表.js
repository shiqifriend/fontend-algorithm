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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const list = []
    function preorderTravsrese(root, list) {
        if(!root) return null
        list.push(root)
        preorderTravsrese(root.left, list)
        preorderTravsrese(root.right, list)
    }
    preorderTravsrese(root, list)
    for(let i = 1; i < list.length; i++) {
        let pre = list[i-1], cur = list[i]
        pre.left = null
        pre.right = cur
    }
};


// 优化：

var flatten = function(root) {
    const list = []
    const stack = []
    let node = root
    while(node || stack.length) {
        while(node) {
            list.push(node)
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        node = node.right
    }
    for(let i = 1; i < list.length; i++) {
        let pre = list[i-1], cur = list[i]
        pre.left = null
        pre.right = cur
    }
    return 
};


// 优化：寻找前驱节点

var flatten = function(root) {
    let cur = root
    while(cur) {
        if(cur.left) {
            const next = cur.left
            let predecessor = next
            while(predecessor.right) predecessor = predecessor.right
            predecessor.right = cur.right
            cur.left = null
            cur.right = next
        }
        cur = cur.right
    }
 };