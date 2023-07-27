// 描述
// 对于长度为n的一个字符串A（仅包含数字，大小写英文字母），请设计
// 一个高效算法，计算其中最长回文子串的长度。
// 输入：
// "ababc"
// 复制
// 返回值：
// 3
// 复制
// 说明：
// 最长的回文子串为"aba"与"bab"，长度都为3

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A string字符串
 * @return int整型
 */
function getLongestPalindrome(A) {
  if (!A.length) return 0;
  let l = 0;
  let r = 0;
  for (let i = 0; i < A.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }
  function helper(m, n) {
    while (m >= 0 && n < A.length && A[m] == A[n]) {
      m--;
      n++;
    }
    if (n - m - 1 > r - l - 1) {
      l = m;
      r = n;
    }
  }
  return r - l - 1;
}
module.exports = {
  getLongestPalindrome: getLongestPalindrome,
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i);
    // 回文子串长度是偶数
    helper(i, i + 1);
  }

  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--;
      n++;
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if (n - m - 1 > res.length) {
      // slice也要取[m+1,n-1]这个区间
      res = s.slice(m + 1, n);
    }
  }
  return res;
};
