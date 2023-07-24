// 描述
// 用两个栈来实现一个队列，使用n个元素来完成 n 次在队列尾部插入整数(push)和n
// 次在队列头部删除整数(pop)的功能。 队列中的元素为int类型。保证操作合法，即保
// 证pop操作时队列内已有元素。
// 输入：
// ["PSH1","PSH2","POP","POP"]
// 复制
// 返回值：
// 1,2
// 复制
// 说明：
// "PSH1":代表将1插入队列尾部
// "PSH2":代表将2插入队列尾部
// "POP“:代表删除一个元素，先进先出=>返回1
// "POP“:代表删除一个元素，先进先出=>返回2 
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串 
 * @param version2 string字符串 
 * @return int整型
 */
function compare( version1 ,  version2 ) {
    let arr1 = version1.split(".")
    let arr2 = version2.split(".")
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        let curr1 = i < arr1.length ? parseInt(arr1[i]) : 0
        let curr2 = i < arr2.length ? parseInt(arr2[i]) : 0
        if(curr1 > curr2) return 1
        else if (curr1 < curr2) return -1
    }
    return 0
}
module.exports = {
    compare : compare
};