// 描述
// 给一个01矩阵，1代表是陆地，0代表海洋， 如果两个1相邻，那么这两个1属于同一个岛。我们只考虑上下左右为相邻。
// 岛屿: 相邻陆地可以组成一个岛屿（相邻:上下左右） 判断岛屿个数。
// 例如：
// 输入
// [
// [1,1,0,0,0],
// [0,1,0,1,1],
// [0,0,0,1,1],
// [0,0,0,0,0],
// [0,0,1,1,1]
// ]
// 对应的输出为3
// (注：存储的01数据其实是字符'0','1')
// 输入：
// [[1,1,0,0,0],[0,1,0,1,1],[0,0,0,1,1],[0,0,0,0,0],[0,0,1,1,1]]
// 复制
// 返回值：
// 3

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 判断岛屿数量
 * @param grid char字符型二维数组 
 * @return int整型
 */
function solve( grid ) {
    const dfs = (i, j)=>{
        if(i < 0 || i >= grid.length) return
        if(j < 0 || j >=grid[i].length) return
        if(grid[i][j] == 0) return
        grid[i][j] = 0
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i,j+1)
    }

    if(!grid.length) return 0
    let count = 0
    for(let i =0; i < grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            if(grid[i][j]==1){
                count++
                dfs(i,j)
            }
        }
    }
    return count
}
module.exports = {
    solve : solve
};