/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
    for(const item of nums) {
        if(obj[item]) delete obj[item]
        else obj[item] = 1
    }
    return Object.keys(obj)[0]
};

//
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0
    for(const item of nums) ans ^= item
    return ans
};