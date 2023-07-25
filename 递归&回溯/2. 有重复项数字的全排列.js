// 描述
// 给出一组可能包含重复项的数字，返回该组数字的所有排列。结果以字典序升序排列。
// 输入：
// [1,1,2]
// 复制
// 返回值：
// [[1,1,2],[1,2,1],[2,1,1]]



/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param num int整型一维数组 
 * @return int整型二维数组
 */
function permuteUnique( num ) {
    num = num.sort((a, b)=>a-b)
    let len = num.length
    const res = []
    const visited = new Array(len).fill(false)
    const dfs = (depth, path, visited) => {
        if(depth === len)
        {
            res.push([...path])
            return
        } 
        for(let i = 0; i < len; i++) {
            if(i>0 && num[i]==num[i-1] && !visited[i-1])//当前的元素num[i]与同⼀层的前⼀个元素num[i-1]相同且num[i-1]已经⽤过了
            continue
            if(!visited[i]){
                path.push(num[i])
                visited[i] = true
                dfs(depth+1, path, visited)
                visited[i] = false
                path.pop()
            }
        }
    }
    dfs(0, [], visited)
    return res
}
module.exports = {
    permuteUnique : permuteUnique
};