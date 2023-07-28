// 描述
// 你是一个经验丰富的小偷，准备偷沿湖的一排房间，每个房间都存有一定的现金，为了防止
// 被发现，你不能偷相邻的两家，即，如果偷了第一家，就不能再偷第二家，如果偷了第二家，那
// 么就不能偷第一家和第三家。沿湖的房间组成一个闭合的圆形，即第一个房间和最后一个房间视为相邻。
// 给定一个长度为n的整数数组nums，数组中的元素表示每个房间存有的现金数额，请你计算在不被发现的前提下最多的偷窃金额。
// 输入：
// [1,2,3,4]
// 复制
// 返回值：
// 6
// 复制
// 说明：
// 最优方案是偷第 2 4 个房间  

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
function rob( nums ) {
    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return Math.max(nums[0], nums[1])
    function robRange(arr, l, r){
        let first = arr[l]
        let second = Math.max(arr[l], arr[l+1])
        for(let i = l+2; i <= r; i++){
            let temp = Math.max(arr[i] + first, second)
            first = second
            second = temp
        }
        return second
    }
    return Math.max(robRange(nums, 0, nums.length-2), robRange(nums, 1, nums.length-1)) 
}
module.exports = {
    rob : rob
};