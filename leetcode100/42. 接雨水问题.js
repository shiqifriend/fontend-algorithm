/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0, r = height.length - 1
    let lmax = rmax = 0
    let res = 0
    while(l < r) {
        lmax = Math.max(lmax, height[l])
        rmax = Math.max(rmax, height[r])
        if(height[l] < height[r]) {
            res += lmax - height[l]
            l++
        } else {
            res += rmax - height[r]
            r--
        }
    }
    return res
};