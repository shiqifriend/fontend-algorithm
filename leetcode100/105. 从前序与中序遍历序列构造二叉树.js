/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null
    const root = new TreeNode(preorder[0])
    const index = inorder.indexOf(root.val)
    root.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))
    return root
};


// 优化

var buildTree = function(preorder, inorder) {
    function helper (p_start, p_end, i_start, i_end) {
        if(p_start > p_end) return null
        const root = new TreeNode(preorder[p_start])
        const index = inorder.indexOf(root.val)
        const leftNum = index - i_start
        root.left = helper(p_start+1, p_start+leftNum, i_start, index-1)
        root.right = helper(p_start+leftNum+1, p_end, index+1, i_end)
        return root
    }
    return helper(0, preorder.length-1, 0, inorder.length-1)
};


// 优化+ ：空间换时间

var buildTree = function(preorder, inorder) {
    const map = new Map()
    for(let i = 0; i < inorder.length; i++) map.set(inorder[i], i)  
    function helper (p_start, p_end, i_start, i_end) {
        if(p_start > p_end) return null
        const root = new TreeNode(preorder[p_start])
        const index = map.get(root.val)
        const leftNum = index - i_start
        root.left = helper(p_start+1, p_start+leftNum, i_start, index-1)
        root.right = helper(p_start+leftNum+1, p_end, index+1, i_end)
        return root
    }
    return helper(0, preorder.length-1, 0, inorder.length-1)
};

// 更高级的：

// 变量 pre 保存当前要构造的树的 root
// 变量 in 保存 inorder 数组中可以成为 root 的数字们的开头那个
// 对于当前要构造的树，有一个停止点 stop ，inorder 数组中第 in 项到第 stop 项是要构造的树的节点值们
// 每次递归调用，都会确定出一个停止点，它告诉了子调用在哪里停止，把自己的根节点值作为左子树调用的停止点，自己的（父调用给下来的）停止点作为右子树的停止点

var buildTree = function(preorder, inorder) {
    let pre = i = 0
    function build(stop) {
        if(inorder[i] !== stop) {
            const root = new TreeNode(preorder[pre++])
            root.left = build(root.val)
            i++
            root.right = build(stop)
            return root
        }
        return null
    }
    return build()
};