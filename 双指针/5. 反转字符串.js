// 描述
// 写出一个程序，接受一个字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）
// 示例1
// 输入：
// "abcd"
// 返回值：
// "dcba"


/**
 * 反转字符串
 * @param str string字符串 
 * @return string字符串
 */
function solve( str ) {
    // 双指针
    let left = 0;
    let right = str.length - 1;
    let strArr = [...str];
    while (left < right) 
      [strArr[left++], strArr[right--]] = [strArr[right], strArr[left]];
   
    return strArr.join("");
  }
  module.exports = {
      solve : solve
  };