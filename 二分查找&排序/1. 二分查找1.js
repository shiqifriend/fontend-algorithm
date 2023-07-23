// 请实现无重复数字的升序数组的二分查找

// 给定一个 元素升序的、无重复数字的整型数组 nums 和一个目标值 target ，写一
// 个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否
// 则返回 -1
// 输入：
// [-1,0,3,4,6,10,13,14],13
// 复制
// 返回值：
// 6
// 复制
// 说明：
// 13 出现在nums中并且下标为 6     


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */
function search( nums ,  target ) {
    if(!nums.length) return -1
    let left = 0
    let right = nums.length-1
    while(left <= right) {
        let middle = Math.floor((left+right)/2)
        if(nums[middle] === target) return middle
        else if(nums[middle] < target) left = middle+1
        else right = middle-1
    }
    return -1
}
module.exports = {
    search : search
};