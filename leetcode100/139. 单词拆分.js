/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length
    const wordSet = new Set(wordDict)
    const memo = new Array(len)

    const dfs = (start)=>{
        if(start === len) return true
        if(memo[start] !== undefined) return memo[start]

        for(let i = start + 1; i <= len; i++) {
            const prefix = s.slice(start, i)
            if(wordSet.has(prefix) && dfs(i)) {
                memo[start] = true
                return true  
            }
        }
        memo[start] = false
        return false
    }
    return dfs(0)
};


// 动态规划
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict)
    const len = s.length
    const dp = new Array(len+1).fill(false)
    dp[0] = true
    for(let i = 1; i <= len; i++) {
        for(let j = i-1; j >= 0; j--) {
            if(dp[i]) break
            if(!dp[j]) continue
            const suffix = s.slice(j, i)
            if(wordSet.has(suffix) && dp[j]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[len]
};