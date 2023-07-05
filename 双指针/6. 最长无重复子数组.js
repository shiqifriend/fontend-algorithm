// 描述
// 给定一个长度为n的数组arr，返回arr的最长无重复元素子数组的长度，无重复指的是所有数字都不相同。
// 子数组是连续的，比如[1,3,5,7,9]的子数组有[1,3]，[3,5,7]等等，但是[1,3,7]不是子数组
// 示例1
// 输入：
// [2,3,4,5]
// 返回值：
// 4
// 说明：
// [2,3,4,5]是最长子数组   
// 示例2
// 输入：
// [2,2,3,4,3]
// 返回值：
// 3
// 说明：
// [2,3,4]是最长子数组   


/**
 * 
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength( arr ) {
    const hash = new Map()
    let left = 0
    let right = 0
    let res = 0
    while(right < arr.length){
        hash.set(arr[right], hash.get(arr[right]) + 1 || 1)
        while(hash.get(arr[right]) > 1){
            hash.set(arr[left], hash.get(arr[left]) - 1)
            left++
        }
        right++
        res = Math.max(res, right - left)
    }
    return res
}
module.exports = {
    maxLength : maxLength
};