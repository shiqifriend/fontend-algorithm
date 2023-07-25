// 描述
// 给出一组数字，返回该组数字的所有排列
// 例如：
// [1,2,3]的所有排列如下
// [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2], [3,2,1].
// （以数字在数组中的位置靠前为优先级，按字典序排列输出。）
// 输入：
// [1,2,3]
// 复制
// 返回值：
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param num int整型一维数组 
 * @return int整型二维数组
 */
function permute( num ) {
    let len = num.length
    const res = []
    const visited = new Array(len).fill(false)
    const dfs = (depth, path, visited) => {
        // 遍历到叶子结点了，可以返回了
        if(depth === len) res.push([...path]) 
        for(let i =0; i < len; i++) {
            // 如果没遍历过
            if(!visited[i]) {
                // 压入 path 数组，然后是否遍历过的数组此下标处变为 true
                path.push(num[i])
                visited[i] = true
                // 继续 dfs，直到最后一层
                dfs(depth+1, path, visited)
                // 进行回溯，还原，以便下一次使用
                visited[i] = false
                path.pop()
            }
        }
    }
    dfs(0, [], visited)
    return res
}
module.exports = {
    permute : permute
};