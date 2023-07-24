// 描述
// 有一个整数数组，请你根据快速排序的思路，找出数组中第 k 大的数。

// 给定一个整数数组 a ,同时给定它的大小n和要找的 k ，请返回第 k 大的
// 数(包括重复的元素，不用去重)，保证答案存在。

// 输入：
// [1,3,5,2,2],5,3
// 复制
// 返回值：
// 2

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param a int整型一维数组 
 * @param n int整型 
 * @param K int整型 
 * @return int整型
 */
function findKth( a ,  n ,  K ) {
    if(!a.length) return 0

    function quickSort(arr) {
        if(arr.length <= 1) return arr
        const midIndex = Math.floor(arr.length/2)
        const midVal = arr.splice(midIndex,1)[0]
        let left = []
        let right = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < midVal) left.push(arr[i])
            else right.push(arr[i])
        }
        return [...quickSort(left),midVal, ...quickSort(right)]
    }

    return quickSort(a)[a.length - K + 1]
}
module.exports = {
    findKth : findKth
};