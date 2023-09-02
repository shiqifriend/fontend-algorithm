/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid.length) return 0
    const len1 = grid.length
    const len2 = grid[0].length
    function dfs(i, j) {
        if(i < 0 || i >= len1) return
        if(j < 0 || j >= len2) return
        if(grid[i][j] == 0) return
        grid[i][j] = 0
        dfs(i-1, j)
        dfs(i+1, j)
        dfs(i, j-1)
        dfs(i, j+1)
    }
    let count = 0
    for(let i = 0; i < len1; i++) {
        for(let j = 0; j < len2; j++) {
            if(grid[i][j] == 1) {
                count++
                dfs(i, j)
            }
        }
    }
    return count
};