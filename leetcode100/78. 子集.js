/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = []
    const len = nums.length
    for(let mask = 0; mask < (1 << len); mask++) {
        const t =[]
        for(let i = 0; i < len; i++) {
            if(mask & ( 1 << i)) {
                t.push(nums[i])
            }
        }
        ans.push(t)
    }
    return ans
};





/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = []
    const len = nums.length
    const path = []
    function dfs(cur) {
        if(cur === len) {
            ans.push(path.slice())
            return
        }
        path.push(nums[cur])
        dfs(cur + 1)
        path.pop()
        dfs(cur + 1)
    }
    dfs(0)
    return ans
};

