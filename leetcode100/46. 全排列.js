/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const visited = new Array(nums.length).fill(false)
    function dfs(depth, path, visited) {
        if(depth === nums.length) {
            res.push([...path])
            return
        }
        for(let i = 0; i < nums.length; i++) {
            if(!visited[i]) {
                path.push(nums[i])
                visited[i] = true
                dfs(depth+1, path, visited)
                visited[i] = false
                path.pop()
            }
        }
    }
    dfs(0, [], visited)
    return res
};