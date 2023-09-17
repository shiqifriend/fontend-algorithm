function addBigNumbers(num1, num2) {
    let carry = 0; // 进位
    let result = ''; // 结果
  
    // 从右到左逐位相加
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry !== 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      const sum = digit1 + digit2 + carry;
  
      carry = Math.floor(sum / 10); // 计算进位
      result = (sum % 10) + result; // 计算当前位的值
  
      i--;
      j--;
    }
  
    return result;
  }
  
  // 示例用法
  const num1 = '12345678901234567890';
  const num2 = '98765432109876543210';
  const sum = addBigNumbers(num1, num2);
  console.log(sum); // 输出：111111111011111111100
  