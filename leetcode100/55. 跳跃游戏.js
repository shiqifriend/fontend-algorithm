/**
 * @description: 贪心   TC:O(n)  SC:O(1)
 * @author: JunLiangWang
 * @param {*} nums  给定数组
 * @return {*}
 */
function greedy(nums){
    /**
     * 该题与跳跃游戏II相似，跳跃游戏II是记录步数，而该题则是
     * 判断能否到达，因此该题同样可以使用贪心算法。
     * 
     * 我们遍历数组元素，然后获得当前元素能跳转到的最大索引值
     * (当前元素能抵达的索引nums[i]+i与之前记录的能抵达的最大
     * 索引值maxJumpIndex的最大值)并赋值给maxJumpIndex，当maxJumpIndex
     * 大于等于了数组最大索引，证明能抵达终点；否则，如果maxJumpIndex
     * 小于了当前元素索引，证明已无法抵达当前索引值，也就是说无法
     * 抵达终点。
     */


    // 记录最大能抵达的索引
    let maxJumpIndex=0;
    // 遍历数组元素
    for(let i=0;i<nums.length;i++){
        // 如果maxJumpIndex大于等于当前元素索引，证明能抵达当前元素
        if(i<=maxJumpIndex){
            // 获得当前元素能跳转到的最大索引值，也就是当前元素能抵达
            // 的索引nums[i]+i与之前记录的能抵达的最大索引值maxJumpIndex
            // 的最大值
            maxJumpIndex=Math.max(maxJumpIndex,nums[i]+i);
            // 当maxJumpIndex大于等于了数组最大索引，证明能抵达终点，返回结果true
            if(maxJumpIndex>=nums.length-1)return true;
        }
        // 否则证明已无法抵达当前索引值，也就是说无法抵达终点，返回结果false。
        else return false;
    }
}
