// 描述
// 给定一个长度为 n 的字符串，请编写一个函数判断该字符串是否回文。如果是回文请返回true，否则返回false。

// 字符串回文指该字符串正序与其逆序逐字符一致。
// 示例1
// 输入：
// "absba"
// 返回值：
// true


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param str string字符串 待判断的字符串
 * @return bool布尔型
 */
function judge( str ) {
    const arr = str.split('')
    for(let i = 0, j = arr.length - 1;i < j; i++, j--){
        if(arr[i]!==arr[j])return false
    }
    return true
}
module.exports = {
    judge : judge
};

// function judge( str ) {
//     return str.split('').reverse().join('')===str
// }