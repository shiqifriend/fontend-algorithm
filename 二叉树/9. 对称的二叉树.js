// 描述
// 给定一棵二叉树，判断其是否是自身的镜像（即：是否对称）
// 例如：                                 下面这棵二叉树是对称的

// 下面这棵二叉树不对称。
// 输入：
// {1,2,2,3,4,4,3}
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
 * @param pRoot TreeNode类 
 * @return bool布尔型
 */
function isSymmetrical( pRoot ) {
    if(!pRoot) return true

    // dfs 深度优先
    function check(node1, node2) {
        if(!node1 && !node2) return true
        if(!node1 || !node2) return false
        return node1.val === node2.val &&check(node1.left, node2.right) && check(node1.right, node2.left)
    }

    // bfs 广度优先
    function check(node1, node2) {
        const queue = []
        queue.push(node1)
        queue.push(node2)
        while(queue.length) {
            let p = queue.pop(), q = queue.pop()
            if(!p && !q) continue
            else if(!p || !q ||p.val!==q.val) return false
            queue.push(p.left)
            queue.push(q.right)
            queue.push(p.right)
            queue.push(q.left)
        }
        return true
    }
    return check(pRoot.left, pRoot.right)
}
module.exports = {
    isSymmetrical : isSymmetrical
};