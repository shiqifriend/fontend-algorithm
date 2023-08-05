// 描述
// 给定一个m x n大小的矩阵（m行，n列），按螺旋的顺序返回矩阵中的所有元素。
// 输入：
// [[1,2,3],[4,5,6],[7,8,9]]
// 复制
// 返回值：
// [1,2,3,6,9,8,7,4,5]

/**
 * 解法一：边界模拟法
 * 思路：
 * 我们想象有一一个矩阵，从第一- 个元素开始，往右到底后再往
 * 下到底后再往左到底后再往上，结束这一-圈，进入下一圈螺旋。
 * 时间复杂度: O(mn)，相当于遍历整个矩阵.
 * 空间复杂度: 0(1)，res属于必要空间，没有使用额外辅助空间
 */
export function spiralOrder(matrix) {
    const res = []
    if (matrix.length === 0) return res

    let left = 0
    let right = matrix[0].length - 1
    let up = 0
    let down = matrix.length - 1

    while (left <= right && up <= down) {
        for (let i = left; i <= right; i++) res.push(matrix[up][i])
        
        // 收缩上边界
        up++
        if (up > down) break

        for (let i = up; i <= down; i++) res.push(matrix[i][right])

        // 收缩右边界
        right--
        if (left > right) break

        for (let i = right; i >= left; i--) res.push(matrix[down][i])

        // 收缩下边界
        down--
        if (up > down) break

        for (let i = down; i >= up; i--) res.push(matrix[i][left])

        // 收缩左边界
        left++
        if (left > right) break
    }

    return res
}
