/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = []
    stack.push(-1)
    let maxLen = 0
    for(let i = 0; i < s.length; i++) {
        let c = s[i]
        if(c === '(') {
            stack.push(i)
        } else {
            stack.pop()
            if(stack.length) {
                const curLen = i - stack[stack.length - 1]
                maxLen = Math.max(maxLen, curLen)
            } else {
                stack.push(i)
            }
        }
    }
    return maxLen
};