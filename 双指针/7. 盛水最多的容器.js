// 描述
// 给定一个数组height，长度为n，每个数代表坐标轴中的一个点的高度，height[i]是在第i点的高度，请问，从中选2个高度与x轴组成的容器最多能容纳多少水
// 1.你不能倾斜容器
// 2.当n小于2时，视为不能形成容器，请返回0
// 3.数据保证能容纳最多的水不会超过整形范围，即不会超过231-1
// 示例1
// 输入：
// [1,7,3,2,4,5,8,2,7]
// 返回值：
// 49
// 示例2
// 输入：
// [2,2]
// 返回值：
// 2

//https://www.nowcoder.com/practice/3d8d6a8e516e4633a2244d2934e5aa47?tpId=295&tags=&title=&difficulty=0&judgeStatus=0&rp=0&sourceUrl=%2Fexam%2Finterview%3Forder%3D0

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param height int整型一维数组 
 * @return int整型
 */
function maxArea( height ) {
    let left = 0
    let right = height.length - 1
    let area = 0
    let max = 0
    while(left < right){
        area = Math.min(height[left],height[right]) * (right - left)
        max = Math.max(area, max)
        if(height[left] < height[right]) left++
        else right--
    }
    return max
}
module.exports = {
    maxArea : maxArea
};