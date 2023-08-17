/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const res = [""];
  const len = digits.length;
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  for (let i = 0; i < len; i++) {
    const levelSize = res.length;
    for (let j = 0; j < levelSize; j++) {
      const curStr = res.shift();
      for (let c of map[digits[i]]) {
        res.push(curStr + c);
      }
    }
  }
  return res;
};
