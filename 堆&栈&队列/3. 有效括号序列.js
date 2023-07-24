// 描述
// 给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
// 括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法。
// 输入：
// "["
// 复制
// 返回值：
// false

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return bool布尔型
 */
function isValid(s) {
    let stack = []
    const len = s.length
    const hash = new Map()
    hash.set("{", "}")
    hash.set("(", ")")
    hash.set("[", "]")
    for(let i = 0; i < len; i++) {
        if(hash.has(s[i])) {
            stack.push(hash.get(s[i]))
        }else if(s[i] === stack[stack.length - 1]) {
            stack.pop()
        }else return false
    }
    if(stack.length) return false
    else return true
}
module.exports = {
    isValid : isValid
};