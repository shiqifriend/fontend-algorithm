// 一个数字，判断是否回文，不能用转字符串做，编程语言JS

function isPalindrome(num) {
    if (num < 0) {
      return false; // 负数不是回文
    }
  
    let originalNum = num;
    let reversedNum = 0;
  
    while (num > 0) {
      reversedNum = (reversedNum * 10) + (num % 10);
      num = Math.floor(num / 10);
    }
  
    return originalNum === reversedNum;
  }
  
  // 测试
  console.log(isPalindrome(12321)); // true
  console.log(isPalindrome(12345)); // false
  