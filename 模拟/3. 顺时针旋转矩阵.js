// 描述
// 有一个NxN整数矩阵，请编写一个算法，将矩阵顺时针旋转90度。

// 给定一个NxN的矩阵，和矩阵的阶数N,请返回旋转后的NxN矩阵。
// 输入：
// [[1,2,3],[4,5,6],[7,8,9]],3
// 复制
// 返回值：
// [[7,4,1],[8,5,2],[9,6,3]]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param mat int整型二维数组 
 * @param n int整型 
 * @return int整型二维数组
 */
function rotateMatrix( mat ,  n ) {
    const arr = new Array(n).fill(0).map(x=>Array(n).fill(0))
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            arr[j][n-i-1] = mat[i][j]
        }
    }
    return arr
}
module.exports = {
    rotateMatrix : rotateMatrix
};