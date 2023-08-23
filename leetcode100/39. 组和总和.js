/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    function dfs (target, combine, idx) {
        if(idx === candidates.length) return
        if(target === 0) {
            res.push(combine)
            return
        }
        dfs(target, combine, idx+1)
        if(target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
        }
    }
    dfs(target, [], 0)
    return res
};