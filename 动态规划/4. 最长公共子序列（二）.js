// 描述
// 给定两个字符串str1和str2，输出两个字符串的最长公共子序列。如果最长公共子序
// 列为空，则返回"-1"。目前给出的数据，仅仅会存在一个最长的公共子序列
// 输入：
// "1A2C3D4B56","B1D23A456A"
// 复制
// 返回值：
// "123456"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * longest common subsequence
 * @param s1 string字符串 the string
 * @param s2 string字符串 the string
 * @return string字符串
 */
function LCS( s1 ,  s2 ) {
    if(s1.length == 0 || s2.length == 0) return -1
    const dp = []
    for(let i = 0; i < s1.length; i++) dp.push([])
    // dp[i][j]表示s1的i和s2的j的最长公共子序列
    // 初始化
    let index = s2.indexOf(s1[0])
    for(let i = 0; i < s2.length; i++)
    dp[0][i] = (i >= index && index != -1) ? 1 : 0
    index = s1.indexOf(s2[0])
    for(let i = 0; i < s1.length; i++)
    dp[i][0] = (i >= index && index != -1) ? 1 : 0

    // dp矩阵完成
    for(let i = 1; i < s1.length; i++) {
        for(let j = 1; j < s2.length; j++) {
            if(s1[i] === s2[j])
            dp[i][j] = dp[i-1][j-1] + 1
            else
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
        }
    }

    // 取字符串
    const res = []
    for(let i = s1.length-1, j = s2.length-1; i>=0 && j>=0 && dp[i][j]>=1;) {
        if(s1[i] === s2[j]){
            res.push(s1[i])
            i--
            j--
        } else if(i===0 || dp[i][j-1] > dp[i-1][j]) j--
        else i--
    }
    if(!res.length) return -1
    else return res.reverse().join('')
}
module.exports = {
    LCS : LCS
};