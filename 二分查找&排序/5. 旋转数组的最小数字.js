// 描述
// 有一个长度为 n 的非降序数组，比如[1,2,3,4,5]，将它进行旋转，即把一个数组
// 最开始的若干个元素搬到数组的末尾，变成一个旋转数组，比如变成了[3,4,5,1,2]，
// 或者[4,5,1,2,3]这样的。请问，给定这样一个旋转数组，求数组中的最小值。
// 输入：
// [3,4,5,1,2]
// 复制
// 返回值：
// 1


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */

// step 1：双指针指向旋转后数组的首尾，作为区间端点。
// step 2：若是区间中点值大于区间右界值，则最小的数字一定在中点右边。
// step 3：若是区间中点值等于区间右界值，则是不容易分辨最小数字在哪半个区间，比如[1,1,1,0,1]，应该逐个缩减右界。
// step 4：若是区间中点值小于区间右界值，则最小的数字一定在中点左边。
// step 5：通过调整区间最后即可锁定最小值所在。

function minNumberInRotateArray( nums ) {
    let left = 0, right = nums.length - 1
    while(left < right) {
        let middle = Math.floor((left + right) / 2)
        if(nums[middle] > nums[right]) left = middle + 1
        else if(nums[middle] < nums[left]) right = middle
        else right--
    }
    return nums[left]
}

const findMin = function (nums) {
    if(!nums.length) return null
    if(nums.length === 1) return nums[0]
    let left = 0, right = nums.length - 1, mid
    // 此时数组单调递增，first element就是最小值
    if (nums[right] > nums[left]) return nums[0]
    while (left <= right) {
        mid = left + ((right - left) >> 1)
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        }
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid]
        }
        if (nums[mid] > nums[0]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return null
}

module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};