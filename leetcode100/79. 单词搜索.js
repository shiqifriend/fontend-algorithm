/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length
    const n = board[0].length
    const visited = new Array(m).fill(false).map(()=>new Array(n).fill(false))

    const dfs = (row, col, i) => {
        if(i === word.length) return true
        if(row < 0 || row >=m || col < 0 || col >= n) return false
        if(visited[row][col] || word[i] !== board[row][col]) return false

        visited[row][col] = true
        const canFindRest = dfs(row-1, col, i+1) || dfs(row, col-1, i+1) || dfs(row+1, col, i+1) || dfs(row, col+1, i+1)

        if(canFindRest) return true
        visited[row][col] = false
        return false
    }

    for(let i = 0; i<m; i++) {
        for(let j = 0; j<n; j++) {
            if(word[0] === board[i][j] && dfs(i,j,0)) {
                return true
            }  
        }
    }
    return false
};