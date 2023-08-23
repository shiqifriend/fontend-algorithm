/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let fInd = lInd = -1
    function binarySearchMethods(isFindFirst) {
        let l = 0, r = nums.length - 1
        let mid
        while(l <= r) {
            mid = (r + l) >> 1
            if(nums[mid] === target) {
                if(isFindFirst) {
                    fInd = mid
                    r = mid-1
                } else {
                    lInd = mid
                    l = mid + 1
                }
            } else if (nums[mid] > target) r = mid - 1
            else l = mid + 1
        }
    }
    binarySearchMethods(true)
    binarySearchMethods(false)
    return [fInd, lInd]
};