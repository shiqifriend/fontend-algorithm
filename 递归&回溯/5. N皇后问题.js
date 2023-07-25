// 描述
// N 皇后问题是指在 n * n 的棋盘上要摆 n 个皇后，
// 要求：任何两个皇后不同行，不同列也不在同一条斜线上，
// 求给一个整数 n ，返回 n 皇后的摆法数。
// 例如当输入4时，对应的返回值为2，
// 对应的两种四皇后摆位如下图所示：

// 示例1
// 输入：
// 1
// 复制
// 返回值：
// 1

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 the n
 * @return int整型
 */
function Nqueen( n ) {
    const arr = Array.from({length:n}, (item, index)=>index)
    const res = []
    const ruler = new Array(n).fill(0)
    const setPos = new Set()
    const setCon = new Set()

    const backTrace = (row, path) => {
        if(path.length === n) {
            res.push(path.slice())
            return
        }
        for(let i = 0; i < n; i++) {
            if(!ruler[i] && !setPos.has(i-row) && !setCon.has(i+row)) {
                path.push(arr[i])
                ruler[i] = 1
                setPos.add(i-row)
                setCon.add(i+row)
                backTrace(row+1, path)
                path.pop()
                ruler[i] = 0
                setPos.delete(i-row)
                setCon.delete(i+row)
            }
        }
    }
    backTrace(0, [])
    return res.length
}
module.exports = {
    Nqueen : Nqueen
};