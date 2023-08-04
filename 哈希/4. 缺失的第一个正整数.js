// 描述
// 给定一个无重复元素的整数数组nums，请你找出其中没有出现的最小的正整数
// 输入：
// [1,0,2]
// 复制
// 返回值：
// 3

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
function minNumberDisappeared( nums ) {
    const res = []
    nums.forEach(value=>{
        if(value>0){
            res[value]=1
        }
    })
    for(let i = 1; i <= res.length; i++) {
        if(!res[i]) return i
    }
}
module.exports = {
    minNumberDisappeared : minNumberDisappeared
};