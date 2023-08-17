/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  const len = s.length;
  let res = "";
  for (let i = 0; i < len; i++) {
    helper(i, i);
    helper(i, i + 1);
  }
  function helper(l, r) {
    while (l >= 0 && r < len && s[l] === s[r]) {
      l--;
      r++;
    }
    if (r - l - 1 > res.length) {
      res = s.slice(l + 1, r);
    }
  }
  return res;
};
