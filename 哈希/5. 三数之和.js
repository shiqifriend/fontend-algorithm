// 描述
// 给出一个有n个元素的数组S，S中是否有元素a,b,c满足a+b+c=0？找出数组S中所有满足条件的三元组。
// 注意：
// 三元组（a、b、c）中的元素必须按非降序排列。（即a≤b≤c）
// 解集中不能包含重复的三元组。
// 例如，给定的数组 S = {-10 0 10 20 -10 -40},解集为(-10, -10, 20),(-10, 0, 10)
// 输入：
// [-2,0,1,1,2]
// 复制
// 返回值：
// [[-2,0,2],[-2,1,1]]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */

// 双指针，
// 首先将num数组进行排序
// 然后依次取出数组的每一个元素，找到另外两个元素的和为-num[i]，采用双指针的做法
// left = i+1;	right = n-1;	target = -num[i]
// 和小于target，left++
// 和大于target，right--，
// 和等于target时，加入到结果数组，注意去重，同时注意边界条件，找到与加入结果数组left值不同的元素，right同理
// 注意：一开始也要去重，判断条件i!=0 &&  num[i] == num[i-1]，为什么不可以是num[i]==num[i+1]呢?
// 例子：[-10,-10,-10,20,20,20]

// 假设目标值是-20，如果采用num[i]==num[i+1]的判断条件，则第一个和第二个-10均会continue，从而找
// 不到-20， 然而-10和-10的组合可以得到-20

function threeSum(num) {
  if (num.length < 3) return [];
  num = num.sort((a, b) => a - b);
  const res = [];
  const n = num.length;
  for (let i = 0; i < n; i++) {
    if (i !== 0 && num[i] == num[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;
    let target = -num[i];
    while (left < right) {
      if (num[left] + num[right] < target) left++;
      else if (num[left] + num[right] > target) right--;
      else {
        res.push([num[i], num[left], num[right]]);
        while (left + 1 < right && num[left] == num[left + 1]) left++;
        while (left < right - 1 && num[right] == num[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
}
module.exports = {
  threeSum: threeSum,
};
