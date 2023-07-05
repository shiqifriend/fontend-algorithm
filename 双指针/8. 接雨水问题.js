// 描述
// 给定一个整形数组arr，已知其中所有的值都是非负的，将这个数组看作一个柱子高度图，计算按此排列的
// 柱子，下雨之后能接多少雨水。(数组以外的区域高度视为0)
// 示例1
// 输入：
// [3,1,2,5,2,4]  
// 返回值：
// 5 
// 说明：
// 数组 [3,1,2,5,2,4] 表示柱子高度图，在这种情况下，可以接 5个单位的雨水，蓝色的为雨水 ，如题面图。  
// 示例2
// 输入：
// [4,5,1,3,2]
// 返回值：
// 2 

// https://www.nowcoder.com/practice/31c1aed01b394f0b8b7734de0324e00f?tpId=295&tags=&title=&difficulty=0&judgeStatus=0&rp=0&sourceUrl=%2Fexam%2Finterview%3Forder%3D0


/**
 * max water
 * @param arr int整型一维数组 the array
 * @return long长整型
 */
function maxWater( arr ) {
    let leftMax = 0, rightMax = 0;
    let left = 0, right = arr.length - 1;
    let res = 0
    while(left < right){
        leftMax = Math.max(leftMax, arr[left])
        rightMax = Math.max(rightMax, arr[right])

        if(arr[left] < arr[right]){
            res += leftMax - arr[left]
            left++
        }else{
            res += rightMax -arr[right]
            right--
        }
    }
    return res
}
module.exports = {
    maxWater : maxWater
};