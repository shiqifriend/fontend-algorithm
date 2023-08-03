// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。如下图所示


// 注意:
// 1.要求不能创建任何新的结点，只能调整树中结点指针的指向。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继
// 2.返回链表中的第一个节点的指针
// 3.函数返回的TreeNode，有左右指针，其实可以看成一个双向链表的数据结构
// 4.你不用输出双向链表，程序会根据你的返回值自动打印输出

// 输入：
// {10,6,14,4,8,12,16}
// 复制
// 返回值：
// From left to right are:4,6,8,10,12,14,16;From right to left are:16,14,12,10,8,6,4;
// 复制
// 说明：
// 输入题面图中二叉树，输出的时候将双向链表的头节点返回即可。 


// 思路：由于双向链表按从小到大的顺序，与二叉搜索树中序遍历（左根右）顺序一致，故直接中序遍历操作二叉树即可。
// 操作步骤：
// 确定头结点：最左边的叶子结点。

// 新建一个head指向头结点

// 记录上一结点pre和当前结点cur

// 遍历时不断更新:

// 1
// 2
// pre.right = cur;
// cur.left = pre;
// 遍历的递归步骤：
// 5-1：确定递归结束的条件（cur === null）
// 5-2：递归左子树
// 5-3：处理当前结点
// 5-4：递归右子树

// 伪代码
function Convert(pRootOfTree) {
    // 新建一个引用变量head，用于指向双向链表头结点
    let head = null;
    // 新建一个引用变量pre，用于记录上一结点
    let pre = null;
    // 新建递归方法，中序深度优先搜索,当前结点为参数
    function MediumOrderDFS(cur) {
        // 遍历左子树
        MediumOrderDFS(cur.left);
        // 操作当前结点
        // 1.确定递归结束的条件和头结点
        // 2.pre的right指向cur
        // 3.cur的left指向pre
        // 4.更新pre为引用当前结点cur
        // 遍历右子树
        MediumOrderDFS(cur.right);
    }
    // 将root结点作为参数调用递归函数开始遍历      
    MediumOrderDFS(pRootOfTree);
    // 返回head引用的结点(即最左边的叶子结点)
    return head;
}




/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    let head = null;
    let pre = null;
    function MediumOrderDFS (cur) {
        if(cur === null) {
            return;
        }
        // 递归左结点
        MediumOrderDFS(cur.left);
        // 处理当前结点
        if(pre === null) {
            head = cur;
        } else {
            pre.right = cur;
        }
        cur.left = pre;
        pre = cur;
        // 遍历右结点
        MediumOrderDFS(cur.right);
    }
    MediumOrderDFS(pRootOfTree);
    return head;

}
module.exports = {
    Convert : Convert
};

