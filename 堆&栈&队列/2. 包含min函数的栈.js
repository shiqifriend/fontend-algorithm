// 描述
// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的 min 函数，输入操作时保证 pop、top 和 min 函数操作时，栈中一定有元素。

// 此栈包含的方法有：
// push(value):将value压入栈中
// pop():弹出栈顶元素
// top():获取栈顶元素
// min():获取栈中最小元素
// 示例:
// 输入:    ["PSH-1","PSH2","MIN","TOP","POP","PSH1","TOP","MIN"]
// 输出:    -1,2,1,-1
// 解析:
// "PSH-1"表示将-1压入栈中，栈中元素为-1
// "PSH2"表示将2压入栈中，栈中元素为2，-1
// “MIN”表示获取此时栈中最小元素==>返回-1
// "TOP"表示获取栈顶元素==>返回2
// "POP"表示弹出栈顶元素，弹出2，栈中元素为-1
// "PSH1"表示将1压入栈中，栈中元素为1，-1
// "TOP"表示获取栈顶元素==>返回1
// “MIN”表示获取此时栈中最小元素==>返回-1

const stack = []
const minStack = []
function push(node)
{
    stack.push(node)
    if(!minStack.length || node < min()) minStack.push(node)
    else minStack.push(min())
}
function pop()
{
    if(!stack.length) return
    else {
        minStack.pop()
        return stack.pop()
        
    }
}
function top()
{
    if(!stack.length) return
    return stack[stack.length - 1]
}
function min()
{
    return minStack[minStack.length - 1]
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};