// 描述
// 在一个二维数组array中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// [
// [1,2,8,9],
// [2,4,9,12],
// [4,7,10,13],
// [6,8,11,15]
// ]
// 给定 target = 7，返回 true。

// 给定 target = 3，返回 false。
// 输入：
// 7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
// 复制
// 返回值：
// true
// 复制
// 说明：
// 存在7，返回true   

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param target int整型 
 * @param array int整型二维数组 
 * @return bool布尔型
 */
function Find( target ,  array ) {
    if(!array.length || !array[0].length ) return false
    let key = array[0].length - 1
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j <= key; j++) {
            if(array[i][j] > target) key = j
            if(array[i][j] === target ) return true
        }
    }
    return false
}
module.exports = {
    Find : Find
};


function Find( target ,  array ) {
    if(!array.length || !array[0].length ) return false
    let j = array[0].length - 1
    let i = 0
    while(i<array.length&&j>=0){
        if(array[i][j] < target) i++
        else if(array[i][j] > target) j--
        else return true
    }
    return false
}