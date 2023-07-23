// 描述
// 给定一个长度为n的数组nums，请你找到峰值并返回其索引。数组可能包含多个峰值，在这种情况下，返回任何一个所在位置即可。
// 1.峰值元素是指其值严格大于左右相邻值的元素。严格大于即不能有等于
// 2.假设 nums[-1] = nums[n] = 
// −
// ∞
// −∞
// 3.对于所有有效的 i 都有 nums[i] != nums[i + 1]
// 4.你可以使用O(logN)的时间复杂度实现此问题吗？
// 输入：
// [2,4,1,2,7,8,4]
// 复制
// 返回值：
// 1
// 复制
// 说明：
// 4和8都是峰值元素，返回4的索引1或者8的索引5都可以 

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
function findPeakElement( nums ) {
    //只要想清楚：数值一直往上走就有波峰 这一点就可以很简单解决这个问题了
   let left = 0, right = nums.length - 1
   while(left < right) {
       let midddle = Math.floor((left + right) / 2)
       //         当nums[mid] 小于 nums[mid + 1]，证明mid右侧数值往上走，会遇见波峰，将left置为mid + 1，反之则right置为mid
       //         当left与right位置重合时，既是峰值
       if(nums[midddle] < nums[midddle + 1]) left = midddle + 1
       else right = midddle
   }
   return left
}
module.exports = {
   findPeakElement : findPeakElement
};