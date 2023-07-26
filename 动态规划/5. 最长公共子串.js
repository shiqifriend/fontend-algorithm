// 描述
// 给定两个字符串str1和str2,输出两个字符串的最长公共子串
// 题目保证str1和str2的最长公共子串存在且唯一。 
// 输入：
// "1AB2345CD","12345EF"
// 复制
// 返回值：
// "2345"

/*
    dp[i][j]表示字符串str1中第i个字符和str2种第j个字符为最后一个元素所构成的最长公共子串
        求dp[i][j]，也就是str1的第i个字符和str2的第j个字符为最后一个元素所构成的最长公共子串，
        我们首先需要判断这两个字符是否相等
            如果不相等，那么他们就不能构成公共子串，也就是
            dp[i][j]=0;
            如果相等，我们还需要计算前面相等字符的个数，其实就是dp[i-1][j-1]，所以
            dp[i][j]=dp[i-1][j-1]+1;
*/
function LCS(str1, str2) {
    let maxLenth = 0; //记录最长公共子串的长度
    //记录最长公共子串最后一个元素在字符串str1中的位置
    let maxLastIndex = 0;
    let dp = new Array(str1.length + 1)
      .fill(0)
      .map(() => new Array(str2.length + 1).fill(0));
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        //递推公式，两个字符相等的情况
        if (str1[i] == str2[j]) {
          dp[i + 1][j + 1] = dp[i][j] + 1;
          //如果遇到了更长的子串，要更新，记录最长子串的长度，
          //以及最长子串最后一个元素的位置
          if (dp[i + 1][j + 1] > maxLenth) {
            maxLenth = dp[i + 1][j + 1];
            maxLastIndex = i;
          }
        } else {
          //递推公式，两个字符不相等的情况
          dp[i + 1][j + 1] = 0;
        }
      }
    }
    //最字符串进行截取，substring(a,b)中a和b分别表示截取的开始和结束位置
    return str1.substring(maxLastIndex - maxLenth + 1, maxLastIndex + 1);
  }