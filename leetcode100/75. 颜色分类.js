/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  0、 1 和 2 分别表示红色、白色和蓝色。
// 我们可以设置 3 个指针，一个指向头部，一个指向尾部，还有一个指向当前遍历的元素。
// 我们从头部开始遍历数组，如果遇到 0（红色）就把它放到头部指针的位置，
// 如果遇到 2（蓝色）就把它放到尾部指针的位置。
// 如果遇到 1（白色），就跳过它，继续遍历。


var sortColors = function(nums) {
    let left = 0
    let right = nums.length - 1
    for(let i = 0; i <= right; i++) {
        if(nums[i] === 0) {
            swap(nums, i, left)
            left++
        } else if(nums[i] === 2) {
            swap(nums, i, right)
            right--
            i--
        }
    }
    return nums
};

function swap(arr , i , j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}