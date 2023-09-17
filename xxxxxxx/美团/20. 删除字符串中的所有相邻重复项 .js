// 简单
var removeDuplicates = function(s) {
    const stk = [];
    for (const ch of s) {
        if (stk.length && stk[stk.length - 1] === ch) {
            stk.pop();
        } else {
            stk.push(ch);
        }
    }
    return stk.join('');
};






// 中等
var removeDuplicates = function (s, k) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (stack.length && s[i] === stack[stack.length - 1][0]) {
        stack[stack.length - 1] += s[i]; // 遇到和栈最后一个元素相同则累计多一遍
      } else {
        stack.push(s[i]); // 和栈最后一个元素不同入栈
      }
      // 如果栈最后一个元素长度等于k 则出栈
      if (stack[stack.length - 1].length === k) {
        stack.pop();
      }
    }
  
    return stack.join('');
  };
  