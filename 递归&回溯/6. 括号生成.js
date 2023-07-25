// 描述
// 给出n对括号，请编写一个函数来生成所有的由n对括号组成的合法组合。
// 例如，给出n=3，解集为：
// "((()))", "(()())", "(())()", "()()()", "()(())"
// 输入：
// 1
// 复制
// 返回值：
// ["()"]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return string字符串一维数组
 */
function generateParenthesis( n ) {
    const res = []
    const dfs = (left, right, curStr) => {
        if(left === 0 && right === 0) {
            res.push(curStr)
            return
        }
        if(left > 0) dfs(left-1, right, curStr + "(")
        if(right > left) dfs(left, right-1, curStr + ")")
    }
    dfs(n, n, "")
    return res
}
module.exports = {
    generateParenthesis : generateParenthesis
};