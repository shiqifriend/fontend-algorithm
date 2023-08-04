// 描述
// 一个整型数组里除了两个数字只出现一次，其他的数字都出现了两次。请写程序找
// 出这两个只出现一次的数字。
// 输入：
// [1,4,1,6]
// 复制
// 返回值：
// [4,6]
// 复制
// 说明：
// 返回的结果中较小的数排在前面     

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型一维数组
 */
function FindNumsAppearOnce( nums ) {
    const res = {}
    nums.forEach(value=>{
        if(res[value]) delete res[value]
        else res[value] = 1
    })
    return Object.keys(res)
}
module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};