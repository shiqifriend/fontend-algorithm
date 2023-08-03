// 描述
// 给一个长度为 n 的数组，数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出
// 现了5次，超过数组长度的一半，因此输出2
// 输入：
// [1,2,3,2,2,2,5,4,2]
// 复制
// 返回值：
// 2

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param numbers int整型一维数组 
 * @return int整型
 */
function MoreThanHalfNum_Solution( numbers ) {
    const hash = new Map()
    const halflen = Math.floor(numbers.length/2) 
    for(let i = 0; i < numbers.length; i++) {
        const value = hash.get(numbers[i])
        value ? hash.set(numbers[i], value+1) : hash.set(numbers[i], 1)
        if(hash.get(numbers[i])>halflen) return numbers[i]
    }
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};