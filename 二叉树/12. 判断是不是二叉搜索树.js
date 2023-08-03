// 描述
// 给定一个二叉树根节点，请你判断这棵树是不是二叉搜索树。

// 二叉搜索树满足每个节点的左子树上的所有节点均小于当前节点且右子树上的所有节点均大于当前节点。
// 输入：
// {1,2,3}
// 复制
// 返回值：
// false
// 复制
// 说明：
// 如题面图1 


// 第一种方法：二叉搜索树的中序遍历一定是递增的,只需判断中序遍历的数组即可
function isValidBST( root ) {
    function inOrder(root){
      if(root==null)  return;
      inOrder(root.left);
      ans.push(root.val);
      inOrder(root.right);
    }
    let ans = [];
    inOrder(root);
    for(let i=0;i+1<ans.length;i++){
      if(ans[i]>ans[i+1])
        return false;
    }
    return true;
 }
 module.exports = {
     isValidBST : isValidBST
 };
 
 
// 第二种方法：
// 如果当前节点的值小于左区间或者大于右区间，则返回 false。
// 否则，继续分别递归左右儿子节点：
// 递归左儿子，并将左儿子的右区间修改为父节点的值；
// 递归右儿子，并将右儿子的左区间修改为父节点的值。
// 最后，如果没有返回false，说明满足二叉搜索树，返回true。
function isValidBST( root ) {
    function fun(root,lower,upper){
      if(root==null)  return true;
      if(root.val<=lower || root.val>=upper)  return false;
      return fun(root.left,lower,root.val) && fun(root.right,root.val,upper);
    }
    return fun(root,-Infinity,Infinity);
  }
  