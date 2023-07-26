// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



/**
 * @param {number} num
 * @return {number}
 */
const translateNum = (num) => {
    const str = num.toString();
    const dp = new Array(str.length+1)
    dp[0] = 1
    dp[1] = 1
    for(let i = 2; i <= str.length; i++) {
        const twoN = Number(str[i-2] + str[i-1])
        if(twoN>25 || twoN<10){
            dp[i] = dp[i-1]
        }else{
            dp[i] = dp[i-2] + dp[i-1]
        }
    }
    return dp[str.length]
  }

  // 深度优先搜索
   translateNum = (num) => {
    const str = num.toString();
  
    const dfs = (str, pointer) => {            // 随着dfs向下，pointer右移
      if (pointer >= str.length - 1) return 1; // 指针抵达边界和超出边界都返回1
  
      const temp = Number(str[pointer] + str[pointer + 1]);   // 考察该2位数
  
      if (temp >= 10 && temp <= 25) {          
        return dfs(str, pointer + 1) + dfs(str, pointer + 2); // 2个分支的结果相加
      } else {                                
        return dfs(str, pointer + 1);          // 返回1个分支的结果
      }
    }
  
    return dfs(str, 0);
  }
  

// 剑指offer
//   https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/solution/shou-hui-tu-jie-dfsdi-gui-ji-yi-hua-di-gui-dong-ta/