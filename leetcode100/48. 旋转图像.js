/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length
    const res = new Array(n).fill(0).map(()=>new Array(n).fill(0))
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++) {
            res[j][n-i-1] = matrix[i][j]
        }
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++) {
            matrix[i][j] = res[i][j]
        }
    }
};