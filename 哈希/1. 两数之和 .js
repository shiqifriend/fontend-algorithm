// 描述
// 给出一个整型数组 numbers 和一个目标值 target，请在数组中找出两个加起来等于目标值的数的下标，返回的下标按升序排列。
// （注：返回的数组下标从1开始算起，保证target一定可以由数组里面2个数字相加得到）
// 输入：
// [3,2,4],6
// 复制
// 返回值：
// [2,3]
// 复制
// 说明：
// 因为 2+4=6 ，而 2的下标为2 ， 4的下标为3 ，又因为 下标2 < 下标3 ，所以返回[2,3]     



// 思路： 使用map这个数据结构，map用法：
// let map = new Map()
// map.set(1,2) // 1 => 2
// map.get(1) // 2
// map.has(1) // true
// 循环numbers数组，将numbers[i]加入map，它的值为i+1（因为索引要从1开始），若
// map中存在这个target-numbers[i]，则输出map中键为 target-numbers[i]的值，以及当前的i + 1组成的数组。

function twoSum( numbers ,  target ) {
  // write code here
  const ans = new Array(2);
  let map = new Map();//用哈希表进行数据存储
  let n = numbers.length;
  for(let i = 0;i < n;i++){
      if(map.has(target - numbers[i])){
          ans[0] = map.get(target - numbers[i]) + 1;
          ans[1] = i + 1;
          break;
      }else{
          map.set(numbers[i],i);
      }
  }
  return ans;
}
module.exports = {
  twoSum : twoSum
};

